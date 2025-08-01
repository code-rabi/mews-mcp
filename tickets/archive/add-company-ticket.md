# Add Company Tool

## Description
Adds a new company

## API Documentation
- **Category**: Customers/Companies
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/companies/add-company

## Implementation Details
- **Tool Name**: `addCompany`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/companies/add`

## Parameters
- Name (required): Company name
- TaxIdentifier (optional): Tax ID
- Email (optional): Company email
- Phone (optional): Company phone
- WebsiteUrl (optional): Company website
- InvoicingEmail (optional): Billing email
- ContactPersonId (optional): Contact person customer ID

## Expected Response
- Created company object

## Priority
High

## Status
Not Started

## Notes
- Essential for B2B operations
- Validate company data before creation
- Support optional contact person linking 