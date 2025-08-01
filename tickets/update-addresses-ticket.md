# Update Addresses Tool

## Description
Updates an existing address in the system assigned to a specified account

## API Documentation
- **Category**: Accounts/Addresses
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/addresses/update-addresses

## Implementation Details
- **Tool Name**: `updateAddresses`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/addresses/update`

## Parameters
- AddressUpdates (required): Array of address update objects

## Expected Response
- Array of updated address objects

## Priority
Medium

## Status
Not Started

## Notes
- Extends existing address functionality
- Should validate address format and country codes
- Need to handle partial updates 