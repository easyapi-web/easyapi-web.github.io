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

## Event Hooks

EasyApi provides event hooks that let you customize the parsing process:

| Event | Description |
|-------|-------------|
| `api_class_parse_before` | Before parsing a class as API |
| `api_class_parse_after` | After parsing a class as API |
| `api_method_parse_before` | Before parsing a method as API |
| `api_method_parse_after` | After parsing a method as API |
| `api_param_parse_before` | Before parsing a parameter |
| `api_param_parse_after` | After parsing a parameter |
| `json_class_parse_before` | Before parsing a class as JSON |
| `json_class_parse_after` | After parsing a class as JSON |
| `json_field_parse_before` | Before parsing a field as JSON |
| `json_field_parse_after` | After parsing a field as JSON |

## Custom Export with Groovy

You can write Groovy scripts to customize the export process:

```groovy
// Access all APIs in the current module
def apis = api.list(module)

// Filter and transform
apis.each { apiInfo ->
    // Custom processing
    def name = apiInfo.name()
    def method = apiInfo.method()
    def path = apiInfo.path()
    logger.info("${method} ${path} - ${name}")
}
```

## Remote Configuration

You can store configuration files remotely and have EasyApi load them automatically:

```properties
# In your local config file
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
