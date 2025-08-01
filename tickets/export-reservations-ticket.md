# Export Reservations Tool

## Description
Exports reservations in the specified format and period

## API Documentation
- **Category**: Export
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/exports/export-reservations

## Implementation Details
- **Tool Name**: `exportReservations`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/exports/reservations`

## Parameters
- StartUtc (required): Start date for export
- EndUtc (required): End date for export
- Format (required): Export format (CSV, JSON, etc.)
- ReservationIds (optional): Specific reservations to export

## Expected Response
- Export file or download link

## Priority
Medium

## Status
Not Started

## Notes
- Important for reporting and analytics
- Support various export formats
- Handle large data volumes efficiently 