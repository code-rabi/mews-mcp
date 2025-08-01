# Delete Addresses Tool

## Description
Deletes selected addresses

## API Documentation
- **Category**: Accounts/Addresses
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/addresses/delete-addresses

## Implementation Details
- **Tool Name**: `deleteAddresses`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/addresses/delete`

## Parameters
- AddressIds (required): Array of address IDs to delete

## Expected Response
- Deletion confirmation

## Priority
Low

## Status
Not Started

## Notes
- Should validate address exists before deletion
- Consider cascade effects on linked accounts
- Implement soft delete if needed 