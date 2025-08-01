# Update Billing Automations Tool

## Description
**Restricted!** Updates selected billing automations

## API Documentation
- **Category**: Billing Automations
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/billing-automations/update-billing-automations

## Implementation Details
- **Tool Name**: `updateBillingAutomations`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/billingAutomations/update`

## Parameters
- BillingAutomationUpdates (required): Array of automation update objects

## Expected Response
- Array of updated billing automation objects

## Priority
Medium

## Status
Not Started

## Notes
- Restricted endpoint - requires special permissions
- Allow modification of existing billing rules
- Validate update data before applying 