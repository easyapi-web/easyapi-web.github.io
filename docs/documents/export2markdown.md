# Export to Markdown

You can export your APIs to Markdown using either of these methods:

## Context Menu

- Right-click on the API file in the project
- Navigate to `EasyApi` > `Export Markdown`

## Keyboard Shortcut

- Open the API file in the project, or select file/folder in the project explorer
- Press <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> (Windows) or <kbd>Ctrl</kbd> + <kbd>E</kbd> (Mac)
- In the export dialog:
  - Select the APIs you want to export
  - Choose `Markdown` as the export channel
  - Click [✔] or press <kbd>Enter</kbd> to confirm

## Markdown Export Settings

You can customize the Markdown export behavior in [IDE Global Settings](/setting/ide-setting.html). The following options are available:

- **Output Demo** (`outputDemo`):
  - Generates example response data for each API in the exported Markdown
  - Useful for documentation that requires sample responses

- **Output Charset** (`outputCharset`):
  - Controls the character encoding for the exported Markdown document
  - If you see garbled text in the output, try adjusting this setting
  - Common options include: UTF-8, UTF-16, etc.