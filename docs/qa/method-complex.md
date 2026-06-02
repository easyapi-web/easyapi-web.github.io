# Complex Class Blocked

If you encounter a "too complex" error when parsing a class, it usually means the class has too many fields or deep nesting that exceeds EasyApi's default limits.

## Increase Field Depth

Use `field.max.depth` to increase the maximum nesting depth:

```properties
field.max.depth=10
```

## Increase Parameter Depth

Use `param.max.depth` for parameter types:

```properties
param.max.depth=5
```

## Ignore Problematic Fields

If specific fields cause the issue, ignore them:

```properties
field.ignore=groovy:it.type().qualifiedName() == "com.example.VeryComplexType"
```

## Use Type Conversion

Convert complex types to simpler representations:

```properties
json.rule.convert[#regex:com.example.VeryComplexType]=java.lang.Object
```
