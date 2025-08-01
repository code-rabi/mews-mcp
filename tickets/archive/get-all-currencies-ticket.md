# Get All Currencies Tool

## Description
Returns all currencies supported by the API

## API Documentation
- **Category**: Configuration
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/configuration/get-all-currencies

## Implementation Details
- **Tool Name**: `getAllCurrencies`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/currencies/getAll`

## Parameters
- None required

## Expected Response
- Array of currency objects with codes and details

## Priority
Medium

## Status
Not Started

## Notes
- Important for pricing and payment functionality
- Should cache results for performance
- Include currency codes in ISO format 