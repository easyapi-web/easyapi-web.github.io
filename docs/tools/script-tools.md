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

The current PSI element context. Methods vary by element type (class, method, field, parameter).

### Base Context (All Types)

```groovy
it.name()                          // element name (never null, returns "" if unnamed)
it.getName()                       // nullable version of name()
it.doc()                           // documentation text
it.doc("param")                    // first value for a doc tag
it.docs("param")                   // all values for a doc tag (returns List)
it.hasDoc("deprecated")            // check if a doc tag exists
it.doc("param", "name")            // doc tag with sub-tag value
it.hasAnn("org.springframework.web.bind.annotation.RequestMapping")
it.ann("org.springframework.web.bind.annotation.RequestMapping")  // annotation "value" attribute
it.ann("RequestMapping", "path")   // specific annotation attribute
it.annValue("RequestMapping")      // annotation value as Any (not just String)
it.annValue("RequestMapping", "path")
it.annMap("RequestMapping")        // annotation as Map<String, Any?>
it.annMaps("RequestMapping")       // all annotations as List<Map<String, Any?>>
it.hasModifier("public")
it.modifiers()                     // list modifiers
it.sourceCode()                    // full source code
it.defineCode()                    // declaration without body
it.psi()                           // raw PSI element
it.getExt("key")                   // get extension data
it.setExt("key", value)            // set extension data
```

### Class Context

```groovy
it.qualifiedName()                 // fully qualified name
it.packageName()                   // package name
it.methods()                       // all methods
it.methodCnt()                     // method count
it.fields()                        // all fields
it.fieldCnt()                      // field count
it.type()                          // type context for this class
it.isExtend("java.lang.Exception") // check inheritance
it.isMap()                         // check if Map type
it.isCollection()                  // check if Collection type
it.isArray()                       // check if array type
it.isEnum()                        // check if enum
it.isInterface()                   // check if interface
it.isAnnotationType()              // check if annotation type
it.isPrimitive()                   // check if primitive type
it.isPrimitiveWrapper()            // check if primitive wrapper
it.isNormalType()                  // check if primitive, wrapper, String, or Object
it.isPublic()                      // check visibility
it.isProtected()                   // check visibility
it.isPrivate()                     // check visibility
it.isPackagePrivate()              // check visibility
it.isInnerClass()                  // check if inner class
it.isStatic()                      // check if static
it.superClass()                    // parent class context
it.extends()                       // extended classes
it.implements()                    // implemented interfaces
it.outerClass()                    // outer class context (for inner classes)
```

### Method Context

```groovy
it.returnType()                    // return type context (alias: it.type())
it.type()                          // alias for returnType()
it.args()                          // parameter contexts (aliases: params(), parameters())
it.params()                        // alias for args()
it.parameters()                    // alias for args()
it.argTypes()                      // parameter type contexts
it.argCnt()                        // parameter count (alias: paramCnt())
it.paramCnt()                      // alias for argCnt()
it.containingClass()               // declaring class context
it.defineClass()                   // class where method is actually defined
it.isConstructor()                 // check if constructor
it.isOverride()                    // check if override method
it.isDefault()                     // check if default method
it.isAbstract()                    // check if abstract method
it.isSynchronized()                // check if synchronized method
it.isNative()                      // check if native method
it.isVarArgs()                     // check if varargs
it.throwsExceptions()              // thrown exception types (as String[])
```

### Field Context

```groovy
it.type()                          // field type context
it.containingClass()               // declaring class context
it.defineClass()                   // class where field is actually defined
it.isEnumField()                   // check if enum constant
it.isStatic()                      // check if static
it.isFinal()                       // check if final
it.constantValue()                 // compile-time constant value
```

### Parameter Context

```groovy
it.type()                          // parameter type context
it.isVarArgs()                     // check if varargs
it.method()                        // declaring method context
```

See [Groovy Extension](/configuration/groovy-extension) for detailed documentation of all context methods.

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

## fieldContext

Field path context, available **only in field rules**. Provides access to the current field's path in the object hierarchy.

```groovy
fieldContext.path()                 // current field path (e.g., "user.address.street")
fieldContext.property("street")    // resolve a child property path (e.g., "user.address.street")
```

This is particularly useful with `@JsonIgnoreProperties` and `@JsonUnwrapped` for tracking nested field paths.

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
