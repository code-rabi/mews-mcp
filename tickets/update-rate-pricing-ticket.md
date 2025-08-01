# Update Rate Pricing Tool

## Description
Updates pricing of the specified rates in the specified period

## API Documentation
- **Category**: Services/Rates
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/rates/update-rate-pricing

## Implementation Details
- **Tool Name**: `updateRatePricing`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/rates/updatePricing`

## Parameters
- RatePricingUpdates (required): Array of pricing update objects

## Expected Response
- Confirmation of pricing updates

## Priority
Medium

## Status
Not Started

## Notes
- Important for revenue management
- Allows dynamic pricing adjustments
- Validate pricing data before updating 