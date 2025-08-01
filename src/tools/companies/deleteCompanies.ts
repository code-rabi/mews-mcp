import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const deleteCompaniesTool: Tool = {
  name: 'deleteCompanies',
  description: 'Deletes specified companies',
  inputSchema: {
    type: 'object',
    properties: {
      CompanyIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'Array of company IDs to delete',
        maxItems: 1000
      }
    },
    required: ['CompanyIds'],
    additionalProperties: false
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const inputArgs = args as Record<string, unknown>;
    const requestData = {
      ...inputArgs
    };

    const result = await mewsRequest(config, '/api/connector/v1/companies/delete', requestData);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 