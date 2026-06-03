# config

Configuration access tool for scripts. Provides read access to configuration values from various sources (local files, remote config, IDE settings). Alias: `C`

## Usage

````properties
field.mock=groovy:```
def mockValue = config.get("custom.mock." + it.name())
return mockValue ?: "default_mock"
```
````

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `config.get(name)` | `String?` | Get the first value for a configuration key |
| `config.getValues(name)` | `List<String>` | Get all values for a configuration key |
| `config.resolveProperty(property)` | `String` | Resolve `${key}` placeholders in a property string |

## Configuration Sources

Configuration values are loaded from multiple sources in priority order:

1. **IDE Settings** - Values configured in EasyApi settings
2. **Remote Config** - Values from remote configuration servers
3. **Local Files** - Values from `.easy.api.config` / `.easy.api.yml` files in the project
4. **Built-in Defaults** - Default values

## Examples

### Get Single Value

````properties
field.mock=groovy:```
def prefix = config.get("mock.prefix")
def value = config.get("mock." + it.type().simpleName())
return prefix ? prefix + value : value
```
````

### Get All Values

````properties
method.additional.header=groovy:```
def headers = config.getValues("default.headers")
return headers.collect { h ->
    def parts = h.split(":")
    [name: parts[0], value: parts[1]]
}
```
````

### Resolve Placeholders

````properties
field.default=groovy:```
def template = config.get("field.default.template")
if (template && template.contains("\${")) {
    return config.resolveProperty(template)
}
return template
```
````

### Environment-based Configuration

````properties
api.path.prefix=groovy:```
def env = config.get("env") ?: "dev"
return config.get("api.prefix." + env) ?: "/"
```
````

## Configuration File Example

```properties
# .easy.api.config

# Mock settings
mock.prefix=test_
mock.String=mock_string
mock.Integer=0
mock.Boolean=false

# Default headers
default.headers=X-Custom-Header:value1
default.headers=X-Another-Header:value2

# Environment
env=dev
api.prefix.dev=/api/dev
api.prefix.prod=/api/v1
```

## See Also

- [session](./session) - Session-level storage
- [localStorage](./localStorage) - Persistent storage
