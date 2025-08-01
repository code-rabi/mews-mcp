# Get All Tax Environments Tool

## Description
Returns all tax environments supported by the API

## API Documentation
- **Category**: Configuration
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/configuration/get-all-tax-environments

## Implementation Details
- **Tool Name**: `getAllTaxEnvironments`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/taxEnvironments/getAll`

## Parameters
- None required

## Expected Response
- Array of tax environment objects

## Priority
Medium

## Status
Not Started

## Notes
- Critical for tax calculation compliance
- Different environments have different rules
- Should be cached for performance 