# Update Reservation Interval Tool

## Description
Implement a tool to update reservation dates (start, end, or both) using the Mews Connector API.

## API Reference
- **Endpoint:** `POST /api/connector/v1/reservations/updateInterval`
- **Documentation:** [Reservations API](https://mews-systems.gitbook.io/connector-api/operations/reservations#update-reservation-interval)

## Tool Specification

### Name
`mcp_mews-mcp_updateReservationInterval`

### Description
Updates reservation interval (start, end or both)

### Parameters
- `ReservationId` (string, required): Unique identifier of the reservation
- `StartUtc` (string, optional): New check-in date/time (ISO 8601)
- `EndUtc` (string, optional): New check-out date/time (ISO 8601)
- `RepricingMode` (string, optional): How to handle pricing changes (Keep, Update, etc.)

### Implementation Requirements
1. Create `src/tools/reservations/updateReservationInterval.ts`
2. Add proper TypeScript interfaces for interval update operations
3. Include validation for reservation IDs and date constraints
4. Handle availability checking and pricing recalculation
5. Add comprehensive error handling for conflicts
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for flexible reservation management
- Enables guest-requested date changes and extensions
- Supports dynamic pricing and availability optimization
- Critical for revenue management and guest satisfaction
- Required for operational flexibility and change management

### Testing Considerations
- Test with valid reservation IDs and date ranges
- Verify availability checking for new dates
- Test error handling for overlapping bookings
- Test pricing recalculation functionality
- Validate date constraint validation (end after start)

### Dependencies
- Requires existing reservations to update
- Should integrate with availability and pricing systems
- May need approval workflows for significant changes 