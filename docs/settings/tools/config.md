# config

Read configuration values from `.easy.api.config` / `.easy.api.yml` files. Alias: `C`

## Usage

```groovy
config.get("key")                   // first value for key
config.getValues("key")             // all values for key
config.resolveProperty("${server.port}")  // resolve placeholders
```
