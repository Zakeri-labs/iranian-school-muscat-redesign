import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { UserCircle2 } from "lucide-react";

const team = [
  { n: "دکتر سعید محمدی", r: "مدیر مجتمع" },
  { n: "خانم زهرا رحیمی", r: "معاون آموزشی" },
  { n: "آقای علی صادقی", r: "معاون اجرایی" },
  { n: "خانم مریم کاظمی", r: "معاون پرورشی" },
  { n: "آقای رضا مرادی", r: "مسئول امور مالی" },
  { n: "خانم فاطمه حسینی", r: "مسئول ثبت‌نام" },
  { n: "آقای امیر تقوی", r: "مسئول فناوری" },
  { n: "خانم لیلا نظری", r: "مشاور تحصیلی" },
];

export const Route = createFileRoute("/about/leadership")({
  head: () => ({
    meta: [
      { title: "مدیریت و کادر اداری — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "معرفی مدیریت و کادر اداری مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:title", content: "مدیریت و کادر اداری" },
      { property: "og:description", content: "تیم اجرایی مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:url", content: "/about/leadership" },
    ],
    links: [{ rel: "canonical", href: "/about/leadership" }],
  }),
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <>
      <PageHeader eyebrow="تیم اجرایی" title="مدیریت و کادر اداری" crumbs={[{ t: "درباره مجتمع", to: "/about" }, { t: "مدیریت و کادر" }]} />
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((m) => (
            <Card key={m.n} className="p-5 text-center">
              <div className="mx-auto size-20 rounded-full bg-brand-soft flex items-center justify-center">
                <UserCircle2 className="size-12 text-brand" />
              </div>
              <div className="mt-4 font-semibold text-primary">{m.n}</div>
              <div className="text-sm text-muted-foreground">{m.r}</div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
