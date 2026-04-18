# Config Tool

The `config` tool provides methods for reading configuration values.

## Available Methods

| Method | Description |
|--------|-------------|
| `config.get(key)` | Get a configuration value |
| `config.get(key, default)` | Get a configuration value with default |
| `config.has(key)` | Check if a configuration key exists |

## Example Usage

```groovy
// Read a config value
def host = config.get("postman.host")
logger.info("Postman host: ${host}")

// Read with default
def timeout = config.get("http.timeout", "5000")
logger.info("Timeout: ${timeout}")

// Check if config exists
if (config.has("custom.api.prefix")) {
    def prefix = config.get("custom.api.prefix")
    logger.info("Custom prefix: ${prefix}")
}
```
