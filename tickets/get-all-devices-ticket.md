# Get All Devices Tool

## Description
Returns all devices in the enterprise

## API Documentation
- **Category**: Device Integration
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/devices/get-all-devices

## Implementation Details
- **Tool Name**: `getAllDevices`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/devices/getAll`

## Parameters
- DeviceIds (optional): Filter by specific device IDs
- DeviceTypes (optional): Filter by device types

## Expected Response
- Array of device objects

## Priority
Medium

## Status
Not Started

## Notes
- Important for hardware integrations
- Include key cutters, payment terminals, etc.
- Support different device types and states 