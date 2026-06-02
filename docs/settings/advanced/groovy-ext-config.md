# Groovy Local Extension

EasyApi supports Groovy scripts for advanced customization and extension.

## Groovy Script Location

You can place Groovy scripts in the following locations:

1. **IDE Settings** — Add scripts in **Preferences(Settings)** > **Other Settings** > **EasyApi** > **Extensions** tab
2. **Local Config File** — Reference Groovy scripts from `.easy.api.config` or `.easy.api.yml`
3. **Script Executor** — Run ad-hoc Groovy scripts via **Code** > **EasyApi** > **ScriptExecutor**

## Using Groovy in Rules

Groovy scripts in rules have access to the current context object (`it`):

```properties
field.ignore=groovy:it.name() == "password" || it.name() == "secret"

field.doc=groovy:it.ann("io.swagger.annotations.ApiModelProperty")?.value()

field.required=groovy:it.hasAnn("javax.validation.constraints.NotNull")
```

## Available Context Objects

In Groovy rules, the following objects are available:

| Object | Alias | Description |
|--------|-------|-------------|
| `it` | — | Current rule context (class, method, field, or param) |
| `logger` | `LOG` | Logging utility |
| `tool` | `T` | General utility (string, collection, JSON, time, clipboard) |
| `regex` | `RE` | Regular expression utilities |
| `config` | `C` | Configuration reader |
| `files` | `F` | File operations |
| `helper` | `H` | Class lookup and link resolution |
| `runtime` | `R` | Project/module metadata |
| `session` | `S`, `sessionStorage` | Session-scoped key-value storage |
| `localStorage` | — | Persistent key-value storage |
| `httpClient` | — | HTTP client for making requests |
| `api` | — | API endpoint context (available during export rules only) |
| `fieldContext` | — | Field path context (available in field rules) |

See [Script Tools Reference](/settings/tools) for detailed documentation of each tool.

## Context-Specific `it` Methods

The `it` object provides different methods depending on the element type. See [it](/settings/tools/it) for the full reference.
