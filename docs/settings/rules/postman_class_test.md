# postman.class.test

Add test scripts at the class (folder) level.

Alias: `class.postman.test`

## Usage

```properties
postman.class.test=pm.test('Response is valid JSON', function() { pm.response.to.be.json; });
```

This rule uses merge mode — multiple values will be accumulated.
