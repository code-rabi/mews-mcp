# Get All Services Tool

## Description
Returns all services offered by the enterprise

## API Documentation
- **Category**: Services
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/services/get-all-services

## Implementation Details
- **Tool Name**: `getAllServices`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/services/getAll`

## Parameters
- ServiceIds (optional): Filter by specific service IDs
- ServiceTypes (optional): Filter by service types
- UpdatedUtc (optional): Date range filter

## Expected Response
- Array of service objects

## Priority
High

## Status
Not Started

## Notes
- Essential for understanding available services
- Services define what can be booked
- Include pricing and availability information 