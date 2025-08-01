# Upload and Link File to Account Tool

## Description
Uploads a file and links it to the specified account

## API Documentation
- **Category**: Accounts
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/accounts/upload-and-link-file-to-account

## Implementation Details
- **Tool Name**: `uploadAndLinkFileToAccount`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/accounts/addFile`

## Parameters
- AccountId (required): Account ID to link file to
- File (required): File data to upload
- Description (optional): File description

## Expected Response
- File upload confirmation
- File ID and metadata

## Priority
Medium

## Status
Not Started

## Notes
- Need to handle file upload and validation
- Support various file types
- Consider file size limitations 