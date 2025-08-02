import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const deleteLoyaltyTiersTool: Tool = {
  name: 'deleteLoyaltyTiers',
  description: 'Deletes loyalty tiers',
  inputSchema: {
    type: 'object',
    properties: {
      LoyaltyTierIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'Unique identifier of the loyalty tiers to be deleted',
        maxItems: 1000
      }
    },
    required: ['LoyaltyTierIds'],
    additionalProperties: false
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const result = await mewsRequest(config, '/api/connector/v1/loyaltyTiers/delete', args);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 