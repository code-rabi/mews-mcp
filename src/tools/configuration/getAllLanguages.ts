import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const getAllLanguagesTool: Tool = {
  name: 'getAllLanguages',
  description: 'Returns all languages supported by the API',
  inputSchema: {
    type: 'object',
    properties: {},
    additionalProperties: false
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const result = await mewsRequest(config, '/api/connector/v1/languages/getAll', {});
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 