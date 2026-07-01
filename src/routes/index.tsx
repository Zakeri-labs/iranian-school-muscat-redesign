import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar, FileDown, CreditCard, LogIn, Phone, Bell, ClipboardList, MapPin,
  GraduationCap, School, BookOpen, Users, UserCog, Landmark, ArrowLeft, CheckCircle2,
  FileText, Send, ClipboardCheck, ChevronLeft, Image as ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section, SectionTitle } from "@/components/site/PageHeader";
import { site } from "@/lib/site";

import heroImg from "@/assets/hero-campus.jpg";
import elemImg from "@/assets/stage-elementary.jpg";
import middleImg from "@/assets/stage-middle.jpg";
import highImg from "@/assets/stage-high.jpg";
import principalImg from "@/assets/principal.jpg";
import libImg from "@/assets/life-library.jpg";
import sportsImg from "@/assets/life-sports.jpg";
import tripImg from "@/assets/life-trip.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.descriptor}` },
      { name: "description", content: `پایگاه رسمی ${site.name}؛ ثبت‌نام، شهریه، اطلاعیه‌ها، تقویم آموزشی و منابع والدین و دانش‌آموزان در مسقط، عمان.` },
      { property: "og:title", content: `${site.name}` },
      { property: "og:description", content: "مدرسه رسمی ایرانی در مسقط، عمان — ابتدایی، متوسطه اول و متوسطه دوم." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="نمای بیرونی مجتمع آموزشی ایرانیان مسقط" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/85 via-primary/70 to-primary/40" />
        </div>
        <div className="relative container mx-auto px-4 py-16 lg:py-28">
          <div className="max-w-2xl text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur px-3 py-1 text-xs font-medium border border-primary-foreground/20">
              <MapPin className="size-3.5" /> {site.addressShort}
            </div>
            <h1 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
              {site.name}
            </h1>
            <p className="mt-3 text-lg md:text-xl text-primary-foreground/90">{site.tagline}</p>
            <p className="mt-3 text-primary-foreground/80 leading-8 max-w-xl">
              مدرسه رسمی ایرانی برای دانش‌آموزان مقاطع ابتدایی، متوسطه اول و متوسطه دوم در مسقط، عمان.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand hover:bg-brand/90 text-brand-foreground">
                <Link to="/admissions">
                  ثبت‌نام سال تحصیلی <ArrowLeft className="size-4 mr-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                <Link to="/admissions/tuition">مشاهده شهریه و مقاطع</Link>
              </Button>
            </div>
          </div>

          {/* Quick links strip */}
          <div className="mt-10 lg:mt-16">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-background/95 backdrop-blur rounded-2xl p-2 border border-border shadow-sm">
              {[
                { t: "اطلاعیه‌های مهم", to: "/news", i: Bell },
                { t: "دانلود فرم‌ها", to: "/resources/forms", i: FileDown },
                { t: "پرداخت شهریه", to: "/admissions/tuition", i: CreditCard },
                { t: "ورود به پنل", to: "/portal", i: LogIn },
                { t: "تماس با مدرسه", to: "/contact", i: Phone },
              ].map(({ t, to, i: Icon }) => (
                <Link key={to} to={to} className="flex flex-col items-center justify-center gap-2 rounded-xl px-3 py-4 text-sm font-medium text-foreground hover:bg-brand-soft hover:text-brand transition-colors min-h-16 text-center">
                  <Icon className="size-5 text-brand" />
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important notice */}
      <Section className="!py-6">
        <div className="rounded-2xl border border-notice/30 bg-notice-soft p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-notice/10">
              <Bell className="size-5 text-notice" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs text-notice font-medium">
                <span className="inline-flex items-center rounded-full bg-notice px-2 py-0.5 text-notice-foreground">اطلاعیه مهم</span>
                <span className="text-muted-foreground">۲۵ خرداد ۱۴۰۴</span>
              </div>
              <div className="mt-1 text-[15px] font-semibold text-primary">آغاز ثبت‌نام سال تحصیلی جدید</div>
              <p className="text-sm text-muted-foreground mt-0.5">
                ثبت‌نام سال تحصیلی جدید آغاز شد. برای مشاهده جزئیات و زمان‌بندی، اطلاعیه را دنبال کنید.
              </p>
            </div>
          </div>
          <div className="md:mr-auto">
            <Button asChild variant="outline" className="border-notice/40 text-notice hover:bg-notice hover:text-notice-foreground">
              <Link to="/news">مشاهده اطلاعیه <ChevronLeft className="size-4 mr-1" /></Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Quick access for parents */}
      <Section>
        <SectionTitle eyebrow="والدین" title="دسترسی سریع والدین" description="پرکاربردترین بخش‌های مدرسه در یک نگاه." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { t: "ثبت‌نام", to: "/admissions", i: ClipboardList },
            { t: "شهریه و پرداخت", to: "/admissions/tuition", i: CreditCard },
            { t: "مدارک لازم", to: "/admissions#documents", i: FileText },
            { t: "دانلود فرم‌ها", to: "/resources/forms", i: FileDown },
            { t: "تقویم آموزشی", to: "/news/calendar", i: Calendar },
            { t: "اطلاعیه‌ها", to: "/news", i: Bell },
            { t: "ورود به پنل", to: "/portal", i: LogIn },
            { t: "تماس با مدرسه", to: "/contact", i: Phone },
          ].map(({ t, to, i: Icon }) => (
            <Link key={to} to={to} className="group rounded-xl border border-border bg-card p-5 hover:border-brand/40 hover:shadow-sm transition-all">
              <Icon className="size-6 text-brand mb-3" />
              <div className="text-[14px] font-semibold text-primary group-hover:text-brand">{t}</div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Admissions journey */}
      <Section className="bg-surface !py-14 -mx-0">
        <div className="container mx-auto">
          <SectionTitle eyebrow="ثبت‌نام" title="مسیر ثبت‌نام در مجتمع" description="در چهار گام ساده، ثبت‌نام فرزندتان را کامل کنید." />
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { n: 1, t: "بررسی شرایط", d: "شرایط پذیرش هر مقطع را مطالعه کنید.", i: ClipboardCheck },
              { n: 2, t: "آماده‌سازی مدارک", d: "چک‌لیست مدارک لازم را تکمیل کنید.", i: FileText },
              { n: 3, t: "ارسال درخواست", d: "فرم ثبت‌نام را ثبت و مدارک را ارسال کنید.", i: Send },
              { n: 4, t: "تأیید ثبت‌نام", d: "پس از بررسی، تأییدیه به شما اعلام می‌شود.", i: CheckCircle2 },
            ].map(({ n, t, d, i: Icon }) => (
              <Card key={n} className="p-5 relative">
                <div className="flex items-start justify-between">
                  <div className="p-2.5 rounded-lg bg-brand-soft text-brand"><Icon className="size-5" /></div>
                  <span className="text-2xl font-bold text-primary/20">۰{toFa(n)}</span>
                </div>
                <div className="mt-4 font-semibold text-primary">{t}</div>
                <p className="text-sm text-muted-foreground mt-1 leading-6">{d}</p>
              </Card>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link to="/admissions">مشاهده راهنمای کامل ثبت‌نام <ChevronLeft className="size-4 mr-1" /></Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Academic stages */}
      <Section>
        <SectionTitle eyebrow="مقاطع" title="مقاطع آموزشی" description="سه مقطع تحصیلی با برنامه درسی رسمی مصوب." />
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { t: "ابتدایی", d: "پایه اول تا ششم", to: "/stages/elementary", img: elemImg, i: BookOpen },
            { t: "متوسطه اول", d: "پایه هفتم تا نهم", to: "/stages/middle", img: middleImg, i: School },
            { t: "متوسطه دوم", d: "پایه دهم تا دوازدهم", to: "/stages/high", img: highImg, i: GraduationCap },
          ].map(({ t, d, to, img, i: Icon }) => (
            <Card key={to} className="overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={img} alt={t} loading="lazy" width={1024} height={768} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-brand">
                  <Icon className="size-5" />
                  <h3 className="text-lg font-bold text-primary">{t}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{d}</p>
                <div className="mt-4">
                  <Link to={to} className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline">
                    مشاهده جزئیات مقطع <ChevronLeft className="size-4" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* User pathways */}
      <Section className="bg-surface !py-14">
        <div className="container mx-auto">
          <SectionTitle eyebrow="مسیرها" title="دسترسی سریع بر اساس نقش شما" description="مسیر مناسب خود را انتخاب کنید تا سریع‌تر به آنچه نیاز دارید برسید." />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { t: "والدین", i: Users, links: [{t:"منابع والدین",to:"/resources/parents"},{t:"شهریه و پرداخت",to:"/admissions/tuition"},{t:"تقویم آموزشی",to:"/news/calendar"}] },
              { t: "دانش‌آموزان", i: GraduationCap, links: [{t:"منابع دانش‌آموزان",to:"/resources/students"},{t:"تقویم امتحانات",to:"/news/calendar"},{t:"اطلاعیه‌ها",to:"/news"}] },
              { t: "معلمان", i: School, links: [{t:"منابع معلمان",to:"/resources/teachers"},{t:"آیین‌نامه‌ها",to:"/resources/policies"},{t:"پنل کاربری",to:"/portal"}] },
              { t: "کادر اداری", i: UserCog, links: [{t:"دانلود فرم‌ها",to:"/resources/forms"},{t:"مدیریت مجتمع",to:"/about/leadership"},{t:"پنل کاربری",to:"/portal"}] },
              { t: "مراجع رسمی", i: Landmark, links: [{t:"لینک‌های رسمی",to:"/official-links"},{t:"درباره مجتمع",to:"/about"},{t:"تماس با ما",to:"/contact"}] },
            ].map(({ t, i: Icon, links }) => (
              <Card key={t} className="p-5">
                <div className="flex items-center gap-2 text-brand">
                  <div className="p-2 rounded-lg bg-brand-soft"><Icon className="size-4" /></div>
                  <h3 className="font-semibold text-primary">{t}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-sm text-muted-foreground hover:text-brand flex items-center gap-1">
                        <ChevronLeft className="size-3.5" /> {l.t}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Trust & School Identity */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-5">
          <Card className="p-6 lg:col-span-1">
            <div className="text-xs font-medium text-brand mb-2">درباره مجتمع</div>
            <h3 className="text-xl font-bold text-primary">هویت رسمی، آموزش ایرانی</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-7">
              {site.name} با بهره‌گیری از برنامه‌های آموزشی رسمی جمهوری اسلامی ایران و کادری مجرب، در مسیر تعالی علمی و اخلاقی دانش‌آموزان گام برمی‌دارد.
            </p>
            <div className="mt-5 flex gap-2">
              <Button asChild variant="outline" size="sm"><Link to="/about">بیشتر بخوانید</Link></Button>
              <Button asChild variant="ghost" size="sm"><Link to="/about/mission">مأموریت و ارزش‌ها</Link></Button>
            </div>
          </Card>

          <Card className="p-6 lg:col-span-1">
            <div className="text-xs font-medium text-brand mb-2">پیام مدیر</div>
            <div className="flex items-start gap-4">
              <img src={principalImg} alt="مدیر مجتمع" loading="lazy" width={80} height={80} className="size-16 rounded-full object-cover shrink-0" />
              <div>
                <p className="text-sm text-foreground leading-7">
                  «هدف ما تربیت نسلی دانا، مسئول و متعهد به ایران و آموزه‌های اسلامی است.»
                </p>
                <div className="mt-3 text-sm">
                  <div className="font-semibold text-primary">دکتر سعید محمدی</div>
                  <div className="text-xs text-muted-foreground">مدیر مجتمع</div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Button asChild variant="outline" size="sm"><Link to="/about/principal">پیام کامل</Link></Button>
            </div>
          </Card>

          <Card className="p-6 lg:col-span-1">
            <div className="text-xs font-medium text-brand mb-2">اعتماد و هویت</div>
            <ul className="space-y-3">
              {[
                { t: "برنامه درسی رسمی جمهوری اسلامی ایران", i: Landmark },
                { t: "مجوز فعالیت رسمی در سلطنت عمان", i: CheckCircle2 },
                { t: "کادر آموزشی و اداری مجرب", i: Users },
              ].map(({ t, i: Icon }, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <div className="p-1.5 rounded-md bg-brand-soft text-brand mt-0.5"><Icon className="size-4" /></div>
                  <span className="text-foreground leading-6">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Button asChild variant="outline" size="sm"><Link to="/official-links">لینک‌های رسمی</Link></Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* School life + Latest updates */}
      <Section className="bg-surface !py-14">
        <div className="container mx-auto grid lg:grid-cols-2 gap-8">
          <div>
            <SectionTitle eyebrow="اطلاعیه‌ها" title="آخرین اخبار و اطلاعیه‌ها" />
            <div className="space-y-3">
              {[
                { tag: "خبر", d: "۲۰ خرداد ۱۴۰۴", t: "بازدید علمی دانش‌آموزان از موزه علوم", to: "/news/updates" },
                { tag: "اطلاعیه", d: "۱۵ خرداد ۱۴۰۴", t: "زمان‌بندی امتحانات پایان سال تحصیلی اعلام شد", to: "/news" },
                { tag: "رویداد", d: "۱۰ خرداد ۱۴۰۴", t: "برگزاری جشن پایان دوره ابتدایی", to: "/news/updates" },
              ].map((it, i) => (
                <Link key={i} to={it.to} className="block rounded-xl border border-border bg-card p-4 hover:border-brand/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="inline-flex items-center rounded-full bg-brand text-brand-foreground px-2 py-0.5">{it.tag}</span>
                    <span className="text-muted-foreground">{it.d}</span>
                  </div>
                  <div className="mt-2 text-[15px] font-semibold text-primary">{it.t}</div>
                </Link>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <Button asChild variant="outline" size="sm"><Link to="/news/updates">همه اخبار</Link></Button>
              <Button asChild variant="ghost" size="sm"><Link to="/news/calendar">تقویم آموزشی</Link></Button>
            </div>
          </div>

          <div>
            <SectionTitle eyebrow="زندگی مدرسه" title="نگاهی به زندگی مدرسه" />
            <div className="grid grid-cols-3 gap-2">
              {[libImg, sportsImg, tripImg].map((src, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-muted">
                  <img src={src} alt="گالری زندگی مدرسه" loading="lazy" width={512} height={512} className="h-full w-full object-cover hover:scale-105 transition-transform" />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button asChild variant="outline" size="sm"><Link to="/gallery"><ImageIcon className="size-4 ml-1" /> مشاهده گالری</Link></Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact & Location */}
      <Section>
        <SectionTitle eyebrow="ارتباط" title="راه‌های ارتباطی" />
        <div className="grid lg:grid-cols-3 gap-4">
          <Card className="p-5">
            <Phone className="size-5 text-brand mb-3" />
            <div className="text-sm text-muted-foreground">تلفن مدرسه</div>
            <div className="mt-1 font-semibold text-primary" dir="ltr">{site.phone}</div>
          </Card>
          <Card className="p-5">
            <Mail className="size-5 text-brand mb-3" />
            <div className="text-sm text-muted-foreground">ایمیل</div>
            <div className="mt-1 font-semibold text-primary">{site.email}</div>
          </Card>
          <Card className="p-5">
            <MapPin className="size-5 text-brand mb-3" />
            <div className="text-sm text-muted-foreground">آدرس</div>
            <div className="mt-1 font-semibold text-primary">{site.address}</div>
            <Button asChild variant="link" className="px-0 mt-1 text-brand"><Link to="/contact">مشاهده نقشه</Link></Button>
          </Card>
        </div>
      </Section>
    </>
  );
}

function toFa(n: number) { return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]); }

// import Mail here to avoid duplication at top
import { Mail } from "lucide-react";
