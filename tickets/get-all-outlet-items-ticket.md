# Get All Outlet Items Tool

## Description
Returns all outlet items (products and services) of the enterprise

## API Documentation
- **Category**: Services/Outlets
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/outlet-items/get-all-outlet-items

## Implementation Details
- **Tool Name**: `getAllOutletItems`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/outletItems/getAll`

## Parameters
- OutletItemIds (optional): Filter by specific item IDs
- OutletIds (optional): Filter by outlet IDs
- ItemTypes (optional): Filter by item types

## Expected Response
- Array of outlet item objects

## Priority
Medium

## Status
Not Started

## Notes
- Important for F&B and retail operations
- Include products, services, and menu items
- Support pricing and availability 