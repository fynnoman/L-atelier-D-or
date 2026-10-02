This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Conseil privé

`/conseil/` contains a CSS 3D leather case, a glasses illustration and a paper
card attached to the inside lid. Opening, drawing, writing, sending, stowing and
closing are separate phases. The case and card remain in the same scene on mobile.
Reduced-motion preferences skip the mechanical transitions.

The static site accepts these optional build-time variables:

- `NEXT_PUBLIC_CONSEIL_EMAIL`: destination for the mail-client fallback; defaults
  to the concierge address already published on the site.
- `NEXT_PUBLIC_CONSEIL_ENDPOINT`: an HTTPS form service accepting JSON
  `{ name, email, message }` with CORS enabled for this site's origin. Only a
  successful HTTP response starts the thank-you and automatic closing sequence.
  Do not put API keys in this public variable. Configure spam protection and
  delivery at the selected service before enabling it.

Without an endpoint, submission prepares an email in the visitor's mail client.
The card explicitly asks the visitor to send it there; it never claims delivery.
The visitor can return to their entered text or stow the card. Failed network
requests retain the text and show an error on the card itself.

## Feedback (`/feedback`)

A dedicated page for post-purchase feedback on the Roi collection. The form
POSTs to the same third-party endpoint pattern as the concierge; if neither an
endpoint nor a recipient is configured, a clear "in preparation" error is shown.

Server-only variables (never expose in `NEXT_PUBLIC_*`):

- `NEXT_PUBLIC_FEEDBACK_ENDPOINT` — HTTPS form service accepting the JSON payload.
- `NEXT_PUBLIC_FEEDBACK_ACCESS_KEY` — key required by that service (public-safe when the service is a public-form gateway).
- `NEXT_PUBLIC_FEEDBACK_EMAIL` — mail-client fallback if no endpoint is set.

## Newsletter (Resend)

The newsletter form posts to the server route `POST /api/newsletter/subscribe`,
which sends a welcome mail via [Resend](https://resend.com/).

Required server-only variables (do **not** prefix with `NEXT_PUBLIC_`):

- `RESEND_API_KEY` — API key from the Resend dashboard.
- `NEWSLETTER_FROM_EMAIL` — sender in the form `L'Atelier d'Or <lettre@yourdomain.com>`. Domain must be verified in Resend.

Optional:

- `NEWSLETTER_AUDIENCE_ID` — if set, the address is added to the given Resend audience.
- `NEWSLETTER_INTERNAL_TO` — internal address that receives a short heads-up for every new subscriber.

Without `RESEND_API_KEY` + `NEWSLETTER_FROM_EMAIL`, the route replies with HTTP 503
and the form shows the "in preparation" state — nothing is exposed to the client.

## Panther signature

Three restrained appearances share an original, locally hosted 3D sculpture: the home-page
editorial interlude, the closing signature, and the collection introduction. The model has
independent head, eye, and tail groups for breathing, occasional glances, blinking, and tail
movement. French/German copy follows the existing language selector.

- `src/components/panther/` contains the lazy-loaded scene and responsive presentation.
- `public/panther/panther.glb` is an original procedural mesh, with no external model,
  texture, CDN, or asset-license dependency. Rebuild it with `node scripts/build-panther.mjs`.
- `public/panther/panther-poster.webp` is a transparent render of that sculpture, used
  before loading, without JavaScript, and after a WebGL failure. If changing the model or
  lighting, regenerate the poster from the same camera on a transparent background.
- Off-screen canvases unmount; hidden tabs, reduced-motion preferences, and the pause
  control stop animation. Pixel density is capped at 1.5. Model geometry and materials
  are shared through the loader cache; each appearance gets its own animation transforms.

Validation: production build, targeted ESLint, desktop/mobile rendering (1440px/390px),
pause/resume, scroll-out/scroll-in, reduced motion, context-loss fallback, and no-JavaScript
poster rendering. `LineReveal` accepts HTML text tags explicitly so React Three Fiber's
additional JSX elements cannot widen its tag type into incompatible 3D props.
