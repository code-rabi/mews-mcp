# Add Task Tool

## Description
Implement a tool to add a new task to the enterprise, optionally assigned to a specific department, using the Mews Connector API.

## API Reference
- **Endpoint:** `POST /api/connector/v1/tasks/add`
- **Documentation:** [Tasks API](https://mews-systems.gitbook.io/connector-api/operations/tasks#add-task)

## Tool Specification

### Name
`mcp_mews-mcp_addTask`

### Description
Adds a new task to the enterprise, optionally to a specified department

### Parameters
- `Name` (string, required): Task name or title
- `Description` (string, optional): Detailed task description
- `DepartmentId` (string, optional): Department ID to assign the task to
- `ServiceOrderId` (string, optional): Service order ID (reservation or product service order) to associate with
- `DeadlineUtc` (string, optional): Task deadline (ISO 8601)
- `Type` (string, optional): Task type or category
- `State` (string, optional): Initial task state (defaults to Open)

### Implementation Requirements
1. Create `src/tools/tasks/addTask.ts`
2. Add proper TypeScript interfaces for task creation
3. Include validation for department IDs and service order IDs
4. Validate deadline dates (must be in the future)
5. Add comprehensive error handling for invalid assignments
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for operational workflow management and coordination
- Enables automated task creation from reservations and service requests
- Supports departmental workflow assignment and tracking
- Critical for guest service delivery and operational efficiency
- Required for staff coordination and accountability systems

### Testing Considerations
- Test with valid department and service order assignments
- Verify deadline validation functionality
- Test error handling for invalid department IDs
- Test task creation without optional parameters
- Validate task state initialization and assignment

### Dependencies
- Requires department configuration for task assignment
- Should integrate with service orders and reservations
- May need staff notification and assignment systems 