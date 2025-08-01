# Delete Resource Blocks Tool

## Description
Implement a tool to remove specified resource blocks from resources using the Mews Connector API.

## API Reference
- **Endpoint:** `POST /api/connector/v1/enterprises/deleteResourceBlocks`
- **Documentation:** [Resource Blocks API](https://mews-systems.gitbook.io/connector-api/operations/enterprises#delete-resource-blocks)

## Tool Specification

### Name
`mcp_mews-mcp_deleteResourceBlocks`

### Description
Removes specified resource blocks from the resources

### Parameters
- `ResourceBlockIds` (array of string, required, max 1000): Array of resource block IDs to delete

### Implementation Requirements
1. Create `src/tools/enterprises/deleteResourceBlocks.ts`
2. Add proper TypeScript interfaces for delete operations
3. Include validation for resource block IDs
4. Add safety checks for active blocks
5. Add comprehensive error handling
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for maintaining accurate resource availability
- Enables removal of completed maintenance blocks
- Supports dynamic resource availability management
- Critical for accurate occupancy and pricing calculations
- Required for operational flexibility and planning

### Testing Considerations
- Test with valid resource block IDs
- Verify bulk deletion functionality
- Test error handling for invalid block IDs
- Test permission validation
- Validate deletion confirmation and availability updates

### Dependencies
- Requires existing resource blocks to delete
- Should verify block existence before deletion
- May need integration with availability recalculation 