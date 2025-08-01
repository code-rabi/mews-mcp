# Get All Taxations Tool

## Description
Returns all taxations supported in tax environments

## API Documentation
- **Category**: Configuration
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/configuration/get-all-taxations

## Implementation Details
- **Tool Name**: `getAllTaxations`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/taxations/getAll`

## Parameters
- TaxEnvironmentIds (optional): Filter by tax environment

## Expected Response
- Array of taxation objects

## Priority
Medium

## Status
Not Started

## Notes
- Used with tax environments for calculations
- Different taxation rules per environment
- Important for compliance 