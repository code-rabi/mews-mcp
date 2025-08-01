# Get All Reservation Groups Tool

## Description
Implement a tool to retrieve all reservation groups filtered by identifiers and other criteria using the Mews Connector API.

## API Reference
- **Endpoint:** `GET /api/connector/v1/reservationGroups/getAll`
- **Documentation:** [Reservation Groups API](https://mews-systems.gitbook.io/connector-api/operations/reservations#get-all-reservation-groups)

## Tool Specification

### Name
`mcp_mews-mcp_getAllReservationGroups`

### Description
Returns all reservation groups, filtered by unique identifiers and other filters

### Parameters
- `ReservationGroupIds` (array of string, optional, max 1000): Filter by specific group IDs
- `CustomerIds` (array of string, optional, max 1000): Filter by customer IDs
- `CreatedUtc` (object, optional): Date range filter for group creation
- `UpdatedUtc` (object, optional): Date range filter for group updates
- `Limitation` (object, optional): Pagination settings

### Implementation Requirements
1. Create `src/tools/reservations/getAllReservationGroups.ts`
2. Add proper TypeScript interfaces for reservation group objects
3. Include validation for group and customer ID formats
4. Handle pagination with cursor-based navigation
5. Add comprehensive error handling
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for group booking and event management
- Enables efficient management of related reservations
- Supports corporate and event booking coordination
- Critical for group pricing and service coordination
- Required for comprehensive reservation reporting

### Testing Considerations
- Test with valid group and customer IDs
- Verify pagination functionality
- Test date range filtering
- Test error handling for invalid IDs
- Validate response format and group data

### Dependencies
- Requires existing reservation groups
- Should integrate with reservation management
- May need customer and billing data for complete group information 