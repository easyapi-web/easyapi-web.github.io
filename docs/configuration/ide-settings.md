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

See [Remote Config](/configuration/remote-config) for details.

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

| Setting | Description |
|---------|-------------|
| **Enable gRPC support** | Recognize gRPC service classes (default: on) |
| **Enable gRPC call** | Allow calling gRPC endpoints from the IDE (default: off) |
| **Auto Detect** | Automatically detect gRPC runtime artifacts in project |
| **Runtime Packages** | gRPC runtime artifact configurations (group ID, artifact ID, version mode) |
| **Additional JARs** | Additional JAR files for gRPC runtime |

See [gRPC](/frameworks/grpc) for more details.
