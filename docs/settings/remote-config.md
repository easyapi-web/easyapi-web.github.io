# Remote Config

You can store your EasyApi configuration in a remote location and have it loaded automatically.

## Method 1: IDE Settings

Add the remote configuration file URL via **Preferences(Settings)** > **Other Settings** > **EasyApi** > **Remote**.

## Method 2: `###include` Directive (preferred, since v3.1.6)

Use the `###include` directive in any [local config file](/settings/local-file-config) to pull a remote config inline:

```properties
###include https://raw.githubusercontent.com/tangcent/easy-api/master/third/swagger.config
```

The directive must be on its own line. Only `http` and `https` URLs are supported. The included file is parsed with the caller's directive state, so `###set` options carry in. See [Local File Config — Including Other Config Files](/settings/local-file-config#including-other-config-files) for the full behavior.

## Method 3: `properties.additional` (legacy)

Add `properties.additional=url` in your [local config file](/settings/local-file-config). This is the legacy form; `###include` is preferred and behaves identically:

```properties
properties.additional=https://raw.githubusercontent.com/tangcent/easy-api/master/third/swagger.config
```

## Example: Loading Swagger Config

```properties
# Load the built-in Swagger support configuration
###include https://raw.githubusercontent.com/tangcent/easy-api/master/third/swagger.config
```

## Multiple Remote Configs

You can load multiple remote configuration files:

```properties
###include https://raw.githubusercontent.com/your-org/configs/main/base.config
###include https://raw.githubusercontent.com/your-org/configs/main/swagger.config
###include https://raw.githubusercontent.com/your-org/configs/main/validation.config
```

::: tip
Remote configs are loaded after local configs, so they can override local settings.
:::
