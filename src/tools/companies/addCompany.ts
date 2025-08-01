import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const addCompanyTool: Tool = {
  name: 'addCompany',
  description: 'Adds a new company',
  inputSchema: {
    type: 'object',
    properties: {
      Name: {
        type: 'string',
        description: 'Company name'
      },
      TaxIdentifier: {
        type: 'string',
        description: 'Tax identification number'
      },
      Email: {
        type: 'string',
        description: 'Company email address'
      },
      Phone: {
        type: 'string',
        description: 'Company phone number'
      },
      WebsiteUrl: {
        type: 'string',
        description: 'Company website URL'
      },
      InvoicingEmail: {
        type: 'string',
        description: 'Billing email address'
      },
      ContactPersonId: {
        type: 'string',
        description: 'Contact person customer ID'
      }
    },
    required: ['Name'],
    additionalProperties: false
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const inputArgs = args as Record<string, unknown>;
    const requestData = {
      ...inputArgs
    };

    const result = await mewsRequest(config, '/api/connector/v1/companies/add', requestData);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 