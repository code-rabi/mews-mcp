# Update Reservation Customer Tool

## Description
Implement a tool to update the customer associated with a reservation using the Mews Connector API.

## API Reference
- **Endpoint:** `POST /api/connector/v1/reservations/updateCustomer`
- **Documentation:** [Reservations API](https://mews-systems.gitbook.io/connector-api/operations/reservations#update-reservation-customer)

## Tool Specification

### Name
`mcp_mews-mcp_updateReservationCustomer`

### Description
Updates customer of a reservation

### Parameters
- `ReservationId` (string, required): Unique identifier of the reservation
- `CustomerId` (string, required): New customer ID to assign to the reservation

### Implementation Requirements
1. Create `src/tools/reservations/updateReservationCustomer.ts`
2. Add proper TypeScript interfaces for customer update operations
3. Include validation for reservation and customer IDs
4. Handle billing and payment reassignment
5. Add comprehensive error handling for invalid IDs
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for managing reservation ownership changes
- Enables correction of booking errors and transfers
- Supports guest profile management and consolidation
- Critical for accurate billing and communication
- Required for customer service and reservation management

### Testing Considerations
- Test with valid reservation and customer IDs
- Verify billing and payment reassignment
- Test error handling for invalid customer assignments
- Test permission validation for customer changes
- Validate audit trail and history tracking

### Dependencies
- Requires existing reservations and customers
- Should integrate with billing and payment systems
- May need approval workflows for customer changes 