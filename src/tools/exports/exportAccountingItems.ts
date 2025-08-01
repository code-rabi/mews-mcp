import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const exportAccountingItemsTool: Tool = {
  name: 'exportAccountingItems',
  description: 'Exports accounting items (charges, payments, etc.) in the specified format and period',
  inputSchema: {
    type: 'object',
    properties: {
      StartUtc: {
        type: 'string',
        description: 'Start date for export (ISO 8601)'
      },
      EndUtc: {
        type: 'string',
        description: 'End date for export (ISO 8601)'
      },
      Format: {
        type: 'string',
        description: 'Export format (CSV, JSON, etc.)',
        enum: ['Csv', 'Json', 'Excel']
      },
      AccountingItemIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'Specific accounting item IDs to export',
        maxItems: 1000
      },
      Currency: {
        type: 'string',
        description: 'Currency code for export amounts'
      },
      TimeZone: {
        type: 'string',
        description: 'Time zone for date formatting'
      }
    },
    required: ['StartUtc', 'EndUtc', 'Format'],
    additionalProperties: false
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const inputArgs = args as Record<string, unknown>;
    const requestData = {
      ...inputArgs
    };

    const result = await mewsRequest(config, '/api/connector/v1/exports/accountingItems', requestData);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 