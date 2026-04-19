# Jackson

EasyApi supports Jackson serialization annotations for accurate JSON representation.

## Supported Annotations

| Annotation | Description |
|------------|-------------|
| `@JsonProperty` | Specifies the JSON property name and index for ordering |
| `@JsonIgnore` | Excludes a field from JSON serialization |
| `@JsonIgnoreProperties` | Excludes multiple fields from JSON serialization (class-level and nested) |
| `@JsonInclude` | Controls when a field is included in JSON |
| `@JsonFormat` | Specifies the format for date/time fields |
| `@JsonAlias` | Defines alternative names for a property |
| `@JsonNaming` | Defines a naming strategy for properties |
| `@JsonView` | Controls which fields are included in a view |
| `@JsonTypeInfo` / `@JsonSubTypes` | Handles polymorphic types |
| `@JsonPropertyOrder` | Specifies the order of properties in JSON output |
| `@JsonUnwrapped` | Flattens a nested object's properties into the parent, with optional prefix/suffix |

## Example

```java
public class User {

    @JsonProperty("user_name")
    private String name;

    @JsonIgnore
    private String password;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String email;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date birthday;
}
```

## @JsonPropertyOrder Support

EasyApi respects `@JsonPropertyOrder` to control field ordering in the output:

```java
@JsonPropertyOrder({"name", "email", "id"})
public class UserDTO {
    private Long id;        // Will appear 3rd
    private String name;    // Will appear 1st
    private String email;   // Will appear 2nd
}
```

When `alphabetic = true` is set, fields not listed in the annotation will be sorted alphabetically:

```java
@JsonPropertyOrder(value = {"name"}, alphabetic = true)
public class UserDTO {
    private Long id;        // Will appear after "name", sorted alphabetically
    private String name;    // Will appear 1st
    private String email;   // Will appear after "name", sorted alphabetically
}
```

The `@JsonProperty(index)` annotation is also supported for individual field ordering.

## @JsonIgnoreProperties Support

EasyApi respects `@JsonIgnoreProperties` on both classes and nested fields:

```java
@JsonIgnoreProperties({"internalId", "metadata"})
public class UserDTO {
    private Long internalId;  // Will be ignored
    private String name;      // Will be included
    private String metadata;  // Will be ignored
}
```

Nested `@JsonIgnoreProperties` on fields is also supported — when a field's type has `@JsonIgnoreProperties`, those properties will be excluded from the nested object in the output.

## @JsonUnwrapped Support

EasyApi handles `@JsonUnwrapped` by flattening the nested object's properties into the parent. It also supports the `prefix` and `suffix` attributes:

```java
public class User {
    private String name;

    @JsonUnwrapped(prefix = "address_")
    private Address address;
}

public class Address {
    private String street;
    private String city;
}
```

The resulting JSON will be:

```json
{
    "name": "John",
    "address_street": "123 Main St",
    "address_city": "Springfield"
}
```

## @JsonView Support

EasyApi respects `@JsonView` annotations to control which fields appear in the API response. Fields are included only if their `@JsonView` matches the view specified on the API method:

```java
public class User {
    @JsonView(Views.Public.class)
    private String name;

    @JsonView(Views.Internal.class)
    private String email;
}

@RestController
public class UserController {
    @JsonView(Views.Public.class)
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        // Only "name" will appear in the response
    }
}
```

## JSON Rule Configuration

You can customize JSON serialization behavior using rules:

```properties
# Ignore specific fields by name
json.rule.field.ignore=#regex:password|secret|token

# Rename fields
json.rule.field.name=#regex:^(.)=$1

# Convert types
json.rule.convert[#regex:com.example.Wrapper<(.*?)>]=${1}
```

See [JSON Rules](/rules/json-rules) for the full list of available rules.
