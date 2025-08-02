import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const deleteLoyaltyProgramsTool: Tool = {
  name: 'deleteLoyaltyPrograms',
  description: 'Deletes loyalty programs',
  inputSchema: {
    type: 'object',
    properties: {
      LoyaltyProgramIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'Unique identifier of the loyalty programs to be deleted',
        maxItems: 1000
      }
    },
    required: ['LoyaltyProgramIds'],
    additionalProperties: false
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const result = await mewsRequest(config, '/api/connector/v1/loyaltyPrograms/delete', args);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 