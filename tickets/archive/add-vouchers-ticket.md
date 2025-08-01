# Add Vouchers Tool

## Description
Adds new vouchers (discount codes, gift certificates) to the system

## API Documentation
- **Category**: Marketing/Vouchers
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/vouchers/add-vouchers

## Implementation Details
- **Tool Name**: `addVouchers`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/vouchers/add`

## Parameters
- Vouchers (required): Array of voucher objects to create

## Expected Response
- Array of created voucher objects

## Priority
Medium

## Status
Not Started

## Notes
- Enable creation of discount codes and gift certificates
- Validate voucher rules and constraints
- Support various voucher types and values 