# Delete Products Tool

## Description
Implement a tool to delete specified products from the enterprise using the Mews Connector API.

## API Reference
- **Endpoint:** `POST /api/connector/v1/services/deleteProducts`
- **Documentation:** [Products API](https://mews-systems.gitbook.io/connector-api/operations/services#delete-products)

## Tool Specification

### Name
`mcp_mews-mcp_deleteProducts`

### Description
Deletes specified products from the system

### Parameters
- `ProductIds` (array of string, required, max 1000): Array of product IDs to delete

### Implementation Requirements
1. Create `src/tools/services/deleteProducts.ts`
2. Add proper TypeScript interfaces for delete operations
3. Include validation for product IDs
4. Add safety checks for products with active orders
5. Add comprehensive error handling
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for product catalog management
- Enables removal of discontinued or seasonal products
- Supports inventory cleanup and product lifecycle management
- Critical for maintaining accurate pricing and availability
- Required for seasonal menu and service updates

### Testing Considerations
- Test with valid product IDs
- Verify bulk deletion functionality
- Test error handling for products with active orders
- Test permission validation
- Validate deletion confirmation

### Dependencies
- Requires existing products to delete
- Should check for active orders before deletion
- May need integration with inventory management 