# Update Accounts Tool

## Description
Updates one or more existing accounts, i.e. customer, company

## API Documentation
- **Category**: Accounts
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/accounts/update-accounts

## Implementation Details
- **Tool Name**: `updateAccounts`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/accounts/update`

## Parameters
- AccountUpdates (required): Array of account update objects with ID and updated fields

## Expected Response
- Array of updated account objects

## Priority
High

## Status
Not Started

## Notes
- Core functionality for account management
- Should support both customer and company accounts
- Need to validate account data before updating 