# IDE Settings

EasyApi settings can be accessed via **Preferences(Settings)** > **Other Settings** > **EasyApi**.

The settings dialog contains the following tabs:

## General

General plugin settings:

| Setting | Description |
|---------|-------------|
| **Enable built-in configuration** | Load built-in extension configs for common frameworks |
| **Build example in Postman export** | Generate example responses in Postman collections |
| **Auto-merge scripts in Postman export** | Automatically merge pre-request and test scripts |

## Postman

Postman-specific settings:

| Setting | Description |
|---------|-------------|
| **Postman Token** | Your Postman API token for direct upload |
| **Export Mode** | How to export (update existing / create new) |
| **Collection ID** | Target collection ID for export |
| **Workspace ID** | Target workspace ID |

## HTTP

Configure the built-in HTTP client:

| Setting | Description |
|---------|-------------|
| **HTTP Client Type** | Select HTTP client implementation |
| **Connect Timeout** | Connection timeout in milliseconds |
| **Read Timeout** | Read timeout in milliseconds |
| **Proxy** | HTTP proxy settings |

## Intelligent

Intelligent scanning and detection settings:

| Setting | Description |
|---------|-------------|
| **Auto Scan Enabled** | Automatically scan for API endpoints |
| **Concurrent Scan Enabled** | Use concurrent scanning for better performance |

## Extensions

Manage extension configurations that provide framework-specific rules. Extensions can be enabled or disabled individually.

Available extensions include:
- Spring Web support
- Spring Boot support
- Spring WebFlux support
- Feign support
- JAX-RS support
- javax.validation support
- Jakarta validation support
- Jackson support
- Gson support
- Swagger 2 support
- Swagger 3 (OpenAPI) support
- Spring properties support

## Remote

Add remote configuration file URLs. Remote configs are loaded after local configs and can override local settings.

See [Remote Config](/configuration/remote-config) for details.

## Built-in

View the built-in configuration rules that ship with EasyApi.

## Other

Additional settings:

| Setting | Description |
|---------|-------------|
| **Markdown Format** | Output format for Markdown export |
| **Log Level** | Plugin logging verbosity |

## gRPC

Configure gRPC support:

| Setting | Description |
|---------|-------------|
| **Enable gRPC support** | Recognize gRPC service classes |
| **Enable gRPC call** | Allow calling gRPC endpoints from the IDE |
| **Runtime Artifacts** | gRPC runtime JARs for dynamic invocation |
| **Auto Detect** | Automatically detect gRPC artifacts in project |

See [gRPC](/frameworks/grpc) for more details.
