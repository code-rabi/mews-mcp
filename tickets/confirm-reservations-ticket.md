# Confirm Reservations Tool

## Description
Implement a tool to confirm specified reservations using the Mews Connector API.

## API Reference
- **Endpoint:** `POST /api/connector/v1/reservations/confirm`
- **Documentation:** [Reservations API](https://mews-systems.gitbook.io/connector-api/operations/reservations#confirm-reservations)

## Tool Specification

### Name
`mcp_mews-mcp_confirmReservations`

### Description
Marks all specified reservations as Confirmed

### Parameters
- `ReservationIds` (array of string, required, max 1000): Array of reservation IDs to confirm
- `SendConfirmationEmail` (boolean, optional): Whether to send confirmation emails

### Implementation Requirements
1. Create `src/tools/reservations/confirmReservations.ts`
2. Add proper TypeScript interfaces for confirmation operations
3. Include validation for reservation IDs and states
4. Handle email notification triggers
5. Add comprehensive error handling for invalid reservations
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Critical for reservation workflow management
- Enables automated confirmation processes
- Supports guest communication and expectation management
- Required for operational planning and resource allocation
- Critical for guest satisfaction and booking completion

### Testing Considerations
- Test with valid reservation IDs
- Verify email notification functionality
- Test error handling for already confirmed reservations
- Test bulk confirmation operations
- Validate state transition logic

### Dependencies
- Requires existing reservations to confirm
- Should integrate with email notification systems
- May need payment verification before confirmation 