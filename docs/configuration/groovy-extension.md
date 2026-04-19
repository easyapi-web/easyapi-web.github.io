# Groovy Extension

EasyApi supports Groovy scripts for advanced customization and extension.

## Groovy Script Location

You can place Groovy scripts in the following locations:

1. **IDE Settings** — Add scripts in **Preferences(Settings)** > **Other Settings** > **EasyApi** > **Extensions** tab
2. **Local Config File** — Reference Groovy scripts from `.easy.api.config` or `.easy.api.yml`
3. **Script Executor** — Run ad-hoc Groovy scripts via **Code** > **EasyApi** > **ScriptExecutor**

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

The `it` object provides different methods depending on the element type.

### Base Context (All Types)

These methods are available on all `it` contexts:

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
it.modifiers()                     // list all modifiers
it.sourceCode()                    // full source code
it.defineCode()                    // declaration without body
it.psi()                           // raw PSI element
it.getExt("key")                   // get extension data
it.setExt("key", value)            // set extension data
```

### Class Context

```groovy
it.name()                          // class simple name
it.qualifiedName()                 // fully qualified name
it.packageName()                   // package name
it.methods()                       // all methods (as ScriptPsiMethodContext[])
it.methodCnt()                     // method count
it.fields()                        // all fields (as ScriptPsiFieldContext[])
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
it.name()                          // method name
it.returnType()                    // return type context (alias: it.type())
it.type()                          // alias for returnType()
it.args()                          // parameter contexts (aliases: params(), parameters())
it.params()                        // alias for args()
it.parameters()                    // alias for args()
it.argTypes()                      // parameter type contexts
it.argCnt()                        // parameter count (alias: paramCnt())
it.paramCnt()                      // alias for argCnt()
it.containingClass()               // declaring class context (alias: defineClass())
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
it.name()                          // field name
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
