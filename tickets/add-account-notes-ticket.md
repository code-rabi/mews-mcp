# Add Account Notes Tool

## Description
Adds new account notes to the system and assigns it to specified accounts

## API Documentation
- **Category**: Accounts/Account Notes
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/account-notes/add-account-notes

## Implementation Details
- **Tool Name**: `addAccountNotes`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/accountNotes/add`

## Parameters
- AccountNotes (required): Array of note objects with AccountId and Text

## Expected Response
- Array of created account note objects

## Priority
High

## Status
Not Started

## Notes
- Essential for customer service and CRM
- Should validate account exists
- Consider note character limits 