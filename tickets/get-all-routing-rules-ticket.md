# Get All Routing Rules Tool

## Description
Returns all routing rules for automated business logic and workflows

## API Documentation
- **Category**: Routing Rules
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/routing-rules/get-all-routing-rules

## Implementation Details
- **Tool Name**: `getAllRoutingRules`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/routingRules/getAll`

## Parameters
- RoutingRuleIds (optional): Filter by specific rule IDs
- ServiceIds (optional): Filter by service IDs
- States (optional): Filter by rule states

## Expected Response
- Array of routing rule objects

## Priority
Low

## Status
Not Started

## Notes
- Used for automated business logic
- Define workflows and decision trees
- Support conditional routing and actions 