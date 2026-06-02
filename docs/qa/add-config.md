# How to Add Config File

EasyApi looks for configuration files in specific locations. Here's how to add one to your project.

## File Names

EasyApi supports the following config file names:

- `.easy.api.config` — Properties format (default)
- `.easy.api.yml` — YAML format
- `.easy.api.yaml` — YAML format

## File Location

Create the file in your project root directory or module directory. EasyApi searches in this order:

1. Module directory (e.g., `my-module/.easy.api.config`)
2. Project root directory (e.g., `.easy.api.config`)
3. IDE settings
4. Built-in recommended configuration

## Example

Create `.easy.api.config` in your project root:

```properties
# Set API name
api.name=#regex:^(.+)Controller$=$1

# Ignore deprecated APIs
ignore=groovy:it.hasAnn("java.lang.Deprecated")

# Set field required by validation
field.required=@javax.validation.constraints.NotNull
```

See [Local File Config](/settings/local-file-config) for more details.
