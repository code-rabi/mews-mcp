import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const getAllTaxEnvironmentsTool: Tool = {
  name: 'getAllTaxEnvironments',
  description: 'Returns all tax environments supported by the API',
  inputSchema: {
    type: 'object',
    properties: {},
    additionalProperties: false
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const result = await mewsRequest(config, '/api/connector/v1/taxEnvironments/getAll', {});
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 