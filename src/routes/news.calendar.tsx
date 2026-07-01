import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Calendar as CalIcon } from "lucide-react";

const events = [
  { d: "۱ شهریور", t: "جلسه توجیهی خانواده‌ها", c: "همه مقاطع" },
  { d: "۲۳ شهریور", t: "آغاز سال تحصیلی", c: "همه مقاطع" },
  { d: "۱۳ آبان", t: "روز دانش‌آموز — برنامه ویژه", c: "پرورشی" },
  { d: "۲۰ آذر", t: "امتحانات میان‌ترم", c: "متوسطه" },
  { d: "۱۵ بهمن", t: "جشنواره علمی سالانه", c: "علمی" },
  { d: "۲۲ بهمن", t: "برنامه یوم‌الله — تعطیل", c: "تقویم" },
  { d: "۱ اردیبهشت", t: "اردوی سالانه", c: "پرورشی" },
  { d: "۲۰ خرداد", t: "امتحانات پایانی", c: "همه مقاطع" },
];

export const Route = createFileRoute("/news/calendar")({
  head: () => ({
    meta: [
      { title: "تقویم آموزشی — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "تقویم آموزشی سالانه مجتمع آموزشی ایرانیان مسقط با رویدادهای مهم." },
      { property: "og:title", content: "تقویم آموزشی" },
      { property: "og:description", content: "تقویم سالانه مدرسه." },
      { property: "og:url", content: "/news/calendar" },
    ],
    links: [{ rel: "canonical", href: "/news/calendar" }],
  }),
  component: CalendarPage,
});

function CalendarPage() {
  return (
    <>
      <PageHeader eyebrow="برنامه سالانه" title="تقویم آموزشی" description="رویدادهای مهم سال تحصیلی مجتمع." crumbs={[{ t: "اطلاعیه‌ها", to: "/news" }, { t: "تقویم آموزشی" }]} />
      <Section>
        <div className="grid md:grid-cols-2 gap-3">
          {events.map((e, i) => (
            <Card key={i} className="p-4 flex items-center gap-4">
              <div className="size-14 rounded-lg bg-brand-soft text-brand flex flex-col items-center justify-center shrink-0">
                <CalIcon className="size-4" />
                <span className="text-[10px] mt-0.5">{e.c}</span>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{e.d}</div>
                <div className="font-semibold text-primary">{e.t}</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
