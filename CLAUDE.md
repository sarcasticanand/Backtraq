@AGENTS.md

# Backtraq — Project Guide

## What this is

Backtraq is a B2C home inspection service for renters and home buyers in Gurgaon & Delhi NCR. Independent inspections, no commission ties to landlords or brokers. Reports delivered in 12 hours via WhatsApp.

Live repo: https://github.com/sarcasticanand/Backtraq  
Deployed: Vercel (connected to main branch — push to main = auto-deploy)

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2.6 (App Router, Turbopack) |
| Styling | Tailwind CSS 4 (CSS variable theme in `globals.css`) |
| Fonts | Fraunces (serif/headlines) + Inter (body) via `next/font/google` |
| Email | Resend (`resend` npm package) |
| Payments | Razorpay (`razorpay` npm package) |
| Spreadsheet | Google Sheets via `googleapis` |
| Blog | `@next/mdx` — articles in `src/content/blog/*.mdx` |
| Forms | `react-hook-form` + `zod` |
| Animation | `framer-motion` |
| Icons | `lucide-react` |

---

## Environment variables

Copy `env.example` → `.env.local` and fill in:

```
RESEND_API_KEY=re_...                    # from resend.com dashboard
NOTIFICATION_EMAIL=...                   # where booking alerts land
FROM_EMAIL=onboarding@resend.dev         # change to hello@backtraq.in after domain verification
NEXT_PUBLIC_WHATSAPP_NUMBER=91...        # digits only, e.g. 919876543210

# Google Sheets booking log
GOOGLE_SERVICE_ACCOUNT_EMAIL=...
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=...                      # from spreadsheet URL

# Razorpay payments
RAZORPAY_KEY_ID=rzp_live_...
RAZORPAY_KEY_SECRET=...

# Admin dashboard password (/admin?key=...)
ADMIN_KEY=some_long_secret_string
```

**For Vercel deployment:** add all the above in Project → Settings → Environment Variables.

---

## What's built

### Pages
| Route | Status | Notes |
|---|---|---|
| `/` | ✅ | Full homepage — editorial layout, animated hero |
| `/for-renters` | ✅ | 75-point checklist, pricing, testimonials |
| `/for-buyers` | ✅ | 120-point checklist, buyer pricing, FAQs |
| `/how-it-works` | ✅ | Process, inspector profiles, tools |
| `/pricing` | ✅ | Full comparison tables — renter + buyer |
| `/sample-report` | ✅ | Annotated mock report with findings |
| `/book` | ✅ | 5-step form → payment screen → confirmation |
| `/about` | ✅ | Founder story, principles, team, press |
| `/blog` | ✅ | Client-side category filter |
| `/blog/[slug]` | ✅ | 6 MDX articles, statically generated |
| `/privacy` | ✅ | Privacy policy — 7 sections |
| `/terms` | ✅ | Terms of service — 7 sections |
| `/admin?key=ADMIN_KEY` | ✅ | Bookings + subscribers from Google Sheets |

### API routes
| Route | What it does |
|---|---|
| `POST /api/book` | Sends 2 Resend emails + appends row to Google Sheets |
| `POST /api/subscribe` | Newsletter signup — Resend + Google Sheets |
| `POST /api/payment` | Razorpay: `action=create` makes order, `action=verify` checks HMAC-SHA256 signature |

### Components
| File | Purpose |
|---|---|
| `BookingForm.tsx` | 5-step form. Step 5 → payment screen with `PaymentButton` + "pay on day" skip |
| `PaymentButton.tsx` | Lazy-loads Razorpay checkout.js, opens modal, calls `/api/payment?action=verify` on success |
| `HeroAnnotation.tsx` | Animated inspection report preview card in the homepage hero |
| `Nav.tsx` | Fixed nav with scroll detection |
| `PricingCard.tsx` | Reusable pricing card with features list |
| `TestimonialCard.tsx` | Quote card with large terracotta opening mark |
| `WhatsAppButton.tsx` | Floating WA button (reads `NEXT_PUBLIC_WHATSAPP_NUMBER`) |
| `AnimatedSection.tsx` | Framer Motion scroll-reveal wrapper |
| `ChecklistAccordion.tsx` | Expandable checklist categories |
| `FAQAccordion.tsx` | Expandable FAQ list |

### Blog articles (in `src/content/blog/`)
- `7-things-inspectors-check.mdx` — For Renters
- `illegal-construction-purchase.mdx` — For Buyers
- `negotiate-rent-inspection-report.mdx` — Guides
- `gurgaon-sectors-seepage.mdx` — Gurgaon
- `monsoon-proofing-flat.mdx` — For Renters
- `under-construction-inspection.mdx` — For Buyers

To add a new article: create `.mdx` in `src/content/blog/`, export a `metadata` object, add entry to `src/lib/blog.ts`.

---

## Key files

