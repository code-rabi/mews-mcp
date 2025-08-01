# Add Reservation Tool

## Description
Adds a new reservation with the specified details

## API Documentation
- **Category**: Reservations
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/reservations/add-reservation

## Implementation Details
- **Tool Name**: `addReservation`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/reservations/add`

## Parameters
- CustomerId (optional): Customer ID for the reservation
- ServiceId (required): Service ID
- RatePlanId (required): Rate plan ID
- StartUtc (required): Check-in date/time
- EndUtc (required): Check-out date/time
- VoucherCode (optional): Discount voucher code
- BookingChannel (optional): Channel for booking
- Notes (optional): Reservation notes

## Expected Response
- Created reservation object

## Priority
High

## Status
Not Started

## Notes
- Core functionality for reservation management
- Validate availability before creating
- Support guest information collection 