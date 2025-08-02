import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const deleteLoyaltyMembershipsTool: Tool = {
  name: 'deleteLoyaltyMemberships',
  description: 'Deletes loyalty memberships',
  inputSchema: {
    type: 'object',
    properties: {
      LoyaltyMembershipIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'Unique identifier of the loyalty memberships to be deleted',
        maxItems: 1000
      }
    },
    required: ['LoyaltyMembershipIds'],
    additionalProperties: false
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const result = await mewsRequest(config, '/api/connector/v1/loyaltyMemberships/delete', args);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 