# Delete Customers Tool

## Description
Deletes specified customers

## API Documentation
- **Category**: Customers
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/customers/delete-customers

## Implementation Details
- **Tool Name**: `deleteCustomers`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/customers/delete`

## Parameters
- CustomerIds (required): Array of customer IDs to delete

## Expected Response
- Deletion confirmation

## Priority
Low

## Status
Not Started

## Notes
- Should validate customer exists before deletion
- Consider GDPR compliance for data deletion
- May need to handle cascade effects 