import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const getAllSpaceCategoriesTool: Tool = {
  name: 'getAllSpaceCategories',
  description: 'Returns all space categories of a service',
  inputSchema: {
    type: 'object',
    properties: {
      ServiceIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'Filter by service IDs',
        maxItems: 1000
      },
      SpaceCategoryIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'Filter by specific category IDs',
        maxItems: 1000
      },
      UpdatedUtc: {
        type: 'object',
        properties: {
          StartUtc: { type: 'string', description: 'Start of update date range (ISO 8601)' },
          EndUtc: { type: 'string', description: 'End of update date range (ISO 8601)' }
        },
        description: 'Date range filter for category updates'
      }
    },
    required: ['ServiceIds'],
    additionalProperties: false
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const inputArgs = args as Record<string, unknown>;
    const requestData = {
      ...inputArgs
    };

    const result = await mewsRequest(config, '/api/connector/v1/spaceCategories/getAll', requestData);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 