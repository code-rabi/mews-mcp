#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from '@modelcontextprotocol/sdk/types.js';
import { z } from "zod";

import { getToolDefinitions, executeTool } from './tools/index.js';
import { MewsAuthConfigSchema, type MewsAuthConfig } from './types/auth.js';

// Configuration schema for Smithery
export const configSchema = z.object({
  clientToken: z.string().describe("Mews API client token"),
  accessToken: z.string().describe("Mews API access token"),
  client: z.string().default("mews-mcp").describe("Client identifier for API requests"),
  baseUrl: z.string().default("https://api.mews.com").describe("Mews API base URL"),
});

// Load configuration from environment variables or config object
function loadConfig(configOverride?: z.infer<typeof configSchema>): MewsAuthConfig {
  try {
    // Use config override from Smithery if provided, otherwise use environment variables
    const config = MewsAuthConfigSchema.parse({
      clientToken: configOverride?.clientToken || process.env.MEWS_CLIENT_TOKEN,
      accessToken: configOverride?.accessToken || process.env.MEWS_ACCESS_TOKEN,
      client: configOverride?.client || process.env.MEWS_CLIENT || 'mews-mcp/1.0.0',
      baseUrl: configOverride?.baseUrl || process.env.MEWS_BASE_URL || 'https://api.mews.com',
    });
    return config;
  } catch (error) {
    throw new McpError(
      ErrorCode.InvalidRequest,
      `Invalid Mews configuration. Please set MEWS_CLIENT_TOKEN, MEWS_ACCESS_TOKEN environment variables. ${error}`
    );
  }
}

// Helper function to convert JSON schema properties to Zod schema
function convertToZodSchema(properties: Record<string, any>): Record<string, any> {
  const zodProperties: Record<string, any> = {};
  
  for (const [key, prop] of Object.entries(properties)) {
    const propDef = prop as any;
    let zodType: any = z.string();
    
    if (propDef.type === 'number') {
      zodType = z.number();
    } else if (propDef.type === 'boolean') {
      zodType = z.boolean();
    } else if (propDef.type === 'array') {
      zodType = z.array(z.any());
    } else if (propDef.type === 'object') {
      zodType = z.object({}).passthrough();
    }
    
    if (propDef.description) {
      zodType = zodType.describe(propDef.description);
    }
    
    // Handle optional properties
    if (!propDef.required) {
      zodType = zodType.optional();
    }
    
    zodProperties[key] = zodType;
  }
  
  return zodProperties;
}

// Reusable function to initialize MCP server (for both Smithery and stdio modes)
function initServer(configOverride?: z.infer<typeof configSchema>) {
  return {
    smitheryServer: () => {
      // Create a new MCP server per MCP spec for Smithery
      const server = new McpServer({
        name: "mews-mcp",
        version: "1.0.0",
      });

      // Get tool definitions and add each tool to the server
      const toolDefinitions = getToolDefinitions();
      
      for (const tool of toolDefinitions) {
        // Convert MCP tool definition to McpServer format
        const inputSchema = tool.inputSchema;
        let properties: Record<string, any> = {};
        
        if (inputSchema?.properties) {
          properties = convertToZodSchema(inputSchema.properties);
        }

        server.tool(
          tool.name,
          tool.description || "",
          properties,
          async (args) => {
            try {
              const mewsConfig = loadConfig(configOverride);
              const result = await executeTool(tool.name, mewsConfig, args);
              return result;
            } catch (error) {
              if (error instanceof McpError) {
                throw error;
              }
              
              throw new McpError(
                ErrorCode.InternalError,
                `Tool execution failed: ${error instanceof Error ? error.message : 'Unknown error'}`
              );
            }
          }
        );
      }

      return server.server;
    },

    stdioServer: async () => {
      const server = new Server(
        {
          name: 'mews-mcp',
          version: '1.0.0',
        },
        {
          capabilities: {
            tools: {},
          },
        }
      );

      // Set up request handlers for stdio mode
      server.setRequestHandler(ListToolsRequestSchema, async () => {
        return { 
          tools: getToolDefinitions() 
        };
      });

      server.setRequestHandler(CallToolRequestSchema, async (request) => {
        const { name, arguments: args = {} } = request.params;
        
        try {
          const config = loadConfig(configOverride);
          const result = await executeTool(name, config, args);
          return result;
        } catch (error) {
          if (error instanceof McpError) {
            throw error;
          }
          
          throw new McpError(
            ErrorCode.InternalError,
            `Tool execution failed: ${error instanceof Error ? error.message : 'Unknown error'}`
          );
        }
      });
      
      const transport = new StdioServerTransport();
      await server.connect(transport);
      console.error('Mews MCP server running on stdio');
    }
  };
}

// Smithery default export - creates an MCP server with the given config
export default function ({ config }: { config: z.infer<typeof configSchema> }) {
  return initServer(config).smitheryServer();
}

// Fallback for stdio mode (when not running in Smithery)
async function main() {
  // Check if running directly (not in Smithery) using ES module equivalent
  if (import.meta.url === `file://${process.argv[1]}`) {
    await initServer().stdioServer();
  }
}

main().catch((error) => {
  console.error('Server failed to start:', error);
  process.exit(1);
});