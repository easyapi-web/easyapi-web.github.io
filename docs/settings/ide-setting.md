# IDE Settings

EasyApi settings can be accessed via **Preferences(Settings)** > **Other Settings** > **EasyApi**.

The settings dialog contains the following tabs:

## General

General plugin settings:

| Setting | Description |
|---------|-------------|
| **Enable Feign client support** | Recognize `@FeignClient` interfaces as API controllers |
| **Enable JAX-RS support** | Recognize JAX-RS `@Path` resource classes (default: on) |
| **Enable Spring Actuator support** | Recognize Spring Boot Actuator endpoint classes |
| **Enable automatic API scanning on file changes** | Automatically scan for API endpoints when files change (default: on) |
| **Enable concurrent API scanning (experimental)** | Use concurrent scanning for better performance (default: off) |
| **Log Level** | Plugin logging verbosity: Silent, Error, Warning, Info, Debug, Trace |
| **Output Charset** | Character encoding for output files (e.g., UTF-8, GBK, ISO-8859-1) |
| **Output demo in markdown** | Include example values in Markdown export (default: on) |
| **Markdown Format** | Output format for Markdown export: Simple or Ultimate |

### Cache Management

Manage plugin caches:

| Setting | Description |
|---------|-------------|
| **Project Cache** | Per-project cache (view size, clear) |
| **Global Cache** | Global cache shared across projects (view size, clear) |

### Repositories

Configure artifact repositories for gRPC runtime resolution:

| Column | Description |
|--------|-------------|
| **Type** | Maven Local, Gradle Cache, or Custom |
| **Path** | Repository directory path |
| **Enable** | Enable or disable the repository |

EasyApi searches these repositories for gRPC runtime JARs when the gRPC call feature is enabled.

## Postman

Postman-specific settings:

| Setting | Description |
|---------|-------------|
| **Postman Token** | Your Postman API token for direct upload |
| **Workspace** | Target workspace (click Fetch to load from Postman) |
| **Export Mode** | How to export: Create New (always create new collection) or Update Existing (update by module) |
| **Build example** | Generate example responses in Postman collections (default: on) |
| **Wrap collection** | Wrap the exported collection in an outer folder |
| **Auto merge script** | Automatically merge pre-request and test scripts (default: off) |
| **JSON5 Format Type** | Where to use JSON5 format: None, Request Only, Response Only, Example Only, or All |
| **Collections** | Module-to-collectionId mapping (one per line, format: `module:collectionId`) |

## Hoppscotch (Beta)

Hoppscotch-specific settings (export to Hoppscotch is a beta feature):

| Setting | Default | Description |
|---------|---------|-------------|
| **Hoppscotch Token** | — | Your Hoppscotch access token for direct upload |
| **Server URL** | `https://hoppscotch.io` | Hoppscotch server URL |
| **Backend URL** | — | Hoppscotch backend URL (for self-hosted instances) |

## HTTP

Configure the built-in HTTP client:

| Setting | Description |
|---------|-------------|
| **HTTP Client Type** | Select HTTP client implementation: Apache or Default (IntelliJ built-in) |
| **HTTP Timeout** | Request timeout in milliseconds (default: 5000) |
| **Allow unsafe SSL** | Allow connections to servers with self-signed certificates (default: off) |

## Extensions

Manage extension configurations that provide framework-specific rules. Extensions can be enabled or disabled individually. Select an extension in the list to preview its configuration content.

Available extensions include:

| Extension | Default | Description |
|-----------|---------|-------------|
| `spring` | On | Spring framework support (HttpEntity, RequestEntity, ResponseEntity, DeferredResult) |
| `spring-webflux` | On | Spring WebFlux reactive type support (Mono, Flux, Publisher) |
| `spring-properties` | Off | Spring properties support (import and resolve application.properties/yml) |
| `spring-validations` | On | Spring validation annotations (@NonNull, BindingResult ignore) |
| `spring-configuration` | On | Spring ConfigurationProperties support |
| `jackson` | On | Jackson annotations support (basic + advanced) |
| `gson` | On | Gson annotations support (@SerializedName, @Expose) |
| `fastjson` | Off | Fastjson annotations support (@JSONField) |
| `swagger` | On | Swagger 2.x annotation support |
| `swagger3` | On | OpenAPI 3.x / Swagger 3 annotation support |
| `javax-validation` | On | Javax validation annotations (@NotNull, @NotBlank, @NotEmpty) |
| `javax-validation-strict` | Off | Javax validation with strict group checking |
| `jakarta-validation` | On | Jakarta validation annotations (@NotNull, @NotBlank, @NotEmpty) |
| `jakarta-validation-strict` | Off | Jakarta validation with strict group checking |
| `ignore` | On | Ignore classes/APIs marked with `#ignore` |
| `deprecated` | On | Deprecated info for Java and Kotlin |
| `converts` | On | Type conversions for common types (Date, ObjectId, etc.) |
| `field-utils` | On | Field handling utilities (ignore system fields, transient, serialVersionUID, etc.) |
| `field-order-parent-first` | Off | Parent class fields first, child class fields last |
| `field-order-child-first` | Off | Child class fields first, parent class fields last |
| `field-order-alphabetically` | Off | Fields ordered alphabetically (A-Z) |
| `field-order-alphabetically-desc` | Off | Fields ordered alphabetically descending (Z-A) |

## Remote

Add remote configuration file URLs. Remote configs are loaded after local configs and can override local settings.

See [Remote Config](/settings/remote-config) for details.

## Rules

Manage rule files in the folder-based rule model. See [Local File Config](/settings/local-file-config) and [Config Rules](/settings/config-rule) for the rule format and syntax.

The tab has three sub-tabs:

