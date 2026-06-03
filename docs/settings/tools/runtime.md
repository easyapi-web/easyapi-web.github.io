# runtime

Runtime information tool for scripts. Provides access to project and module metadata. Alias: `R`

## Usage

````properties
field.mock=groovy:```
logger.info("Project: " + runtime.projectName())
logger.info("Module: " + runtime.moduleName())
```
````

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `runtime.projectName()` | `String?` | Get the project name |
| `runtime.projectPath()` | `String?` | Get the project base path |
| `runtime.module()` | `String?` | Get the current module name |
| `runtime.moduleName()` | `String?` | Alias for module() |
| `runtime.modulePath()` | `String?` | Get the current module's content root path |
| `runtime.filePath()` | `String?` | Get the current file path |

## Examples

### Log Project Info

````properties
export.before=groovy:```
logger.info("=== Export Environment ===")
logger.info("Project: " + runtime.projectName())
logger.info("Project path: " + runtime.projectPath())
logger.info("Module: " + runtime.moduleName())
logger.info("Module path: " + runtime.modulePath())
logger.info("File: " + runtime.filePath())
logger.info("========================")
```
````

### Module-based Configuration

````properties
api.path.prefix=groovy:```
def moduleName = runtime.moduleName()
if (moduleName == "user-service") {
    return "/api/user"
} else if (moduleName == "order-service") {
    return "/api/order"
}
return "/api"
```
````

### Project Path for File Operations

````properties
export.after=groovy:```
def projectPath = runtime.projectPath()
def outputPath = projectPath + "/api-docs/export.json"
files.save(it.toJson(), outputPath)
logger.info("Exported to: " + outputPath)
```
````

### Conditional Behavior by Module

````properties
field.mock=groovy:```
def modulePath = runtime.modulePath()
if (modulePath && modulePath.contains("legacy")) {
    return "legacy_mock"
}
return "mock_value"
```
````

### Debug Information

````properties
export.after=groovy:```
def info = """
Export completed
================
Time: ${new Date().format("yyyy-MM-dd HH:mm:ss")}
Project: ${runtime.projectName()}
Module: ${runtime.moduleName()}
File: ${runtime.filePath()}
APIs exported: ${it.apis()?.size() ?: 0}
"""
logger.info(info)
```
````

## Use Cases

1. **Debugging**: Log project/module info for troubleshooting
2. **Conditional Logic**: Adjust behavior based on project or module
3. **File Operations**: Use project path as base for output files
4. **Reporting**: Include project metadata in export reports

## See Also

- [logger](./logger) - Logging utility
- [config](./config) - Configuration access
