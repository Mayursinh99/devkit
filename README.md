# DevKit

A fast, private, 100% client-side toolbox for developers and security testers.
No build step, no backend — open `index.html` directly or publish the folder to
any static host (GitHub Pages, etc.).

## Tools

- **Tokens** — JWT Decoder, JWT Generator (HMAC signing via Web Crypto)
- **Encoding** — Base64, URL Encode
- **Generate** — Hash (SHA family), UUID
- **Inspect** — Regex Tester, HTTP Header Viewer, JSON Formatter
- **Security** — CVSS v3.1 Calculator, Header Auditor, CSP Analyzer, Password Check

## Run

Open `index.html` in a browser, or serve the folder:

```sh
python -m http.server
```

## Deploy (GitHub Pages)

The `.nojekyll` file is already present. Publish this folder as the Pages source
and the site works as-is — everything runs in the browser.

## Notes

- The HTTP Header Viewer fetches from the browser, so it only works for URLs that
  permit cross-origin (CORS) requests; most sites will block it.
- Everything else runs entirely offline in your browser — no data leaves the page.
