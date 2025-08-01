# Update Customers Tool

## Description
Updates personal information of an existing customer

## API Documentation
- **Category**: Customers
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/customers/update-customers

## Implementation Details
- **Tool Name**: `updateCustomers`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/customers/update`

## Parameters
- CustomerUpdates (required): Array of customer update objects

## Expected Response
- Array of updated customer objects

## Priority
High

## Status
Not Started

## Notes
- Core functionality for customer management
- Validate customer data before updating
- Support partial updates 