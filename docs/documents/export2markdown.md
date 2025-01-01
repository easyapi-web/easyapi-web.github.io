# Export to Markdown

## Export Methods

1. **Using Keyboard Shortcut**:
   - Open the API file in the project, or select file/folder in the project explorer
   - Press <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> (Windows) or <kbd>Ctrl</kbd> + <kbd>E</kbd> (Mac)
   - In the export dialog:
     - Select the APIs you want to export
     - Choose `Markdown` as the export format
     - Click [✔] or press <kbd>Enter</kbd> to confirm

2. **Using Context Menu**:
   - Open the API file in the project, or select file/folder in the project explorer
   - Right-click on the file editor or folder
   - Navigate to `EasyApi` -> `ExportMarkdown`

## Markdown Export Settings

You can customize the Markdown export behavior in [IDE Global Settings](/setting/ide-setting.html). The following options are available:

- **Output Demo** (`outputDemo`):
  - Generates example response data for each API in the exported Markdown
  - Useful for documentation that requires sample responses

- **Output Charset** (`outputCharset`):
  - Controls the character encoding for the exported Markdown document
  - If you see garbled text in the output, try adjusting this setting
  - Common options include: UTF-8, UTF-16, etc.