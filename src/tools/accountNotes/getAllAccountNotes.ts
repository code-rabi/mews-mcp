import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const getAllAccountNotesTool: Tool = {
  name: 'getAllAccountNotes',
  description: 'Returns all the account notes associated with the specified accounts within the chain',
  inputSchema: {
    type: 'object',
    properties: {
      AccountIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'Filter by account IDs',
        maxItems: 1000
      },
      CreatedUtc: {
        type: 'object',
        properties: {
          StartUtc: { type: 'string', description: 'Start of creation date range (ISO 8601)' },
          EndUtc: { type: 'string', description: 'End of creation date range (ISO 8601)' }
        },
        description: 'Date range filter for note creation'
      },
      UpdatedUtc: {
        type: 'object',
        properties: {
          StartUtc: { type: 'string', description: 'Start of update date range (ISO 8601)' },
          EndUtc: { type: 'string', description: 'End of update date range (ISO 8601)' }
        },
        description: 'Date range filter for note updates'
      },
      Limitation: {
        type: 'object',
        properties: {
          Count: { type: 'number', description: 'Maximum number of notes to return' },
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

    const result = await mewsRequest(config, '/api/connector/v1/accountNotes/getAll', requestData);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 