# Jackson

EasyApi supports Jackson serialization annotations for accurate JSON representation.

## Supported Annotations

| Annotation | Description |
|------------|-------------|
| `@JsonProperty` | Specifies the JSON property name |
| `@JsonIgnore` | Excludes a field from JSON serialization |
| `@JsonIgnoreProperties` | Excludes multiple fields from JSON serialization |
| `@JsonInclude` | Controls when a field is included in JSON |
| `@JsonFormat` | Specifies the format for date/time fields |
| `@JsonAlias` | Defines alternative names for a property |
| `@JsonNaming` | Defines a naming strategy for properties |
| `@JsonView` | Controls which fields are included in a view |
| `@JsonTypeInfo` / `@JsonSubTypes` | Handles polymorphic types |

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

## @JsonIgnoreProperties Support

EasyApi respects `@JsonIgnoreProperties` on both classes and fields:

```java
@JsonIgnoreProperties({"internalId", "metadata"})
public class UserDTO {
    private Long internalId;  // Will be ignored
    private String name;      // Will be included
    private String metadata;  // Will be ignored
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
