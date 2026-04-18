# Param Rules

Rules for controlling how method parameters are named, documented, and displayed.

## Available Rules

| Rule Key | Description |
|----------|-------------|
| `param.doc` | Set parameter documentation |
| `param.ignore` | Ignore a parameter |
| `param.required` | Set whether a parameter is required |
| `param.default.value` | Set parameter default value |
| `param.demo` | Set parameter demo/example value |
| `param.http.type` | Set parameter HTTP type (query/path/header/body) |

## param.doc

Set parameter descriptions:

```properties
# Use Java doc
param.doc=groovy:it.doc()?.replaceFirst("@\\S+\\s*", "")

# Use Swagger @ApiParam
param.doc=groovy:it.ann("io.swagger.annotations.ApiParam")?.value()
```

## param.ignore

Exclude parameters from documentation:

```properties
# Ignore HttpServletRequest/HttpServletResponse
param.ignore=groovy:["HttpServletRequest","HttpServletResponse","Principal","Locale","InputStream","OutputStream"].contains(it.type().simpleName())

# Ignore by annotation
param.ignore=groovy:it.hasAnn("org.springframework.web.bind.annotation.CookieValue") && !it.hasAnn("io.swagger.annotations.ApiParam")
```

## param.required

Mark parameters as required:

```properties
# Use @RequestParam required attribute
param.required=groovy:it.ann("org.springframework.web.bind.annotation.RequestParam")?.required() ?: true

# Use javax.validation
param.required=groovy:it.hasAnn("javax.validation.constraints.NotNull")||it.hasAnn("javax.validation.constraints.NotBlank")
```

## param.default.value

Set default values for parameters:

```properties
# Use @RequestParam defaultValue
param.default.value=groovy:it.ann("org.springframework.web.bind.annotation.RequestParam")?.defaultValue()

# Use @PathVariable value
param.default.value=groovy:it.ann("org.springframework.web.bind.annotation.PathVariable")?.value()
```

## param.http.type

Override the HTTP parameter type:

```properties
# Force a parameter to be a header
param.http.type=groovy:it.hasAnn("org.springframework.web.bind.annotation.RequestHeader") ? "header" : null
```
