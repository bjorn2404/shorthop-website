# ShortHop Website

The Eleventy-powered marketing site, shortcut documentation, and privacy policy for the [ShortHop](https://shorthop.to) browser extension.

## Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start development server:
   ```bash
   pnpm start
   ```

3. Build for production:
   ```bash
   pnpm build
   ```

## Structure

- `src/index.md` - Main landing page
- `src/docs.md` - Documentation page, including the full shortcut listing (embedded directly in the page's script for reliability, not templated from `src/_data/shortcuts.json`)
- `src/privacy.md` - Privacy policy
- `src/_includes/base.njk` - Base layout template
- `src/_includes/smart-patterns.njk` - Shared "smart URL patterns" section, included on both the landing page and docs
- `src/_data/shortcuts.json` - Not currently used by any template; kept for a possible future refactor of `docs.md`'s hardcoded listing

## Keeping the shortcut listing current

This repo is separate from the extension's own (private) repo, which is the source of truth for the actual shortcut set. `docs.md`'s shortcut listing is a hand-maintained list, not auto-generated, so when shortcuts are added, removed, or renamed in the extension, update `src/docs.md`'s `shortcutCategories` object here to match.

## Deployment

The built site lands in `_site/` (gitignored). Deploy it with any static host that can build from source — GitHub Pages (via a deploy workflow), Cloudflare Pages, Netlify, or similar, pointed at `pnpm build` with `_site` as the output directory.
