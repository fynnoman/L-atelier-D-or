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
