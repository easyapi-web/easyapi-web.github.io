**The following usage are supported**

1. Open the file containing the RPCs in the project or select the file or folder in the project file area on the left of IDEA
    Use shortcut `alt shift E(windows)/ctrl E(mac)`
    Then select the RPCs, and select the export channel `Markdown`
    Click [✔] button or press enter to confirm the export.
    
2. Open the file containing the RPCs in the project
    Right-click file editor then select `Generate...` or use shortcut`[Alt + Insert]/[Ctrl+Enter]`
    Next,select `ExportMarkdown`

3. Select the file or folder in the project file area on the left of IDEA
    Click <kbd>Code</kbd> > <kbd>ExportMarkdown</kbd> on the top of IDEA.


---

**rpc rules**

| &nbsp;&nbsp;&nbsp;&nbsp;key | target(context) | version | desc |
| ------------ | ------------ | ------------ |------------ |
| ☆[mdoc.class.filter](/setting/rules/mdoc_class_filter.html) | class | v0.9.5+ | Filter classes which can export method documents(rpc) |
| &nbsp;&nbsp;&nbsp;&nbsp;mdoc.method.filter | method | v0.9.5+ | Filter methods which can export method documents(rpc) |

click[config rule](/setting/config-rule.html)to view more.

----

- The feature to export RPC methods is turned off by default , To open, need check:<kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Support</kbd> > <kbd>methodDoc</kbd> , see:[IDEA config](/setting/ide-setting.html)

- rpc document exported support `markdown` only
