#!/usr/bin/env node

import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from '@modelcontextprotocol/sdk/types.js';

import { getToolDefinitions, executeTool } from './tools/index.js';
import { MewsAuthConfigSchema, type MewsAuthConfig } from './types/auth.js';

// Load configuration from environment variables
function loadConfig(): MewsAuthConfig {
  try {
    const config = MewsAuthConfigSchema.parse({
      clientToken: process.env.MEWS_CLIENT_TOKEN,
      accessToken: process.env.MEWS_ACCESS_TOKEN,
      client: process.env.MEWS_CLIENT || 'mews-mcp/1.0.0',
      baseUrl: process.env.MEWS_BASE_URL || 'https://api.mews.com',
    });
    return config;
  } catch (error) {
    throw new McpError(
      ErrorCode.InvalidRequest,
      `Invalid Mews configuration. Please set MEWS_CLIENT_TOKEN, MEWS_ACCESS_TOKEN environment variables. ${error}`
    );
  }
}

// Create server instance
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

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { 
    tools: getToolDefinitions() 
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args = {} } = request.params;
  
  try {
    const config = loadConfig();
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

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Mews MCP server running on stdio');
}

main().catch((error) => {
  console.error('Server failed to start:', error);
  process.exit(1);
}); 