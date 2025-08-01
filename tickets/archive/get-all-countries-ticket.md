# Get All Countries Tool

## Description
Returns all countries supported by the API

## API Documentation
- **Category**: Configuration
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/configuration/get-all-countries

## Implementation Details
- **Tool Name**: `getAllCountries`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/countries/getAll`

## Parameters
- None required

## Expected Response
- Array of country objects with codes and names

## Priority
Medium

## Status
Not Started

## Notes
- Used for address validation and forms
- Should cache results as data is relatively static
- Include country codes in ISO format 