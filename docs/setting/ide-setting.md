
# Setting in IDE (global)

- <kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>

## General

![avatar](/asset/idea-general.png)

**Common** :

 - log: In general, the log can be set to "high" to ignore unnecessary output ,when an exception occurs, it can be set to "low" to get more information

**Support** :

 - methodDoc: When checked, method documents can be exported, It can be also used to export RPC documents
Support export to ` markdown` only.

### Postman:

 - token: It is used to set or update `postman privateToken`. It can be obtained from [Postman Integrations Dashboard](https://go.postman.co/integrations/services/pm_pro_api)

**Markdown** :

 - outputDemo: Generate a response demo for each API when exporting 'markdown' documents
 - outputCharset: Select the character set to used for the 'markdown' document

**Cache** :

 - global: Global cache
 - project: Current project cache

**intelligent** :

 - inferEnable: Allows plug-ins to try to infer through code flow when encountering uncertain method return type (like: Object，Some\<Object>)
 - maxDeep: Max depth allowed to infer
 - getter as field: Try to read getter method as JSON field
 - use recommend config: Whether to use the built-in recommended configuration


## Built-in optional recommended configuration

![avatar](/asset/idea-recommend.png)

- Select the needed configuration by checking
- Source code of built-in recommended configuration : [portal](https://github.com/tangcent/easy-yapi/blob/master/idea-plugin/src/main/resources/.recommend.easy.api.config)