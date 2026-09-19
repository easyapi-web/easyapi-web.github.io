# Usage

This guide walks you through the basic workflow of using EasyApi.

## Export APIs to Postman

1. Open a Java/Kotlin file containing API endpoints (e.g., a Spring `@RestController`)
2. Right-click in the editor and select **EasyApi** > **ExportToPostman**
3. The API definitions will be exported to your Postman collection

## Export APIs to Markdown

1. Open a Java/Kotlin file containing API endpoints
2. Right-click in the editor and select **EasyApi** > **ExportMarkdown**
3. A Markdown document will be generated with all API details

## Export Only Selected Methods

Since v3.1.6, EasyApi respects method-level selection when exporting. Select one or more methods in the editor (either by caret or by selecting a text range that spans them) before triggering an export — only the endpoints whose source method matches (or overrides) the selection are exported, instead of every endpoint in the containing class.

This works for every export channel (Postman, Markdown, cURL, HttpClient, Hoppscotch, OpenAPI, ApiPost). If no methods are selected, the whole containing class is exported as before.

## Call an API

1. Open a Java/Kotlin file containing API endpoints
2. Click the gutter icon (▶) next to an API method, or right-click > **EasyApi** > **Call**
3. The API Explorer opens with the endpoint details pre-populated
4. Modify parameters as needed and click **Send**

## Copy an API URL

1. Select one or more methods, a class, or files/folders in the editor or the Project view
2. Right-click > **EasyApi** > **Copy API URL**
3. The address of each endpoint in the selection is copied, one per line, as `METHOD /path`

Unlike the API Explorer's **Copy Path**, which copies only the path, **Copy API URL** includes the HTTP method — so `GET /user/{id}` and `PUT /user/{id}` stay distinguishable. It can be turned off in **Features** (`Copy API URL`).

## Next Steps

- [Export to Postman](/guide/export-postman) — Detailed Postman export options
- [Export to ApiPost](/guide/export-apipost) — Push endpoints to an ApiPost project
- [Export to Markdown](/guide/export-markdown) — Customize Markdown output format
- [Call API](/guide/call) — Explorer features, request editing, and endpoint search
- [Configuration](/settings/) — Configure EasyApi behavior
