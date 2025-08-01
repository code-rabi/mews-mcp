# Get All Resources Tool

## Description
Implement a tool to retrieve all resources of an enterprise using the Mews Connector API.

## API Reference
- **Endpoint:** `GET /api/connector/v1/enterprises/getAllResources`
- **Documentation:** [Resources API](https://mews-systems.gitbook.io/connector-api/operations/enterprises#get-all-resources)

## Tool Specification

### Name
`mcp_mews-mcp_getAllResources`

### Description
Returns all resources of an enterprise associated with the connector integration

### Parameters
- `ServiceIds` (array of string, optional, max 1000): Filter by service IDs
- `ResourceIds` (array of string, optional, max 1000): Filter by specific resource IDs
- `ResourceCategoryIds` (array of string, optional, max 1000): Filter by resource category IDs
- `UpdatedUtc` (object, optional): Date range filter for resource updates
- `Limitation` (object, optional): Pagination settings

### Implementation Requirements
1. Create `src/tools/enterprises/getAllResources.ts`
2. Add proper TypeScript interfaces for resource objects
3. Include validation for service and resource ID formats
4. Handle pagination with cursor-based navigation
5. Add comprehensive error handling
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for resource and inventory management
- Enables efficient space and asset allocation
- Critical for occupancy management and planning
- Supports maintenance scheduling and resource optimization
- Required for availability and booking systems

### Testing Considerations
- Test with valid service IDs
- Verify pagination functionality
- Test filtering by resource categories
- Test error handling for invalid IDs
- Validate response format and resource data

### Dependencies
- Requires service configuration
- Should integrate with resource category management
- May need resource feature and availability data 