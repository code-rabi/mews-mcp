import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const getAllLoyaltyTiersTool: Tool = {
  name: 'getAllLoyaltyTiers',
  description: 'Returns all loyalty tiers of the enterprise, optionally filtered by specific loyalty tier identifiers or other filter parameters.',
  inputSchema: {
    type: 'object',
    properties: {
      ChainIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'Unique identifiers of the chain. If not specified, the operation returns data for all chains within scope of the Access Token.',
        maxItems: 1000
      },
      CreatedUtc: {
        type: 'object',
        properties: {
          StartUtc: { type: 'string', description: 'Start of creation date range (ISO 8601)' },
          EndUtc: { type: 'string', description: 'End of creation date range (ISO 8601)' }
        },
        description: 'The time interval during which the tier was created (max length 3 months)'
      },
      UpdatedUtc: {
        type: 'object',
        properties: {
          StartUtc: { type: 'string', description: 'Start of update date range (ISO 8601)' },
          EndUtc: { type: 'string', description: 'End of update date range (ISO 8601)' }
        },
        description: 'The time interval during which the tier was last updated (max length 3 months)'
      },
      LoyaltyTierIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'Unique identifiers of Loyalty tiers.',
        maxItems: 1000
      },
      LoyaltyProgramIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'Unique identifiers of Loyalty programs.',
        maxItems: 1000
      },
      ActivityStates: {
        type: 'array',
        items: { type: 'string' },
        description: 'Whether to return only active, only deleted or both records.'
      },
      Names: {
        type: 'array',
        items: { type: 'string' },
        description: 'Names of the loyalty tiers.',
        maxItems: 1000
      },
      Limitation: {
        type: 'object',
        properties: {
          Count: { type: 'number', description: 'Maximum number of loyalty tiers to return' },
          Cursor: { type: 'string', description: 'Pagination cursor for next page' }
        },
        description: 'Limitation on the quantity of data returned'
      }
    },
    additionalProperties: false
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const inputArgs = args as Record<string, unknown>;
    
    // Ensure required parameters have defaults
    const requestData: Record<string, unknown> = {
      Limitation: {
        Count: 100
      },
      ...inputArgs
    };

    const result = await mewsRequest(config, '/api/connector/v1/loyaltyTiers/getAll', requestData);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 