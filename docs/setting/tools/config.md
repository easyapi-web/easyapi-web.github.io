# `config` - Configuration Reading Tool (v1.9.5+)

- Read the current [configuration](../local-file-config.md).

## Main Methods

| Method  |  Return Value  |  Description  |  Example  |
| ------------ | ------------ | ------------ |------------ |
| get(key) | string | Retrieve a value from the configuration | config.get("key")|
| getValues(key) | array\<string> | Retrieve multiple values from the configuration | config.getValues("key")|
| resolveProperty(str) | string | Resolve placeholders in a string | config.resolveProperty("${key}")|
