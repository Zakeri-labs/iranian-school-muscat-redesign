import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award, Star } from "lucide-react";

const honors = [
  { i: Trophy, t: "رتبه برتر جشنواره علمی مدارس ایرانی خارج از کشور", y: "۱۴۰۳" },
  { i: Medal, t: "مقام اول مسابقات ریاضی منطقه‌ای", y: "۱۴۰۳" },
  { i: Award, t: "دیپلم افتخار در جشنواره خوارزمی", y: "۱۴۰۲" },
  { i: Star, t: "برگزیده جشنواره فرهنگی-هنری", y: "۱۴۰۲" },
  { i: Trophy, t: "قبولی درصد بالای دانش‌آموزان در دانشگاه‌های برتر", y: "۱۴۰۱" },
  { i: Medal, t: "کسب مقام در مسابقات ورزشی مدارس", y: "۱۴۰۱" },
];

export const Route = createFileRoute("/honors")({
  head: () => ({
    meta: [
      { title: "افتخارات — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "افتخارات و دستاوردهای دانش‌آموزان مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:title", content: "افتخارات مجتمع" },
      { property: "og:description", content: "دستاوردهای دانش‌آموزان." },
      { property: "og:url", content: "/honors" },
    ],
    links: [{ rel: "canonical", href: "/honors" }],
  }),
  component: HonorsPage,
});

function HonorsPage() {
  return (
    <>
      <PageHeader eyebrow="دستاوردها" title="افتخارات مجتمع" description="مرور دستاوردهای علمی، فرهنگی و ورزشی دانش‌آموزان مدرسه." crumbs={[{ t: "افتخارات" }]} />
      <Section>
        <div className="grid md:grid-cols-2 gap-4">
          {honors.map((h, i) => (
            <Card key={i} className="p-5 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-brand-soft text-brand"><h.i className="size-6" /></div>
              <div>
                <div className="font-semibold text-primary leading-7">{h.t}</div>
                <div className="text-xs text-muted-foreground mt-1">سال {h.y}</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
