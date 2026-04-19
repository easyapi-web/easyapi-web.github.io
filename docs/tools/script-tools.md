# Script Tools Reference

EasyApi provides a set of built-in tools available in Groovy scripts (rules, script executor, etc.).

## Available Tools

| Tool | Alias | Description |
|------|-------|-------------|
| `it` | — | Current context element (class, method, field, etc.) |
| `logger` | `LOG` | Logging utility |
| `tool` | `T` | General utility (string, collection, JSON, time, clipboard) |
| `regex` | `RE` | Regular expression utilities |
| `config` | `C` | Configuration reader |
| `files` | `F` | File operations |
| `helper` | `H` | Class lookup and link resolution |
| `runtime` | `R` | Project/module metadata |
| `session` | `S`, `sessionStorage` | Session-scoped key-value storage |
| `localStorage` | — | Persistent key-value storage |
| `httpClient` | — | HTTP client for making requests |
| `api` | — | API endpoint context (available during export rules only) |
| `fieldContext` | — | Field context (available in field rules) |

---

## it

The current PSI element context. Methods vary by element type (class, method, field).

```groovy
it.name()                          // element name
it.doc()                           // documentation text
it.doc("param")                    // specific doc tag
it.hasAnn("org.springframework.web.bind.annotation.RequestMapping")
it.ann("org.springframework.web.bind.annotation.RequestMapping")
it.ann("RequestMapping", "path")   // annotation attribute
it.hasModifier("public")
it.modifiers()                     // list modifiers
it.sourceCode()                    // full source code
it.defineCode()                    // declaration without body
```

See [API Rules](/rules/api-rules) for rule-specific usage.

## logger / LOG

```groovy
logger.info("message")
logger.warn("warning")
logger.error("error")
```

## tool / T

General utility operations.

### Collection & Type Checks

```groovy
tool.isNullOrEmpty(any)
tool.notNullOrEmpty(any)
tool.asList(any)
tool.asArray(any)
tool.intersect(a, b)
tool.anyIntersect(a, b)
tool.equalOrIntersect(a, b)
tool.newSet("a", "b", "c")
tool.newList("a", "b")
tool.newMap()
```

### String Operations

```groovy
tool.nullOrEmpty(str)
tool.nullOrBlank(str)
tool.notNullOrEmpty(str)
tool.notNullOrBlank(str)
tool.headLine(str)                  // first line of text
tool.capitalize(str)
tool.uncapitalize(str)
tool.upperCase(str)
tool.lowerCase(str)
tool.camel2Underline(str)           // camelCase → camel_case
tool.toCamelCase(str, true, '_')    // under_score → CamelCase
tool.removePrefix(str, prefix)
tool.removeSuffix(str, suffix)
tool.substringBefore(str, sep)
tool.substringAfter(str, sep)
tool.substringBeforeLast(str, sep)
tool.substringAfterLast(str, sep)
tool.substringBetween(str, open, close)
tool.split(str)
tool.split(str, ",")
tool.isNumeric(str)
tool.isAlpha(str)
```

### JSON

```groovy
tool.parseJson('{"key":"value"}')   // parse JSON string
tool.toJson(obj)                    // serialize to JSON
tool.prettyJson(obj)                // serialize to pretty JSON
```

### Time & Date

```groovy
tool.now()                          // current time: "2025-01-01 12:00:00"
tool.now("yyyy-MM-dd")             // formatted current time
tool.today()                        // today's date: "2025-01-01"
tool.format(1704067200000, "yyyy-MM-dd")
```

### Clipboard

```groovy
tool.copy2Clipboard("text to copy")
```

### Debug

```groovy
tool.debug(any)                     // print type & available methods
```

## regex / RE

Regular expression utilities.

```groovy
regex.matches(text, pattern)
regex.findFirst(text, pattern)
regex.findAll(text, pattern)
regex.replace(text, pattern, replacement)
```

## config / C

Read configuration values from `.easy.api.config` / `.easy.api.yml` files.

```groovy
config.get("key")                   // first value for key
config.getValues("key")             // all values for key
config.resolveProperty("${server.port}")  // resolve placeholders
```

## files / F

File operations.

```groovy
files.save(content, "/path/to/file")
files.save(content, "UTF-8", "/path/to/file")
```

## helper / H

Class lookup and link resolution.

```groovy
helper.findClass("com.example.User")    // find class by FQN
helper.resolveLink("com.example.User")  // resolve javadoc link
helper.resolveLinks("com.example.User") // resolve all matching links
```

## runtime / R

Project and module metadata.

```groovy
runtime.projectName()               // project name
runtime.projectPath()               // project base path
runtime.module()                    // module name
runtime.moduleName()                // module name (alias)
runtime.modulePath()                // module path
runtime.filePath()                  // current file path
```

## session / S / sessionStorage

Session-scoped key-value storage (cleared between export sessions).

```groovy
session.get("key")
session.set("key", "value")
session.pop("key")                  // get and remove
session.peek("key")                 // get without removing
session.push("key", "value")        // push to stack
session.remove("key")
session.keys()
session.clear()
```

## localStorage

Persistent key-value storage (survives across sessions).

```groovy
localStorage.get("key")
localStorage.set("key", "value")
localStorage.remove("key")
localStorage.keys()
localStorage.clear()
```

## httpClient

HTTP client for making requests (available when configured in settings).

```groovy
// Usage depends on HttpClient implementation
// Typically used in advanced export scenarios
```

## api

API endpoint context, available **only during export rules** (not in the script executor). Provides access to the current API endpoint being processed.

```groovy
api.name()                          // endpoint name
api.path()                          // endpoint path
api.method()                        // HTTP method (GET, POST, etc.)
api.description()                   // endpoint description

api.setPath("/api/v2/users")        // modify path
api.setMethod("POST")               // modify HTTP method
api.setDescription("desc")          // set description
api.appendDesc("additional info")   // append to description

api.setParam("name", "default", true, "description")
api.setFormParam("field", null, false, "description")
api.setPathParam("id", null, "path variable")
api.setHeader("X-Custom", "value", false, "description")

api.setResponseCode(200)
api.appendResponseBodyDesc("response description")
api.setResponseHeader("X-Total", "100", false, "total count")
api.setResponseBodyClass("com.example.User")
```
