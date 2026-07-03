import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Send, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const cols = [
  {
    title: "درباره مجتمع",
    links: [
      { t: "معرفی", to: "/about" },
      { t: "آیین‌نامه‌ها", to: "/resources/policies" },
      { t: "مأموریت و ارزش‌ها", to: "/about/mission" },
      { t: "کادر اداری", to: "/about/leadership" },
      { t: "افتخارات", to: "/honors" },
    ],
  },
  {
    title: "خدمات والدین",
    links: [
      { t: "ثبت‌نام", to: "/admissions" },
      { t: "شهریه و پرداخت", to: "/admissions/tuition" },
      { t: "تقویم آموزشی", to: "/news/calendar" },
      { t: "منابع والدین", to: "/resources/parents" },
      { t: "ورود به پنل", to: "/portal" },
    ],
  },
  {
    title: "دسترسی سریع",
    links: [
      { t: "مقاطع آموزشی", to: "/stages" },
      { t: "اطلاعیه‌ها", to: "/news" },
      { t: "گالری تصاویر", to: "/gallery" },
      { t: "دانلود فرم‌ها", to: "/resources/forms" },
      { t: "پرسش‌های پرتکرار", to: "/faq" },
      { t: "حریم خصوصی و دسترس‌پذیری", to: "/privacy" },
      { t: "لینک‌های رسمی", to: "/official-links" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 grid gap-10 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="[&_span]:!text-primary-foreground [&_img]:brightness-0 [&_img]:invert">
            <Logo />
          </div>
          <p className="text-sm text-primary-foreground/75 leading-7">
            {site.tagline}. مدرسه رسمی ایرانی در سلطنت عمان با سه مقطع ابتدایی، متوسطه اول و متوسطه
            دوم.
          </p>
          <ul className="text-sm space-y-2 text-primary-foreground/85">
            <li className="flex items-start gap-2" dir="rtl">
              <MapPin className="size-4 mt-0.5 shrink-0 text-brand" /> {site.address}
            </li>
            <li className="flex items-center gap-2" dir="rtl">
              <Phone className="size-4 shrink-0 text-brand" /> {site.phone}
            </li>
            <li className="flex items-center gap-2" dir="rtl">
              <Mail className="size-4 shrink-0 text-brand" /> {site.email}
            </li>
          </ul>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-bold text-primary-foreground mb-4">{col.title}</h3>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-primary-foreground/75 hover:text-brand transition-colors"
                  >
                    {l.t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-foreground/10">
        <div
          className="container mx-auto grid grid-cols-1 items-center gap-3 px-4 pb-24 pt-5 text-xs text-primary-foreground/70 md:grid-cols-[1fr_auto_1fr] lg:pb-5"
          dir="ltr"
        >
          <div
            className="min-w-0 justify-self-center text-center leading-6 md:justify-self-start md:text-left"
            dir="rtl"
          >
            © تمامی حقوق برای {site.name} محفوظ است.
          </div>
          <div className="order-first flex items-center justify-center gap-3 md:order-none md:justify-self-center">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="اینستاگرام"
              className="p-2 rounded-full bg-primary-foreground/5 hover:bg-brand hover:text-brand-foreground transition-colors"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={site.telegram}
              target="_blank"
              rel="noreferrer"
              aria-label="تلگرام"
              className="p-2 rounded-full bg-primary-foreground/5 hover:bg-brand hover:text-brand-foreground transition-colors"
            >
              <Send className="size-4" />
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="واتساپ"
              className="p-2 rounded-full bg-primary-foreground/5 hover:bg-brand hover:text-brand-foreground transition-colors"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
          <a
            href="https://www.zakeri.dev/"
            target="_blank"
            rel="noreferrer"
            className="min-w-0 justify-self-center text-center leading-6 transition-colors hover:text-brand md:justify-self-end md:text-right"
            dir="rtl"
          >
            طراحی شده توسط محمدرضا ذاکری
          </a>
        </div>
      </div>
    </footer>
  );
}
