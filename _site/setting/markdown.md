# `Markdown` Custom Rules


- Used to customize the format of the output Markdown document.

---

## Supported Rules

| &nbsp;&nbsp;&nbsp;&nbsp; Rule Key | Version | Rule Description |
| ------------ | ------------ | ------------ |
| &nbsp;&nbsp;&nbsp;&nbsp;md.title | v2.3.4+ | Output title |
| &nbsp;&nbsp;&nbsp;&nbsp;md.basic | v2.3.4+ | Replace default \[`> Basic`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.basic.path | v2.3.4+ | Output API path |
| &nbsp;&nbsp;&nbsp;&nbsp;md.basic.method | v2.3.4+ | Output HTTP request method |
| &nbsp;&nbsp;&nbsp;&nbsp;md.basic.desc | v2.3.4+ | Output API description |
| &nbsp;&nbsp;&nbsp;&nbsp;md.request | v2.3.4+ | Replace default  \[`> REQUEST`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.request.path | v2.3.4+ | Output API path parameter info, Replace default \[`**Path Params:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.request.headers | v2.3.4+ | Output API request Header, Replace default \[`**Headers:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.request.query | v2.3.4+ | Output API request parameters, Replace default \[`**Query:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.request.body | v2.3.4+ | Output API request Body, Replace default \[`**Request Body:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.request.body.demo | v2.3.4+ | Output API request Body example, Replace default \[`**Request Demo:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.request.form | v2.3.4+ | Output API request Form, Replace default \[`**Form:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.response | v2.3.4+ | Replace default  \[`> RESPONSE`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.response.headers | v2.3.4+ | Output API response Header, Replace default \[`**Headers:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.response.body | v2.3.4+ | Output API response Body, Replace default \[`**Body **`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.response.body.demo | v2.3.4+ | Output API response Body example, Replace default \[`**Response Demo:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.methodDoc.desc | v2.3.4+ | Output method description, Replace default \[`**Desc:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.methodDoc.params | v2.3.4+ | Output method parameters, Replace default \[`**Params:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.methodDoc.return | v2.3.4+ | Output method response, Replace default \[`**Return:**`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.bool.true | v2.3.5+ | Represents `Yes`, Replace default \[`YES`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.bool.false | v2.3.5+ | Represents `No`, Replace default \[`NO`] |
| &nbsp;&nbsp;&nbsp;&nbsp;md.table.${tableId}.${column}.ignore | v2.3.5+ | Whether to hide the specified column of the specified table |
| &nbsp;&nbsp;&nbsp;&nbsp;md.table.${tableId}.${column}.name | v2.3.5+ | Set the column name of the specified column of the specified table |
| &nbsp;&nbsp;&nbsp;&nbsp;md.table.${tableId}.${column}.align | v2.3.5+ | Set the alignment of the specified column of the specified table |


## Available Table Information

| Table(tableId) | Column(column) |	Version | Description |
| ------------ | ------------ | ------------ | ------------ |
| request.pathParams | name | v2.3.5+ | `Name` in the request path parameter table |
| request.pathParams | value | v2.3.5+ | `Value` in the request path parameter table |
| request.pathParams | desc | v2.3.5+ | `Description` in the request path parameter table |
| request.headers | name | v2.3.5+ | `Name` in the request header table |
| request.headers | value | v2.3.5+ | `Value` in the request header table |
| request.headers | required | v2.3.5+ | `Required` in the request header table |
| request.headers | desc | v2.3.5+ | `Description` in the request header table |
| request.querys | name | v2.3.5+ | `Name` in the request parameter table |
| request.querys | value | v2.3.5+ | `Value` in the request parameter table |
| request.querys | required | v2.3.5+ | `Required` in the request parameter table |
| request.querys | desc | v2.3.5+ | `Description` in the request parameter table |
| request.body | name | v2.3.5+ | `Name` in the request Body table |
| request.body | type | v2.3.5+ | `Type` in the request Body table |
| request.body | required | v2.3.5+ | `Required` in the request Body table |
| request.body | default | v2.3.5+ | `Default` in the request Body table |
| request.body | desc | v2.3.5+ | `Description` in the request Body table  |
| request.form | name | v2.3.5+ | `Required` in the request Body table |
| request.form | value | v2.3.5+ | `Value` in the request form table |
| request.form | required | v2.3.5+ | `Required` in the request form table |
| request.form | type | v2.3.5+ | `Type` in the request form table |
| request.form | desc | v2.3.5+ | `Description` in the request form table |
| response.headers | name | v2.3.5+ | `Name` in the response header table |
| response.headers | value | v2.3.5+ | `Value` in the response header table |
| response.headers | required | v2.3.5+ | `Required` in the response header table |
| response.headers | desc | v2.3.5+ | `Description` in the response header table |
| response.body | name | v2.3.5+ | `Name` in the response Body table |
| response.body | type | v2.3.5+ | `Type` in the response Body table |
| response.body | required | v2.3.5+ | `Required` in the response Body table |
| response.body | default | v2.3.5+ | `Default` in the response Body table |
| response.body | desc | v2.3.5+ | `Description` in the response Body table |
| methodDoc.params | name | v2.3.5+ | `Name` in the method document parameter table |
| methodDoc.params | type | v2.3.5+ | `Type` in the method document parameter table |
| methodDoc.params | required | v2.3.5+ | `Required` in the method document parameter table |
| methodDoc.params | default | v2.3.5+ | `Default` in the method document parameter table |
| methodDoc.params | desc | v2.3.5+ | `Description` in the method document parameter table |
| methodDoc.return | name | v2.3.5+ | `Name` in the method document return type table |
| methodDoc.return | type | v2.3.5+ | `Type` in the method document return type table |
| methodDoc.return | required | v2.3.5+ | `Required` in the method document return type table |
| methodDoc.return | default | v2.3.5+ | `Default` in the method document return type table |
| methodDoc.return | desc | v2.3.5+ | `Description` in the method document return type table |

## Rule Context

| Object | Version | Description |
| ------------ | ------------ | ------------ |
| type | v2.3.4+ | `methodDoc`(method document) / `request`(api) |
| doc | v2.3.4+ | Current `API` or `methodDoc` |
| [api](/setting/tools/api.html) | v2.3.4+ | Current `API`,only available when `type` is `request` |
| methodDoc | v2.3.4+ | Current method document, only available when `type` is `methodDoc` |
| deep | v2.3.4+ | Current markdown level |
| title | v2.3.4+ | Current title |