import { Tool } from './base.js';

// Account tools
import { getAllAddressesTool } from './accounts/getAllAddresses.js';
import { addAddressesTool } from './accounts/addAddresses.js';

// Customer tools
import { getAllCustomersTool } from './customers/getAllCustomers.js';
import { addCustomerTool } from './customers/addCustomer.js';
import { updateCustomersTool } from './customers/updateCustomers.js';
import { deleteCustomersTool } from './customers/deleteCustomers.js';
import { mergeCustomersTool } from './customers/mergeCustomers.js';

// Company tools
import { getAllCompaniesTool } from './companies/getAllCompanies.js';
import { addCompanyTool } from './companies/addCompany.js';
import { updateCompaniesTool } from './companies/updateCompanies.js';
import { deleteCompaniesTool } from './companies/deleteCompanies.js';

// Reservation tools
import { getAllReservationsTool } from './reservations/getAllReservations.js';
import { addReservationTool } from './reservations/addReservation.js';
import { updateReservationsTool } from './reservations/updateReservations.js';

// Configuration tools
import { getConfigurationTool } from './configuration/getConfiguration.js';
import { getAllCountriesTool } from './configuration/getAllCountries.js';
import { getAllCurrenciesTool } from './configuration/getAllCurrencies.js';
import { getAllTaxEnvironmentsTool } from './configuration/getAllTaxEnvironments.js';
import { getAllTaxationsTool } from './configuration/getAllTaxations.js';
import { getAllLanguagesTool } from './configuration/getAllLanguages.js';
import { getLanguageTextsTool } from './configuration/getLanguageTexts.js';

// Finance tools
import { getAllBillsTool } from './finance/getAllBills.js';
import { getAllAccountingItemsTool } from './finance/getAllAccountingItems.js';
import { addAccountingItemsTool } from './finance/addAccountingItems.js';

// Services tools
import { getAllServicesTool } from './services/getAllServices.js';
import { getAllSpacesTool } from './services/getAllSpaces.js';
import { getAllSpaceCategoriesTool } from './services/getAllSpaceCategories.js';

// Registry of all available tools
export const allTools: Tool[] = [
  // Account tools
  getAllAddressesTool,
  addAddressesTool,
  
  // Customer tools
  getAllCustomersTool,
  addCustomerTool,
  updateCustomersTool,
  deleteCustomersTool,
  mergeCustomersTool,
  
  // Company tools
  getAllCompaniesTool,
  addCompanyTool,
  updateCompaniesTool,
  deleteCompaniesTool,
  
  // Reservation tools
  getAllReservationsTool,
  addReservationTool,
  updateReservationsTool,
  
  // Configuration tools
  getConfigurationTool,
  getAllCountriesTool,
  getAllCurrenciesTool,
  getAllTaxEnvironmentsTool,
  getAllTaxationsTool,
  getAllLanguagesTool,
  getLanguageTextsTool,
  
  // Finance tools
  getAllBillsTool,
  getAllAccountingItemsTool,
  addAccountingItemsTool,
  
  // Services tools
  getAllServicesTool,
  getAllSpacesTool,
  getAllSpaceCategoriesTool,
];

// Tool lookup map for fast access during execution
export const toolMap: Map<string, Tool> = new Map(
  allTools.map(tool => [tool.name, tool])
);

// Get tool definitions for MCP server registration
export function getToolDefinitions() {
  return allTools.map(tool => ({
    name: tool.name,
    description: tool.description,
    inputSchema: tool.inputSchema
  }));
}

// Execute a tool by name
export async function executeTool(name: string, config: any, args: unknown) {
  const tool = toolMap.get(name);
  if (!tool) {
    return {
      content: [{
        type: 'text',
        text: `Error: Unknown tool: ${name}`
      }]
    };
  }
  
  try {
    return await tool.execute(config, args);
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`
      }]
    };
  }
} 