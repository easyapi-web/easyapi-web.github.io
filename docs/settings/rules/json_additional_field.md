# json.additional.field

Add extra fields to the JSON output of a class.

## Usage

```properties
json.additional.field=groovy:{"name":"_type","value":"User","desc":"Object type","required":false}
```

This rule uses merge mode — multiple values will be accumulated.

## Example

```properties
json.additional.field=groovy:{"name":"_type","value":it.name(),"desc":"Object type","required":false}
json.additional.field=groovy:{"name":"_timestamp","value":"0","desc":"Timestamp","required":false}
```
