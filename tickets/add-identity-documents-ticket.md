# Add Identity Documents Tool

## Description
Implement a tool to add new identity documents to the system using the Mews Connector API.

## API Reference
- **Endpoint:** `POST /api/connector/v1/customers/addIdentityDocuments`
- **Documentation:** [Identity Documents API](https://mews-systems.gitbook.io/connector-api/operations/customers#add-identity-documents)

## Tool Specification

### Name
`mcp_mews-mcp_addIdentityDocuments`

### Description
Adds new identity documents to the system

### Parameters
- `IdentityDocuments` (array of object, required): Array of identity document objects to create
  - `CustomerId` (string, required): Customer ID to associate document with
  - `Type` (string, required): Document type (passport, drivers license, etc.)
  - `Number` (string, required): Document number
  - `IssuingCountryCode` (string, optional): ISO country code of issuing country
  - `IssuingDate` (string, optional): Document issue date (ISO 8601)
  - `ExpirationDate` (string, optional): Document expiration date (ISO 8601)
  - `IssuingPlace` (string, optional): Place where document was issued

### Implementation Requirements
1. Create `src/tools/customers/addIdentityDocuments.ts`
2. Add proper TypeScript interfaces for identity document creation
3. Include validation for document types and formats
4. Validate country codes and date formats
5. Add comprehensive error handling for invalid data
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for compliance and guest verification
- Enables automated document capture during check-in
- Required for regulatory compliance in many jurisdictions
- Supports identity verification workflows
- Critical for age-restricted services and facilities

### Testing Considerations
- Test with various document types
- Verify date format validation
- Test error handling for invalid customer IDs
- Validate country code verification
- Test bulk document addition

### Dependencies
- Requires existing customer records
- Should integrate with get all identity documents functionality 