import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  FileDown,
  CreditCard,
  LogIn,
  Phone,
  Bell,
  ClipboardList,
  MapPin,
  GraduationCap,
  School,
  BookOpen,
  Users,
  UserCog,
  Landmark,
  ArrowLeft,
  CheckCircle2,
  FileText,
  Send,
  ClipboardCheck,
  ChevronLeft,
  Quote,
  Image as ImageIcon,
} from "lucide-react";
import type { SVGProps } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section, SectionTitle } from "@/components/site/PageHeader";
import { site } from "@/lib/site";

import heroImg from "@/assets/hero-image.jpg";
import elemImg from "@/assets/stage-elementary.jpg";
import middleImg from "@/assets/stage-middle.jpg";
import highImg from "@/assets/stage-high.jpg";
import principalImg from "@/assets/principal.jpg";
import schoolLifeImg1 from "@/assets/1.jpg";
import schoolLifeImg2 from "@/assets/2.jpg";
import schoolLifeImg3 from "@/assets/3.jpg";
import schoolLifeImg4 from "@/assets/4.jpg";
import schoolLifeImg5 from "@/assets/5.jpg";
import schoolLifeImg6 from "@/assets/6.jpg";
import schoolLifeImg7 from "@/assets/7.jpg";
import schoolLifeImg8 from "@/assets/8.jpg";
import parentsAccessImg from "@/assets/parents-access.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.descriptor}` },
      {
        name: "description",
        content: `پایگاه رسمی ${site.name}؛ ثبت‌نام، شهریه، اطلاعیه‌ها، تقویم آموزشی و منابع والدین و دانش‌آموزان در مسقط، عمان.`,
      },
      { property: "og:title", content: `${site.name}` },
      {
        property: "og:description",
        content: "مدرسه رسمی ایرانی در مسقط، عمان — ابتدایی، متوسطه اول و متوسطه دوم.",
      },
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
          <img
            src={heroImg}
            alt="نمای بیرونی مجتمع آموزشی ایرانیان مسقط"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/85 via-primary/70 to-primary/40" />
        </div>
        <div className="relative container mx-auto px-4 py-16 lg:py-28">
          <div className="max-w-2xl text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur px-3 py-1 text-xs font-medium border border-primary-foreground/20">
              <MapPin className="size-3.5" /> {site.addressShort}
            </div>
            <h1 className="mt-5 text-3xl md:text-5xl font-bold leading-tight text-white">{site.name}</h1>
            <p className="mt-3 text-lg md:text-xl text-primary-foreground/90">{site.tagline}</p>
            <p className="mt-3 text-primary-foreground/80 leading-8 max-w-xl">
              مدرسه رسمی ایرانی برای دانش‌آموزان مقاطع ابتدایی، متوسطه اول و متوسطه دوم در مسقط،
              عمان.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-brand hover:bg-brand/90 text-brand-foreground"
              >
                <Link to="/admissions">
                  ثبت‌نام سال تحصیلی <ArrowLeft className="size-4 mr-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
              >
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
                <Link
                  key={to}
                  to={to}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl px-3 py-4 text-sm font-medium text-foreground hover:bg-brand-soft hover:text-brand transition-colors min-h-16 text-center"
                >
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
                <span className="inline-flex items-center rounded-full bg-notice px-2 py-0.5 text-notice-foreground">
                  اطلاعیه مهم
                </span>
                <span className="text-muted-foreground">۲۵ خرداد ۱۴۰۴</span>
              </div>
              <div className="mt-1 text-[15px] font-semibold text-primary">
                آغاز ثبت‌نام سال تحصیلی جدید
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                ثبت‌نام سال تحصیلی جدید آغاز شد. برای مشاهده جزئیات و زمان‌بندی، اطلاعیه را دنبال
                کنید.
              </p>
            </div>
          </div>
          <div className="md:mr-auto">
            <Button
              asChild
              variant="outline"
              className="border-notice/40 text-notice hover:bg-notice hover:text-notice-foreground"
            >
              <Link to="/news">
                مشاهده اطلاعیه <ChevronLeft className="size-4 mr-1" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Quick access for parents */}
      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] xl:gap-12">
          <div className="order-2 lg:order-1">
            <SectionTitle
              eyebrow="والدین"
              title="دسترسی سریع والدین"
              description="پرکاربردترین بخش‌های مدرسه در یک نگاه."
            />
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
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
                <Link
                  key={to}
                  to={to}
                  className="group relative rounded-2xl border border-border bg-card p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
                >
                  <div className="flex flex-col items-center justify-center text-center py-2">
                    <Icon className="size-7 text-primary transition-colors group-hover:text-brand sm:size-8" />
                    <div className="mt-2.5 text-[13px] font-bold text-primary transition-colors group-hover:text-brand leading-tight">
                      {t}
                    </div>
                  </div>
                  <span className="absolute bottom-2.5 right-2.5 inline-flex size-6 items-center justify-center rounded-full border border-border bg-background text-primary transition-colors group-hover:border-brand/40 group-hover:bg-brand group-hover:text-brand-foreground">
                    <ChevronLeft className="size-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="mx-auto w-full max-w-sm sm:max-w-md lg:w-[340px] xl:w-[400px] overflow-hidden rounded-[2rem] border border-border bg-muted shadow-sm">
              <img
                src={parentsAccessImg}
                alt="گفت‌وگوی والدین با مشاور مدرسه"
                loading="lazy"
                width={702}
                height={784}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Admissions journey */}
      <section className="bg-surface py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <SectionTitle
              eyebrow="ثبت‌نام"
              title="مسیر ثبت‌نام در مجتمع"
              description="در چهار گام ساده، ثبت‌نام فرزندتان را کامل کنید."
            />
          </div>

          <div className="relative mt-10">
            <div className="absolute inset-x-[10%] top-12 hidden h-1 rounded-full bg-border lg:block" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  n: 1,
                  t: "بررسی شرایط",
                  d: "شرایط پذیرش هر مقطع را مطالعه کنید.",
                  i: ClipboardCheck,
                },
                {
                  n: 2,
                  t: "آماده‌سازی مدارک",
                  d: "چک‌لیست مدارک لازم را تکمیل کنید.",
                  i: FileText,
                },
                {
                  n: 3,
                  t: "ارسال درخواست",
                  d: "فرم ثبت‌نام را ثبت و مدارک را ارسال کنید.",
                  i: Send,
                },
                {
                  n: 4,
                  t: "تأیید ثبت‌نام",
                  d: "پس از بررسی، تأییدیه به شما اعلام می‌شود.",
                  i: CheckCircle2,
                },
              ].map(({ n, t, d, i: Icon }) => (
                <div key={n} className="relative">
                  <div className="mx-auto flex size-24 items-center justify-center rounded-full border border-brand/20 bg-surface p-2">
                    <div className="flex size-16 items-center justify-center rounded-2xl bg-brand text-brand-foreground shadow-sm">
                      <Icon className="size-7" />
                    </div>
                  </div>
                  <div className="mt-4 rounded-2xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md">
                    <div className="mx-auto -mt-8 mb-4 flex size-9 items-center justify-center rounded-full bg-brand text-base font-bold text-brand-foreground shadow-sm ring-[3px] ring-card">
                      {toFa(n)}
                    </div>
                    <h3 className="font-bold text-primary">{t}</h3>
                    <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild className="bg-brand text-brand-foreground hover:bg-brand/90">
              <Link to="/admissions">
                مشاهده راهنمای کامل ثبت‌نام <ChevronLeft className="size-4 mr-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Academic stages */}
      <Section>
        <SectionTitle
          eyebrow="مقاطع"
          title="مقاطع آموزشی"
          description="سه مقطع تحصیلی با برنامه درسی رسمی مصوب."
        />
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              t: "ابتدایی",
              d: "پایه اول تا ششم",
              to: "/stages/elementary",
              img: elemImg,
              i: BookOpen,
            },
            {
              t: "متوسطه اول",
              d: "پایه هفتم تا نهم",
              to: "/stages/middle",
              img: middleImg,
              i: School,
            },
            {
              t: "متوسطه دوم",
              d: "پایه دهم تا دوازدهم",
              to: "/stages/high",
              img: highImg,
              i: GraduationCap,
            },
          ].map(({ t, d, to, img, i: Icon }) => (
            <Card key={to} className="overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={img}
                  alt={t}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-brand">
                  <Icon className="size-5" />
                  <h3 className="text-lg font-bold text-primary">{t}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{d}</p>
                <div className="mt-4">
                  <Link
                    to={to}
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
                  >
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
          <SectionTitle
            eyebrow="مسیرها"
            title="دسترسی سریع بر اساس نقش شما"
            description="مسیر مناسب خود را انتخاب کنید تا سریع‌تر به آنچه نیاز دارید برسید."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                t: "والدین",
                i: Users,
                cardClass: "bg-rose-50/80 border-rose-100",
                iconClass: "bg-white/70 text-rose-500",
                links: [
                  { t: "منابع والدین", to: "/resources/parents" },
                  { t: "شهریه و پرداخت", to: "/admissions/tuition" },
                  { t: "تقویم آموزشی", to: "/news/calendar" },
                ],
              },
              {
                t: "دانش‌آموزان",
                i: GraduationCap,
                cardClass: "bg-sky-50/80 border-sky-100",
                iconClass: "bg-white/70 text-sky-500",
                links: [
                  { t: "منابع دانش‌آموزان", to: "/resources/students" },
                  { t: "تقویم امتحانات", to: "/news/calendar" },
                  { t: "اطلاعیه‌ها", to: "/news" },
                ],
              },
              {
                t: "معلمان",
                i: School,
                cardClass: "bg-emerald-50/80 border-emerald-100",
                iconClass: "bg-white/70 text-emerald-500",
                links: [
                  { t: "منابع معلمان", to: "/resources/teachers" },
                  { t: "آیین‌نامه‌ها", to: "/resources/policies" },
                  { t: "پنل کاربری", to: "/portal" },
                ],
              },
              {
                t: "کادر اداری",
                i: UserCog,
                cardClass: "bg-amber-50/80 border-amber-100",
                iconClass: "bg-white/70 text-amber-500",
                links: [
                  { t: "دانلود فرم‌ها", to: "/resources/forms" },
                  { t: "مدیریت مجتمع", to: "/about/leadership" },
                  { t: "پنل کاربری", to: "/portal" },
                ],
              },
              {
                t: "مراجع رسمی",
                i: Landmark,
                cardClass: "bg-violet-50/80 border-violet-100",
                iconClass: "bg-white/70 text-violet-500",
                links: [
                  { t: "لینک‌های رسمی", to: "/official-links" },
                  { t: "درباره مجتمع", to: "/about" },
                  { t: "تماس با ما", to: "/contact" },
                ],
              },
            ].map(({ t, i: Icon, links, cardClass, iconClass }) => (
              <Card key={t} className={`p-5 ${cardClass}`}>
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${iconClass}`}>
                    <Icon className="size-4" />
                  </div>
                  <h3 className="font-semibold text-primary">{t}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="text-sm text-muted-foreground hover:text-brand flex items-center gap-1"
                      >
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
        <div className="grid items-stretch gap-4 sm:grid-cols-3">
          <Card className="rounded-lg border-sky-100 bg-white p-3.5 shadow-sm">
            <div className="mb-3 flex items-center gap-2 text-primary">
              <CheckCircle2 className="size-4 text-brand" />
              <h3 className="text-sm font-bold">اعتماد و هویت</h3>
            </div>
            <ul className="flex w-full flex-col gap-2">
              {[
                { t: "هویت آموزشی ایرانی", i: BookOpen },
                { t: "لینک‌های رسمی", i: Landmark, to: "/official-links" },
                { t: "منابع آموزشی", i: ClipboardCheck },
              ].map(({ t, i: Icon, to }, idx) => {
                const content = (
                  <>
                    <span className="flex-1 text-right text-muted-foreground">{t}</span>
                    <Icon className="size-[18px] shrink-0 text-primary" />
                  </>
                );

                return (
                  <li
                    key={idx}
                    dir="rtl"
                    className="flex min-h-11 w-full items-center gap-3 rounded-md border border-sky-100 bg-white/80 px-4 py-2 text-sm"
                  >
                    {to ? (
                      <Link to={to} className="flex flex-1 items-center gap-3 hover:text-brand">
                        {content}
                      </Link>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </Card>

          <Card className="relative overflow-hidden rounded-lg border-sky-100 bg-white shadow-sm">
            <div className="flex h-full flex-row items-end justify-between gap-1">
              <div className="min-w-0 flex-1 p-4">
                <div className="flex items-center gap-2 text-primary">
                  <Quote className="size-4 text-primary" />
                  <h3 className="text-sm font-bold">پیام مدیر مجتمع</h3>
                </div>
                <div className="mt-4 rounded-lg border border-sky-100 bg-white px-3 py-2 shadow-sm">
                  <p className="text-xs leading-6 text-muted-foreground">
                    هدف ما تربیت نسلی دانا، مسئول و متعهد به ایران و آموزه‌های اسلامی است.
                  </p>
                </div>
                <div className="mt-3 text-xs leading-5">
                  <div className="font-semibold text-primary">آقای دکتر خلیل جوادیار</div>
                </div>
              </div>
              <div className="h-40 w-28 shrink-0 overflow-hidden self-end">
                <img
                  src={principalImg}
                  alt="مدیر مجتمع"
                  loading="lazy"
                  width={320}
                  height={416}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden rounded-lg border-sky-100 bg-white shadow-sm">
            <div className="flex h-full flex-row items-end justify-between gap-1">
              <div className="min-w-0 flex-1 px-4 pt-4 pb-4">
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <BookOpen className="size-4" />
                  <h3 className="text-sm font-bold">درباره مجتمع</h3>
                </div>
                <p className="text-xs leading-6 text-muted-foreground">
                  {site.name} با بهره‌گیری از برنامه‌های آموزشی رسمی جمهوری اسلامی ایران و کادری
                  مجرب، در مسیر تعالی علمی اخلاقی دانش‌آموزان گام برمی‌دارد.
                </p>
                <div className="mt-3">
                  <Button asChild variant="outline" size="sm" className="h-8 px-3 text-xs">
                    <Link to="/about">بیشتر بخوانید</Link>
                  </Button>
                </div>
              </div>
              <div className="h-40 w-28 shrink-0 overflow-hidden rounded-bl-lg self-end">
                <img
                  src={heroImg}
                  alt="نمای مجتمع آموزشی ایرانیان مسقط"
                  loading="lazy"
                  width={320}
                  height={240}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* School life + Latest updates */}
      <Section className="bg-surface !py-14">
        <div className="container mx-auto grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
          <div>
            <SectionTitle eyebrow="اطلاعیه‌ها" title="آخرین اخبار و اطلاعیه‌ها" />
            <div className="space-y-3">
              {[
                {
                  day: "۲۴",
                  month: "اردیبهشت",
                  year: "۱۴۰۴",
                  d: "اطلاعیه پیش‌ثبت‌نام سال تحصیلی ۱۴۰۴-۱۴۰۳",
                  t: "فرآیند پیش‌ثبت‌نام دانش‌آموزان جدید از تاریخ مشخص‌شده آغاز خواهد شد.",
                  to: "/news/updates",
                },
                {
                  day: "۱۸",
                  month: "اردیبهشت",
                  year: "۱۴۰۴",
                  d: "زمان‌بندی امتحانات پایان‌ترم اعلام شد",
                  t: "برنامه امتحانات پایان‌ترم به همراه جزئیات کلاس‌ها در بخش تقویم آموزشی منتشر شد.",
                  to: "/news",
                },
                {
                  day: "۱۲",
                  month: "اردیبهشت",
                  year: "۱۴۰۴",
                  d: "برنامه جشن نیمه شعبان",
                  t: "جشن ویژه نیمه شعبان با برنامه‌های متنوع فرهنگی و مذهبی در مدرسه برگزار می‌شود.",
                  to: "/news/updates",
                },
              ].map((it) => (
                <Link
                  key={it.d}
                  to={it.to}
                  className="flex min-h-24 items-stretch gap-3 rounded-lg border border-sky-100 bg-white p-2 shadow-sm transition-colors hover:border-brand/40"
                >
                  <div className="flex min-w-0 flex-1 flex-col justify-center px-2 text-right">
                    <h3 className="text-sm font-bold leading-6 text-primary">{it.d}</h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-6 text-muted-foreground">
                      {it.t}
                    </p>
                    <span className="mt-1 text-xs font-medium text-brand">مشاهده بیشتر</span>
                  </div>
                  <div className="flex w-14 shrink-0 flex-col items-center justify-center rounded-md bg-emerald-50 text-brand">
                    <div className="text-lg font-bold leading-none">{it.day}</div>
                    <div className="mt-1 text-[11px] font-medium">{it.month}</div>
                    <div className="mt-1 text-[11px] font-semibold">{it.year}</div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link to="/news/updates">همه اخبار</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to="/news/calendar">تقویم آموزشی</Link>
              </Button>
            </div>
          </div>

          <div>
            <SectionTitle eyebrow="زندگی مدرسه" title="نگاهی به زندگی مدرسه" />
            <div className="grid grid-cols-4 gap-2">
              {[
                schoolLifeImg1,
                schoolLifeImg2,
                schoolLifeImg3,
                schoolLifeImg4,
                schoolLifeImg5,
                schoolLifeImg6,
                schoolLifeImg7,
                schoolLifeImg8,
              ].map((src, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-muted">
                  <img
                    src={src}
                    alt="گالری زندگی مدرسه"
                    loading="lazy"
                    width={512}
                    height={512}
                    className="h-full w-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button asChild variant="outline" size="sm">
                <Link to="/gallery">
                  <ImageIcon className="size-4 ml-1" /> مشاهده گالری
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact & Location */}
      <Section>
        <SectionTitle eyebrow="ارتباط" title="راه‌های ارتباطی" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="flex min-h-52 flex-col items-center justify-center p-5 text-center">
            <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-brand/10 text-brand">
              <SolidPhoneIcon className="size-9" />
            </div>
            <div className="text-base font-bold text-primary">تلفن مدرسه</div>
            <div className="mt-2 text-lg font-semibold text-primary" dir="ltr">
              {site.phone}
            </div>
          </Card>
          <Card className="flex min-h-52 flex-col items-center justify-center p-5 text-center">
            <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-brand/10 text-brand">
              <SolidMailIcon className="size-9" />
            </div>
            <div className="text-base font-bold text-primary">ایمیل</div>
            <div className="mt-2 break-all text-base font-semibold leading-7 text-primary">
              {site.email}
            </div>
          </Card>
          <Card className="flex min-h-52 flex-col items-center justify-center p-5 text-center">
            <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-brand/10 text-brand">
              <SolidLocationIcon className="size-9" />
            </div>
            <div className="text-base font-bold text-primary">آدرس</div>
            <div className="mt-2 text-base font-semibold leading-7 text-primary">
              {site.address}
            </div>
          </Card>
          <Card className="flex min-h-52 flex-col items-center justify-center p-5 text-center">
            <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-brand/10 text-brand">
              <SolidMapIcon className="size-9" />
            </div>
            <div className="text-base font-bold text-primary">لوکیشن و نقشه</div>
            <div className="mt-2 text-base font-semibold leading-7 text-primary">
              {site.address}
            </div>
            <Button asChild variant="link" className="mt-2 px-0 text-base text-brand">
              <a href={site.mapUrl} target="_blank" rel="noreferrer">
                مشاهده نقشه
              </a>
            </Button>
          </Card>
        </div>
      </Section>
    </>
  );
}

function SolidPhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.3-.3.74-.39 1.13-.26 1.24.41 2.57.63 3.96.63.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.85 21 3 13.15 3 3.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.39.22 2.72.63 3.96.12.39.04.83-.27 1.13l-2.24 2.2Z" />
    </svg>
  );
}

function SolidMailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm-.4 4.25-7.07 4.42a1 1 0 0 1-1.06 0L4.4 8.25a1 1 0 1 1 1.06-1.7L12 10.64l6.54-4.09a1 1 0 1 1 1.06 1.7Z" />
    </svg>
  );
}

function SolidLocationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  );
}

function SolidMapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m20.5 3-.16.03L15 5.1 9 3 3.36 4.9A.5.5 0 0 0 3 5.38V20.5a.5.5 0 0 0 .66.47L9 18.9l6 2.1 5.64-1.9a.5.5 0 0 0 .36-.48V3.5a.5.5 0 0 0-.5-.5ZM15 19l-6-2.11V5l6 2.11V19Z" />
    </svg>
  );
}

function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
}
