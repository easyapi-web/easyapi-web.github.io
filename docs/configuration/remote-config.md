# Remote Config

You can store your EasyApi configuration in a remote location and have it loaded automatically.

## Method 1: IDE Settings

Add the remote configuration file URL via **Preferences(Settings)** > **Other Settings** > **EasyApi** > **Remote**.

## Method 2: Properties File

Add `properties.additional=url` in your [local config file](/configuration/local-file-config):

```properties
properties.additional=https://raw.githubusercontent.com/tangcent/easy-api/master/third/swagger.config
```

## Example: Loading Swagger Config

```properties
# Load the built-in Swagger support configuration
properties.additional=https://raw.githubusercontent.com/tangcent/easy-api/master/third/swagger.config
```

## Multiple Remote Configs

You can load multiple remote configuration files:

```properties
properties.additional=https://raw.githubusercontent.com/your-org/configs/main/base.config
properties.additional=https://raw.githubusercontent.com/your-org/configs/main/swagger.config
properties.additional=https://raw.githubusercontent.com/your-org/configs/main/validation.config
```

::: tip
Remote configs are loaded after local configs, so they can override local settings.
:::
