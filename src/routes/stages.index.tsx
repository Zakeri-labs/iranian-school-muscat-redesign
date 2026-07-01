import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, School, GraduationCap, ChevronLeft } from "lucide-react";
import elem from "@/assets/stage-elementary.jpg";
import mid from "@/assets/stage-middle.jpg";
import high from "@/assets/stage-high.jpg";

const stages = [
  { t: "ابتدایی", d: "پایه اول تا ششم — پایه‌گذاری یادگیری و مهارت‌های پایه", to: "/stages/elementary", img: elem, i: BookOpen },
  { t: "متوسطه اول", d: "پایه هفتم تا نهم — تعمیق دانش و کشف علایق", to: "/stages/middle", img: mid, i: School },
  { t: "متوسطه دوم", d: "پایه دهم تا دوازدهم — آماده‌سازی برای آینده تحصیلی", to: "/stages/high", img: high, i: GraduationCap },
];

export const Route = createFileRoute("/stages/")({
  head: () => ({
    meta: [
      { title: "مقاطع آموزشی — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "معرفی سه مقطع تحصیلی ابتدایی، متوسطه اول و متوسطه دوم در مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:title", content: "مقاطع آموزشی" },
      { property: "og:description", content: "سه مقطع تحصیلی رسمی در مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:url", content: "/stages" },
    ],
    links: [{ rel: "canonical", href: "/stages" }],
  }),
  component: StagesIndex,
});

function StagesIndex() {
  return (
    <>
      <PageHeader eyebrow="مقاطع" title="مقاطع آموزشی" description="سه مقطع تحصیلی رسمی با برنامه درسی مصوب جمهوری اسلامی ایران." crumbs={[{ t: "مقاطع آموزشی" }]} />
      <Section>
        <div className="grid md:grid-cols-3 gap-4">
          {stages.map((s) => (
            <Card key={s.to} className="overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={s.img} alt={s.t} width={1024} height={768} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-brand"><s.i className="size-5" /><h3 className="text-lg font-bold text-primary">{s.t}</h3></div>
                <p className="mt-2 text-sm text-muted-foreground leading-6">{s.d}</p>
                <Button asChild variant="outline" size="sm" className="mt-4">
                  <Link to={s.to}>مشاهده جزئیات <ChevronLeft className="size-4 mr-1" /></Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
