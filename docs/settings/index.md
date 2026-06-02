# Settings

EasyApi provides flexible configuration through IDE settings, local config files, and remote config files.

## Configuration Methods

| Method | Scope | Description |
|--------|-------|-------------|
| [IDE Settings](./ide-setting) | Global | Configure in IntelliJ preferences |
| [Local Config File](./local-file-config) | Project/Module | `.easy.api.config` or `.easy.api.yml` in project |
| [Remote Config File](./remote-config) | Project/Module | Load config from a remote URL |

## Config Rules

Rules are the core of EasyApi's extensibility. They allow you to customize how APIs are parsed, documented, and exported.

- [Available Rules](./config-rule) — Full list of configuration rules
- [Callbacks & Events](./events/api_class_parse_before) — Parse and export event hooks
- [Script Tools](./tools) — Built-in tools for Groovy scripts

## Advanced

- [Groovy Local Extension](./advanced/groovy-ext-config) — Extend EasyApi with custom Groovy scripts
