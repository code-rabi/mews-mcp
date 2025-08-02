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
import { cancelReservationsTool } from './reservations/cancelReservations.js';

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

// Payment tools
import { addPaymentTool } from './payments/addPayment.js';
import { chargeCreditCardTool } from './payments/chargeCreditCard.js';
import { getAllPaymentsTool } from './payments/getAllPayments.js';

// Services tools
import { getAllServicesTool } from './services/getAllServices.js';
import { getAllSpacesTool } from './services/getAllSpaces.js';
import { getAllSpaceCategoriesTool } from './services/getAllSpaceCategories.js';

// Account Notes tools
import { getAllAccountNotesTool } from './accountNotes/getAllAccountNotes.js';
import { addAccountNotesTool } from './accountNotes/addAccountNotes.js';

// Rates tools
import { getAllRatesTool } from './rates/getAllRates.js';
import { getRatePricingTool } from './rates/getRatePricing.js';

// Export tools
import { exportAccountingItemsTool } from './exports/exportAccountingItems.js';
import { exportReservationsTool } from './exports/exportReservations.js';

// Availability tools
import { getAllAvailabilityBlocksTool } from './availability/getAllAvailabilityBlocks.js';

// Voucher tools
import { addVouchersTool } from './vouchers/addVouchers.js';

// Task tools
import { getAllTasksTool } from './tasks/getAllTasks.js';
import { addTaskTool } from './tasks/addTask.js';

// Loyalty tools
import { getAllLoyaltyMembershipsTool } from './loyalty/getAllLoyaltyMemberships.js';
import { addLoyaltyMembershipsTool } from './loyalty/addLoyaltyMemberships.js';
import { updateLoyaltyMembershipsTool } from './loyalty/updateLoyaltyMemberships.js';
import { deleteLoyaltyMembershipsTool } from './loyalty/deleteLoyaltyMemberships.js';
import { getAllLoyaltyProgramsTool } from './loyalty/getAllLoyaltyPrograms.js';
import { addLoyaltyProgramsTool } from './loyalty/addLoyaltyPrograms.js';
import { updateLoyaltyProgramsTool } from './loyalty/updateLoyaltyPrograms.js';
import { deleteLoyaltyProgramsTool } from './loyalty/deleteLoyaltyPrograms.js';
import { getAllLoyaltyTiersTool } from './loyalty/getAllLoyaltyTiers.js';
import { addLoyaltyTiersTool } from './loyalty/addLoyaltyTiers.js';
import { updateLoyaltyTiersTool } from './loyalty/updateLoyaltyTiers.js';
import { deleteLoyaltyTiersTool } from './loyalty/deleteLoyaltyTiers.js';

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
  cancelReservationsTool,
  
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
  
  // Payment tools
  addPaymentTool,
  chargeCreditCardTool,
  getAllPaymentsTool,
  
  // Services tools
  getAllServicesTool,
  getAllSpacesTool,
  getAllSpaceCategoriesTool,
  
  // Account Notes tools
  getAllAccountNotesTool,
  addAccountNotesTool,
  
  // Rates tools
  getAllRatesTool,
  getRatePricingTool,
  
  // Export tools
  exportAccountingItemsTool,
  exportReservationsTool,
  
  // Availability tools
  getAllAvailabilityBlocksTool,
  
  // Voucher tools
  addVouchersTool,
  
  // Task tools
  getAllTasksTool,
  addTaskTool,
  
  // Loyalty tools
  getAllLoyaltyMembershipsTool,
  addLoyaltyMembershipsTool,
  updateLoyaltyMembershipsTool,
  deleteLoyaltyMembershipsTool,
  getAllLoyaltyProgramsTool,
  addLoyaltyProgramsTool,
  updateLoyaltyProgramsTool,
  deleteLoyaltyProgramsTool,
  getAllLoyaltyTiersTool,
  addLoyaltyTiersTool,
  updateLoyaltyTiersTool,
  deleteLoyaltyTiersTool,
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