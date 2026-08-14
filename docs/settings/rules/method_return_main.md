# method.return.main

Specify a field name within the response type where the `@return` doc comment should be placed.

This is useful for wrapper types like `Result<T>`, where you want the `@return` Javadoc to be attached to the main data field (e.g., `data`) rather than the wrapper itself.

## Usage

```properties
method.return.main[groovy:it.returnType().isExtend("com.example.Result")]=data
```

This tells EasyApi: for methods whose return type extends `Result`, attach the `@return` doc comment to the field named `data`.

## Example

Given this method:

```java
/**
 * @return processed result
 */
public Result<Void> process() { ... }
```

And this rule:

```properties
method.return.main[groovy:it.returnType().isExtend("com.example.Result")]=data
```

The `@return "processed result"` comment will be attached to the `data` field in the `Result` response model, rather than to the `Result` wrapper itself.

## Conditional rules

You can use a filter to apply the rule only to specific methods:

```properties
# Only attach @return to "data" when the return type extends Result
method.return.main[groovy:it.returnType().isExtend("com.example.Result")]=data
```

Without a filter, the rule applies to all methods:

```properties
method.return.main=groovy:"data"
```

## Dotted paths

The field name supports dotted paths for nested fields:

```properties
# Attach @return to the "items" field inside "data"
method.return.main=groovy:"data.items"
```

## Auto-detection

When no `method.return.main` rule is set, EasyApi can auto-detect the main field if the **Infer Return Main** IDE setting is enabled (default: on). It finds the first generic type parameter field in the response model (e.g., `data: T` in `Result<T>`).

You can configure this in:

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>
