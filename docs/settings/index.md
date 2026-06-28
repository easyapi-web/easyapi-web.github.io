# Settings

EasyApi provides flexible configuration through IDE settings, local rule files, and remote config files.

## Configuration Methods

| Method | Scope | Description |
|--------|-------|-------------|
| [IDE Settings](./ide-setting) | Global / Project | Configure in IntelliJ preferences, including the Rules tab and AI tab |
| [Local Config File](./local-file-config) | Project / Global | `.easyapi/*.rules` folder model (recommended) or legacy `.easy.api.config` |
| [Remote Config File](./remote-config) | Project | Load config from a remote URL |

## Config Rules

Rules are the core of EasyApi's extensibility. They allow you to customize how APIs are parsed, documented, and exported. EasyApi understands standard HTTP frameworks out of the box — most projects need no custom rules.

- [Config Rules](./config-rule) — Rule syntax, filter prefixes, and ways to write rules (built-in AI Assistant or external skill)
- [Callbacks & Events](./events/api_class_parse_before) — Parse and export event hooks
- [Script Tools](./tools) — Built-in tools for Groovy scripts

## Advanced

- [Groovy Local Extension](./advanced/groovy-ext-config) — Extend EasyApi with custom Groovy scripts
