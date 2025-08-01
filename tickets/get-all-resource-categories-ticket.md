# Get All Resource Categories Tool

## Description
Implement a tool to retrieve all resource categories of an enterprise using the Mews Connector API.

## API Reference
- **Endpoint:** `GET /api/connector/v1/enterprises/getAllResourceCategories`
- **Documentation:** [Resource Categories API](https://mews-systems.gitbook.io/connector-api/operations/enterprises#get-all-resource-categories)

## Tool Specification

### Name
`mcp_mews-mcp_getAllResourceCategories`

### Description
Returns all resource categories of an enterprise associated with the connector integration

### Parameters
- `ServiceIds` (array of string, optional, max 1000): Filter by service IDs
- `ResourceCategoryIds` (array of string, optional, max 1000): Filter by specific category IDs
- `UpdatedUtc` (object, optional): Date range filter for category updates

### Implementation Requirements
1. Create `src/tools/enterprises/getAllResourceCategories.ts`
2. Add proper TypeScript interfaces for resource category objects
3. Include validation for service and category ID formats
4. Handle hierarchical category structures if applicable
5. Add comprehensive error handling
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for organized resource management
- Enables structured resource classification and management
- Critical for inventory organization and reporting
- Supports availability management by resource type
- Required for automated resource allocation and pricing

### Testing Considerations
- Test with valid service IDs
- Verify category hierarchy handling
- Test filtering by specific category IDs
- Test error handling for invalid service IDs
- Validate response format and category data

### Dependencies
- Requires service configuration
- Should integrate with resource management
- May need category hierarchy support and resource assignment data 