import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Bell, Calendar } from "lucide-react";

const notices = [
  { d: "۲۵ خرداد ۱۴۰۴", t: "آغاز ثبت‌نام سال تحصیلی جدید", tag: "ثبت‌نام", s: "ثبت‌نام سال تحصیلی جدید آغاز شد. برای مشاهده شرایط و مدارک لازم به صفحه ثبت‌نام مراجعه کنید." },
  { d: "۲۰ خرداد ۱۴۰۴", t: "اعلام زمان‌بندی امتحانات پایان سال", tag: "امتحانات", s: "زمان‌بندی امتحانات پایانی مقاطع در پنل کاربری قابل مشاهده است." },
  { d: "۱۵ خرداد ۱۴۰۴", t: "تعطیلی مدرسه در مناسبت رسمی", tag: "تقویم", s: "به مناسبت تعطیل رسمی، مدرسه در روز شنبه تعطیل خواهد بود." },
  { d: "۱۰ خرداد ۱۴۰۴", t: "توزیع کتب درسی سال جدید", tag: "آموزش", s: "کتب درسی سال آینده از هفته آینده توزیع می‌شود." },
  { d: "۵ خرداد ۱۴۰۴", t: "برنامه بیمه دانش‌آموزی", tag: "خدمات", s: "بیمه دانش‌آموزی برای همه دانش‌آموزان فعال می‌باشد." },
];

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "اطلاعیه‌های مهم — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "اطلاعیه‌های رسمی و مهم مجتمع آموزشی ایرانیان مسقط برای والدین و دانش‌آموزان." },
      { property: "og:title", content: "اطلاعیه‌های مهم" },
      { property: "og:description", content: "اطلاعیه‌های رسمی مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <>
      <PageHeader eyebrow="اطلاعیه‌ها" title="اطلاعیه‌های مهم" description="آخرین اعلانات رسمی مدرسه را از این صفحه دنبال کنید." crumbs={[{ t: "اطلاعیه‌ها" }]} />
      <Section>
        <div className="grid gap-3">
          {notices.map((n, i) => (
            <Card key={i} className="p-5">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="inline-flex items-center rounded-full bg-notice text-notice-foreground px-2 py-0.5"><Bell className="size-3 ml-1" /> {n.tag}</span>
                <span className="flex items-center gap-1 text-muted-foreground"><Calendar className="size-3.5" /> {n.d}</span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-primary">{n.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-7">{n.s}</p>
              <div className="mt-3">
                <Link to="/news/updates" className="text-sm text-brand hover:underline">مشاهده جزئیات →</Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
