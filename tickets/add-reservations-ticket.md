# Add Reservations Tool

## Description
Implement a tool to add multiple reservations as a single group using the Mews Connector API.

## API Reference
- **Endpoint:** `POST /api/connector/v1/reservations/add`
- **Documentation:** [Reservations API](https://mews-systems.gitbook.io/connector-api/operations/reservations#add-reservations)

## Tool Specification

### Name
`mcp_mews-mcp_addReservations`

### Description
Adds the specified reservations as a single group

### Parameters
- `Reservations` (array of object, required): Array of reservation objects to create
  - `ServiceId` (string, required): Service ID
  - `RatePlanId` (string, required): Rate plan ID
  - `StartUtc` (string, required): Check-in date/time (ISO 8601)
  - `EndUtc` (string, required): Check-out date/time (ISO 8601)
  - `CustomerId` (string, optional): Customer ID for the reservation
  - `AdultCount` (number, optional): Number of adults
  - `ChildCount` (number, optional): Number of children
  - `ResourceCategoryId` (string, optional): Preferred resource category
  - `Notes` (string, optional): Reservation notes
  - `BookingChannel` (string, optional): Channel for booking
- `GroupName` (string, optional): Name for the reservation group

### Implementation Requirements
1. Create `src/tools/reservations/addReservations.ts`
2. Add proper TypeScript interfaces for group reservation creation
3. Include validation for service IDs, dates, and customer data
4. Handle group booking logic and dependencies
5. Add comprehensive error handling for booking conflicts
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for group bookings and multi-room reservations
- Enables efficient group reservation management
- Supports corporate and event bookings
- Critical for managing related reservations as a unit
- Required for group pricing and coordination

### Testing Considerations
- Test with multiple reservations in a group
- Verify group creation and linking
- Test error handling for booking conflicts
- Test partial success scenarios
- Validate group management functionality

### Dependencies
- Requires service and rate plan configuration
- Should integrate with customer management
- May need availability checking and group pricing 