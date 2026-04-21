# Export to Markdown

EasyApi can generate Markdown documentation from your API endpoints.

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