```
src/
  app/
    page.tsx                  Homepage
    layout.tsx                Root layout (fonts, Nav, Footer, WhatsAppButton)
    globals.css               Tailwind theme — all brand colors defined here
    admin/page.tsx            Admin dashboard (force-dynamic, key auth via searchParams)
    api/
      book/route.ts           Booking API (Resend + Sheets)
      subscribe/route.ts      Newsletter API
      payment/route.ts        Razorpay order create + HMAC verify
    blog/
      page.tsx                Blog list (client component — filter state)
      [slug]/page.tsx         Individual article (dynamic import of MDX)
    book/page.tsx             Booking page (wraps BookingForm in Suspense)
    privacy/page.tsx          Privacy policy
    terms/page.tsx            Terms of service
  components/
    BookingForm.tsx           5-step form + payment screen
    PaymentButton.tsx         Razorpay checkout.js wrapper
    HeroAnnotation.tsx        Animated report preview card
    Nav.tsx                   Fixed nav with scroll detection
    PricingCard.tsx           Reusable pricing card
    TestimonialCard.tsx       Quote card
    WhatsAppButton.tsx        Floating WA button
    AnimatedSection.tsx       Framer Motion scroll-reveal
  content/blog/               MDX articles
  lib/
    blog.ts                   Article metadata array (source of truth)
mdx-components.tsx            Global MDX element styles
env.example                   All env vars documented
```

---

## Pricing (for reference — used in BookingForm and API)

| Tier key | Label | Price (INR) | Paise |
|---|---|---|---|
| `basic` | Basic | ₹1,499 | 149900 |
| `standard` | Standard | ₹2,499 | 249900 |
| `premium` | Premium | ₹3,999 | 399900 |
| `buyer-standard` | Standard Buyer | ₹4,999 | 499900 |
| `buyer-premium` | Premium Buyer | ₹8,999 | 899900 |
| `prepurchase` | Pre-purchase | ₹14,999 | 1499900 |

---

## Brand / design system

Defined in `src/app/globals.css` under `@theme`:

| Token | Value | Use |
|---|---|---|
| `forest` | `#1F3D2A` | Primary — CTAs, nav, headings |
| `forest-dark` | `#152A1D` | Hover state for forest |
| `terracotta` | `#D97757` | Accent — highlights, badges, quote marks |
| `cream` | `#FAF8F4` | Page background |
| `charcoal` | `#1A1A1A` | Body text |
| `muted` | `#5C5C5C` | Secondary text |
| `border` | `#E2DDD6` | All borders |

Headline font: always set via `style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}` on individual elements (Tailwind 4 class approach inconsistent).

---

## Before launch — remaining setup (not code)

These are configuration tasks, not code changes:

1. **Real WhatsApp number** — set `NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX` in `.env.local` and Vercel. Updates the floating button, footer, and about page.

2. **Resend domain verification** — add `backtraq.in` at resend.com/domains, follow DNS instructions (~10 min). Then update `FROM_EMAIL=hello@backtraq.in` in both places. Until then, customer confirmation emails only deliver to the Resend account owner's email.

3. **Razorpay keys** — get from razorpay.com/app/keys. Add `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` to `.env.local` and Vercel. Without these, the Pay Now button returns a 503.

4. **Google Sheets setup** — create a spreadsheet with two sheets named `Bookings` and `Subscribers`. Set up a Google Cloud service account, enable Sheets API, share the spreadsheet with the service account email. Add the 3 `GOOGLE_*` vars to Vercel. Without this, bookings still send via email but aren't logged.

5. **Admin key** — set `ADMIN_KEY` to any secret string in Vercel. Then access `/admin?key=<that string>`.

6. **Vercel env vars** — go to Vercel → Project → Settings → Environment Variables and add all of the above.

---

## Growth / nice to have

- **More blog articles** — add `.mdx` to `src/content/blog/` + entry in `src/lib/blog.ts`. Target: "Delhi NCR" and "Guides" categories are thin.
- **OG images** — add `openGraph.images` to key page metadata (1200×630). Currently no social share images.
- **LocalBusiness structured data** — add JSON-LD schema to `layout.tsx` for local SEO.
- **Real inspection photos** — hero uses a CSS card illustration. Real photos (moisture meters, socket testers, seepage) in `/public/photos/` would improve credibility. Update `HeroAnnotation.tsx`.
- **Testimonial photos** — replace initials avatars with real customer photos.
- **Razorpay webhook** — `/api/payment` currently only verifies on the client callback. A webhook handler would let you reconcile failed/dropped payments server-side.

---

## Development

```bash
npm run dev      # start dev server (usually :3000)
npm run build    # production build + type check
npm run lint     # ESLint
```

Push to `main` → Vercel auto-deploys. No staging environment.

---

## Important Next.js 16 notes (from AGENTS.md)

- Both `params` AND `searchParams` in pages/layouts are now `Promise<{...}>` — must `await` both
- `useSearchParams()` requires a `<Suspense>` boundary in the parent — done in `book/page.tsx`
- Read `node_modules/next/dist/docs/` before adding new Next.js patterns
