# Add Accounting Items Tool

## Description
Adds new accounting items (charges, payments, etc.) to customer bills

## API Documentation
- **Category**: Finance/Accounting Items
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/accounting-items/add-accounting-items

## Implementation Details
- **Tool Name**: `addAccountingItems`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/accountingItems/add`

## Parameters
- AccountingItems (required): Array of accounting item objects to create

## Expected Response
- Array of created accounting item objects

## Priority
High

## Status
Not Started

## Notes
- Essential for posting charges and payments
- Validate accounting categories and amounts
- Support various item types (charges, payments, taxes) 