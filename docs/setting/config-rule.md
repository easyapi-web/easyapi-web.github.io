# Supported rules

| &nbsp;&nbsp;&nbsp;&nbsp;key | target(context) | version | desc |
| ------------ | ------------ | ------------ |------------ |
| &nbsp;&nbsp;&nbsp;&nbsp;[module](rules/module.md) | class | v0.7.2+ | group api |
| &nbsp;&nbsp;&nbsp;&nbsp;[ignore](rules/ignore.md) | class/method | v0.7.2+ | ignore API |
| &nbsp;&nbsp;&nbsp;&nbsp;[json.rule.field.name](rules/json_rule_field_name.md) | field | v0.7.2+ | Set the output field name(while the field name used in JSON is inconsistent with the field name in the class) |
| &nbsp;&nbsp;&nbsp;&nbsp;[json.rule.field.ignore](rules/json_rule_field_ignore.md) | field | v0.7.2+ | Ignore fields (the field will be skipped from the serialized output) |
| ☆[json.rule.convert](rules/json_rule_convert.md) | - | v0.7.2+ | Mark some type conversions to other type processing, usually when spring's custom type converter is used |
| &nbsp;&nbsp;&nbsp;&nbsp;[json.rule.enum.convert](rules/json_rule_enum_convert.md) | class | v1.2.0+ | Special conversion for enumeration types |
| ☆[doc.field](rules/doc_field.md) | field | v0.7.2+ | Additional comments for fields |
| &nbsp;&nbsp;&nbsp;&nbsp;[doc.method](rules/doc_method.md) | method | v0.7.2+ | Additional comments for method (API) |
| &nbsp;&nbsp;&nbsp;&nbsp;[doc.class](rules/doc_class.md)  | class | v1.3.0+ | Additional comments for class |
| &nbsp;&nbsp;&nbsp;&nbsp;[doc.param](rules/doc_param.md)  | arg | v1.3.0+ | Additional comments for parameter |
| &nbsp;&nbsp;&nbsp;&nbsp;[param.required](rules/param_required.md) | arg | v0.7.3+ | Whether the API parameter is required (NotNull) |
| &nbsp;&nbsp;&nbsp;&nbsp;[param.ignore](rules/param_ignore.md)  | arg | v1.3.0+ | Ignore API parameter |
| &nbsp;&nbsp;&nbsp;&nbsp;[param.default.value](rules/param_default_value.md) | arg | v1.3.0+ | Default value for API parameter |
| &nbsp;&nbsp;&nbsp;&nbsp;[method.additional.header](rules/method_additional_header.md) | method | v1.3.0+ | API requires additional headers |
|  |  |  | {name: "header name",value: "",desc: "",required:false, example:""} |
| &nbsp;&nbsp;&nbsp;&nbsp;method.additional.param | method | v1.3.0+ | API requires additional parameters |
|  |  |  | {name: "param name",value: "defaultValue",desc: "",required:false} |
| &nbsp;&nbsp;&nbsp;&nbsp;method.additional.response.header | method | v1.3.0+ | API response contains additional headers |
|  |  |  | {name: "header name",value: "",desc: "",required:false, example:""} |
| &nbsp;&nbsp;&nbsp;&nbsp;[field.required](rules/field_required.md) | field | v0.7.3+ | Whether the field is required (NotNull) |
| &nbsp;&nbsp;&nbsp;&nbsp;[field.default.value](rules/field_default_value.md) | - | v1.7.1+ | The default value of a field |
| &nbsp;&nbsp;&nbsp;&nbsp;[mdoc.class.filter](rules/mdoc_class_filter.md) | class | v0.9.5+ | Filter classes which can export method documents(rpc) |
| &nbsp;&nbsp;&nbsp;&nbsp;mdoc.method.filter | method | v0.9.5+ | Filter methods which can export method documents(rpc) |
| &nbsp;&nbsp;&nbsp;&nbsp;[class.prefix.path](rules/class_prefix_path.md)  | class | v1.3.0+ | Set base path for APIs in the class |
| &nbsp;&nbsp;&nbsp;&nbsp;[constant.field.ignore](rules/constant_field_ignore.md)  | field | v1.3.8+ | ignore constant field |
| ☆[method.return.main](rules/method_return_main.md)  | method | v1.3.8+ | The core body of the return value |
| ☆[method.return](rules/method_return.md)  | method | v1.6.1+ | The type of return value |
| &nbsp;&nbsp;&nbsp;&nbsp;[api.name](rules/api_name.md)  | method | v1.4.1+ | the name of api |
| &nbsp;&nbsp;&nbsp;&nbsp;[method.default.http.method](rules/method_default_http_method.md)  | method | v1.4.2+ | the default httpmethod of the API |
| &nbsp;&nbsp;&nbsp;&nbsp;[postman.host](rules/postman_host.md)  | class | v1.5.2+ | Set the host of API (for 'postman' only)  |


---


# Supported Simple Configurations

*Simple configurations without context*

