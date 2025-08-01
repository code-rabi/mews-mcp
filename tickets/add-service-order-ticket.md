# Add Service Order Tool

## Description
Adds a new service order for additional services

## API Documentation
- **Category**: Service Orders
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/service-orders/add-service-order

## Implementation Details
- **Tool Name**: `addServiceOrder`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/serviceOrders/add`

## Parameters
- CustomerId (required): Customer ID
- ServiceId (required): Service ID
- StartUtc (optional): Service start time
- EndUtc (optional): Service end time
- Notes (optional): Order notes

## Expected Response
- Created service order object

## Priority
Medium

## Status
Not Started

## Notes
- Enable booking of additional services
- Support various service types
- Integrate with reservation and billing systems 