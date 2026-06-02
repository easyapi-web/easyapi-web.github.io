# Export to HttpClient

EasyApi can export your API definitions as IntelliJ IDEA HttpClient `.http` files.

## How to Export

1. Open a file containing API endpoints
2. Right-click in the editor > **EasyApi** > **EXPORT** > **HttpClient**
3. An `.http` file will be generated with all API requests

You can also export from the API Dashboard by right-clicking an endpoint and selecting **Export** > **HTTP Client**.

## Export Scope

| Scope | Action |
|-------|--------|
| Single method | Right-click on the method > EasyApi > Export > HttpClient |
| Single class | Right-click in the class > EasyApi > Export > HttpClient |
| Multiple classes | Select files in Project view > EasyApi > Export > HttpClient |
| Entire module | Right-click on module > EasyApi > Export > HttpClient |

## Output

The export generates an `.http` file containing HttpClient requests for each API endpoint:

```http
GET http://localhost:8080/api/users
Content-Type: application/json

###
POST http://localhost:8080/api/users
Content-Type: application/json

{
  "name": "test"
}
```

## Using Exported Files

1. Save the exported `.http` file to your project
2. Open the file in IntelliJ IDEA
3. Click the run icon next to a request to execute it directly in the IDE
4. Configure the [HttpClient test framework](https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html) for advanced testing
