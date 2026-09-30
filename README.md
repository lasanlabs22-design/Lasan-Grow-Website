# Lasan Grow website

The public website for **Lasan Grow**, the sales CRM by Lasan Labs, served at **https://lasangrow.com**.

| Address | What it is |
| --- | --- |
| `lasangrow.com` | This website |
| `app.lasangrow.com` | The CRM clients sign in to ([Lasan-Grow](https://github.com/lasanlabs22-design/Lasan-Grow)) |
| `ops.lasangrow.com` | The Lasan platform console |

A single landing page with sections: hero with a product illustration, why Lasan Grow, features, managers and reps, how it works, the ready-made pipeline, security, FAQ and a demo-request form.

## Develop

```bash
npm install
npm run dev      # http://localhost:3200
npm run lint
npm run build
```

- Contact details and addresses live in `lib/site.js`.
- Every claim on the page must be something the product does today; the CRM's `USER_MANUAL.md` is the reference.
- The demo form needs no server: it opens the visitor's email app with the message filled in.
- Security headers (CSP, HSTS, anti-framing) are set in `next.config.mjs`; nothing loads from other origins.

Powered by Lasan Labs.
