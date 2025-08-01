import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const getLanguageTextsTool: Tool = {
  name: 'getLanguageTexts',
  description: 'Returns translations of texts in the specified languages',
  inputSchema: {
    type: 'object',
    properties: {
      LanguageCodes: {
        type: 'array',
        items: { type: 'string' },
        description: 'Array of language codes to get translations for'
      },
      Scope: {
        type: 'string',
        description: 'Scope of texts to retrieve'
      }
    },
    required: ['LanguageCodes'],
    additionalProperties: false
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const inputArgs = args as Record<string, unknown>;
    const requestData = {
      ...inputArgs
    };

    const result = await mewsRequest(config, '/api/connector/v1/languages/getTexts', requestData);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 