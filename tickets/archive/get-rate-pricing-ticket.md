# Get Rate Pricing Tool

## Description
Returns prices of rates during the specified period

## API Documentation
- **Category**: Services/Rates
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/rates/get-rate-pricing

## Implementation Details
- **Tool Name**: `getRatePricing`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/rates/getPricing`

## Parameters
- RateIds (required): Array of rate IDs to get pricing for
- StartUtc (required): Start date for pricing period
- EndUtc (required): End date for pricing period

## Expected Response
- Array of rate pricing objects with dates and amounts

## Priority
High

## Status
Not Started

## Notes
- Critical for availability and booking engines
- Provides detailed pricing by date
- Used for rate shopping and calculations 