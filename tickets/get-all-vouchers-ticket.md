# Get All Vouchers Tool

## Description
Returns all vouchers (discount codes, gift certificates) based on filter parameters

## API Documentation
- **Category**: Marketing/Vouchers
- **Documentation URL**: https://mews-systems.gitbook.io/connector-api/operations/vouchers/get-all-vouchers

## Implementation Details
- **Tool Name**: `getAllVouchers`
- **HTTP Method**: POST
- **Endpoint**: `/api/connector/v1/vouchers/getAll`

## Parameters
- VoucherIds (optional): Filter by specific voucher IDs
- VoucherCodes (optional): Filter by voucher codes
- States (optional): Filter by voucher states
- CreatedUtc (optional): Date range filter

## Expected Response
- Array of voucher objects

## Priority
Medium

## Status
Not Started

## Notes
- Important for marketing and promotions
- Include discount codes and gift certificates
- Track usage and validity periods 