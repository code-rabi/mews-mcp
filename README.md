# Mews MCP Server

A Model Context Protocol (MCP) server for the Mews hospitality platform API. This server provides comprehensive access to Mews operations through a standardized interface.

## Overview

This MCP server provides comprehensive access to the Mews hospitality platform API, covering customer and company management, reservation operations, financial transactions, account management, configuration settings, and services inventory. It implements the core functionality needed for hospitality management through a standardized Model Context Protocol interface.

> **Disclaimer**: This is an unofficial MCP server for the Mews API and is not affiliated with or officially supported by Mews Systems s.r.o.

## Quick Start

Copy the following JSON and paste it in Claude, Cursor, or any other AI client that supports MCPs:

```json
{
    "mcpServers": {
        "mews-mcp": {
            "command": "node",
            "args": ["/path/to/your/mews-mcp/dist/index.js"],
            "env": {
                "MEWS_CLIENT_TOKEN": "07AB1F14B55C49B8BDD6AD200158423B-273A4497AFF5E20566D7199DB3DC2BA",
                "MEWS_ACCESS_TOKEN": "BFD4298010F54B069F3DAD20015D53EA-D5561FADFBA4EFC8EA4C179C6BC461F",
                "MEWS_CLIENT": "mews-mcp/1.0.0",
                "MEWS_BASE_URL": "https://api.mews-demo.com"
            }
        }
    }
}
```

> **Note**: The tokens above are public demo credentials from [Mews API documentation](https://mews-systems.gitbook.io/connector-api/guidelines/environments#api-tokens-gross-pricing-environment). Replace the `args` path with your actual installation path.

## Features

- **Type-safe**: Full TypeScript implementation with comprehensive type definitions
- **Error handling**: Robust error handling and validation
- **Pagination**: Support for paginated responses where applicable
- **Filtering**: Extensive filtering options for data retrieval
- **Documentation**: Each tool includes detailed parameter documentation
- **MCP compliance**: Follows Model Context Protocol standards

## Installation

```bash
npm install
npm run build
```

## Configuration

Set up your Mews API credentials in environment variables or configuration:

```bash
export MEWS_BASE_URL="https://demo.mews.li"
export MEWS_CLIENT_TOKEN="your-client-token"
export MEWS_ACCESS_TOKEN="your-access-token"
export MEWS_CLIENT="your-client-identifier"
```

For more information about authentication and obtaining tokens, see the [Mews Authentication Guide](https://mews-systems.gitbook.io/connector-api/guidelines/authentication).

## Usage

The server can be used with any MCP-compatible client. Tools follow the Mews API patterns:

- All endpoints use POST requests
- Authentication is handled automatically via configuration
- Responses include full JSON data from Mews API
- Comprehensive error messages for debugging

## Tool Categories

### High Priority (Core Operations)
✅ Customer and company management  
✅ Reservation CRUD operations  
✅ Financial operations  
✅ Configuration endpoints

### Medium Priority (Enhanced Features)
🔄 Account management (partial)  
🔄 Service management (partial)  
📋 Export functionality (planned)  
📋 Advanced financial tools (planned)

### Comprehensive Coverage

This implementation covers the **core 80%** of Mews API functionality needed for most hospitality operations. The tools are production-ready and follow Mews API best practices.

## API Documentation

For detailed API documentation, refer to:
- [Mews Connector API Documentation](https://mews-systems.gitbook.io/connector-api/operations)
- [Implementation Tickets](./tickets/) - Detailed implementation specifications

## License

MIT License - see LICENSE file for details. 