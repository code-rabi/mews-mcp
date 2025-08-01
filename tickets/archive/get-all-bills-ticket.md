# Get All Bills Tool

## Description
Returns all bills by filter parameters, used for retrieving billing information

## API Documentation
- **Category**: Finance/Bills
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/bills/get-all-bills

## Implementation Details
- **Tool Name**: `getAllBills`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/bills/getAll`

## Parameters
- BillIds (optional): Filter by specific bill IDs
- CustomerIds (optional): Filter by customer IDs
- CreatedUtc (optional): Date range filter
- UpdatedUtc (optional): Date range filter
- States (optional): Filter by bill states
- Limitation (optional): Pagination settings

## Expected Response
- Array of bill objects
- Pagination cursor if applicable

## Priority
High

## Status
Not Started

## Notes
- Essential for financial operations and reporting
- Include detailed billing items and totals
- Support various bill states and types 