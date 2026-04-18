# Postman Rules

Rules for customizing Postman export behavior.

## Available Rules

| Rule Key | Description |
|----------|-------------|
| `postman.host` | Set the host URL for Postman exports |
| `postman.prerequest` | Add pre-request scripts |
| `postman.test` | Add test scripts |

## postman.host

Set the base URL for all API endpoints in the Postman collection:

```properties
# Set host
postman.host=https://api.example.com

# Use environment variable
postman.host=https://{{api_host}}/api
```

## postman.prerequest

Add pre-request scripts that run before each request:

```properties
# Simple logging
postman.prerequest=console.log('Sending request...');

# Set environment variable
postman.prerequest=pm.environment.set('timestamp', new Date().getTime());

# Add authorization header
postman.prerequest=
    var token = pm.environment.get('auth_token');
    if (token) {
        pm.request.headers.add({
            key: 'Authorization',
            value: 'Bearer ' + token
        });
    }
```

## postman.test

Add test scripts that run after each response:

```properties
# Basic status code test
postman.test=pm.test('Status code is 200', function() { pm.response.to.have.status(200); });

# Response time test
postman.test=pm.test('Response time is less than 500ms', function() { pm.expect(pm.response.responseTime).to.be.below(500); });

# JSON schema validation
postman.test=
    pm.test('Response is valid JSON', function() {
        pm.response.to.be.json;
    });
```

## Export After Hook

You can also run custom logic after the Postman export completes:

```properties
# Log after export
export.after=groovy:logger.info("Exported ${it.size()} APIs to Postman")
```
