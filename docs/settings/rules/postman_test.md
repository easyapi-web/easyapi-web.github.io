# postman.test

Add test scripts that run after each Postman response.

## Usage

```properties
postman.test=pm.test('Status code is 200', function() { pm.response.to.have.status(200); });
```

This rule uses merge mode — multiple values will be accumulated.
