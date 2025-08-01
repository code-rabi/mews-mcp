# Update Account Notes Tool

## Description
Updates existing account notes

## API Documentation
- **Category**: Accounts/Account Notes
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/account-notes/update-account-notes

## Implementation Details
- **Tool Name**: `updateAccountNotes`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/accountNotes/update`

## Parameters
- AccountNoteUpdates (required): Array of note update objects with ID and updated fields

## Expected Response
- Array of updated account note objects

## Priority
Medium

## Status
Not Started

## Notes
- Support for editing existing notes
- Should track modification history
- Validate note ID exists before updating 