import { Link } from "@tanstack/react-router";
import { PageHeader, Section, SectionTitle } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function StagePage({
  title, grades, img, intro, features, subjects, crumbTitle,
}: {
  title: string; grades: string; img: string; intro: string;
  features: string[]; subjects: string[]; crumbTitle: string;
}) {
  return (
    <>
      <PageHeader eyebrow={grades} title={title} description={intro} crumbs={[{ t: "مقاطع آموزشی", to: "/stages" }, { t: crumbTitle }]} />
      <Section>
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src={img} alt={title} width={1024} height={768} loading="lazy" className="w-full object-cover" />
            </div>
            <div>
              <SectionTitle title="ویژگی‌های مقطع" />
              <ul className="grid sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionTitle title="سرفصل‌های اصلی" />
              <div className="flex flex-wrap gap-2">
                {subjects.map((s) => (
                  <span key={s} className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-primary">{s}</span>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <Card className="p-5">
              <div className="text-sm text-muted-foreground">پایه‌های تحصیلی</div>
              <div className="mt-1 text-lg font-bold text-primary">{grades}</div>
            </Card>
            <Card className="p-5 space-y-3">
              <div className="font-semibold text-primary">اقدامات بعدی</div>
              <Button asChild className="w-full bg-brand text-brand-foreground hover:bg-brand/90"><Link to="/admissions">ثبت‌نام در این مقطع</Link></Button>
              <Button asChild variant="outline" className="w-full"><Link to="/admissions/tuition">شهریه و پرداخت</Link></Button>
              <Button asChild variant="ghost" className="w-full"><Link to="/contact">تماس با مدرسه</Link></Button>
            </Card>
          </aside>
        </div>
      </Section>
    </>
  );
}
