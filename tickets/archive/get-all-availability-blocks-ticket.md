# Get All Availability Blocks Tool

## Description
Returns all availability blocks (reservations blocked by rate, space category, or space) based on filter parameters

## API Documentation
- **Category**: Services/Availability Blocks
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/availability-blocks/get-all-availability-blocks

## Implementation Details
- **Tool Name**: `getAllAvailabilityBlocks`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/availabilityBlocks/getAll`

## Parameters
- AvailabilityBlockIds (optional): Filter by specific block IDs
- ServiceIds (optional): Filter by service IDs
- StartUtc (required): Start date for search
- EndUtc (required): End date for search

## Expected Response
- Array of availability block objects

## Priority
Medium

## Status
Not Started

## Notes
- Used for inventory management and restrictions
- Blocks prevent bookings during specified periods
- Important for maintenance and special events 