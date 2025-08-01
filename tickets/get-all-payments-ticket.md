# Get All Payments Tool

## Description
Returns all payments based on filter parameters

## API Documentation
- **Category**: Finance/Payments
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/payments/get-all-payments

## Implementation Details
- **Tool Name**: `getAllPayments`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/payments/getAll`

## Parameters
- PaymentIds (optional): Filter by specific payment IDs
- CustomerIds (optional): Filter by customer IDs
- BillIds (optional): Filter by bill IDs
- CreatedUtc (optional): Date range filter
- States (optional): Filter by payment states
- Limitation (optional): Pagination settings

## Expected Response
- Array of payment objects
- Pagination cursor if applicable

## Priority
High

## Status
Not Started

## Notes
- Critical for financial reconciliation
- Include payment methods and statuses
- Support different payment types 