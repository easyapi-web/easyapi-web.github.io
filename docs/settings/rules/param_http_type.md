# param.http.type

Override the HTTP parameter type (query/path/header/body/form).

## Usage

```properties
param.http.type=groovy:it.hasAnn("org.springframework.web.bind.annotation.RequestHeader") ? "header" : null
```
