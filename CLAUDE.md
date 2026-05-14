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
| Spreadsheet | Google Sheets via `googleapis` |
| Blog | `@next/mdx` — articles in `src/content/blog/*.mdx` |
| Forms | `react-hook-form` + `zod` |
| Animation | `framer-motion` |
| Icons | `lucide-react` |

---

## Environment variables

Copy `env.example` → `.env.local` and fill in:

```
RESEND_API_KEY=re_...               # from resend.com dashboard
NOTIFICATION_EMAIL=...              # where booking alerts land (your inbox)
FROM_EMAIL=onboarding@resend.dev    # change to hello@backtraq.in after domain verification
NEXT_PUBLIC_WHATSAPP_NUMBER=91...   # digits only with country code, e.g. 919876543210

# Optional — Google Sheets booking log
GOOGLE_SERVICE_ACCOUNT_EMAIL=...
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=...                 # from spreadsheet URL
```

**For Vercel deployment:** add all the above in Project → Settings → Environment Variables.

---

## What's built

### Pages
| Route | Status | Notes |
|---|---|---|
| `/` | ✅ | Full homepage — redesigned editorial layout |
| `/for-renters` | ✅ | 75-point checklist, pricing, testimonials |
| `/for-buyers` | ✅ | 120-point checklist, buyer pricing, FAQs |
| `/how-it-works` | ✅ | Process, inspector profiles, tools |
| `/pricing` | ✅ | Full comparison tables — renter + buyer |
| `/sample-report` | ✅ | Annotated mock report with findings |
| `/book` | ✅ | 5-step booking form, reads `?tier=` query param |
| `/about` | ✅ | Founder story, principles, team, press |
| `/blog` | ✅ | Client-side category filter, links to articles |
| `/blog/[slug]` | ✅ | 6 real MDX articles, static-generated |

### API routes
| Route | What it does |
|---|---|
| `POST /api/book` | Sends 2 emails via Resend (notification to owner + confirmation to customer), appends row to Google Sheets |
| `POST /api/subscribe` | Newsletter signup — emails both parties, logs to Sheets |

### Blog articles (in `src/content/blog/`)
- `7-things-inspectors-check.mdx` — For Renters
- `illegal-construction-purchase.mdx` — For Buyers
- `negotiate-rent-inspection-report.mdx` — Guides
- `gurgaon-sectors-seepage.mdx` — Gurgaon
- `monsoon-proofing-flat.mdx` — For Renters
- `under-construction-inspection.mdx` — For Buyers

To add a new article: create a new `.mdx` file in `src/content/blog/`, export a `metadata` object, and add an entry to `src/lib/blog.ts`.

---

## Key files

```
src/
  app/
    page.tsx                  Homepage
    layout.tsx                Root layout (fonts, Nav, Footer, WhatsAppButton)
    globals.css               Tailwind theme — all brand colors defined here
    api/
      book/route.ts           Booking API (Resend + Sheets)
      subscribe/route.ts      Newsletter API
    blog/
      page.tsx                Blog list (client component — filter state)
      [slug]/page.tsx         Individual article (dynamic import of MDX)
    book/page.tsx             Booking page (wraps BookingForm in Suspense)
  components/
    BookingForm.tsx           5-step form, reads ?tier= from URL
    HeroAnnotation.tsx        Animated inspection report preview card
    Nav.tsx                   Fixed nav with scroll detection
    PricingCard.tsx           Reusable pricing card
    TestimonialCard.tsx       Quote card with large opening mark
    WhatsAppButton.tsx        Floating WA button (NEXT_PUBLIC_WHATSAPP_NUMBER)
    AnimatedSection.tsx       Framer Motion scroll-reveal wrapper
  content/blog/               MDX articles
  lib/
    blog.ts                   Article metadata array (source of truth for blog list)
mdx-components.tsx            Global MDX element styles (h1-h3, p, ul, blockquote, etc.)
```

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

Headline font: `var(--font-fraunces)` — always set via `style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}` on individual elements (Tailwind 4 class approach inconsistent across components).

---

## Next steps (prioritised)

### 🔴 Must do before launch

1. **Update real WhatsApp number**
   - Set `NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX` in `.env.local` and in Vercel env vars
   - This updates the floating button, footer, and about page automatically

2. **Verify sending domain in Resend**
   - Add `backtraq.in` in [Resend dashboard → Domains](https://resend.com/domains)
   - Follow their DNS record instructions (takes ~10 min)
   - Then update `.env.local` and Vercel: `FROM_EMAIL=hello@backtraq.in`
   - Until this is done, customer confirmation emails won't deliver to non-Resend accounts

3. **Set Vercel environment variables**
   - Go to Vercel → Project → Settings → Environment Variables
   - Add `RESEND_API_KEY`, `NOTIFICATION_EMAIL`, `FROM_EMAIL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`

### 🟡 High value, do next

4. **Google Sheets booking log**
   - Create a spreadsheet with two sheets: "Bookings" and "Subscribers"
   - Set up a Google Cloud service account, enable Sheets API, share the spreadsheet
   - Add `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_SHEET_ID` to Vercel env vars
   - See `env.example` for format of `GOOGLE_PRIVATE_KEY` (escaped `\n`)

5. **Payment integration (Razorpay)**
   - Standard for Indian B2C
   - Add a `/api/payment/route.ts` that creates a Razorpay order
   - Add a `PaymentButton` client component on the booking confirmation screen
   - Razorpay webhook → update booking status
   - Alternatively: UPI QR code on the confirmation screen (simpler, manual reconciliation)

6. **Admin view for bookings**
   - Simple password-protected `/admin` page that fetches from Google Sheets or a database
   - Shows pending bookings, status, contact info
   - Can start as a read-only view of the Google Sheet

7. **Privacy Policy and Terms of Service pages**
   - Footer links currently point to `#`
   - Create `/privacy` and `/terms` pages (MDX is good for this)

### 🟢 Growth / nice to have

8. **More blog articles**
   - Add to `src/content/blog/` + `src/lib/blog.ts`
   - Target: "Delhi NCR" category, "For Buyers", "Guides" — currently thin
   - Consider `remark-gfm` plugin in `next.config.ts` for tables and strikethrough

9. **SEO improvements**
   - Add `openGraph.images` to key page metadata (1200×630 OG images)
   - Add structured data (LocalBusiness schema) to layout
   - The `sitemap.ts` and `robots.ts` already exist

10. **Real inspection photos**
    - The hero currently uses a CSS inspection report illustration
    - Real property inspection photos (seepage, socket testers, moisture meters) would significantly improve credibility
    - Add to `/public/photos/` and update `HeroAnnotation.tsx`

11. **Testimonial photos**
    - Replace initials avatars with real customer photos if available

---

## Development

```bash
npm run dev      # start dev server (usually :3000)
npm run build    # production build + type check
npm run lint     # ESLint
```

Push to `main` → Vercel auto-deploys. No staging environment set up yet.

---

## Important Next.js 16 notes (from AGENTS.md)

- `params` in route handlers/pages is now `Promise<{slug: string}>` — must `await params`
- `useSearchParams()` requires a `<Suspense>` boundary in the parent — done in `book/page.tsx`
- Read `node_modules/next/dist/docs/` before adding new Next.js patterns
