# Get All Space Categories Tool

## Description
Returns all space categories of a service

## API Documentation
- **Category**: Services/Spaces
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/space-categories/get-all-space-categories

## Implementation Details
- **Tool Name**: `getAllSpaceCategories`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/spaceCategories/getAll`

## Parameters
- ServiceIds (required): Filter by service IDs
- SpaceCategoryIds (optional): Filter by specific category IDs
- UpdatedUtc (optional): Date range filter

## Expected Response
- Array of space category objects

## Priority
High

## Status
Not Started

## Notes
- Space categories group similar spaces together
- Essential for availability and pricing
- Used in rate plans and booking rules 