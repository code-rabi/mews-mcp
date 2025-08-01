import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const getAllCountriesTool: Tool = {
  name: 'getAllCountries',
  description: 'Returns all countries supported by the API',
  inputSchema: {
    type: 'object',
    properties: {},
    additionalProperties: false
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const result = await mewsRequest(config, '/api/connector/v1/countries/getAll', {});
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 