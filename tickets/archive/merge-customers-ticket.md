# Merge Customers Tool

## Description
Merges two customers together

## API Documentation
- **Category**: Customers
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/customers/merge-customers

## Implementation Details
- **Tool Name**: `mergeCustomers`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/customers/merge`

## Parameters
- SourceCustomerId (required): ID of customer to merge from
- TargetCustomerId (required): ID of customer to merge into

## Expected Response
- Merged customer object

## Priority
Medium

## Status
Not Started

## Notes
- Important for duplicate customer cleanup
- Should preserve all historical data
- Validate customers exist before merging 