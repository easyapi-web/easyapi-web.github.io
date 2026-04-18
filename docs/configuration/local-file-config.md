# Local File Config

You can create a local configuration file to customize EasyApi behavior for your project.

## Creating a Config File

Create a file named `.easy.api.config` in your project root directory. EasyApi will automatically load this file.

## Config File Location

EasyApi searches for configuration files in the following order:

1. `.easy.api.config` in the module directory
2. `.easy.api.config` in the project root directory
3. IDE settings (Preferences > Other Settings > EasyApi)
4. Built-in recommended configuration

## Config File Format

The configuration file uses a simple key-value format:

```properties
# This is a comment

# Import additional properties
properties.additional=${module_path}/src/main/resources/application.properties

# Set API name
api.name=#regex:^(.+)Controller$=$1

# Set class prefix path
class.prefix.path=${server.servlet.context-path}

# Ignore specific fields
field.ignore=groovy:it.name() == "password"

# Set field default value
field.default.value=groovy:it.hasAnn("javax.validation.constraints.NotNull") ? "required" : null
```

## Property Resolution

You can reference Spring properties in your configuration:

```properties
# Resolve spring properties
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false
```

The `###set ignoreUnresolved = true` directive tells EasyApi to not throw an error if the property cannot be resolved.

## Adding Config Sources

You can add additional configuration sources:

```properties
# Add local property files
properties.additional=${module_path}/src/main/resources/application.properties
properties.additional=${module_path}/src/main/resources/application.yml

# Add remote config files
properties.additional=https://raw.githubusercontent.com/your-org/configs/main/easyapi.config
```
