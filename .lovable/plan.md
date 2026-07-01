
# مجتمع آموزشی ایرانیان مسقط — Website Plan

A Persian-only, fully RTL, official school website. Modern, clean, trustworthy, parent-friendly. Multi-page with a focused parent-first homepage.

## Design system

- **Palette (oklch tokens in `src/styles.css`)**
  - Primary: deep navy `#0F2A47`
  - Accent: educational teal/green `#0E9F8A`
  - Alert red (urgent notices only): `#D64545`
  - Backgrounds: white `#FFFFFF`, soft off-white `#F7F8FA`
  - Neutral border/secondary text grays
- **Typography**: Vazirmatn (loaded via `<link>` in `__root.tsx`), tuned for Persian numerals and RTL rhythm. Strong hierarchy (H1 hero → H2 sections → H3 cards).
- **Global RTL**: `<html lang="fa" dir="rtl">`; direction-aware icons/arrows; logical spacing utilities.
- **Components**: shadcn/ui (button, card, dialog, sheet, dropdown-menu, navigation-menu, accordion, table, tabs, breadcrumb, badge, alert, form, input, sonner) styled with the school tokens. Soft cards, minimal shadows, subtle borders, generous spacing. No commercial/luxury styling.

## Routes (TanStack Start, file-based)

Each route file sets its own `head()` with Persian title/description/og. Root sets sitewide defaults, viewport, Vazirmatn font `<link>`, `dir="rtl"`.

```
src/routes/
  __root.tsx                       # RTL shell, Vazirmatn, Header, Footer, MobileStickyBar
  index.tsx                        # Home
  about/index.tsx                  # درباره مجتمع
  about/principal.tsx              # پیام مدیر
  about/mission.tsx                # مأموریت، چشم‌انداز و ارزش‌ها
  about/leadership.tsx             # مدیریت و کادر اداری
  stages/index.tsx                 # معرفی مقاطع
  stages/elementary.tsx            # ابتدایی
  stages/middle.tsx                # متوسطه اول
  stages/high.tsx                  # متوسطه دوم
  admissions/index.tsx             # ثبت‌نام (راهنما + مدارک + تاریخ‌ها + فرم‌ها + FAQ)
  admissions/tuition.tsx           # شهریه و پرداخت
  news/index.tsx                   # اطلاعیه‌ها
  news/updates.tsx                 # اخبار مجتمع
  news/calendar.tsx                # تقویم آموزشی
  resources/parents.tsx            # منابع والدین
  resources/students.tsx           # منابع دانش‌آموزان
  resources/teachers.tsx           # منابع معلمان
  resources/forms.tsx              # دانلود فرم‌ها
  resources/policies.tsx           # آیین‌نامه‌ها
  gallery.tsx                      # گالری تصاویر
  honors.tsx                       # افتخارات
  contact.tsx                      # تماس با ما
  faq.tsx                          # پرسش‌های پرتکرار
  official-links.tsx               # لینک‌های رسمی
  privacy.tsx                      # حریم خصوصی و دسترس‌پذیری
  portal.tsx                       # ورود به پنل کاربری (link/CTA page)
```

## Header

- **Utility bar (desktop)**: phone `+968 2460 1234`, email, location, پنل کاربری، درخواست نام کاربری.
- **Main bar**: logo placeholder + school name (right, since RTL) + nav (center) + actions ثبت‌نام / تماس با مدرسه (left).
- **Nav with dropdowns** (shadcn NavigationMenu):
  - درباره مجتمع → معرفی، پیام مدیر، مأموریت و ارزش‌ها، مدیریت و کادر اداری
  - مقاطع آموزشی → معرفی، ابتدایی، متوسطه اول، متوسطه دوم
  - ثبت‌نام و شهریه → راهنما، مدارک لازم، شهریه و پرداخت، FAQ
  - اطلاعیه‌ها → اطلاعیه‌های مهم، اخبار، تقویم، گالری، افتخارات
  - منابع → والدین، دانش‌آموزان، معلمان، فرم‌ها، آیین‌نامه‌ها، لینک‌های رسمی
  - تماس با ما
- **Mobile**: logo + name + descriptor «مدرسه ایرانی در مسقط، عمان» + hamburger (Sheet) with prioritized links; large tap targets.
- **Sticky mobile bottom bar**: تماس · واتساپ · ثبت‌نام · اطلاعیه‌ها.

## Homepage sections (focused, not long)

1. **Hero** — school name, location, short desc, primary CTA «ثبت‌نام سال تحصیلی»، secondary «مشاهده شهریه و مقاطع»، quick links strip.
2. **Important Notice Bar** — date, title, short text, link (dismissible).
3. **Quick Access for Parents** — 8 icon cards.
4. **Admissions Journey** — 4 steps + CTA to full guide.
5. **Academic Stages** — 3 stage cards.
6. **User Pathways** — «دسترسی سریع بر اساس نقش شما» (5 role cards with 2–3 links each).
7. **Trust & School Identity** — about preview + principal preview + identity/official links.
8. **School Life + Latest Updates** — 3 news cards + small gallery strip + links to full pages.
9. **Contact & Location** — contact card + static map placeholder.

Homepage explicitly excludes: full tuition table, full calendar, full gallery, full news archive, policies, teacher resources.

## Key internal pages

- **Admissions**: 4-step journey (expanded), required documents checklist, important dates timeline, form downloads, FAQ accordion, financial/admissions contact card.
- **Tuition (شهریه و پرداخت)**: formal table for ابتدایی / متوسطه اول / متوسطه دوم (base fee, registration fee, notes), payment methods/guidance, notes, mini-FAQ, financial support contact. No ecommerce affordances (no ratings, badges, cart, product cards).
- **Stages pages**: overview, grade range, weekly rhythm, teaching approach, facilities, contact.
- **News / Notices / Calendar**: list + detail-ready layout, filterable by tag; calendar month grid placeholder.
- **Resources**: categorized link lists + form downloads accordion.
- **Contact**: form, phone/email/WhatsApp, address + map placeholder, office hours.

## Footer

School logo/name + short description · Contact block · Address + map link · Main pages · Resources · Social (Instagram/Telegram/WhatsApp) · Official links · Privacy / accessibility / policy links · Copyright.

## Accessibility & SEO

- Semantic landmarks (single `<main>` per route), correct heading order, Persian alt text placeholders, keyboard focus rings, WCAG-AA contrast on tokens, accessible forms with labels.
- Per-route `head()`: Persian `title`, `description`, `og:title`, `og:description`, `og:type`; leaf-only `og:image` where a meaningful hero image exists (skip elsewhere); relative canonical + `og:url`.
- `<html lang="fa" dir="rtl">`.

## Performance

- Vazirmatn subset via Google Fonts `<link>` with `display=swap`.
- Image placeholders sized with `aspect-*`, `loading="lazy"` on non-hero images.
- Subtle transitions only (no heavy motion libs beyond Tailwind).

## Technical notes

- Stack: TanStack Start + React 19 + Tailwind v4 + shadcn/ui (already installed).
- No backend needed for this build (static content). Forms are UI-only with client-side validation; wiring to Lovable Cloud can be added later on request.
- Design tokens defined in `src/styles.css` under `:root` and mirrored in `@theme inline`. No hardcoded colors in components.
- Route tree auto-generated; each route ships its own `head()`.
- Realistic image placeholders generated with the image tool (campus exterior for hero, classroom scenes for stage cards, school-life images for gallery preview) — inclusive, Muscat/Iranian school context, tasteful overlays.

## Out of scope (this build)

- Real login/portal backend, payment processing, live news CMS, language switcher, multilingual content.
