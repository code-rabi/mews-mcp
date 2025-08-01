# Price Reservations Tool

## Description
Implement a tool to get pricing for reservations with specified parameters using the Mews Connector API.

## API Reference
- **Endpoint:** `POST /api/connector/v1/reservations/price`
- **Documentation:** [Reservations API](https://mews-systems.gitbook.io/connector-api/operations/reservations#price-reservations)

## Tool Specification

### Name
`mcp_mews-mcp_priceReservations`

### Description
Returns prices of reservations with the specified parameters

### Parameters
- `Reservations` (array of object, required): Array of reservation objects to price
  - `ServiceId` (string, required): Service ID for the reservation
  - `RatePlanId` (string, required): Rate plan ID
  - `StartUtc` (string, required): Check-in date/time (ISO 8601)
  - `EndUtc` (string, required): Check-out date/time (ISO 8601)
  - `AdultCount` (number, optional): Number of adults
  - `ChildCount` (number, optional): Number of children
  - `ResourceCategoryId` (string, optional): Preferred resource category
- `Currency` (string, optional): Currency code for pricing

### Implementation Requirements
1. Create `src/tools/reservations/priceReservations.ts`
2. Add proper TypeScript interfaces for pricing requests and responses
3. Include validation for service IDs, dates, and guest counts
4. Handle currency conversion and rate calculations
5. Add comprehensive error handling for pricing failures
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Critical for booking engines and revenue optimization
- Enables real-time pricing for potential reservations
- Supports dynamic pricing and availability checking
- Required for booking confirmation workflows
- Critical for competitive pricing and revenue management

### Testing Considerations
- Test with valid service and rate plan combinations
- Verify currency conversion functionality
- Test error handling for unavailable dates
- Test pricing with different guest counts
- Validate pricing accuracy and calculations

### Dependencies
- Requires service and rate plan configuration
- Should integrate with availability checking
- May need currency and taxation management 