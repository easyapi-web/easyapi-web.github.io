# param.mock

Set a mock value for a parameter (used in Postman/HTTP client examples).

## Usage

```properties
param.mock=groovy:it.name() == "email" ? "user@example.com" : null
param.mock=groovy:it.type().simpleName() == "Integer" ? "1" : null
```
