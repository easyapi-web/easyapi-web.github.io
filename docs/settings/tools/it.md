# it

The current PSI element context. Methods vary by element type (class, method, field, parameter).

## Base Context (All Types)

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

## Class Context

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

## Method Context

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

## Field Context

```groovy
it.type()                          // field type context
it.containingClass()               // declaring class context
it.defineClass()                   // class where field is actually defined
it.isEnumField()                   // check if enum constant
it.isStatic()                      // check if static
it.isFinal()                       // check if final
it.constantValue()                 // compile-time constant value
```

## Parameter Context

```groovy
it.type()                          // parameter type context
it.isVarArgs()                     // check if varargs
it.method()                        // declaring method context
```
