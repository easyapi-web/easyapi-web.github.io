# Installation

## Supported IDEs

| Build | IDE compatibility | Support level |
|-------|-------------------|---------------|
| Default (Marketplace) | IntelliJ IDEA 2025.2+ (Ultimate & Community Edition) | Officially supported |
| Compatibility build | IntelliJ IDEA 2022.1 – 2025.1 | Best-effort, not verified |

Only the default build is published to the JetBrains Marketplace. If you are on an older IDEA version, download the **compatibility build** from [GitHub Releases](https://github.com/tangcent/easy-api/releases) — every release attaches an additional best-effort package covering IDEA 2022.1 through 2025.1, and the release notes' Downloads table lists the exact IDE range of each zip.

You can also build a package for a custom range with `script/package.sh`:

```bash
./script/package.sh              # default: 2025.2+, unbounded (what ships to Marketplace)
./script/package.sh '221-*'      # 2022.1 and newer, unbounded
./script/package.sh 221-251      # 2022.1 through 2025.1
```

Compatibility outside the default range is best-effort: the package is compiled against the newest platform and is not verified on older IDEs.

::: tip Reading the version number
Plugin versions embed the IDE range as `<base>.<since>.<until>` — e.g. `3.2.0.252.0` is the default 3.2.0 build for IDEA 2025.2 (build `252`) and newer, while `3.2.0.221.251` is the compatibility build for IDEA 2022.1 (`221`) through 2025.1 (`251`). A `0` means unbounded.
:::

## Install from JetBrains Marketplace

1. Open **Preferences(Settings)** > **Plugins** > **Marketplace**
2. Search for **"EasyApi"**
3. Click **Install Plugin**
4. Restart the IDE

## Install Manually

1. Download the plugin from [JetBrains Plugin Repository](https://plugins.jetbrains.com/plugin/12211-easyapi) or [GitHub Releases](https://github.com/tangcent/easy-api/releases)
2. Open **Preferences(Settings)** > **Plugins** > ⚙️ > **Install Plugin from Disk...**
3. Select the downloaded `.zip` or `.jar` file
4. Restart the IDE

## Verify Installation

After restarting, you should see the **EasyApi** menu under **Tools** in the main menu bar. You can also find EasyApi actions in the editor right-click context menu.
