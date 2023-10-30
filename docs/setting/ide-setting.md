
# Setting in IDE (global)

- <kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>

## General

![avatar](/asset/idea-general.png)

**Common** :

 - log: In general, the log can be set to "high" to ignore unnecessary output. When an exception occurs, it can be set to "low" to obtain more information.

**Support** :

 - methodDoc: When enabled, method documents can be exported. It can also be used to export RPC documents. Only export to `markdown` format is supported.

### Postman:

 - token: Token refers to the `postman privateToken` which is used to make calls to the Postman API. It can be obtained from [Postman Integrations Dashboard](https://go.postman.co/integrations/services/pm_pro_api)

**Markdown** :

 - outputDemo: Generate a response demo for each API when exporting `markdown` documents
 - outputCharset: Select the character set to used for the `markdown` document

**Cache** :

 - global: Global cache.
 - project: Cache specific to the current project.

**intelligent** :

 - inferEnable: Allows plugins to attempt inference through code flow when encountering uncertain method return types (e.g., Object, Some\<Object>).
 - maxDeep: Maximum depth allowed for inference.
 - getter as field: Tries to interpret getter methods as JSON fields.
 - setter as field: Tries to interpret setter methods as JSON fields.
 - use recommend config: Determines whether to use the built-in recommended configuration.


## Built-in optional recommended configuration

![avatar](/asset/idea-recommend.png)

- Select the desired configuration by checking the corresponding options.
- Source code of built-in recommended configuration : [portal](https://github.com/tangcent/easy-api/blob/master/idea-plugin/src/main/resources/.recommend.easy.api.config)