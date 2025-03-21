## Exporting Regular Java Method Documentation

- Exporting regular method documentation is disabled by default. To enable it, you need to check the following options: <kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Support</kbd> > <kbd>methodDoc</kbd> & <kbd>generic</kbd>. Refer to: [IDEA Configuration](/setting/ide-setting.html)

- Regular methods can be exported to markdown.

- If you want to export rpc to postman, refer to: [Generic](/documents/generic.html)

**Related Rules**
| &nbsp;&nbsp;&nbsp;&nbsp;key | target(context) | version | desc |
| ------------ | ------------ | ------------ |------------ |
| ☆[mdoc.class.filter](/setting/rules/mdoc_class_filter.html) | class | v0.9.5+ | Select which classes can export method documentation (rpc) |
| &nbsp;&nbsp;&nbsp;&nbsp;mdoc.method.filter | method | v0.9.5+ | Select which methods can export method documentation (rpc) |
| ☆[~~mdoc.method.path~~](/setting/rules/mdoc_method_path.html) | method | v0.9.5+ | Set the path for method documentation (rpc)<br>Only used for compatibility with the old export method, not recommended |
| &nbsp;&nbsp;&nbsp;&nbsp;~~mdoc.method.http.method~~ | method | v0.9.5+ | Set the HTTP request method for method documentation (rpc)<br>Only used for compatibility with the old export method, not recommended |

Click [Rule Configuration](/setting/config-rule.html) to see more.