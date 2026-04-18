# Logger

The `logger` tool provides logging utilities for scripts and rules.

## Available Methods

| Method | Description |
|--------|-------------|
| `logger.info(msg)` | Log info message |
| `logger.warn(msg)` | Log warning message |
| `logger.error(msg)` | Log error message |
| `logger.debug(msg)` | Log debug message |

## Example Usage

```groovy
logger.info("Processing API: ${api.name()}")
logger.warn("Deprecated API found: ${api.path()}")
logger.error("Failed to resolve type: ${type.name()}")
logger.debug("Current context: ${it.name()}")
```

## Log Output

Log messages are displayed in the IDE's notification area and the EasyApi log panel.
