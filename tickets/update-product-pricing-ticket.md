# Update Product Pricing Tool

## Description
Implement a tool to update product prices for specified intervals using the Mews Connector API.

## API Reference
- **Endpoint:** `POST /api/connector/v1/services/updateProductPricing`
- **Documentation:** [Products API](https://mews-systems.gitbook.io/connector-api/operations/services#update-product-pricing)

## Tool Specification

### Name
`mcp_mews-mcp_updateProductPricing`

### Description
Updates product price for a given interval

### Parameters
- `ProductId` (string, required): Unique identifier of the product
- `StartUtc` (string, required): Start date for pricing update (ISO 8601)
- `EndUtc` (string, required): End date for pricing update (ISO 8601)
- `Price` (object, required): Price object with currency and value
  - `Currency` (string, required): Currency code
  - `Value` (number, required): Price value

### Implementation Requirements
1. Create `src/tools/services/updateProductPricing.ts`
2. Add proper TypeScript interfaces for pricing updates
3. Include validation for product IDs, dates, and price formats
4. Add safety checks for pricing conflicts
5. Add comprehensive error handling
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for dynamic revenue management
- Enables real-time pricing adjustments for demand optimization
- Supports seasonal pricing and promotional campaigns
- Critical for competitive pricing strategies
- Required for automated revenue management systems

### Testing Considerations
- Test with valid product IDs and price ranges
- Verify date range validation
- Test error handling for overlapping price periods
- Test currency validation
- Validate price update confirmation

### Dependencies
- Requires existing products with pricing capability
- Should integrate with get product pricing for verification
- May need approval workflows for significant price changes 