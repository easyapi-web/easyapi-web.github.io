# Introduction

**EasyApi** is an IntelliJ IDEA plugin that simplifies API development. It allows you to export API documents and send API requests directly from your IDE.

## Out of the Box

EasyApi recognizes standard HTTP frameworks such as Spring MVC, Spring WebFlux, Feign, JAX-RS, and gRPC out of the box, so most projects need no custom rules. When a custom Filter, interceptor, response wrapper, or other framework behavior changes the API contract in a way the scanner cannot see, the built-in AI Assistant or the external skill can inspect the project and generate a rule. See [Framework Support](/framework/) and [Config Rules](/settings/config-rule).

Most extension points can be enabled or disabled from **Settings** > **Other Settings** > **EasyApi**. Use **Features** to control framework recognizers, export channels, and field-format channels; the General tab contains additional scanning and editor behavior switches. This lets you keep only the capabilities relevant to the current project.

## Features

- **Export API Documents** — Generate API documentation from your code and export to Postman, Markdown, cURL, IntelliJ HTTP Client, Hoppscotch, or OpenAPI 3.0.3.
- **Beta Export Channels** — Enable Hoppscotch and OpenAPI from the Features tab when you need them.
- **API Dashboard** — Browse all endpoints in a tree view, edit and send requests, view responses, and export — all within the IDE.
- **Gutter Icon Navigation** — Click the gutter icon next to any API method to jump directly to it in the API Dashboard.
- **Search Everywhere** — Find API endpoints by path, URL, method prefix, or gRPC URL using IntelliJ's Search Everywhere.
- **Framework Support** — Works with Spring MVC, Spring Boot, Spring WebFlux, Feign, JAX-RS (Quarkus/Jersey), gRPC, and more.
- **Language Support** — Java, Kotlin, and Scala.
- **Validation & Serialization** — Full support for javax.validation, Jackson, Gson, and Swagger annotations.
- **Rich Extensibility** — Customize behavior through configuration rules, Groovy scripts, and event hooks.

## Requirements

| Requirement | Version |
|-------------|---------|
| IDE | IntelliJ IDEA Ultimate / Community 2025.2+ |
| JDK | 17+ |

## Quick Links

- [Installation](/guide/installation)
- [Usage](/guide/use)
- [API Dashboard & Call](/guide/call)
- [Spring Boot Support](/framework/springboot)
- [Configuration](/settings/)
