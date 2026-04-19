# Param Rules

Rules for controlling how method parameters are named, documented, and displayed.

## Available Rules

| Rule Key | Type | Aliases | Description |
|----------|------|---------|-------------|
| `param.name` | string | — | Set parameter name |
| `param.type` | string | — | Set parameter type |
| `param.doc` | string (merge distinct) | `doc.param` | Set parameter documentation |
| `param.required` | boolean | — | Set whether a parameter is required |
| `param.ignore` | boolean | — | Ignore a parameter |
| `param.default.value` | string | — | Set parameter default value |
| `param.demo` | string | — | Set parameter demo/example value |
| `param.mock` | string | — | Set parameter mock value |
| `param.http.type` | string | — | Set parameter HTTP type (query/path/header/body) |

## Parameter Lifecycle Events

| Rule Key | Type | Aliases | Description |
|----------|------|---------|-------------|
| `api.param.parse.before` | event | `param.before` | Before parsing a parameter |
| `api.param.parse.after` | event | `param.after` | After parsing a parameter |

## param.name

Rename parameters in the documentation:

```properties
param.name=groovy:it.ann("org.springframework.web.bind.annotation.RequestParam")?.value() ?: it.name()
```

## param.type

Override parameter types:

```properties
param.type=groovy:it.type().simpleName() == "MultipartFile" ? "file" : null
```

## param.doc

Set parameter descriptions:

```properties
param.doc=groovy:it.ann("io.swagger.annotations.ApiParam")?.value()
```

## param.ignore

Exclude parameters from documentation:

```properties
param.ignore=groovy:["HttpServletRequest","HttpServletResponse","Principal","Locale","InputStream","OutputStream"].contains(it.type().simpleName())

param.ignore=groovy:it.hasAnn("org.springframework.web.bind.annotation.CookieValue") && !it.hasAnn("io.swagger.annotations.ApiParam")
```

## param.required

Mark parameters as required:

```properties
param.required=groovy:it.ann("org.springframework.web.bind.annotation.RequestParam")?.required() ?: true

param.required=groovy:it.hasAnn("javax.validation.constraints.NotNull")||it.hasAnn("javax.validation.constraints.NotBlank")
```

## param.default.value

Set default values for parameters:

```properties
param.default.value=groovy:it.ann("org.springframework.web.bind.annotation.RequestParam")?.defaultValue()

param.default.value=groovy:it.ann("org.springframework.web.bind.annotation.PathVariable")?.value()
```

## param.demo

Set demo/example values for parameters:

```properties
param.demo=groovy:it.name() == "id" ? "1" : null

param.demo=groovy:it.type().simpleName() == "String" ? "example" : null
```

## param.mock

Set mock values for parameters (used in Postman/HTTP client examples):

```properties
param.mock=groovy:it.name() == "email" ? "user@example.com" : null

param.mock=groovy:it.type().simpleName() == "Integer" ? "1" : null
```

## param.http.type

Override the HTTP parameter type:

```properties
param.http.type=groovy:it.hasAnn("org.springframework.web.bind.annotation.RequestHeader") ? "header" : null
```
