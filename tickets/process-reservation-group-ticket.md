# Process Reservation Group Tool

## Description
Processes a group of reservations, used to perform various bulk operations

## API Documentation
- **Category**: Reservations
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/reservations/process-reservation-group

## Implementation Details
- **Tool Name**: `processReservationGroup`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/reservations/processGroup`

## Parameters
- ReservationIds (required): Array of reservation IDs to process
- Actions (required): Array of actions to perform on the reservations

## Expected Response
- Array of processed reservation objects

## Priority
Medium

## Status
Not Started

## Notes
- Allows bulk operations on multiple reservations
- Should validate all reservations exist before processing
- Support various actions like check-in, check-out, etc. 