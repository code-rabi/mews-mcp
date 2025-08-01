# Mews MCP Server

A Model Context Protocol (MCP) server for the Mews hospitality platform API. This server provides comprehensive access to Mews operations through a standardized interface.

## Overview

This MCP server implements **27 Mews API tools** covering the core functionality needed for hospitality management, including customer management, reservations, finance, configuration, and services.

## Implemented Tools

### 🏢 Account Management (2 tools)
- `getAllAddresses` - Retrieve account addresses
- `addAddresses` - Add new addresses to accounts

### 👥 Customer Management (5 tools)  
- `getAllCustomers` - Retrieve customers with filtering
- `addCustomer` - Create new customers
- `updateCustomers` - Update customer information
- `deleteCustomers` - Remove customers
- `mergeCustomers` - Merge duplicate customers

### 🏢 Company Management (4 tools)
- `getAllCompanies` - Retrieve companies with filtering
- `addCompany` - Create new companies
- `updateCompanies` - Update company information  
- `deleteCompanies` - Remove companies

### 🏨 Reservation Management (3 tools)
- `getAllReservations` - Retrieve reservations with filtering
- `addReservation` - Create new reservations
- `updateReservations` - Update reservation details

### ⚙️ Configuration (7 tools)
- `getConfiguration` - Get enterprise and client configuration
- `getAllCountries` - Get supported countries
- `getAllCurrencies` - Get supported currencies
- `getAllTaxEnvironments` - Get tax environments
- `getAllTaxations` - Get taxation rules
- `getAllLanguages` - Get supported languages
- `getLanguageTexts` - Get translations

### 💰 Finance (3 tools)
- `getAllBills` - Retrieve billing information
- `getAllAccountingItems` - Get accounting transactions
- `addAccountingItems` - Post charges and payments

### 🛏️ Services & Inventory (3 tools)
- `getAllServices` - Get available services
- `getAllSpaces` - Get spaces/rooms inventory
- `getAllSpaceCategories` - Get space categorization

## Features

- **Type-safe**: Full TypeScript implementation with comprehensive type definitions
- **Error handling**: Robust error handling and validation
- **Pagination**: Support for paginated responses where applicable
- **Filtering**: Extensive filtering options for data retrieval
- **Documentation**: Each tool includes detailed parameter documentation
- **MCP compliance**: Follows Model Context Protocol standards

## Installation

```bash
npm install
npm run build
```

## Configuration

Set up your Mews API credentials in environment variables or configuration:

```bash
export MEWS_BASE_URL="https://demo.mews.li"
export MEWS_CLIENT_TOKEN="your-client-token"
export MEWS_ACCESS_TOKEN="your-access-token"
export MEWS_CLIENT="your-client-identifier"
```

## Usage

The server can be used with any MCP-compatible client. Tools follow the Mews API patterns:

- All endpoints use POST requests
- Authentication is handled automatically via configuration
- Responses include full JSON data from Mews API
- Comprehensive error messages for debugging

## Tool Categories

### High Priority (Core Operations)
✅ Customer and company management  
✅ Reservation CRUD operations  
✅ Financial operations  
✅ Configuration endpoints

### Medium Priority (Enhanced Features)
🔄 Account management (partial)  
🔄 Service management (partial)  
📋 Export functionality (planned)  
📋 Advanced financial tools (planned)

### Comprehensive Coverage

This implementation covers the **core 80%** of Mews API functionality needed for most hospitality operations. The tools are production-ready and follow Mews API best practices.

## API Documentation

For detailed API documentation, refer to:
- [Mews Connector API Documentation](https://mews-systems.gitbook.io/connector-api/operations)
- [Implementation Tickets](./tickets/) - Detailed implementation specifications

## License

MIT License - see LICENSE file for details. 