# Add Resource Block Tool

## Description
Implement a tool to add a new resource block to specified resources for a defined period using the Mews Connector API.

## API Reference
- **Endpoint:** `POST /api/connector/v1/enterprises/addResourceBlock`
- **Documentation:** [Resource Blocks API](https://mews-systems.gitbook.io/connector-api/operations/enterprises#add-resource-block)

## Tool Specification

### Name
`mcp_mews-mcp_addResourceBlock`

### Description
Adds a new resource block to the specified resource for a defined period of time

### Parameters
- `ResourceId` (string, required): Unique identifier of the resource
- `StartUtc` (string, required): Block start date/time (ISO 8601)
- `EndUtc` (string, required): Block end date/time (ISO 8601)
- `Type` (string, required): Block type (OutOfOrder, InternalUse, etc.)
- `Reason` (string, optional): Reason for the block
- `Notes` (string, optional): Additional notes about the block

### Implementation Requirements
1. Create `src/tools/enterprises/addResourceBlock.ts`
2. Add proper TypeScript interfaces for resource block creation
3. Include validation for resource IDs, dates, and block types
4. Validate that end date is after start date
5. Add comprehensive error handling for conflicts
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for maintenance and availability management
- Enables proactive blocking of unavailable resources
- Supports maintenance scheduling and room service planning
- Critical for accurate availability and pricing
- Required for operational planning and resource optimization

### Testing Considerations
- Test with valid resource IDs and date ranges
- Verify block type validation
- Test error handling for overlapping blocks
- Test date validation (end after start)
- Validate block creation confirmation

### Dependencies
- Requires existing resources to block
- Should integrate with get all resource blocks for verification
- May need conflict detection with existing reservations 