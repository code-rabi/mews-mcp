# Start Reservation Tool

## Description
Implement a tool to start (check-in) a reservation using the Mews Connector API.

## API Reference
- **Endpoint:** `POST /api/connector/v1/reservations/start`
- **Documentation:** [Reservations API](https://mews-systems.gitbook.io/connector-api/operations/reservations#start-reservation)

## Tool Specification

### Name
`mcp_mews-mcp_startReservation`

### Description
Marks a reservation as Started (checked in)

### Parameters
- `ReservationId` (string, required): Unique identifier of the reservation to start
- `StartUtc` (string, optional): Actual check-in time (ISO 8601, defaults to current time)
- `Notes` (string, optional): Check-in notes

### Implementation Requirements
1. Create `src/tools/reservations/startReservation.ts`
2. Add proper TypeScript interfaces for check-in operations
3. Include validation for reservation IDs and check-in times
4. Handle resource assignment and guest communication
5. Add comprehensive error handling for invalid states
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for guest check-in and operational workflows
- Enables front desk check-in processes
- Supports occupancy tracking and housekeeping coordination
- Critical for guest services and resource management
- Required for accurate billing and service delivery

### Testing Considerations
- Test with valid reservation IDs
- Verify check-in time handling (past/future dates)
- Test error handling for already started reservations
- Test resource assignment functionality
- Validate occupancy and availability updates

### Dependencies
- Requires confirmed reservations to start
- Should integrate with resource management and housekeeping
- May need payment verification and guest identification 