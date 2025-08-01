# Get All Device Commands Tool

## Description
Returns all commands given to devices, filtered by parameters

## API Documentation
- **Category**: Device Integration
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/devices/get-all-device-commands

## Implementation Details
- **Tool Name**: `getAllDeviceCommands`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/devices/getAllCommands`

## Parameters
- DeviceCommandIds (optional): Filter by specific command IDs
- DeviceIds (optional): Filter by device IDs
- CreatedUtc (optional): Date range filter
- States (optional): Filter by command states

## Expected Response
- Array of device command objects

## Priority
Low

## Status
Not Started

## Notes
- Used for tracking device interactions
- Monitor command execution status
- Debug device integration issues 