# Export Accounting Items Tool

## Description
Exports accounting items (charges, payments, etc.) in the specified format and period

## API Documentation
- **Category**: Export
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/exports/export-accounting-items

## Implementation Details
- **Tool Name**: `exportAccountingItems`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/exports/accountingItems`

## Parameters
- StartUtc (required): Start date for export
- EndUtc (required): End date for export
- Format (required): Export format (CSV, JSON, etc.)
- AccountingItemIds (optional): Specific items to export

## Expected Response
- Export file or download link

## Priority
High

## Status
Not Started

## Notes
- Critical for financial reporting
- Support various accounting formats
- Essential for compliance and auditing 