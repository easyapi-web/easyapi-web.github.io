# Export to cURL

EasyApi can export your API definitions as cURL commands.

## How to Export

1. Open a file containing API endpoints
2. Right-click in the editor > **EasyApi** > **Export** > **cURL**
3. cURL commands for all APIs will be generated

You can also export from the API Dashboard by right-clicking an endpoint and selecting **Export** > **cURL**, or by using **Copy as cURL** to copy a single command to the clipboard.

## Export Scope

| Scope | Action |
|-------|--------|
| Single method | Right-click on the method > EasyApi > Export > cURL |
| Single class | Right-click in the class > EasyApi > Export > cURL |
| Multiple classes | Select files in Project view > EasyApi > Export > cURL |
| Entire module | Right-click on module > EasyApi > Export > cURL |

## Output

The export generates cURL commands for each API endpoint:

```bash
curl -X GET "http://localhost:8080/api/users" \
  -H "Content-Type: application/json"

curl -X POST "http://localhost:8080/api/users" \
  -H "Content-Type: application/json" \
  -d '{"name": "test"}'
```

## Variables

cURL export can render environment placeholders before formatting the command. Both placeholder styles are supported:

```text
{{baseUrl}}/api/users/${userId}
```

The render mode is configured in the cURL settings:

| Mode | Behavior |
|------|----------|
| **Keep placeholders** | Leave unresolved double-curly or dollar-brace placeholders in the command. |
| **Resolve with active environment** | Read values from the active EasyApi environment. |
| **Ask each export** | Choose an environment before exporting, or choose **Skip** to keep placeholders. |

Environment values are checked first, followed by values available through the config reader. If neither source contains a variable, the placeholder remains and EasyApi logs a warning. Request bodies are serialized before replacement, so placeholders in JSON bodies are handled too.

## Formatting options

The cURL export dialog can override the saved cURL defaults for each export:

- Include comments and section dividers
- Pretty-print JSON request bodies
- Use a multi-line command with one flag per line
- Use long flags such as `--request`, `--header`, and `--data` instead of short flags
- Append a response body example as a comment when one is available

The Dashboard **Copy as cURL** action uses the saved formatting options. You can also configure whether it uses the endpoint as edited in the Dashboard or the original source endpoint.

## Pre-request scripts

You can enable **Run pre-request scripts** in the cURL export options or cURL settings. When enabled, folder- and class-level scripts run before each batch command. The single-endpoint **Copy as cURL** path also includes the endpoint-level script.

Scripts can inject headers, authentication values, or body changes into the generated command. They are disabled by default; leaving them off avoids invoking script machinery during a normal export.
