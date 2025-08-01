# Update Billing Automation Assignments Tool

## Description
**Restricted!** Updates assignments for selected billing automations

## API Documentation
- **Category**: Billing Automations
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/billing-automations/update-billing-automation-assignments

## Implementation Details
- **Tool Name**: `updateBillingAutomationAssignments`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/billingAutomations/updateAssignments`

## Parameters
- BillingAutomationAssignmentUpdates (required): Array of assignment update objects

## Expected Response
- Array of updated assignment objects

## Priority
Low

## Status
Not Started

## Notes
- Restricted endpoint - requires special permissions
- Manages which automations apply to which entities
- Validate assignment relationships 