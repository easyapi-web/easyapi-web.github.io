# httpClient

HTTP client for making requests.

## Usage

```groovy
// GET request
def response = httpClient.get("https://api.example.com/users")

// POST request
def response = httpClient.post("https://api.example.com/users", [
    "Content-Type": "application/json"
], '{"name": "test"}')
```

## Sub-tools

- [httpClient.request](./httpClient/request) — Request object
- [httpClient.response](./httpClient/response) — Response object
