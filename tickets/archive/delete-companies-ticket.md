# Delete Companies Tool

## Description
Deletes specified companies

## API Documentation
- **Category**: Customers/Companies
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/companies/delete-companies

## Implementation Details
- **Tool Name**: `deleteCompanies`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/companies/delete`

## Parameters
- CompanyIds (required): Array of company IDs to delete

## Expected Response
- Deletion confirmation

## Priority
Low

## Status
Not Started

## Notes
- Should validate company exists before deletion
- Consider impact on associated reservations
- May need to handle cascade effects 