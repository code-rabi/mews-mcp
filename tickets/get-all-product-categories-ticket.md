# Get All Product Categories Tool

## Description
Implement a tool to retrieve all product categories offered by the enterprise using the Mews Connector API.

## API Reference
- **Endpoint:** `GET /api/connector/v1/services/getAllProductCategories`
- **Documentation:** [Products API](https://mews-systems.gitbook.io/connector-api/operations/services#get-all-product-categories)

## Tool Specification

### Name
`mcp_mews-mcp_getAllProductCategories`

### Description
Returns all product categories filtered by services or category identifiers

### Parameters
- `ServiceIds` (array of string, required, max 1000): Filter by service IDs
- `ProductCategoryIds` (array of string, optional, max 1000): Filter by specific category IDs
- `UpdatedUtc` (object, optional): Date range filter for category updates

### Implementation Requirements
1. Create `src/tools/services/getAllProductCategories.ts`
2. Add proper TypeScript interfaces for product category objects
3. Include validation for service and category ID formats
4. Handle hierarchical category structures if applicable
5. Add comprehensive error handling
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for organized product management
- Enables structured product catalog organization
- Critical for inventory management and reporting
- Supports product discovery and search functionality
- Required for automated product categorization

### Testing Considerations
- Test with valid service IDs
- Verify category hierarchy handling
- Test filtering by specific category IDs
- Test error handling for invalid service IDs
- Validate response format and category data

### Dependencies
- Requires service configuration
- Should integrate with product management
- May need category hierarchy support 