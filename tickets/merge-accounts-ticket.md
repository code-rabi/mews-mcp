# Merge Accounts Tool

## Description
Merges two or more accounts of the same account type together

## API Documentation
- **Category**: Accounts
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/accounts/merge-accounts

## Implementation Details
- **Tool Name**: `mergeAccounts`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/accounts/merge`

## Parameters
- AccountIds (required): Array of account IDs to merge
- TargetAccountId (required): ID of the account to merge others into

## Expected Response
- Success confirmation
- Details of merged account

## Priority
Medium

## Status
Not Started

## Notes
- Important for customer data management
- Need to handle different account types
- Should validate that accounts are of the same type before merging 