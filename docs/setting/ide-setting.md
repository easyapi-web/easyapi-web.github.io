# IDE Settings (Global)

Navigate to: <kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>

## General Settings

![EasyApi General Settings](/asset/idea-general.png)

### Common

- **log**: Controls the verbosity of logging output
    - Set to "high" for normal operation (less output)
    - Set to "low" when troubleshooting issues (more detailed information)

### Support

- **methodDoc**: When enabled, allows:
    - Export of method documentation
    - Export of RPC documentation
    - Currently supports export to `markdown` format only

### Postman

- **token**: Required for Postman API integration
    - Obtain your token from [Postman Integrations Dashboard](https://go.postman.co/integrations/services/pm_pro_api)
    - Used for API calls to Postman services

### Markdown

- **outputDemo**: When enabled, generates example response data for each API in exported `markdown` documents
- **outputCharset**: Specify the character encoding for generated `markdown` documents

### Cache

- **global**: Cache across all projects
- **project**: Project-specific caches

### Intelligent

- **inferEnable**: Enables smart type inference when encountering uncertain method return types (e.g., Object,
  Some\<Object>)
- **maxDeep**: Sets the recursion limit for type inference
- **getter as field**: Treats getter methods as JSON fields in processing
- **setter as Field**: Treats setter methods as JSON fields in processing
- **use recommend config**: Enables built-in recommended settings

## Built-in Recommended Configuration

![Recommended Configuration](/asset/idea-recommend.png)

- Select desired configurations by checking the corresponding options
- View the source code of built-in
  recommendations: [GitHub Repository](https://github.com/tangcent/easy-api/blob/master/idea-plugin/src/main/resources/.recommend.easy.api.config)