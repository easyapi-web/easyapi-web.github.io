# Export RPC

You can export your RPCs to Markdown using any of these methods:

## Keyboard Shortcut

- Open the file containing the RPCs in the project, or select file/folder in the project explorer
- Press <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> (Windows) or <kbd>Ctrl</kbd> + <kbd>E</kbd> (Mac)
- In the export dialog:
  - Select the RPCs you want to export
  - Choose `Markdown` as the export channel
  - Click [✔] or press <kbd>Enter</kbd> to confirm

## Context Menu

- Open the file containing the RPCs in the project
- Right-click on the file editor
- Navigate to `Generate...` or use shortcut <kbd>Alt</kbd> + <kbd>Insert</kbd> (Windows) / <kbd>Ctrl</kbd> + <kbd>Enter</kbd> (Mac)
- Select `Export Markdown`

## Main Menu

- Select the file or folder in the project explorer
- Click <kbd>Code</kbd> > <kbd>Export Markdown</kbd> in the main menu at the top of the IDE

## RPC Rules

| Key | Target(context) | Version | Description |
| ------------ | ------------ | ------------ |------------ |
| ☆[mdoc.class.filter](/setting/rules/mdoc_class_filter.html) | class | v0.9.5+ | Filter classes which can export method documents(rpc) |
| mdoc.method.filter | method | v0.9.5+ | Filter methods which can export method documents(rpc) |

Click [config rule](/setting/config-rule.html) to view more.

## Important Notes

- The feature to export RPC methods is disabled by default. To enable it, check: <kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Support</kbd> > <kbd>methodDoc</kbd>. For more information, please refer to the [IDEA config](/setting/ide-setting.html)

- The exported RPC document supports only the Markdown format.