| &nbsp;&nbsp;&nbsp;&nbsp;key | target(context) | version | desc |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| &nbsp;&nbsp;&nbsp;&nbsp;dev | v2.2.1+ | bool | Enables development mode, providing more detailed logs. | dev=true |
| &nbsp;&nbsp;&nbsp;&nbsp;max.deep | v2.3.6+ | int | Sets the maximum depth for `json` parsing, default is 6. | max.deep=8 |
| &nbsp;&nbsp;&nbsp;&nbsp;max.elements | v2.3.6+ | int | Sets the maximum field count for `json` parsing, default is 256. | max.elements=512 |
| &nbsp;&nbsp;&nbsp;&nbsp;json.cache.disable | v2.1.0+ | bool | Disables `json` parsing cache. | json.cache.disable=true |
| &nbsp;&nbsp;&nbsp;&nbsp;http.timeOut | v2.1.0+ | int | Sets the `http` request timeout (s), prioritized over `setting`. | http.timeOut=5 |
| &nbsp;&nbsp;&nbsp;&nbsp;ignore_static_and_final_field | v2.1.0+ | bool | By default, the plugin ignores static final fields. Set to false to change this behavior.  | ignore_static_and_final_field=false | |
| &nbsp;&nbsp;&nbsp;&nbsp;ignore_irregular_api_method | v2.5.4+ | bool | By default, the plugin ignores API methods with names matching basic Object method names. Set to false to change this behavior. | ignore_irregular_api_method=false | |
| &nbsp;&nbsp;&nbsp;&nbsp;doc.source.disable | v2.5.5+ | bool | Set to true to prevent the plugin from reading comments.   | doc.source.disable=true | |


---

# Supported Callbacks

*Some callback methods might not have `it`, but additional context may be available for use.*

| &nbsp;&nbsp;&nbsp;&nbsp;key | target(context) | version | desc |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| &nbsp;&nbsp;&nbsp;&nbsp;[api.class.parse.before](events/api_class_parse_before.md)  | class | None  | v2.2.8+ | Callback before parsing `api` |
| &nbsp;&nbsp;&nbsp;&nbsp;[api.class.parse.after](events/api_class_parse_after.md)  | class | None  | v2.2.8+ | Callback after parsing `api` |
| &nbsp;&nbsp;&nbsp;&nbsp;[api.method.parse.before](events/api_method_parse_before.md)  | method | None  | v2.2.8+ | Callback before parsing `api` method |
| &nbsp;&nbsp;&nbsp;&nbsp;[api.method.parse.after](events/api_method_parse_after.md)  | method | None  | v2.2.8+ | Callback after parsing `api` method |
| &nbsp;&nbsp;&nbsp;&nbsp;[api.param.parse.before](events/api_param_parse_before.md)  | param | None  | v2.2.8+ | Callback before parsing `api` parameter |
| &nbsp;&nbsp;&nbsp;&nbsp;[api.param.parse.after](events/api_param_parse_after.md)  | param | None  | v2.2.8+ | Callback after parsing `api` parameter |
| &nbsp;&nbsp;&nbsp;&nbsp;[export.after](rules/export_after.md)  | method | [api](tools/api.html) | v2.0.1+ | Callback after each api export is complete |
| &nbsp;&nbsp;&nbsp;&nbsp;[http.call.before](rules/http_call_before.md)  | None  | [request](tools/httpClient.html#request) | v1.9.0+ | Callback before http request |
| &nbsp;&nbsp;&nbsp;&nbsp;[http.call.after](rules/http_call_after.md)  | None  | [request](tools/httpClient.html#request), [response](tools/httpClient.html#response) | v1.9.0+ | Callback after http request |
| &nbsp;&nbsp;&nbsp;&nbsp;[json.class.parse.before](events/json_class_parse_before.md)  | class | None  |  v2.2.8+ | Callback before parsing class |
| &nbsp;&nbsp;&nbsp;&nbsp;[json.class.parse.after](events/json_class_parse_after.md)  | class | None  | v2.2.8+ | Callback after parsing class |
| &nbsp;&nbsp;&nbsp;&nbsp;[json.field.parse.before](events/json_field_parse_before.md)  | field | None  | v2.2.8+ | Callback before parsing field |
| &nbsp;&nbsp;&nbsp;&nbsp;[json.field.parse.after](events/json_field_parse_after.md)  | field | None  | v2.2.8+ | Callback after parsing field |

---


# Simple rules

- \# Read tag on comment
   ```java
   /**
    * @fake
    */
   ```

- @ Read annotation
   - @xxx Read annotations on methods or fields
   ```java
   @RequestMapping("path")
   public class FakeClass{...}
   ```
   - @xxx#yyy Read attr value in annotation on method or field
   ```java
   @RequestMapping(value = "path")
   public class FakeClass{...}
   ```

# Advanced script rules

- `groovy` rule: `groovy:groovyScript`
- ~~`js` rule: `js:jsScript`~~

   > It is recommended to use `groovy` as the first choice because the JS engine may be missing after `jdk11`.

- Tools / objects are available in scripts: [tools](tools.md)
- `Debug` Script : [Deubg](../documents/debug.html)
