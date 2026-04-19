# Advanced Usage

This page covers advanced features and workflows of EasyApi.

## Batch Export

You can export APIs from multiple files or an entire module at once:

1. Select multiple files or a module in the **Project** view
2. Right-click > **EasyApi** > **Export to Postman/Markdown**
3. All APIs from the selected scope will be exported

## API Dashboard

The API Dashboard provides a visual overview of all APIs in your project:

1. Open **View** > **Tool Windows** > **API Dashboard**
2. Browse APIs organized by controller and method
3. Click any endpoint to view details or send a request

## API Search Everywhere

Use IntelliJ's **Search Everywhere** (double-press Shift) to find API endpoints:

- Search by path: `/api/users`
- Search by method prefix: `GET /users`
- Paste a full URL to auto-extract the path for matching

## Event Hooks

EasyApi provides event hooks that let you customize the parsing process:

| Event | Description |
|-------|-------------|
| `api.class.parse.before` | Before parsing a class as API |
| `api.class.parse.after` | After parsing a class as API |
| `api.method.parse.before` | Before parsing a method as API |
| `api.method.parse.after` | After parsing a method as API |
| `api.param.parse.before` | Before parsing a parameter |
| `api.param.parse.after` | After parsing a parameter |
| `json.class.parse.before` | Before parsing a class as JSON |
| `json.class.parse.after` | After parsing a class as JSON |
| `json.field.parse.before` | Before parsing a field as JSON |
| `json.field.parse.after` | After parsing a field as JSON |
| `http.call.before` | Before making an HTTP call |
| `http.call.after` | After an HTTP call completes |
| `export.after` | After export completes |

## Custom Export with Groovy

You can write Groovy scripts to customize the export process using the script executor:

```groovy
// Inspect the current class
logger.info("Class: ${it.name()}")
logger.info("Has @RestController: ${it.hasAnn('org.springframework.web.bind.annotation.RestController')}")

// Get module info
logger.info("Project: ${runtime.projectName()}")
logger.info("Module: ${runtime.module()}")
```

See [Script Tools Reference](/tools/script-tools) for all available tools.

## Remote Configuration

You can store configuration files remotely and have EasyApi load them automatically:

```properties
properties.additional=https://raw.githubusercontent.com/your-org/your-repo/main/easyapi.config
```

See [Remote Config](/configuration/remote-config) for details.

## Multiple Return Types

You can define multiple possible return types for an API:

```java
/**
 * Get user info
 * @return success {@link User} User info
 * @return unauthorized {@link Error} Not authenticated
 */
@GetMapping("/users/{id}")
public Object getUser(@PathVariable Long id) {
    // ...
}
```

## Export Fields to JSON

EasyApi can export field definitions from any class to JSON format:

1. Right-click in a class > **EasyApi** > **FieldsTo*** > **ToJson** / **ToJson5** / **ToProperties**
2. The field structure will be exported in the selected format
