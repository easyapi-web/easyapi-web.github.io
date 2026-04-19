# Script Executor

EasyApi includes a script executor that allows you to run Groovy scripts within the IDE context.

## How to Use

1. Open **Code** > **EasyApi** > **ScriptExecutor** (or **Generate** > **EasyApi** > **ScriptExecutor** on Windows/Linux)
2. Write your Groovy script in the editor
3. Click **Run** to execute

## Available Context

Scripts have access to the following context objects:

| Object | Alias | Description |
|--------|-------|-------------|
| `it` | — | Current context element (class, method, field) |
| `logger` | `LOG` | Logging utility |
| `tool` | `T` | General utility (string, collection, JSON, time) |
| `regex` | `RE` | Regular expression utilities |
| `config` | `C` | Configuration reader |
| `files` | `F` | File operations |
| `helper` | `H` | Class lookup and link resolution |
| `runtime` | `R` | Project/module metadata |
| `session` | `S`, `sessionStorage` | Session-scoped key-value storage |
| `localStorage` | — | Persistent key-value storage |
| `httpClient` | — | HTTP client for making requests |

## Example Scripts

### Inspect Current Class

```groovy
logger.info("Class: ${it.name()}")
logger.info("Doc: ${it.doc()}")
logger.info("Has @RestController: ${it.hasAnn('org.springframework.web.bind.annotation.RestController')}")
```

### Get Module Info

```groovy
logger.info("Project: ${runtime.projectName()}")
logger.info("Module: ${runtime.module()}")
logger.info("File: ${runtime.filePath()}")
```

### Use Tool Utilities

```groovy
def json = tool.toJson(["name": it.name(), "path": runtime.filePath()])
logger.info(json)
tool.copy2Clipboard(json)
```

See [Script Tools Reference](/tools/script-tools) for detailed documentation of all available tools.
