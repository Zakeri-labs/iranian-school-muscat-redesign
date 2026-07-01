import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import lib from "@/assets/life-library.jpg";
import sports from "@/assets/life-sports.jpg";
import trip from "@/assets/life-trip.jpg";

const items = [
  { img: trip, tag: "بازدید", d: "۲۰ خرداد ۱۴۰۴", t: "بازدید علمی دانش‌آموزان از موزه علوم", s: "دانش‌آموزان مقطع متوسطه در بازدیدی علمی، از موزه علوم مسقط دیدن کردند." },
  { img: sports, tag: "ورزش", d: "۱۸ خرداد ۱۴۰۴", t: "برگزاری مسابقات ورزشی درون‌مدرسه‌ای", s: "مسابقات فوتبال، والیبال و دوومیدانی با حضور دانش‌آموزان برگزار شد." },
  { img: lib, tag: "فرهنگی", d: "۱۵ خرداد ۱۴۰۴", t: "افتتاح گوشه مطالعه در کتابخانه مدرسه", s: "گوشه‌ای آرام برای مطالعه فردی و گروهی در کتابخانه مدرسه راه‌اندازی شد." },
];

export const Route = createFileRoute("/news/updates")({
  head: () => ({
    meta: [
      { title: "اخبار مجتمع — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "اخبار و رویدادهای مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:title", content: "اخبار مجتمع" },
      { property: "og:description", content: "آخرین اخبار و رویدادهای مدرسه." },
      { property: "og:url", content: "/news/updates" },
    ],
    links: [{ rel: "canonical", href: "/news/updates" }],
  }),
  component: UpdatesPage,
});

function UpdatesPage() {
  return (
    <>
      <PageHeader eyebrow="اخبار" title="اخبار مجتمع" description="مروری بر رویدادها و فعالیت‌های مدرسه." crumbs={[{ t: "اطلاعیه‌ها", to: "/news" }, { t: "اخبار مجتمع" }]} />
      <Section>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={it.img} alt={it.t} width={1024} height={640} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center rounded-full bg-brand text-brand-foreground px-2 py-0.5">{it.tag}</span>
                  <span className="text-muted-foreground">{it.d}</span>
                </div>
                <h3 className="mt-2 font-bold text-primary leading-7">{it.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-6">{it.s}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
