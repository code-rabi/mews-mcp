# Get Language Texts Tool

## Description
Returns translations of texts in the specified languages

## API Documentation
- **Category**: Configuration
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/configuration/get-language-texts

## Implementation Details
- **Tool Name**: `getLanguageTexts`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/languages/getTexts`

## Parameters
- LanguageCodes (required): Array of language codes to get translations for
- Scope (optional): Scope of texts to retrieve

## Expected Response
- Object with language codes as keys and translated texts as values

## Priority
Low

## Status
Not Started

## Notes
- Important for multi-language support
- Cache translations for performance
- Support different text scopes 