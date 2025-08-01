import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const getAllCompaniesTool: Tool = {
  name: 'getAllCompanies',
  description: 'Returns all companies, optionally filtered by criteria',
  inputSchema: {
    type: 'object',
    properties: {
      CompanyIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'Filter by specific company IDs',
        maxItems: 1000
      },
      Names: {
        type: 'array',
        items: { type: 'string' },
        description: 'Filter by company names',
        maxItems: 1000
      },
      CreatedUtc: {
        type: 'object',
        properties: {
          StartUtc: { type: 'string', description: 'Start of creation date range (ISO 8601)' },
          EndUtc: { type: 'string', description: 'End of creation date range (ISO 8601)' }
        },
        description: 'Date range filter for company creation'
      },
      UpdatedUtc: {
        type: 'object',
        properties: {
          StartUtc: { type: 'string', description: 'Start of update date range (ISO 8601)' },
          EndUtc: { type: 'string', description: 'End of update date range (ISO 8601)' }
        },
        description: 'Date range filter for company updates'
      },
      Limitation: {
        type: 'object',
        properties: {
          Count: { type: 'number', description: 'Maximum number of companies to return' },
          Cursor: { type: 'string', description: 'Pagination cursor for next page' }
        },
        description: 'Pagination settings'
      }
    },
    additionalProperties: false
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const inputArgs = args as Record<string, unknown>;
    const requestData = {
      Limitation: {
        Count: 100
      },
      ...inputArgs
    };

    const result = await mewsRequest(config, '/api/connector/v1/companies/getAll', requestData);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 