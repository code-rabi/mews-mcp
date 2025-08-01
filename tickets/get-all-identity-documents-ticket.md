# Get All Identity Documents Tool

## Description
Implement a tool to retrieve all identity documents for specified customers using the Mews Connector API.

## API Reference
- **Endpoint:** `GET /api/connector/v1/customers/getAllIdentityDocuments`
- **Documentation:** [Identity Documents API](https://mews-systems.gitbook.io/connector-api/operations/customers#get-all-identity-documents)

## Tool Specification

### Name
`mcp_mews-mcp_getAllIdentityDocuments`

### Description
Returns all identity documents for the specified customers

### Parameters
- `CustomerIds` (array of string, optional, max 1000): Unique identifiers of customers
- `IdentityDocumentIds` (array of string, optional, max 1000): Specific identity document IDs
- `UpdatedUtc` (object, optional): Date range filter for document updates
- `Limitation` (object, optional): Pagination settings

### Implementation Requirements
1. Create `src/tools/customers/getAllIdentityDocuments.ts`
2. Add proper TypeScript interfaces for identity document objects
3. Include validation for customer ID format
4. Handle pagination with cursor-based navigation
5. Add comprehensive error handling
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for compliance and guest verification
- Required for regulatory compliance (government ID verification)
- Critical for check-in processes and age verification
- Supports anti-fraud measures and guest identification

### Testing Considerations
- Test with valid customer IDs
- Verify pagination functionality
- Test error handling for invalid customer IDs
- Validate response format and data types

### Dependencies
- Extends existing customer management functionality
- Requires customer data to be available for testing 