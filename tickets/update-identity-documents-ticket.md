# Update Identity Documents Tool

## Description
Implement a tool to update existing identity documents in the system using the Mews Connector API.

## API Reference
- **Endpoint:** `POST /api/connector/v1/customers/updateIdentityDocuments`
- **Documentation:** [Identity Documents API](https://mews-systems.gitbook.io/connector-api/operations/customers#update-identity-documents)

## Tool Specification

### Name
`mcp_mews-mcp_updateIdentityDocuments`

### Description
Updates specified identity documents with new information

### Parameters
- `IdentityDocumentUpdates` (array of object, required): Array of document update objects
  - `IdentityDocumentId` (string, required): Unique identifier of document to update
  - `Type` (string, optional): Document type
  - `Number` (string, optional): Document number
  - `IssuingCountryCode` (string, optional): ISO country code of issuing country
  - `IssuingDate` (string, optional): Document issue date (ISO 8601)
  - `ExpirationDate` (string, optional): Document expiration date (ISO 8601)
  - `IssuingPlace` (string, optional): Place where document was issued

### Implementation Requirements
1. Create `src/tools/customers/updateIdentityDocuments.ts`
2. Add proper TypeScript interfaces for identity document updates
3. Include validation for document IDs and update fields
4. Validate country codes and date formats
5. Add comprehensive error handling
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for maintaining accurate guest records
- Enables correction of document information after initial entry
- Required for renewal of expired documents
- Supports compliance with changing regulatory requirements
- Critical for maintaining data accuracy in guest profiles

### Testing Considerations
- Test with valid document IDs
- Verify partial update functionality (only changed fields)
- Test error handling for invalid document IDs
- Validate date format updates
- Test bulk document updates

### Dependencies
- Requires existing identity documents to update
- Should work with get all identity documents for verification 