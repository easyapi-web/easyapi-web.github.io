# API Tool

The `api` tool provides methods for extracting and manipulating API information.

## Available Methods

| Method | Description |
|--------|-------------|
| `api.list(module)` | List all APIs in a module |
| `api.info(class/method)` | Get API info for a class or method |

## Example Usage

```groovy
// List all APIs
def apis = api.list(module)
apis.each { apiInfo ->
    logger.info("${apiInfo.method()} ${apiInfo.path()} - ${apiInfo.name()}")
}

// Get API info for a specific method
def info = api.info(method)
logger.info("Path: ${info.path()}")
logger.info("Method: ${info.method()}")
```

## API Info Object

The API info object provides the following properties:

| Property | Description |
|----------|-------------|
| `name()` | API name |
| `method()` | HTTP method (GET, POST, etc.) |
| `path()` | API path |
| `desc()` | API description |
| `headers()` | Request headers |
| `params()` | Request parameters |
| `body()` | Request body type |
| `response()` | Response type |
