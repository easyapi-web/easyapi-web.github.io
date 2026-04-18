# Export to Markdown

EasyApi can generate Markdown documentation from your API endpoints.

## How to Export

1. Open a file containing API endpoints
2. Right-click in the editor > **EasyApi** > **Export to Markdown**
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

## Customizing Markdown Output

You can customize the Markdown output format using rules. See [Markdown Custom Rules](/configuration/markdown-rules) for details.

### Example: Change Boolean Display

```properties
# Display true/false instead of YES/NO
md.bool.true=true
md.bool.false=false
```

### Example: Hide a Table Column

```properties
# Hide the "Default" column in the request body table
md.table.request.body.default.ignore=true
```
