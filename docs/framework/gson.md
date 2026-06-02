# Gson

EasyApi supports Gson serialization annotations for accurate JSON representation.

## Supported Annotations

| Annotation | Description |
|------------|-------------|
| `@SerializedName` | Specifies the JSON property name |
| `@Expose` | Controls whether a field is serialized or deserialized |

## Example

```java
public class User {

    @SerializedName("user_name")
    private String name;

    @Expose(serialize = false)
    private String password;

    @Expose
    private String email;
}
```

## How It Works

The Gson extension is provided by the `gson` extension (enabled by default). It applies the following rules:

```properties
# Read field name from @SerializedName
field.name=@com.google.gson.annotations.SerializedName#value

# Ignore fields where @Expose.serialize is false
field.ignore=!@com.google.gson.annotations.Expose#serialize
```

### @SerializedName

When a field is annotated with `@SerializedName`, EasyApi uses the specified name as the JSON property name:

```java
@SerializedName("user_name")
private String name;  // Will appear as "user_name" in the API documentation
```

### @Expose

When a field is annotated with `@Expose(serialize = false)`, EasyApi excludes it from the API documentation:

```java
@Expose(serialize = false)
private String password;  // Will be ignored in the API documentation
```

Fields without `@Expose` are included by default. If you want to exclude non-annotated fields, add a custom rule:

```properties
field.ignore=groovy:!it.hasAnn("com.google.gson.annotations.Expose")
```
