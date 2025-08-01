import { Tool, ToolResult } from '../base.js';
import type { MewsAuthConfig } from '../../types/auth.js';
import { mewsRequest } from '../../utils/http.js';

export const getAllReservationsTool: Tool = {
  name: 'getAllReservations',
  description: 'Get reservations with filters',
  inputSchema: {
    type: 'object',
    properties: {
      ReservationIds: { 
        type: 'array', 
        items: { type: 'string' },
        description: 'Specific reservation IDs to retrieve'
      },
      CustomerIds: { 
        type: 'array', 
        items: { type: 'string' },
        description: 'Filter by customer IDs'
      },
      States: { 
        type: 'array', 
        items: { type: 'string' },
        description: 'Filter by reservation states (Confirmed, Canceled, etc.)'
      },
      Limitation: {
        type: 'object',
        properties: {
          Count: { type: 'number', description: 'Maximum number of reservations to return' },
          Cursor: { type: 'string', description: 'Pagination cursor for next page' }
        },
        description: 'Pagination settings'
      }
    }
  },
  
  async execute(config: MewsAuthConfig, args: unknown): Promise<ToolResult> {
    const result = await mewsRequest(config, '/api/connector/v1/reservations/getAll', args);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    };
  }
}; 