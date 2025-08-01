import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const getAllAccountingItemsTool: Tool = {
  name: 'getAllAccountingItems',
  description: 'Returns all accounting items (charges, payments, etc.) based on filter parameters',
  inputSchema: {
    type: 'object',
    properties: {
      AccountingItemIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'Filter by specific item IDs',
        maxItems: 1000
      },
      CustomerIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'Filter by customer IDs',
        maxItems: 1000
      },
      BillIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'Filter by bill IDs',
        maxItems: 1000
      },
      AccountingCategoryIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'Filter by accounting category IDs',
        maxItems: 1000
      },
      ConsumedUtc: {
        type: 'object',
        properties: {
          StartUtc: { type: 'string', description: 'Start of consumption date range (ISO 8601)' },
          EndUtc: { type: 'string', description: 'End of consumption date range (ISO 8601)' }
        },
        description: 'Date range filter for item consumption'
      },
      CreatedUtc: {
        type: 'object',
        properties: {
          StartUtc: { type: 'string', description: 'Start of creation date range (ISO 8601)' },
          EndUtc: { type: 'string', description: 'End of creation date range (ISO 8601)' }
        },
        description: 'Date range filter for item creation'
      },
      States: {
        type: 'array',
        items: { type: 'string' },
        description: 'Filter by item states'
      },
      Limitation: {
        type: 'object',
        properties: {
          Count: { type: 'number', description: 'Maximum number of items to return' },
          Cursor: { type: 'string', description: 'Pagination cursor for next page' }
        },
        description: 'Pagination settings'
      }
    },
    additionalProperties: false
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const inputArgs = args as Record<string, unknown>;
    const requestData = {
      Limitation: {
        Count: 100
      },
      ...inputArgs
    };

    const result = await mewsRequest(config, '/api/connector/v1/accountingItems/getAll', requestData);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 