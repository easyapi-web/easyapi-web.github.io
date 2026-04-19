# Groovy Extension

EasyApi supports Groovy scripts for advanced customization and extension.

## Groovy Script Location

You can place Groovy scripts in the following locations:

1. **IDE Settings** — Add scripts in **Preferences(Settings)** > **Other Settings** > **EasyApi** > **Extensions** tab
2. **Local Config File** — Reference Groovy scripts from `.easy.api.config` or `.easy.api.yml`
3. **Script Executor** — Run ad-hoc Groovy scripts via **Tools** > **EasyApi** > **Script Executor**

## Using Groovy in Rules

Groovy scripts in rules have access to the current context object (`it`):

```properties
field.ignore=groovy:it.name() == "password" || it.name() == "secret"

field.doc=groovy:it.ann("io.swagger.annotations.ApiModelProperty")?.value()

field.required=groovy:it.hasAnn("javax.validation.constraints.NotNull")
```

## Available Context Objects

In Groovy rules, the following objects are available:

| Object | Alias | Description |
|--------|-------|-------------|
| `it` | — | Current rule context (class, method, field, or param) |
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
| `fieldContext` | — | Field path context (available in field rules) |

See [Script Tools Reference](/tools/script-tools) for detailed documentation of each tool.

## Context-Specific `it` Methods

The `it` object provides different methods depending on the element type:

### Class Context

```groovy
it.name()                          // class simple name
it.qualifiedName()                 // fully qualified name
it.packageName()                   // package name
it.methods()                       // all methods
it.fields()                        // all fields
it.isExtend("java.lang.Exception") // check inheritance
it.isMap()                         // check if Map type
it.isCollection()                  // check if Collection type
it.isEnum()                        // check if enum
it.isInterface()                   // check if interface
it.superClass()                    // parent class context
it.extends()                       // extended classes
it.implements()                    // implemented interfaces
```

### Method Context

```groovy
it.name()                          // method name
it.returnType()                    // return type context
it.args()                          // parameter contexts
it.containingClass()               // declaring class context
it.isConstructor()                 // check if constructor
it.isOverride()                    // check if override method
it.throwsExceptions()              // thrown exception types
```

### Field Context

```groovy
it.name()                          // field name
it.type()                          // field type context
it.containingClass()               // declaring class context
it.isEnumField()                   // check if enum constant
it.isStatic()                      // check if static
it.isFinal()                       // check if final
it.constantValue()                 // compile-time constant value
```

### Parameter Context

```groovy
it.name()                          // parameter name
it.type()                          // parameter type context
it.isVarArgs()                     // check if varargs
it.method()                        // declaring method context
```

### Type Context

Available via `it.type()` on fields, methods, and parameters:

```groovy
it.type().name()                   // full type name (e.g., "java.util.List<java.lang.String>")
it.type().simpleName()             // simple type name (e.g., "List")
it.type().isMap()                  // check if Map type
it.type().isCollection()           // check if Collection type
it.type().isArray()                // check if array type
it.type().isExtend("java.lang.Exception")  // check inheritance
```
