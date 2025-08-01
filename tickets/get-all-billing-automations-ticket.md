# Get All Billing Automations Tool

## Description
**Restricted!** Returns all billing automations of the enterprise

## API Documentation
- **Category**: Billing Automations
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/billing-automations/get-all-billing-automations

## Implementation Details
- **Tool Name**: `getAllBillingAutomations`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/billingAutomations/getAll`

## Parameters
- BillingAutomationIds (optional): Filter by specific automation IDs
- ActivityStates (optional): Filter by activity state
- Limitation (optional): Pagination settings

## Expected Response
- Array of billing automation objects
- Pagination cursor if applicable

## Priority
Medium

## Status
Not Started

## Notes
- Restricted endpoint - requires special permissions
- Important for automated billing processes
- Support filtering and pagination 