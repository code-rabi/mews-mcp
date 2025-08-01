# Get All Spaces Tool

## Description
Returns all spaces of the enterprise, or only those specified

## API Documentation
- **Category**: Services/Spaces
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/spaces/get-all-spaces

## Implementation Details
- **Tool Name**: `getAllSpaces`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/spaces/getAll`

## Parameters
- SpaceIds (optional): Filter by specific space IDs
- ServiceIds (optional): Filter by service IDs
- SpaceCategoryIds (optional): Filter by space category
- UpdatedUtc (optional): Date range filter

## Expected Response
- Array of space objects (rooms, units, etc.)

## Priority
High

## Status
Not Started

## Notes
- Core inventory management for bookable spaces
- Includes rooms, units, tables, etc.
- Essential for availability checking 