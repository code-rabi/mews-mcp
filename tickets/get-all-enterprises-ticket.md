# Get All Enterprises Tool

## Description
**Restricted!** Returns all enterprises within scope of the Access Token

## API Documentation
- **Category**: Enterprise
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/enterprises/get-all-enterprises

## Implementation Details
- **Tool Name**: `getAllEnterprises`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/enterprises/getAll`

## Parameters
- EnterpriseIds (optional): Filter by specific enterprise IDs
- ChainIds (optional): Filter by chain IDs

## Expected Response
- Array of enterprise objects

## Priority
Medium

## Status
Not Started

## Notes
- Restricted endpoint - requires special permissions
- Used for multi-enterprise management
- Essential for chain operations 