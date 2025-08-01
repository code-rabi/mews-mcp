import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const addAccountingItemsTool: Tool = {
  name: 'addAccountingItems',
  description: 'Adds new accounting items (charges, payments, etc.) to customer bills',
  inputSchema: {
    type: 'object',
    properties: {
      AccountingItems: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            CustomerId: { type: 'string', description: 'Customer ID' },
            AccountingCategoryId: { type: 'string', description: 'Accounting category ID' },
            Amount: {
              type: 'object',
              properties: {
                Currency: { type: 'string', description: 'Currency code' },
                Value: { type: 'number', description: 'Amount value' }
              },
              required: ['Currency', 'Value'],
              description: 'Amount object'
            },
            ConsumedUtc: { type: 'string', description: 'Consumption date/time (ISO 8601)' },
            Notes: { type: 'string', description: 'Item notes' },
            Name: { type: 'string', description: 'Item name' }
          },
          required: ['CustomerId', 'AccountingCategoryId', 'Amount']
        },
        description: 'Array of accounting item objects to create'
      }
    },
    required: ['AccountingItems'],
    additionalProperties: false
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const inputArgs = args as Record<string, unknown>;
    const requestData = {
      ...inputArgs
    };

    const result = await mewsRequest(config, '/api/connector/v1/accountingItems/add', requestData);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 