| Sub-tab | Location | Scope |
|---------|----------|-------|
| **Project** | `<project>/.easyapi/*.rules` | Current project only |
| **Global** | `~/.easyapi/*.rules` | Every project on the machine |
| **Remote** | Remote URLs | Per URL |

From this tab you can:

- Create, edit, and delete rule files.
- Enable or disable individual rule files without removing them.
- Open a rule file in an editor dialog with the built-in AI assistant (**Chat** / **Magic** buttons).

See [Write Rules with the Built-in AI Assistant](/settings/config-rule#write-rules-with-the-built-in-ai-assistant) for the AI workflow.

## AI

Configure the AI provider used by the built-in rule-authoring assistant.

| Setting | Description |
|---------|-------------|
| **Provider** | The AI provider (OpenAI, Anthropic, Google Gemini, Azure OpenAI, Ollama, DeepSeek, Groq, Mistral, xAI, and many OpenAI-compatible hosts). A "Custom" option points at any OpenAI-compatible endpoint. |
| **Base URL** | Provider API endpoint. Pre-filled from the provider default; override for proxies or self-hosted endpoints. |
| **Model** | Model identifier. Pre-filled from the provider default; override to use a different model. |
| **API Key** | Stored securely in the IDE's password store. Required for providers that need one. |
| **Request Timeout (sec)** | HTTP timeout for each AI request (default: 60). |
| **Max Requests** | Maximum requests per assistant turn (default: 100). The assistant asks you to confirm when the limit is reached. |

Click **Test Connection** to verify the provider works. The assistant is available from the **Rules** tab via the **Chat** and **Magic** buttons.

See [Write Rules with the Built-in AI Assistant](/settings/config-rule#write-rules-with-the-built-in-ai-assistant) for the full workflow.

## Built-in

View the built-in configuration rules that ship with EasyApi.

## Other

Additional settings:

| Setting | Description |
|---------|-------------|
| **Output Charset** | Character encoding for output files |
| **Allow unsafe SSL connections** | Allow connections to servers with self-signed certificates |
| **HTTP Timeout (ms)** | HTTP request timeout in milliseconds (1000-600000) |

## gRPC

Configure gRPC support:

| Setting | Default | Description |
|---------|---------|-------------|
| **Enable gRPC support** | On | Recognize gRPC service classes |
| **Enable gRPC call** | Off | Allow calling gRPC endpoints from the IDE |
| **Auto Detect** | — | Automatically detect gRPC runtime artifacts in project |
| **Runtime Packages** | — | gRPC runtime artifact configurations (group:artifact:version:enabled) |
| **Additional JARs** | — | Additional JAR files for gRPC runtime |

When **gRPC call** is enabled, the runtime packages panel becomes visible. Click **Auto Detect** to automatically find gRPC runtime artifacts in your local Maven/Gradle repositories.

Runtime packages can be configured with version mode:
- **Latest**: Use the newest version found in repositories
- **Fixed**: Use a specific version

See [gRPC](/framework/grpc) for more details.

## Features

The **Features** tab is the single place to enable or disable extension points. Its lists are built dynamically from the installed plugin components:

| Section | What it controls |
|---------|------------------|
| **Framework Support** | Framework recognizers such as Feign, JAX-RS, Actuator, gRPC, and Custom. A framework that is disabled by default appears here and can be explicitly enabled. |
| **Export Channels** | Output channels such as Markdown, Postman, cURL, HttpClient, Hoppscotch (Beta), and OpenAPI (Beta). Experimental channels are disabled by default. |
| **Field Format Channels** | Field serializers such as JSON, JSON5, Properties, and YAML. |

Most framework recognizers, export channels, field-format channels, and extension configs can be enabled or disabled from Settings. The General tab provides additional switches for API scanning, automatic/concurrent scanning, and editor gutter navigation.

The **Enable API scanning** checkbox in the General tab is the master switch for API discovery. When it is off, automatic scanning, concurrent scanning, and the API gutter icon are all disabled. Turn it on before troubleshooting a missing endpoint in the dashboard or editor.

## cURL

The cURL settings tab controls variable rendering and the defaults used by both batch export and Dashboard **Copy as cURL**:

| Setting | Description |
|---------|-------------|
| **Render mode** | Keep placeholders, resolve with the active environment, or ask before each export. Environment values take precedence over config-reader values. |
| **Copy from edited** | Use the endpoint edited in the Dashboard instead of the source endpoint when copying cURL. |
| **Include comments and section dividers** | Add endpoint headings and separators to a batch script. |
| **Pretty-print JSON body** | Format JSON request bodies with indentation. |
| **Multi-line format** | Put one cURL flag on each line. |
| **Long flags** | Use `--request`, `--header`, `--data`, and `--form` instead of short flags. |
| **Response example** | Append an available response body as a comment. |
| **Run pre-request scripts** | Apply folder/class scripts during batch export and folder/class/endpoint scripts for single-endpoint copy. |

The export dialog exposes the formatting and pre-request-script options as per-export overrides.

## OpenAPI (Beta)

OpenAPI export is disabled by default. After enabling it in **Features**, the OpenAPI settings tab lets you choose **JSON**, **YAML**, or **Ask each export**. The default file names are `openapi.json` and `openapi.yaml`.

Document-level metadata is configured with `openapi.info.title`, `openapi.info.version`, `openapi.info.description`, and `openapi.server.url` rules. The legacy `openapi.host` rule is also supported. See [Export to OpenAPI](/guide/export-openapi).

## Custom framework

Custom framework support is disabled by default and is enabled from **Features** > **Framework Support**. Its dedicated settings provide an optional line-marker toggle. Extraction itself is configured with `custom.*` rules; see [Custom Framework](/framework/custom).
