# Postman Rules

Rules for customizing Postman export behavior.

## Available Rules

| Rule Key | Type | Aliases | Description |
|----------|------|---------|-------------|
| `postman.host` | string | — | Set the host URL for Postman exports |
| `postman.prerequest` | string (merge) | — | Add pre-request scripts for methods |
| `postman.class.prerequest` | string (merge) | `class.postman.prerequest` | Add pre-request scripts for classes |
| `postman.test` | string (merge) | — | Add test scripts for methods |
| `postman.class.test` | string (merge) | `class.postman.test` | Add test scripts for classes |

## Postman Events

| Rule Key | Type | Aliases | Description |
|----------|------|---------|-------------|
| `postman.collection.prerequest` | event | `collection.postman.prerequest` | Collection-level pre-request script |
| `postman.collection.test` | event | `collection.postman.test` | Collection-level test script |
| `postman.format.after` | event | — | After Postman format completes |

## postman.host

Set the base URL for all API endpoints in the Postman collection:

```properties
postman.host=https://api.example.com

postman.host=https://{{api_host}}/api
```

## postman.prerequest

Add pre-request scripts that run before each request:

```properties
postman.prerequest=console.log('Sending request...');

postman.prerequest=pm.environment.set('timestamp', new Date().getTime());
```

## postman.class.prerequest

Add pre-request scripts at the class (folder) level. These run before any request in the folder:

```properties
postman.class.prerequest=pm.environment.set('baseUrl', 'https://api.example.com');
```

## postman.collection.prerequest

Add a pre-request script at the collection level. This runs before every request in the collection:

```properties
postman.collection.prerequest=groovy:logger.info("Collection pre-request")
```

## postman.test

Add test scripts that run after each response:

```properties
postman.test=pm.test('Status code is 200', function() { pm.response.to.have.status(200); });

postman.test=pm.test('Response time is less than 500ms', function() { pm.expect(pm.response.responseTime).to.be.below(500); });
```

## postman.class.test

Add test scripts at the class (folder) level:

```properties
postman.class.test=pm.test('Response is valid JSON', function() { pm.response.to.be.json; });
```

## postman.collection.test

Add a test script at the collection level:

```properties
postman.collection.test=groovy:logger.info("Collection test")
```

## postman.format.after

Run custom logic after the Postman export format is completed:

```properties
postman.format.after=groovy:logger.info("Postman export formatted")
```

## Export After Hook

You can also run custom logic after the export completes:

```properties
export.after=groovy:logger.info("Export completed")
```
