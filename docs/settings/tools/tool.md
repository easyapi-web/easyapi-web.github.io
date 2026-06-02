# tool

General utility operations. Alias: `T`

## Collection & Type Checks

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

## String Operations

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

## JSON

```groovy
tool.parseJson('{"key":"value"}')   // parse JSON string
tool.toJson(obj)                    // serialize to JSON
tool.prettyJson(obj)                // serialize to pretty JSON
```

## Time & Date

```groovy
tool.now()                          // current time: "2025-01-01 12:00:00"
tool.now("yyyy-MM-dd")             // formatted current time
tool.today()                        // today's date: "2025-01-01"
tool.format(1704067200000, "yyyy-MM-dd")
```

## Clipboard

```groovy
tool.copy2Clipboard("text to copy")
```

## Debug

```groovy
tool.debug(any)                     // print type & available methods
```
