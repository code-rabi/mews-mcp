# Get All Rates Tool

## Description
Returns all rates (pricing) of the enterprise

## API Documentation
- **Category**: Services/Rates
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/rates/get-all-rates

## Implementation Details
- **Tool Name**: `getAllRates`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/rates/getAll`

## Parameters
- RateIds (optional): Filter by specific rate IDs
- ServiceIds (optional): Filter by service IDs
- RateGroupIds (optional): Filter by rate group
- UpdatedUtc (optional): Date range filter

## Expected Response
- Array of rate objects

## Priority
High

## Status
Not Started

## Notes
- Essential for pricing calculations
- Rates define pricing rules for services
- Include base rates and adjustments 