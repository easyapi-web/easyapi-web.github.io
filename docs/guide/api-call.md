# API Call

EasyApi includes a built-in API calling tool that lets you test your endpoints without leaving the IDE.

## How to Call an API

1. Open a file containing API endpoints
2. Right-click on a method > **EasyApi** > **Call**
3. The API calling dialog opens with pre-populated request details
4. Modify parameters as needed
5. Click **Send** to execute the request

## Features

- **Auto-populated Parameters** — Request parameters are automatically extracted from the code
- **Environment Variables** — Use `${variable}` syntax to reference environment-specific values
- **Request History** — Previously sent requests are saved for quick re-use
- **Response Viewer** — View response headers, body, and status code

## HTTP Call Hooks

You can customize the request before sending and process the response after receiving using rules:

```properties
# Modify request before sending
http.call.before=groovy:logger.info("Calling: " + request.url())

# Process response after receiving
http.call.after=groovy:logger.info("Response: " + response.code())
```

## Using the API Dashboard

The API Dashboard provides a tree view of all APIs in your project:

1. Open **Tools** > **Open API Dashboard**
2. Browse the API tree organized by controller
3. Click on any endpoint to view details
4. Use the **Call** button to send requests directly
