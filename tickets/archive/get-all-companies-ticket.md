# Get All Companies Tool

## Description
Returns all companies, optionally filtered by criteria

## API Documentation
- **Category**: Customers/Companies
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/companies/get-all-companies

## Implementation Details
- **Tool Name**: `getAllCompanies`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/companies/getAll`

## Parameters
- CompanyIds (optional): Filter by specific company IDs
- Names (optional): Filter by company names
- CreatedUtc (optional): Date range filter
- UpdatedUtc (optional): Date range filter
- Limitation (optional): Pagination settings

## Expected Response
- Array of company objects
- Pagination cursor if applicable

## Priority
High

## Status
Not Started

## Notes
- Essential for B2B customer management
- Support filtering and pagination
- Include company contact information 