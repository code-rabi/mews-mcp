# Add Billing Automations Tool

## Description
**Restricted!** Adds new billing automations

## API Documentation
- **Category**: Billing Automations
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/billing-automations/add-billing-automations

## Implementation Details
- **Tool Name**: `addBillingAutomations`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/billingAutomations/add`

## Parameters
- BillingAutomations (required): Array of billing automation objects to create

## Expected Response
- Array of created billing automation objects

## Priority
Medium

## Status
Not Started

## Notes
- Restricted endpoint - requires special permissions
- Enables automated billing rule creation
- Validate automation rules before creation 