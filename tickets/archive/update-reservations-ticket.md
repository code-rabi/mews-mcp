# Update Reservations Tool

## Description
Updates reservation properties

## API Documentation
- **Category**: Reservations
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/reservations/update-reservations

## Implementation Details
- **Tool Name**: `updateReservations`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/reservations/update`

## Parameters
- ReservationUpdates (required): Array of reservation update objects

## Expected Response
- Array of updated reservation objects

## Priority
High

## Status
Not Started

## Notes
- Essential for reservation management
- Validate changes don't conflict with availability
- Support state changes (confirmed, canceled, etc.) 