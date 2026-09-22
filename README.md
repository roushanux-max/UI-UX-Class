<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/7d07cc51-551e-46d3-88a9-ebaa6a1c81fa

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Enable Google Sign-In locally

Google OAuth only works when the current host is listed in Firebase Authentication's
authorized domains. In the Firebase console for project
`gen-lang-client-0530680288`:

1. Open **Authentication → Settings → Authorized domains**.
2. Add `localhost` for local development.
3. If you use a deployed URL, add that exact hostname as well (without `https://` or a path).
4. Confirm **Google** is enabled under **Authentication → Sign-in method**.

Then restart the Vite server and try **Sign in with Google** again. The app displays a
specific setup message when the host is not authorized instead of showing a raw Firebase
error.

## Supabase free-tier database

The app can persist profiles, access requests, quiz results, and course progress in a
Supabase PostgreSQL project. Create a free Supabase project, copy
`.env.example` to `.env.local`, and set:

```bash
VITE_SUPABASE_URL="https://your-project.supabase.co"
VITE_SUPABASE_ANON_KEY="your-publishable-or-anon-key"
```

Run the SQL in [`supabase/schema.sql`](./supabase/schema.sql) in the Supabase SQL Editor.
Because Google authentication remains managed by Firebase, enable Firebase as a
third-party JWT provider in Supabase Authentication settings and use the Firebase
project's issuer and web API audience. This lets Supabase Row Level Security validate
the Firebase user token without exposing a service-role key in the browser.

Without these environment variables, the app continues to work locally using its
existing browser-only fallback data. Never put a Supabase service-role key in
`.env.local`, Vercel, or client-side code.
