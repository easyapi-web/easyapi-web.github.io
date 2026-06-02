# postman.class.prerequest

Add pre-request scripts at the class (folder) level. These run before any request in the folder.

Alias: `class.postman.prerequest`

## Usage

```properties
postman.class.prerequest=pm.environment.set('baseUrl', 'https://api.example.com');
```

This rule uses merge mode — multiple values will be accumulated.
