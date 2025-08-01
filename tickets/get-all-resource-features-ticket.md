# Get All Resource Features Tool

## Description
Implement a tool to retrieve all resource features of an enterprise using the Mews Connector API.

## API Reference
- **Endpoint:** `GET /api/connector/v1/enterprises/getAllResourceFeatures`
- **Documentation:** [Resource Features API](https://mews-systems.gitbook.io/connector-api/operations/enterprises#get-all-resource-features)

## Tool Specification

### Name
`mcp_mews-mcp_getAllResourceFeatures`

### Description
Returns all resource features of an enterprise associated with the connector integration

### Parameters
- `ServiceIds` (array of string, optional, max 1000): Filter by service IDs
- `ResourceFeatureIds` (array of string, optional, max 1000): Filter by specific feature IDs
- `UpdatedUtc` (object, optional): Date range filter for feature updates

### Implementation Requirements
1. Create `src/tools/enterprises/getAllResourceFeatures.ts`
2. Add proper TypeScript interfaces for resource feature objects
3. Include validation for service and feature ID formats
4. Handle feature categorization and classification
5. Add comprehensive error handling
6. Update tool registry in `src/tools/index.ts`

### Business Value
- **High Priority** - Essential for detailed resource differentiation
- Enables feature-based resource search and filtering
- Critical for guest preferences and automated matching
- Supports premium pricing for featured resources
- Required for detailed inventory management and guest satisfaction

### Testing Considerations
- Test with valid service IDs
- Verify feature categorization handling
- Test filtering by specific feature IDs
- Test error handling for invalid service IDs
- Validate response format and feature data

### Dependencies
- Requires service configuration
- Should integrate with resource management
- May need feature assignment and availability data 