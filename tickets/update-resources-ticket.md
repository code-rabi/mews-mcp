# Update Resources Tool

## Description
Implement a tool to update details of enterprise resources using the Mews Connector API.

## API Reference
- **Endpoint:** `POST /api/connector/v1/enterprises/updateResources`
- **Documentation:** [Resources API](https://mews-systems.gitbook.io/connector-api/operations/enterprises#update-resources)

## Tool Specification

### Name
`mcp_mews-mcp_updateResources`

### Description
Updates details of the resources

### Parameters
- `ResourceUpdates` (array of object, required): Array of resource update objects
  - `ResourceId` (string, required): Unique identifier of resource to update
  - `Name` (string, optional): Resource name
  - `Description` (string, optional): Resource description
  - `ParentResourceId` (string, optional): Parent resource ID for hierarchy
  - `State` (string, optional): Resource state (Active, Inactive, etc.)

### Implementation Requirements
1. Create `src/tools/enterprises/updateResources.ts`
2. Add proper TypeScript interfaces for resource updates
3. Include validation for resource IDs and update fields
4. Handle resource hierarchy relationships
5. Add comprehensive error handling
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for maintaining accurate resource information
- Enables dynamic resource management and reconfiguration
- Supports facility changes and resource optimization
- Critical for maintaining up-to-date inventory data
- Required for resource lifecycle management

### Testing Considerations
- Test with valid resource IDs
- Verify partial update functionality (only changed fields)
- Test error handling for invalid resource IDs
- Test hierarchy relationship updates
- Test bulk resource updates

### Dependencies
- Requires existing resources to update
- Should work with get all resources for verification
- May need resource category and feature management 