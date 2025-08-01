# Get All Account Notes Tool

## Description
Returns all the account notes associated with the specified accounts within the chain

## API Documentation
- **Category**: Accounts/Account Notes
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/account-notes/get-all-account-notes

## Implementation Details
- **Tool Name**: `getAllAccountNotes`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/accountNotes/getAll`

## Parameters
- AccountIds (optional): Filter by account IDs
- CreatedUtc (optional): Date range filter
- UpdatedUtc (optional): Date range filter
- Limitation (optional): Pagination settings

## Expected Response
- Array of account note objects
- Pagination cursor if applicable

## Priority
Medium

## Status
Not Started

## Notes
- Important for customer relationship management
- Support filtering and pagination
- Include note metadata (creation date, author, etc.) 