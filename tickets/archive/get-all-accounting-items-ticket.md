# Get All Accounting Items Tool

## Description
Returns all accounting items (charges, payments, etc.) based on filter parameters

## API Documentation
- **Category**: Finance/Accounting Items
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/accounting-items/get-all-accounting-items

## Implementation Details
- **Tool Name**: `getAllAccountingItems`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/accountingItems/getAll`

## Parameters
- AccountingItemIds (optional): Filter by specific item IDs
- CustomerIds (optional): Filter by customer IDs
- BillIds (optional): Filter by bill IDs
- AccountingCategoryIds (optional): Filter by category
- ConsumedUtc (optional): Date range filter
- CreatedUtc (optional): Date range filter
- States (optional): Filter by item states
- Limitation (optional): Pagination settings

## Expected Response
- Array of accounting item objects
- Pagination cursor if applicable

## Priority
High

## Status
Not Started

## Notes
- Core financial data for accounting and reporting
- Include charges, payments, adjustments, taxes
- Essential for revenue tracking 