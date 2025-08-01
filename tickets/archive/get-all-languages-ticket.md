# Get All Languages Tool

## Description
Returns all languages supported by the API

## API Documentation
- **Category**: Configuration
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/configuration/get-all-languages

## Implementation Details
- **Tool Name**: `getAllLanguages`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/languages/getAll`

## Parameters
- None required

## Expected Response
- Array of language objects with codes and names

## Priority
Medium

## Status
Not Started

## Notes
- Used for localization and customer preferences
- Should cache results for performance
- Include language codes in ISO format 