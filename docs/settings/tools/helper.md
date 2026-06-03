# helper

Class lookup and link resolution utilities for scripts. Provides methods to find classes and resolve javadoc links. Alias: `H`

## Usage

````properties
method.return=groovy:```
def resolvedClass = helper.findClass("com.example.User")
if (resolvedClass) {
    return resolvedClass.name()
}
return it.returnType().name()
```
````

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `helper.findClass(canonicalText)` | `ClassContext?` | Find a class by its fully qualified name |
| `helper.resolveLink(canonicalText)` | `ElementContext?` | Resolve a javadoc link to a class, method, or field |
| `helper.resolveLinks(canonicalText)` | `List<ElementContext>` | Resolve all matching links |

## Examples

### Find Class by Name

````properties
method.return=groovy:```
def className = it.ann("RequestMapping", "value")
if (className) {
    def cls = helper.findClass(className)
    if (cls) {
        return cls.qualifiedName()
    }
}
return it.returnType().name()
```
````

### Resolve Javadoc Link

````properties
field.mock=groovy:```
def link = it.doc("see")
if (link) {
    def resolved = helper.resolveLink(link)
    if (resolved) {
        logger.info("Resolved link to: " + resolved.name())
    }
}
return null
```
````

### Resolve All Links

````properties
field.description=groovy:```
def seeTags = it.docs("see")
if (seeTags) {
    seeTags.each { tag ->
        def targets = helper.resolveLinks(tag)
        targets.each { target ->
            logger.info("Found: " + target.name())
        }
    }
}
return it.doc()
```
````

### Cross-reference Class Fields

````properties
field.mock=groovy:```
def targetClassName = config.get("mock.source.class")
if (targetClassName) {
    def cls = helper.findClass(targetClassName)
    if (cls) {
        def fields = cls.fields()
        def matchingField = fields.find { it.name() == it.name() }
        if (matchingField) {
            return matchingField.constantValue() ?: "mock_value"
        }
    }
}
return null
```
````

## Notes

- `findClass` searches the full project scope including dependencies
- `resolveLink` resolves `@see` and `{@link}` references in javadoc
- The returned context objects support all the same methods as the corresponding `it` context types

## See Also

- [it](./it) - Current context object
- [tool](./tool) - General utility methods
- [logger](./logger) - Logging utility
