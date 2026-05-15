# CRM Dashboard — Agentics Consulting / DxSure Ltd

A Next.js app that shows all three Google Sheets CRMs behind Google OAuth login.

## Before you run locally

1. **Add Authorised Redirect URI** in Google Cloud Console:
   - Go to [console.cloud.google.com](https://console.cloud.google.com) → APIs & Services → Credentials
   - Edit your OAuth 2.0 Client → Authorised redirect URIs
   - Add: `http://localhost:3000/api/auth/callback/google`

2. **Share each Google Sheet** with the service account (view-only):
   - `crm-access@crm-access-496416.iam.gserviceaccount.com`
   - Open each sheet → Share → paste the email → Viewer

3. **`.env.local` is already configured** in this folder — do not commit it.

## Run locally

```bash
cd crm-dashboard
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) — sign in with Google.

---

## Deploy to Vercel

### Step 1 — Push to a new GitHub repo

```bash
cd crm-dashboard
git init
git add .
git commit -m "feat: initial CRM dashboard"
git remote add origin https://github.com/mondweep/crm-dashboard.git
git push -u origin main
```

### Step 2 — Connect to Vercel

1. Go to [vercel.com](https://vercel.com) → Add New Project → Import the `crm-dashboard` repo
2. Framework: **Next.js** (auto-detected)
3. Add all environment variables from `.env.local` — **except** change `NEXTAUTH_URL` to `https://crm.dxsure.uk`

| Variable | Value |
|---|---|
| `GOOGLE_CLIENT_ID` | from .env.local |
| `GOOGLE_CLIENT_SECRET` | from .env.local |
| `NEXTAUTH_SECRET` | from .env.local |
| `NEXTAUTH_URL` | `https://crm.dxsure.uk` |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | from .env.local |
| `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` | paste the full key including `-----BEGIN...-----` |
| `ALLOWED_EMAILS` | from .env.local |

4. Deploy.

### Step 3 — Add Authorised Redirect URI for production

In Google Cloud Console → OAuth 2.0 Client → Authorised redirect URIs, add:
```
https://crm.dxsure.uk/api/auth/callback/google
```

### Step 4 — Point `crm.dxsure.uk` at Vercel

In 123-reg DNS, add a CNAME record:
```
Name:  crm
Value: cname.vercel-dns.com
TTL:   300
```

Then in Vercel → Project Settings → Domains, add `crm.dxsure.uk`.

---

## Project structure

```
crm-dashboard/
├── app/
│   ├── api/auth/[...nextauth]/route.ts   ← NextAuth handler
│   ├── dashboard/page.tsx                ← Main CRM view (server component)
│   ├── login/page.tsx                    ← Sign-in page
│   ├── layout.tsx
│   └── globals.css
├── components/
│   └── SignOutButton.tsx                 ← Client component
├── lib/
│   ├── auth.ts                           ← NextAuth config + email allowlist
│   └── sheets.ts                         ← Google Sheets API helper
├── middleware.ts                         ← Protects /dashboard routes
├── .env.local                            ← Local secrets (never commit)
└── .gitignore
```

## Adding a new CRM sheet

Edit the `CRMS` array in `app/dashboard/page.tsx` — add a new entry with the sheet ID and URL. Share the sheet with the service account email.
