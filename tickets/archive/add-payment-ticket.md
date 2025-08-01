# Add Payment Tool

## Description
Adds a new payment to a customer's bill

## API Documentation
- **Category**: Finance/Payments
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/payments/add-payment

## Implementation Details
- **Tool Name**: `addPayment`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/payments/add`

## Parameters
- CustomerId (required): Customer ID
- BillId (optional): Specific bill ID
- Amount (required): Payment amount
- Currency (required): Payment currency
- PaymentMethodId (required): Payment method
- Notes (optional): Payment notes

## Expected Response
- Created payment object

## Priority
High

## Status
Not Started

## Notes
- Core payment processing functionality
- Validate payment amounts and methods
- Handle different currencies 