# Cancel Reservations Tool

## Description
Cancels specified reservations

## API Documentation
- **Category**: Reservations
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/reservations/cancel-reservations

## Implementation Details
- **Tool Name**: `cancelReservations`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/reservations/cancel`

## Parameters
- ReservationIds (required): Array of reservation IDs to cancel
- CancellationReason (optional): Reason for cancellation
- Notes (optional): Cancellation notes

## Expected Response
- Array of cancelled reservation objects

## Priority
High

## Status
Not Started

## Notes
- Important for reservation lifecycle management
- Handle cancellation policies
- May trigger refund processes 