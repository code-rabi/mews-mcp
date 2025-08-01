# Delete Account Notes Tool

## Description
Deletes selected account notes

## API Documentation
- **Category**: Accounts/Account Notes
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/account-notes/delete-account-notes

## Implementation Details
- **Tool Name**: `deleteAccountNotes`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/accountNotes/delete`

## Parameters
- AccountNoteIds (required): Array of note IDs to delete

## Expected Response
- Deletion confirmation

## Priority
Low

## Status
Not Started

## Notes
- Should validate note exists before deletion
- Consider soft delete for audit trail
- Implement proper permissions checking 