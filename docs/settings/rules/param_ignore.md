# param.ignore

Ignore a parameter in API documentation.

## Usage

```properties
param.ignore=groovy:["HttpServletRequest","HttpServletResponse","Principal","Locale","InputStream","OutputStream"].contains(it.type().simpleName())
```

## Example

### Ignore servlet types

```properties
param.ignore=groovy:["HttpServletRequest","HttpServletResponse","Principal","Locale","InputStream","OutputStream"].contains(it.type().simpleName())
```

### Ignore by annotation

```properties
param.ignore=groovy:it.hasAnn("org.springframework.web.bind.annotation.CookieValue") && !it.hasAnn("io.swagger.annotations.ApiParam")
```
