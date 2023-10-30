# `it` Represents the Application Object of the Current Rule (a few rules do not have an application object)

- The application object provides only methods (it.method()✅) and does not provide properties (it.property❎).

### The following methods are supported for class, method, field, and arg:


| method                             | return        | desc                                                                                         | Demo                                                                         |
| ---------------------------------- | ------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| name()                             | string        | Returns the name                                                                             | it.name()                                                                    |
| hasAnn("annotation_name")          | boolean       | Checks if the object has a specific annotation                                               | it.hasAnn("org.springframework.web.bind.annotation.RequestBody")             |
| ann("annotation_name")             | string        | Retrieves the value of a specific annotation                                                 | it.ann("org.springframework.web.bind.annotation.RequestBody")                |
| ann("annotation_name","attr")      | string        | Retrieves the value of a specific attribute in a specific annotation                         | it.ann("org.springframework.web.bind.annotation.RequestMapping","path")      |
| annMap("annotation_name")          | map           | Gets all parameters of a specific annotation                                                 | it.annMap("org.springframework.web.bind.annotation.RequestMapping")          |
| annMaps("annotation_name")         | map[]         | Gets all parameters of a specific repeatable annotation                                      | it.annMaps("javax.validation.constraints.Max")                               |
| annValue("annotation_name")        | object        | Gets the value of a specific annotation (default is "value"), preserves the original type    | it.annValue("org.springframework.web.bind.annotation.RequestBody")           |
| annValue("annotation_name","attr") | object        | Gets the value of a specific parameter in a specific annotation, preserves the original type | it.annValue("org.springframework.web.bind.annotation.RequestMapping","path") |
| doc()                              | string        | Retrieves the documentation value                                                            | it.doc()                                                                     |
| doc("tag")                         | string        | Retrieves the value of a specific documentation tag (without @)                              | it.doc("return")                                                             |
| docs("tag")                        | array<string> | Retrieves the values of multiple documentation tags (without @)                              | it.docs("see")                                                               |
| doc("tag","subTag")                | string        | Retrieves the value of a second-level documentation tag                                      | it.doc("param","a")                                                          |
| hasDoc("tag")                      | string        | Checks if a specific documentation tag exists                                                | it.hasDoc("ignore")                                                          |
| hasModifier("modifier")            | string        | Checks if a specific modifier is present                                                     | it.hasModifier("public")                                                     |
| modifiers()                        | string        | Retrieves all modifiers                                                                      | it.modifiers()                                                               |
| sourceCode()                       | string        | Retrieves the source code of the current object                                              | it.sourceCode()                                                              |
| defineCode()                       | string        | Retrieves the pure definition code of the current object                                     | it.defineCode()                                                              |
| contextType()                      | string        | Retrieves the context type (class/field/method/param) of the current object                  | it.contextType()                                                             |

### Additional methods provided by different application objects:

- class

| method                          | return   | desc                                         | Demo                                    |
| ------------------------------- | -------- | -------------------------------------------- | --------------------------------------- |
| methods()                       | method[] | Retrieves all methods in the class           | it.methods()                            |
| methodCnt()                     | int      | Retrieves the number of methods in the class | it.methodCnt()                          |
| field()                         | field[]  | Retrieves all fields in the class            | it.field()                              |
| fieldCnt()                      | int      | Retrieves the number of fields in the class  | it.fieldCnt()                           |
| isExtend(superClass)            | boolean  | Checks if the class extends a specific class | it.isExtend("some.class.qualifiedName") |
| isMap()                         | boolean  | Checks if the class is a Map                 | it.isMap()                              |
| isCollection()                  | boolean  | Checks if the class is a collection          | it.isCollection()                       |
| isArray()                       | boolean  | Checks if the class is an array              | it.isArray()                            |
| toJson()                        | string   | Gets the JSON string of the current type     | it.toJson()                             |
| toJson(readGetter, readSetter)  | string   | Gets the JSON string of the current type     | it.toJson(true, true)                   |
| toJson5()                       | string   | Gets the JSON5 string of the current type    | it.toJson5()                            |
| toJson5(readGetter, readSetter) | string   | Gets the JSON5 string of the current type    | it.toJson5(true, true)                  |

- method(method/API)

| method                            | return  | desc                                                                                | Demo                     |
| --------------------------------- | ------- | ----------------------------------------------------------------------------------- | ------------------------ |
| returnType()                      | class   | Returns the type of the method                                                      | it.returnType()          |
| isVarArgs()                       | boolean | Indicates if the method has variable arguments                                      | it.isVarArgs()           |
| args()                            | arg[]   | Returns all the parameters of the method                                            | it.args()                |
| argTypes()                        | class[] | Returns the types of all the parameters of the method                               | it.argTypes()            |
| argCnt()                          | int     | Returns the number of parameters of the method                                      | it.argCnt()              |
| containingClass()                 | class   | Returns the class to which the method belongs                                       | it.containingClass()     |
| returnJson(needInfer, readGetter) | class   | Returns the JSON string representation of the object returned by the current method | it.returnJson(true,true) |

- field(Property)

| method            | return | desc                                                  | Demo                 |
| ----------------- | ------ | ----------------------------------------------------- | -------------------- |
| type()            | class  | Returns the type of the field                         | it.type()            |
| containingClass() | class  | Returns the class to which the field belongs          | it.containingClass() |
| jsonName()        | string | Returns the JSON name of the field                    | it.jsonName()        |
| jsonType()        | class  | Returns the JSON type of the field (after conversion) | it.jsonType()        |

- arg(Parameter)

| method      | return  | desc                                             | Demo           |
| ----------- | ------- | ------------------------------------------------ | -------------- |
| type()      | class   | Returns the type of the argument                 | it.type()      |
| isVarArgs() | boolean | Indicates if the argument is a variable argument | it.isVarArgs() |
