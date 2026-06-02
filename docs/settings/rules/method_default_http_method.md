# method.default.http.method

Set the default HTTP method when not specified by annotations.

## Usage

```properties
method.default.http.method=groovy:it.name().startsWith("save") ? "POST" : "GET"
```

## Example

```properties
# Infer HTTP method from method name
method.default.http.method=groovy:it.name().startsWith("save") || it.name().startsWith("create") ? "POST" : "GET"
```
