# Script Tools

EasyApi provides several built-in tools for use in Groovy configuration rules.

## Context Tools

| Tool | Alias | Description |
|------|-------|-------------|
| [it](/settings/tools/it) | — | Current PSI element context (class/method/field/param) |
| [api](/settings/tools/api) | — | API endpoint context (export rules only) |
| [fieldContext](/settings/tools/fieldContext) | — | Field path context (field rules only) |

## Utility Tools

| Tool | Alias | Description |
|------|-------|-------------|
| [tool](/settings/tools/tool) | `T` | General utilities (string, JSON, time, etc.) |
| [regex](/settings/tools/regex) | `RE` | Regular expression utilities |
| [logger](/settings/tools/logger) | `LOG` | Logging |
| [helper](/settings/tools/helper) | `H` | Class lookup and link resolution |
| [config](/settings/tools/config) | `C` | Read configuration values |
| [runtime](/settings/tools/runtime) | `R` | Project and module metadata |

## Storage Tools

| Tool | Alias | Description |
|------|-------|-------------|
| [localStorage](/settings/tools/localStorage) | — | Persistent key-value storage |
| [session](/settings/tools/session) | `S` | Session-scoped key-value storage |

## Network Tools

| Tool | Alias | Description |
|------|-------|-------------|
| [httpClient](/settings/tools/httpClient) | — | HTTP client for making requests |
| [httpClient.request](/settings/tools/httpClient/request) | — | Request object |
| [httpClient.response](/settings/tools/httpClient/response) | — | Response object |

## File Tools

| Tool | Alias | Description |
|------|-------|-------------|
| [files](/settings/tools/files) | `F` | File operations |
