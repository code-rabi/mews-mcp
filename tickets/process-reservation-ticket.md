# Process Reservation Tool

## Description
Implement a tool to process (check-out) a reservation using the Mews Connector API.

## API Reference
- **Endpoint:** `POST /api/connector/v1/reservations/process`
- **Documentation:** [Reservations API](https://mews-systems.gitbook.io/connector-api/operations/reservations#process-reservation)

## Tool Specification

### Name
`mcp_mews-mcp_processReservation`

### Description
Marks a reservation as Processed (checked out)

### Parameters
- `ReservationId` (string, required): Unique identifier of the reservation to process
- `ProcessUtc` (string, optional): Actual check-out time (ISO 8601, defaults to current time)
- `CloseBill` (boolean, optional): Whether to close the associated bill
- `Notes` (string, optional): Check-out notes

### Implementation Requirements
1. Create `src/tools/reservations/processReservation.ts`
2. Add proper TypeScript interfaces for check-out operations
3. Include validation for reservation IDs and check-out times
4. Handle bill closure and payment finalization
5. Add comprehensive error handling for invalid states
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for guest check-out and revenue finalization
- Enables front desk check-out processes
- Supports billing completion and payment collection
- Critical for resource availability and housekeeping coordination
- Required for accurate revenue recognition and reporting

### Testing Considerations
- Test with valid reservation IDs in Started state
- Verify check-out time handling and bill closure
- Test error handling for already processed reservations
- Test payment and billing integration
- Validate resource availability updates

### Dependencies
- Requires started reservations to process
- Should integrate with billing and payment systems
- May need housekeeping and resource management updates 