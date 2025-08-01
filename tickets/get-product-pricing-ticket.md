# Get Product Pricing Tool

## Description
Implement a tool to retrieve product prices for a specified time interval using the Mews Connector API.

## API Reference
- **Endpoint:** `GET /api/connector/v1/services/getProductPricing`
- **Documentation:** [Products API](https://mews-systems.gitbook.io/connector-api/operations/services#get-product-pricing)

## Tool Specification

### Name
`mcp_mews-mcp_getProductPricing`

### Description
Returns prices for a product for a specified time interval

### Parameters
- `ProductIds` (array of string, required, max 1000): Array of product IDs to get pricing for
- `StartUtc` (string, required): Start date for pricing period (ISO 8601)
- `EndUtc` (string, required): End date for pricing period (ISO 8601)
- `Currency` (string, optional): Currency code for price conversion

### Implementation Requirements
1. Create `src/tools/services/getProductPricing.ts`
2. Add proper TypeScript interfaces for pricing objects
3. Include validation for product IDs and date ranges
4. Handle currency conversion requirements
5. Add comprehensive error handling for invalid dates
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Critical for revenue management and dynamic pricing
- Enables real-time pricing queries for booking systems
- Supports revenue optimization through price analysis
- Required for accurate cost calculations and upselling
- Critical for competitive pricing strategies

### Testing Considerations
- Test with valid product IDs and date ranges
- Verify currency conversion functionality
- Test error handling for invalid dates
- Test pricing for different time periods
- Validate price accuracy and format

### Dependencies
- Requires existing products with configured pricing
- Should integrate with currency management
- May need rate and pricing configuration 