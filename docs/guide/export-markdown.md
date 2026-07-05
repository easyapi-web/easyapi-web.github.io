# Export to Markdown

EasyApi can generate Markdown documentation from your API endpoints. Since v3.1.6 the output is driven by a **free-form Markdown template** that you can customize inline, load from a local file, fetch from a remote URL, or pick from the bundled locale-specific templates.

## How to Export

1. Open a file containing API endpoints
2. Right-click in the editor > **EasyApi** > **ExportMarkdown**
3. A Markdown document will be generated with all API details

## Output Format

The generated Markdown document includes:

- API path and HTTP method
- API description
- Request parameters (path, query, header, body)
- Request body example
- Response body and example

Example output:

```markdown
## User API

### GET /api/users/{id}

Get user by ID

**Path Params:**

| Name | Value | Description |
|------|-------|-------------|
| id | - | User ID |

**Response:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| id | int | YES | - | User ID |
| name | string | YES | - | User name |
| email | string | NO | - | Email address |
```

## Customizing the Template

The Markdown export dialog (right-click > **EasyApi** > **ExportMarkdown**) exposes several fields that control which template is used:

| Field | Description |
|-------|-------------|
| **Output Directory** | Where the generated `.md` file is written (defaults to the project base path). |
| **File Name (without extension)** | Output file name (defaults to `api_export`). |
| **Template File** | A local `.tpl` / `.md.tpl` file to use as the template. |
| **Template URL** | An `http(s)` URL to a remote template. Fetched on each export and cached for 10 minutes. Redirects are not followed. |
| **Language** | Pick a bundled locale-specific template (e.g. `zh-CN`, `ja`, `en`). `en` uses the bundled default. |
| **Show inline template** | Reveal a text area to paste a template directly. |
| **Copy default template** | Save the bundled default template to a file so you can edit it. |

### Template Resolution Order

When you trigger an export, EasyApi walks the following precedence chain and uses the **first non-blank tier** that resolves successfully. Blank or missing tiers fall through silently; resolution warnings are surfaced as a notification titled **Markdown Template Resolution**.

1. Inline template from the export dialog (**Show inline template** text area)
2. Local template file from the dialog (**Template File**)
3. Remote template URL from the dialog (**Template URL**)
4. The `markdown.template` config rule (auto-detected: `http(s)` URL → fetch, single-line path → local file, otherwise inline content)
5. The convention-based project file `<project>/.easyapi/markdown.tpl` (if it exists)
6. The bundled locale template selected by `markdown.template.language` (or the **Language** combo)
7. The bundled `default.md.tpl` (always the floor — the resolver always returns a usable template)

### Template File Format

A template is a free-form text file (conventionally with a `.md.tpl` extension) containing double-curly-brace placeholders that EasyApi fills in with the exported API data. To start from a working example, click **Copy default template** in the export dialog to save the bundled default to a file, then edit it.

### Bundled Locale Templates

EasyApi ships locale-specific templates for the following BCP-47 tags. Select one from the **Language** combo, or set `markdown.template.language=<tag>` in a config rule.

`zh-CN`, `zh-TW`, `zh`, `ja`, `ko`, `es`, `fr`, `de`, `ru`, `pt-BR`, `pt`, `it`, `ar`, `hi`, `vi`, `id`, `tr`, `pl`, `uk`, `nl`, `th` (and `en` for the default).

The locale fallback chain follows RFC 4647: an exact match wins; otherwise the language-only tag is tried (e.g. `zh-TW` → `zh`); otherwise the first sibling of the same language is used.

### Remote Templates

A remote template is fetched over HTTP/HTTPS on each export and cached for 10 minutes (per IDE session). Only `http` and `https` schemes are allowed; redirects are not followed, and the response body is capped at 1 MiB by default. Use the config rules below to override the cache TTL and size cap.

### Config Rules

The following rule keys control template resolution (see [Config Rules](/settings/config-rule) for syntax):

| Rule key | Description |
|----------|-------------|
| `markdown.template` | Auto-detected: an `http(s)` URL fetches a remote template, a single-line value with path separators reads a local file, otherwise the value is treated as inline template content. |
| `markdown.template.language` | BCP-47 tag selecting a bundled locale template (e.g. `zh-CN`). |
| `markdown.template.url.ttl.seconds` | Remote template fetch cache TTL in seconds (default `600`). |
| `markdown.template.url.max.bytes` | Remote template fetch size cap in bytes (default `1048576`). |

::: tip
The legacy separate keys `markdown.template.file` / `markdown.template.url` / inline `markdown.template` are merged into the single `markdown.template` key. The auto-detection above replaces them.
:::
