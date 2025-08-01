# Delete Identity Documents Tool

## Description
Implement a tool to delete specified identity documents from the system using the Mews Connector API.

## API Reference
- **Endpoint:** `POST /api/connector/v1/customers/deleteIdentityDocuments`
- **Documentation:** [Identity Documents API](https://mews-systems.gitbook.io/connector-api/operations/customers#delete-identity-documents)

## Tool Specification

### Name
`mcp_mews-mcp_deleteIdentityDocuments`

### Description
Deletes specified identity documents from the system

### Parameters
- `IdentityDocumentIds` (array of string, required, max 1000): Array of identity document IDs to delete

### Implementation Requirements
1. Create `src/tools/customers/deleteIdentityDocuments.ts`
2. Add proper TypeScript interfaces for delete operations
3. Include validation for document IDs
4. Add confirmation mechanisms for bulk deletions
5. Add comprehensive error handling
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for data privacy and compliance
- Enables removal of outdated or incorrect documents
- Required for GDPR compliance (right to erasure)
- Supports data cleanup and privacy management
- Critical for maintaining accurate guest records

### Testing Considerations
- Test with valid document IDs
- Verify bulk deletion functionality
- Test error handling for invalid document IDs
- Test permission validation
- Validate deletion confirmation

### Dependencies
- Requires existing identity documents to delete
- Should verify document existence before deletion
- Consider integration with audit logging 