# Markdown Custom Rules

You can customize the format of the output Markdown document using Markdown-specific rules.

## Supported Rules

| Rule Key | Version | Description |
|----------|---------|-------------|
| `md.title` | v2.3.4+ | Output title |
| `md.basic` | v2.3.4+ | Replace default `> Basic` section |
| `md.basic.path` | v2.3.4+ | Output API path |
| `md.basic.method` | v2.3.4+ | Output HTTP request method |
| `md.basic.desc` | v2.3.4+ | Output API description |
| `md.request` | v2.3.4+ | Replace default `> REQUEST` section |
| `md.request.path` | v2.3.4+ | Output path parameter info |
| `md.request.headers` | v2.3.4+ | Output request headers |
| `md.request.query` | v2.3.4+ | Output query parameters |
| `md.request.body` | v2.3.4+ | Output request body |
| `md.request.body.demo` | v2.3.4+ | Output request body example |
| `md.request.form` | v2.3.4+ | Output form data |
| `md.response` | v2.3.4+ | Replace default `> RESPONSE` section |
| `md.response.headers` | v2.3.4+ | Output response headers |
| `md.response.body` | v2.3.4+ | Output response body |
| `md.response.body.demo` | v2.3.4+ | Output response body example |
| `md.methodDoc.desc` | v2.3.4+ | Output method description |
| `md.methodDoc.params` | v2.3.4+ | Output method parameters |
| `md.methodDoc.return` | v2.3.4+ | Output method return type |
| `md.bool.true` | v2.3.5+ | Represents `Yes`, default `YES` |
| `md.bool.false` | v2.3.5+ | Represents `No`, default `NO` |
| `md.table.${tableId}.${column}.ignore` | v2.3.5+ | Hide a table column |
| `md.table.${tableId}.${column}.name` | v2.3.5+ | Rename a table column |
| `md.table.${tableId}.${column}.align` | v2.3.5+ | Set column alignment |

## Table Information

| Table (tableId) | Column | Version | Description |
|-----------------|--------|---------|-------------|
| `request.pathParams` | name/value/desc | v2.3.5+ | Path parameter table |
| `request.headers` | name/value/required/desc | v2.3.5+ | Request header table |
| `request.querys` | name/value/required/desc | v2.3.5+ | Query parameter table |
| `request.body` | name/type/required/default/desc | v2.3.5+ | Request body table |
| `request.form` | name/value/required/type/desc | v2.3.5+ | Form data table |
| `response.headers` | name/value/required/desc | v2.3.5+ | Response header table |
| `response.body` | name/type/required/default/desc | v2.3.5+ | Response body table |
| `methodDoc.params` | name/type/required/default/desc | v2.3.5+ | Method parameter table |
| `methodDoc.return` | name/type/required/default/desc | v2.3.5+ | Method return table |

## Rule Context

| Object | Version | Description |
|--------|---------|-------------|
| `type` | v2.3.4+ | `methodDoc` or `request` |
| `doc` | v2.3.4+ | Current API or methodDoc |
| `api` | v2.3.4+ | Current API (only when type is `request`) |
| `methodDoc` | v2.3.4+ | Current method document (only when type is `methodDoc`) |
| `deep` | v2.3.4+ | Current markdown nesting level |
| `title` | v2.3.4+ | Current title |

## Examples

### Change Boolean Display

```properties
md.bool.true=true
md.bool.false=false
```

### Hide Default Column

```properties
md.table.request.body.default.ignore=true
```

### Rename Column

```properties
md.table.request.body.desc.name=Description
```

### Set Column Alignment

```properties
md.table.request.body.name.align=left
md.table.request.body.type.align=center
```
