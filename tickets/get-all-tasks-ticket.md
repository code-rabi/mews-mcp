# Get All Tasks Tool

## Description
Implement a tool to retrieve all tasks of the enterprise filtered by identifiers or other filters using the Mews Connector API.

## API Reference
- **Endpoint:** `GET /api/connector/v1/tasks/getAll`
- **Documentation:** [Tasks API](https://mews-systems.gitbook.io/connector-api/operations/tasks#get-all-tasks)

## Tool Specification

### Name
`mcp_mews-mcp_getAllTasks`

### Description
Returns all tasks of the enterprise, filtered by identifiers or other filters

### Parameters
- `TaskIds` (array of string, optional, max 1000): Filter by specific task IDs
- `DepartmentIds` (array of string, optional, max 1000): Filter by department IDs
- `ServiceOrderIds` (array of string, optional, max 1000): Filter by service order IDs (reservations or product service orders)
- `CreatedUtc` (object, optional, max 3 months): Date range filter for task creation
- `ClosedUtc` (object, optional, max 3 months): Date range filter for task closure
- `DeadlineUtc` (object, optional, max 3 months): Date range filter for task deadlines
- `Limitation` (object, required): Pagination settings with cursor support

### Implementation Requirements
1. Create `src/tools/tasks/getAllTasks.ts`
2. Add proper TypeScript interfaces for task objects
3. Include validation for task IDs, department IDs, and date ranges
4. Handle pagination with cursor-based navigation
5. Add comprehensive error handling for invalid filters
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for operational task management and workflow coordination
- Enables comprehensive task tracking and assignment management
- Supports departmental workflow coordination and accountability
- Critical for service order completion and guest satisfaction
- Required for operational efficiency and staff coordination

### Testing Considerations
- Test with valid task and department IDs
- Verify date range filtering functionality
- Test pagination with large result sets
- Test error handling for invalid filter combinations
- Validate response format and task state information

### Dependencies
- Requires department and service order configuration
- Should integrate with reservation and service management
- May need staff assignment and notification systems 