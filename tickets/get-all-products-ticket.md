# Get All Products Tool

## Description
Implement a tool to retrieve all products offered by the enterprise using the Mews Connector API.

## API Reference
- **Endpoint:** `GET /api/connector/v1/services/getAllProducts`
- **Documentation:** [Products API](https://mews-systems.gitbook.io/connector-api/operations/services#get-all-products)

## Tool Specification

### Name
`mcp_mews-mcp_getAllProducts`

### Description
Returns all products filtered by services or product identifiers

### Parameters
- `ServiceIds` (array of string, optional, max 1000): Filter by service IDs
- `ProductIds` (array of string, optional, max 1000): Filter by specific product IDs
- `ProductCategoryIds` (array of string, optional, max 1000): Filter by product category IDs
- `UpdatedUtc` (object, optional): Date range filter for product updates
- `Limitation` (object, optional): Pagination settings

### Implementation Requirements
1. Create `src/tools/services/getAllProducts.ts`
2. Add proper TypeScript interfaces for product objects
3. Include validation for service and product ID formats
4. Handle pagination with cursor-based navigation
5. Add comprehensive error handling
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for revenue optimization and upselling
- Enables dynamic product catalog management
- Critical for point-of-sale and booking systems
- Supports inventory management and pricing strategies
- Required for automated upselling and cross-selling

### Testing Considerations
- Test with valid service IDs
- Verify pagination functionality
- Test filtering by product categories
- Test error handling for invalid IDs
- Validate response format and product data

### Dependencies
- Requires service configuration
- Should integrate with product category management
- May need product pricing information 