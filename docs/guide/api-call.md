# API Dashboard & Call

EasyApi provides an integrated API Dashboard that lets you browse, test, and export all API endpoints in your project — without leaving the IDE.

## Opening the API Dashboard

Open the dashboard via **Tools** > **Open API Dashboard**, or click the gutter icon on any API method (see [Gutter Icon Navigation](#gutter-icon-navigation) below).

## Gutter Icon Navigation

EasyApi adds a gutter icon (▶) next to API method declarations in the editor. Click it to jump directly to that endpoint in the API Dashboard.

**Supported annotations:**

| Framework | Annotations |
|-----------|------------|
| Spring MVC | `@RequestMapping`, `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`, `@PatchMapping` |
| JAX-RS | `@GET`, `@POST`, `@PUT`, `@DELETE`, `@PATCH`, `@Path` |
| gRPC | RPC methods in classes extending `BindableService` or annotated with `@GrpcService` |

If the endpoint is not found in the index (e.g., after switching branches or creating a new file), clicking the gutter icon triggers an automatic re-scan of the containing file before navigating.

## Dashboard Overview

The API Dashboard consists of two main areas:

- **Left panel** — A tree view of all API endpoints organized by module and controller
- **Right panel** — Endpoint details with request editor and response viewer

### Toolbar Actions

| Action | Description |
|--------|-------------|
| **Refresh** | Re-scan the project for API endpoints |
| **Export** | Open the export dialog for all endpoints |
| **Collapse All** | Collapse all tree nodes |
| **Expand All** | Expand all tree nodes |
| **Search** | Filter endpoints by name, path, folder, description, or class name |

### Context Menu

Right-click on any node in the tree to access:

| Option | Available On | Description |
|--------|-------------|-------------|
| **Export** | Any node | Export selected endpoints to Markdown, Postman, cURL, or HTTP Client |
| **Copy Path** | Endpoint | Copy the endpoint path to clipboard |
| **Copy as cURL** | Endpoint | Copy a cURL command for the endpoint |
| **Navigate to Source** | Endpoint | Jump to the source method in the editor |
| **Reset to Default** | Endpoint | Reset all user edits to the original extracted values |
| **Collapse All / Expand All** | Folder / Root | Collapse or expand tree nodes |

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

For gRPC endpoints, the dashboard provides:

- **Request Message** tab — Edit the gRPC request message as JSON
- **Info** tab — View service name, package name, streaming type, and proto file

### Response Viewer

After sending a request, the response section displays:

- **Status code** — Color-coded (green for success, orange for client errors, red for server errors)
- **Body tab** — Response body with JSON formatting and Raw/Formatted toggle
- **Headers tab** — Response headers table
- **Copy** button — Copy the response body to clipboard

For gRPC responses, gRPC status codes are displayed with descriptive labels.

### Auto-Save

All edits to request parameters, headers, body, and host selection are automatically saved and restored when you revisit an endpoint — even across IDE sessions.

## Exporting from the Dashboard

You can export endpoints directly from the dashboard:

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

The export dialog lets you select specific endpoints, choose output options, and for Postman, select a workspace and collection.

## API Search Everywhere

Use IntelliJ's **Search Everywhere** (double-press `Shift`) to find API endpoints quickly:

- **Search by path**: `/api/users`
- **Search by method prefix**: `GET /users`, `POST /api/orders`
- **Paste a full URL**: `http://localhost:8080/api/users/42` — the path is auto-extracted for matching
- **Path variable matching**: Searching `/api/users/42` matches `/api/users/{id}`
- **gRPC URL search**: `grpc://localhost:9090/my.package.UserService/GetUser`
- **Search by name, class, or description**: Any text is matched across endpoint name, class name, description, and folder

Click a search result to navigate to the source method in the editor.

## HTTP Call Hooks

You can customize the request before sending and process the response after receiving using rules:

```properties
# Modify request before sending
http.call.before=groovy:logger.info("Calling: " + request.url())

# Process response after receiving
http.call.after=groovy:logger.info("Response: " + response.code())
```
