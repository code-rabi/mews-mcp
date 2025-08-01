import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const getAllTaxationsTool: Tool = {
  name: 'getAllTaxations',
  description: 'Returns all taxations supported in tax environments',
  inputSchema: {
    type: 'object',
    properties: {
      TaxEnvironmentIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'Filter by tax environment IDs'
      }
    },
    additionalProperties: false
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const inputArgs = args as Record<string, unknown>;
    const requestData = {
      ...inputArgs
    };

    const result = await mewsRequest(config, '/api/connector/v1/taxations/getAll', requestData);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 