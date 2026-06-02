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
