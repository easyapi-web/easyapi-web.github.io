# Call API

EasyApi provides an integrated **API Explorer** tool window that lets you browse, test, and export all API endpoints in your project — without leaving the IDE.

## Opening the API Explorer

Open the explorer via **View** > **Tool Windows** > **API Explorer**, **Tools** > **Open API Explorer**, or click the gutter icon on any API method (see [Gutter Icon Navigation](#gutter-icon-navigation) below).

## Gutter Icon Navigation

EasyApi adds a gutter icon (▶) next to API method declarations in the editor. Click it to jump directly to that endpoint in the API Explorer.

**Supported annotations:**

| Framework | Annotations |
|-----------|------------|
| Spring MVC | `@RequestMapping`, `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`, `@PatchMapping` |
| JAX-RS | `@GET`, `@POST`, `@PUT`, `@DELETE`, `@PATCH`, `@Path` |
| gRPC | RPC methods in classes extending `BindableService` or annotated with `@GrpcService` |

If the endpoint is not found in the index (e.g., after switching branches or creating a new file), clicking the gutter icon triggers an automatic re-scan of the containing file before navigating.

## Explorer Overview

The API Explorer consists of two main areas:

- **Left panel** — A tree view of all API endpoints organized by module and controller
- **Right panel** — Endpoint details with request editor and response viewer

### Toolbar Actions

| Action | Description |
|--------|-------------|
| **Refresh** | Re-scan the project for API endpoints |
| **Export** | Open the export dialog for all endpoints |
| **Collapse All** | Collapse all tree nodes |
| **Expand All** | Expand all tree nodes |
| **Search** | Filter endpoints by address, name, path, folder, description, or class name |

### Context Menu

Right-click on any node in the tree to access:

| Option | Available On | Description |
|--------|-------------|-------------|
| **Export** | Any node | Export selected endpoints to Markdown, Postman, cURL, HTTP Client, or any enabled channel |
| **Copy API URL** | Selection | Copy the address of each selected endpoint, one per line, as `METHOD /path` |
| **Copy Path** | Endpoint | Copy the endpoint path to clipboard |
| **Copy as cURL** | Endpoint | Copy a cURL command for the endpoint |
| **Navigate to Source** | Endpoint | Jump to the source method in the editor |
| **Reset to Default** | Endpoint | Reset all user edits to the original extracted values |
| **Collapse All / Expand All** | Folder / Root | Collapse or expand tree nodes |

**Copy API URL** copies the *address*, not just the path — `GET /api/user/get` rather than `/api/user/get`. The HTTP method is included because a path alone cannot distinguish `GET /user/{id}` from `PUT /user/{id}`. It resolves through the same entry point every export action uses, so a copied address always matches what an export of the same selection would contain. No host is added: the host is a deployment concern that the environment selector resolves. It can be turned off in **Features** (`Copy API URL`).

## Sending Requests

### HTTP Requests

1. Select an endpoint in the tree
2. The right panel shows the request details with editable fields
3. Select or enter a host URL in the host dropdown
4. Modify parameters, headers, or body as needed
5. Click **Send** to execute the request

**Editable request fields:**

| Tab | Description |
|-----|-------------|
| **Path Params** | URL path variables (e.g., `{id}` in `/users/{id}`) |
| **Params** | Query string parameters |
| **Headers** | Request headers |
| **Form** | Form data (for `application/x-www-form-urlencoded` or `multipart/form-data`) |
| **Body** | JSON request body (for `application/json`) |

### gRPC Requests

For gRPC endpoints, the explorer provides:

- **Request Message** tab — Edit the gRPC request message as JSON
- **Info** tab — View service name, package name, streaming type, and proto file

### Response Viewer

After sending a request, the response section displays:

- **Status code** — Color-coded (green for success, orange for client errors, red for server errors)
- **Body tab** — Response body with JSON formatting and Raw/Formatted toggle
- **Headers tab** — Response headers table
- **Copy** button — Copy the response body to clipboard

For gRPC responses, gRPC status codes are displayed with descriptive labels.

#### Binary responses

File responses (`octet-stream`, images, PDF, ZIP, …) are no longer decoded as text. The explorer shows them as a metadata summary with a **Save as** action so the original bytes survive:

| Response kind | What you see |
|---------------|--------------|
| Text (JSON, XML, HTML…) | Formatted in the Body tab. Bodies larger than 500,000 characters are truncated for display. |
| Binary | Content type, size and a **Save as** button — the bytes are streamed to a temp file, never rendered as text. |

Large responses are streamed to a temporary file instead of being materialized in the editor, keeping the UI responsive.

In scripts, the same distinction is exposed on the response object:

| Method | Description |
|--------|-------------|
| `response.bytes()` | Raw response bytes; `null` for a text response |
| `response.saveBody(path)` | Write the body to `path`; returns `false` when there is nothing to save |
| `pm.response.responseSize` | Body size **in bytes** (it used to report characters) |

### Auto-Save

All edits to request parameters, headers, body, and host selection are automatically saved and restored when you revisit an endpoint — even across IDE sessions. **Reset to Default** discards the edits and re-reads them from the source, so fields newly added to a DTO appear again.

## Exporting from the Explorer

You can export endpoints directly from the explorer:

1. Right-click an endpoint, folder, or the root node
2. Select **Export** > choose a format
3. Or click the **Export** toolbar button to export all endpoints

**Supported export formats:**

| Format | HTTP | gRPC | Description |
|--------|------|------|-------------|
| **Markdown** | ✅ | ✅ | Generate Markdown documentation |
| **Postman** | ✅ | ❌ | Export as Postman collection (file or API upload) |
| **cURL** | ✅ | ✅ | Generate cURL commands |
| **HTTP Client** | ✅ | ✅ | Generate IntelliJ HTTP Client `.http` files |
| **Hoppscotch (Beta)** | ✅ | ❌ | Upload to your Hoppscotch instance |
| **OpenAPI (Beta)** | ✅ | ❌ | Export an OpenAPI 3.0.3 document |
| **ApiPost (Beta)** | ✅ | ❌ | Push to an ApiPost project, or write `apipost.json` |

The export dialog lets you select specific endpoints, choose output options, and for Postman, select a workspace and collection.

## Searching Endpoints

### In the Explorer

The explorer's search bar accepts the same query grammar as Search Everywhere:

- One query can combine the **address and the name** — `user 用户` matches `/api/user/get` whose name is `获取用户信息`
- Tokens shorter than three characters must match literally, so a two-letter query does not return almost every endpoint
- A pasted path is never fuzzed: it stays a precise statement, which keeps a shortened URL working
- A **method prefix** (`GET /users`) filters by HTTP verb, and path templates match concrete values (`/api/users/42` finds `/api/users/{id}`)
- Results are ordered by score, so a literal path hit comes before a fuzzy one

### In Search Everywhere

Use IntelliJ's **Search Everywhere** (double-press `Shift`) to find API endpoints across the project:

- Endpoints appear under their own **APIs** tab, and also in **All**
- **Search by path**: `/api/users`
- **Search by method prefix**: `GET /users`, `POST /api/orders`
- **Paste a full URL**: `http://localhost:8080/api/users/42` — the path is auto-extracted for matching
- **Path variable matching**: Searching `/api/users/42` matches `/api/users/{id}`
- **Fuzzy matching**: `aus用户` matches `/api/user/get` as a subsequence
- **gRPC URL search**: `grpc://localhost:9090/my.package.UserService/GetUser`

Click a search result to navigate to the source method in the editor. The **APIs** tab can be turned off in **Features** (`Search Everywhere`); it keeps reading the retained API index, so it still works — and an explorer **Refresh** refills that index — even while API Scanning is off.

## HTTP Call Hooks

You can customize the request before sending and process the response after receiving using rules:

```properties
# Modify request before sending
http.call.before=groovy:logger.info("Calling: " + request.url())

# Process response after receiving
http.call.after=groovy:logger.info("Response: " + response.code())
```
