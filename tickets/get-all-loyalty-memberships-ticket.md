# Get All Loyalty Memberships Tool

## Description
Returns all loyalty memberships based on filter parameters

## API Documentation
- **Category**: Loyalty
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/loyalty/get-all-loyalty-memberships

## Implementation Details
- **Tool Name**: `getAllLoyaltyMemberships`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/loyaltyMemberships/getAll`

## Parameters
- LoyaltyMembershipIds (optional): Filter by specific membership IDs
- CustomerIds (optional): Filter by customer IDs
- LoyaltyProgramIds (optional): Filter by program IDs
- States (optional): Filter by membership states

## Expected Response
- Array of loyalty membership objects

## Priority
Medium

## Status
Not Started

## Notes
- Important for customer retention programs
- Track membership tiers and benefits
- Support various loyalty programs 