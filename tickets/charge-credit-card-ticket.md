# Charge Credit Card Tool

## Description
Charges a credit card and adds the resulting payment to a customer bill

## API Documentation
- **Category**: Finance/Payments
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/payments/charge-credit-card

## Implementation Details
- **Tool Name**: `chargeCreditCard`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/payments/chargeCreditCard`

## Parameters
- CustomerId (required): Customer ID
- Amount (required): Charge amount
- Currency (required): Charge currency
- CreditCardData (required): Credit card information
- BillId (optional): Specific bill ID

## Expected Response
- Payment transaction result

## Priority
High

## Status
Not Started

## Notes
- Direct credit card processing
- Handle PCI compliance requirements
- Support authorization and capture 