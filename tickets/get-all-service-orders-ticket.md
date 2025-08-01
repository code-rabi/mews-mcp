# Get All Service Orders Tool

## Description
Returns all service orders (additional services) based on filter parameters

## API Documentation
- **Category**: Service Orders
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/service-orders/get-all-service-orders

## Implementation Details
- **Tool Name**: `getAllServiceOrders`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/serviceOrders/getAll`

## Parameters
- ServiceOrderIds (optional): Filter by specific order IDs
- CustomerIds (optional): Filter by customer IDs
- ReservationIds (optional): Filter by reservation IDs
- CreatedUtc (optional): Date range filter
- States (optional): Filter by order states

## Expected Response
- Array of service order objects

## Priority
Medium

## Status
Not Started

## Notes
- Track additional services beyond accommodation
- Include spa, dining, transportation services
- Link to reservations and customers 