# Export to Postman

EasyApi can export your API definitions directly to Postman collections.

## How to Export

1. Open a file containing API endpoints
2. Right-click in the editor > **EasyApi** > **ExportToPostman**
3. The API definitions will be exported to your configured Postman collection

## Export Scope

You can export APIs at different scopes:

| Scope | Action |
|-------|--------|
| Single method | Right-click on the method > EasyApi > ExportToPostman |
| Single class | Right-click in the class > EasyApi > ExportToPostman |
| Multiple classes | Select files in Project view > EasyApi > ExportToPostman |
| Entire module | Right-click on module > EasyApi > ExportToPostman |

## Postman Collection Settings

You can configure Postman-specific settings in **Preferences(Settings)** > **Other Settings** > **EasyApi** > **Postman**:

- **Postman Token** — Your Postman API token for direct upload
- **Collection ID** — Target collection ID for export
- **Workspace ID** — Target workspace ID

## Postman Rules

You can customize Postman export behavior using rules:

```properties
# Set the host for Postman exports
postman.host=https://api.example.com

# Add pre-request scripts
postman.prerequest=console.log('pre-request');

# Add test scripts
postman.test=pm.test('Status code is 200', function() { pm.response.to.have.status(200); });
```

See [Postman Rules](/rules/postman-rules) for the full list of available rules.
