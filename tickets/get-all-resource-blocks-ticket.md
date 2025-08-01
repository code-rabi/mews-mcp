# Get All Resource Blocks Tool

## Description
Implement a tool to retrieve all resource blocks (out of order blocks or internal use blocks) using the Mews Connector API.

## API Reference
- **Endpoint:** `GET /api/connector/v1/enterprises/getAllResourceBlocks`
- **Documentation:** [Resource Blocks API](https://mews-systems.gitbook.io/connector-api/operations/enterprises#get-all-resource-blocks)

## Tool Specification

### Name
`mcp_mews-mcp_getAllResourceBlocks`

### Description
Returns all resource blocks (out of order blocks or internal use blocks)

### Parameters
- `ResourceIds` (array of string, optional, max 1000): Filter by resource IDs
- `ResourceBlockIds` (array of string, optional, max 1000): Filter by specific block IDs
- `CollidingUtc` (object, optional): Find blocks that collide with this time range
- `StartUtc` (string, required): Start date for search (ISO 8601)
- `EndUtc` (string, required): End date for search (ISO 8601)
- `Limitation` (object, optional): Pagination settings

### Implementation Requirements
1. Create `src/tools/enterprises/getAllResourceBlocks.ts`
2. Add proper TypeScript interfaces for resource block objects
3. Include validation for resource IDs and date ranges
4. Handle time collision detection logic
5. Add comprehensive error handling for invalid dates
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Critical for maintenance and availability management
- Enables tracking of out-of-service periods
- Supports maintenance scheduling and planning
- Critical for accurate availability calculations
- Required for resource optimization and planning

### Testing Considerations
- Test with valid resource IDs and date ranges
- Verify collision detection functionality
- Test error handling for invalid dates
- Test pagination with time-based filters
- Validate block duration and overlap handling

### Dependencies
- Requires existing resources
- Should integrate with availability management
- May need maintenance scheduling systems 