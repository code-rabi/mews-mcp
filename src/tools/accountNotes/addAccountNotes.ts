import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const addAccountNotesTool: Tool = {
  name: 'addAccountNotes',
  description: 'Adds new account notes to the system and assigns them to specified accounts',
  inputSchema: {
    type: 'object',
    properties: {
      AccountNotes: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            AccountId: { type: 'string', description: 'Account ID to add note to' },
            Text: { type: 'string', description: 'Note content' },
            Type: { type: 'string', description: 'Note type or category' }
          },
          required: ['AccountId', 'Text']
        },
        description: 'Array of note objects to create'
      }
    },
    required: ['AccountNotes'],
    additionalProperties: false
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const inputArgs = args as Record<string, unknown>;
    const requestData = {
      ...inputArgs
    };

    const result = await mewsRequest(config, '/api/connector/v1/accountNotes/add', requestData);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 