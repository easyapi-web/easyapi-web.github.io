# easyapi-web.github.io

Documentation site for the **easy-api** IntelliJ IDEA plugin, built with VitePress.

- **Live site:** https://easyapi-web.github.io/
- **Source plugin repo:** [github.com/tangcent/easy-api](https://github.com/tangcent/easy-api)
- **Plugin ID:** 12211

## Traced plugin version

**v3.1.8** (released 2026-07-29)

This is the version of the easy-api plugin that the documentation on this site
currently describes. Update it whenever a doc update lands.

## Build

```bash
npm install
npm run build      # outputs to docs/.vitepress/dist
npm run preview    # local preview
npm run dev        # dev server with HMR
```

Node 20+ is required (matches `.github/workflows/deploy.yml`).

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes to GitHub Pages. Never edit `gh-pages` directly.
