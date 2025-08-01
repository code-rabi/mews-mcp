# Delete Billing Automations Tool

## Description
**Restricted!** Deletes selected billing automations

## API Documentation
- **Category**: Billing Automations
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/billing-automations/delete-billing-automations

## Implementation Details
- **Tool Name**: `deleteBillingAutomations`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/billingAutomations/delete`

## Parameters
- BillingAutomationIds (required): Array of automation IDs to delete

## Expected Response
- Deletion confirmation

## Priority
Low

## Status
Not Started

## Notes
- Restricted endpoint - requires special permissions
- Should validate automation exists before deletion
- Consider impact on existing billing processes 