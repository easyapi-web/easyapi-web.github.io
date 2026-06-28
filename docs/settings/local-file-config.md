# Local File Config

You can create local configuration files to customize EasyApi behavior for your project. EasyApi supports two file models: the **folder-based rule model** (recommended) and the **legacy single-file model** (kept for backward compatibility).

## Folder-Based Rule Model (Recommended)

EasyApi loads rule files from `.easyapi/` folders. Files can use any name with a `.rules` or `.properties` extension.

### Project-scoped rules

Create files in `<project>/.easyapi/`:

```
<project>/
├── .easyapi/
│   ├── security.rules       # security-related rules (headers, auth)
│   ├── naming.rules          # field/param naming conventions
│   └── postman.rules         # Postman export tweaks
└── src/
```

These rules apply only to the current project.

### Global rules

Create files in `~/.easyapi/`:

```
~/.easyapi/
├── common.rules              # rules shared across all projects
└── team-conventions.rules    # team-wide conventions
```

These rules apply to every project on your machine.

### Managing rule files in the IDE

Open **Settings → EasyApi → Rules** to manage rule files without leaving the IDE. The tab has three sub-tabs:

- **Project** — create, edit, enable, and disable rule files in `<project>/.easyapi/`
- **Global** — manage rule files in `~/.easyapi/`
- **Remote** — remote config URLs (see [Remote Config](/settings/remote-config))

Individual rule files can be toggled on or off from this panel without deleting them.

### Reload on change

EasyApi watches the `.easyapi/` folders and reloads rule files automatically when they change. You can also trigger a reload by saving a file from the Rules tab or by running any export/call action.

### Rule file format

Each line is one rule: `<key>[<filter>]=<value>`. See [Config Rules](/settings/config-rule) for the full syntax, filter prefixes, and the rule-key catalog.

```properties
# security.rules
# Add an auth header to every endpoint in the admin package
method.additional.header[groovy: it.containingClass().name().startsWith("com.example.admin.")]={"name":"Authorization","value":"Bearer ${token}","desc":"auth token","required":true}

# naming.rules
# Rename createTime -> created_at in DTOs
field.name={"createTime":"created_at"}

# postman.rules
# Set the Postman host for this project
postman.host=https://api.example.com
```

## Legacy Single-File Model

The older single-file model is still supported for backward compatibility. Create a file named `.easy.api.config` in your project root directory. EasyApi will automatically load this file.

You can also use YAML format with the following file names:

- `.easy.api.config` — Properties format (default)
- `.easy.api.yml` — YAML format
- `.easy.api.yaml` — YAML format

If both a `.easyapi/` folder and a legacy `.easy.api.config` file exist, the folder-based rules take priority. See [Rule Priority](/settings/config-rule#rule-priority) for the full merge order.

## Config File Location

EasyApi searches for configuration files in the following order:

1. `.easyapi/*.rules` files in the project directory (folder model)
2. `.easy.api.config` / `.easy.api.yml` / `.easy.api.yaml` in the module directory (legacy)
3. `.easy.api.config` / `.easy.api.yml` / `.easy.api.yaml` in the project root directory (legacy)
4. Global rules in `~/.easyapi/*.rules` (folder model)
5. IDE settings (Preferences > Other Settings > EasyApi)
6. Built-in recommended configuration

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

## YAML Format

When using `.easy.api.yml` or `.easy.api.yaml`, the configuration uses YAML format:

```yaml
# Set API name
api:
  name: "#regex:^(.+)Controller$=$1"

# Set class prefix path
class:
  prefix:
    path: "${server.servlet.context-path}"

# Ignore specific fields
field:
  ignore: "groovy:it.name() == 'password'"

# Set field default value
field:
  default:
    value: "groovy:it.hasAnn('javax.validation.constraints.NotNull') ? 'required' : null"

# Type conversions
json:
  rule:
    convert:
      "#regex:org.springframework.http.ResponseEntity<(.*?)>": "${1}"
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
