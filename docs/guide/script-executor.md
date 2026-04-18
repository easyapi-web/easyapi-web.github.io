# Script Executor

EasyApi includes a script executor that allows you to run Groovy scripts within the IDE context.

## How to Use

1. Open **Tools** > **EasyApi** > **Script Executor**
2. Write your Groovy script in the editor
3. Click **Run** to execute

## Available Context

Scripts have access to the following context objects:

| Object | Description |
|--------|-------------|
| `project` | The current IntelliJ project |
| `module` | The current module |
| `logger` | Logging utility |
| `api` | API utility for extracting API info |
| `config` | Configuration reader |
| `helper` | Various helper utilities |
| `httpClient` | HTTP client for making requests |
| `localStorage` | Key-value storage |
| `session` | Session-scoped storage |
| `it` | Iterator for current context |
| `tool` | General tool utilities |
| `regex` | Regular expression utilities |
| `runtime` | Runtime information |

## Example Scripts

### List All APIs in a Module

```groovy
def apis = api.list(module)
apis.each { apiInfo ->
    logger.info("${apiInfo.method()} ${apiInfo.path()}")
}
```

### Export APIs to Custom Format

```groovy
def apis = api.list(module)
apis.each { apiInfo ->
    logger.info("API: ${apiInfo.name()}")
    logger.info("  Method: ${apiInfo.method()}")
    logger.info("  Path: ${apiInfo.path()}")
}
```

See [Tools Reference](/tools/api-tool) for detailed API documentation.
