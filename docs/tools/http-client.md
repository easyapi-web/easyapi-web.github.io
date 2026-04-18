# HTTP Client

The `httpClient` tool provides methods for making HTTP requests in scripts.

## Available Methods

| Method | Description |
|--------|-------------|
| `httpClient.get(url)` | Send GET request |
| `httpClient.post(url, body)` | Send POST request |
| `httpClient.put(url, body)` | Send PUT request |
| `httpClient.delete(url)` | Send DELETE request |
| `httpClient.request(method, url, body)` | Send custom request |

## Example Usage

```groovy
// Simple GET request
def response = httpClient.get("https://api.example.com/users")
logger.info("Response: ${response}")

// POST with JSON body
def body = '{"name": "John", "email": "john@example.com"}'
def response = httpClient.post("https://api.example.com/users", body)
logger.info("Response: ${response}")

// Custom request with headers
def response = httpClient.request("GET", "https://api.example.com/users") { request ->
    request.header("Authorization", "Bearer token123")
    request.header("Accept", "application/json")
}
```

## Response Object

| Property | Description |
|----------|-------------|
| `code()` | HTTP status code |
| `body()` | Response body as string |
| `headers()` | Response headers |
| `contentType()` | Response content type |
