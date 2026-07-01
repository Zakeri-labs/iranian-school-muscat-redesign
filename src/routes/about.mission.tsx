import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Compass, Target, Heart, Shield, BookOpen, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about/mission")({
  head: () => ({
    meta: [
      { title: "مأموریت، چشم‌انداز و ارزش‌ها — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "مأموریت، چشم‌انداز و ارزش‌های بنیادین مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:title", content: "مأموریت، چشم‌انداز و ارزش‌ها" },
      { property: "og:description", content: "مأموریت و ارزش‌های مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:url", content: "/about/mission" },
    ],
    links: [{ rel: "canonical", href: "/about/mission" }],
  }),
  component: MissionPage,
});

function MissionPage() {
  return (
    <>
      <PageHeader eyebrow="هویت" title="مأموریت، چشم‌انداز و ارزش‌ها" crumbs={[{ t: "درباره مجتمع", to: "/about" }, { t: "مأموریت و ارزش‌ها" }]} />
      <Section>
        <div className="grid md:grid-cols-2 gap-5">
          <Card className="p-6">
            <Target className="size-6 text-brand" />
            <h2 className="mt-3 text-xl font-bold text-primary">مأموریت</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-7">
              ارائه آموزش با کیفیت مبتنی بر برنامه رسمی جمهوری اسلامی ایران، همراه با تربیت اخلاقی، هویتی و علمی به دانش‌آموزان ایرانی مقیم عمان.
            </p>
          </Card>
          <Card className="p-6">
            <Compass className="size-6 text-brand" />
            <h2 className="mt-3 text-xl font-bold text-primary">چشم‌انداز</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-7">
              مدرسه‌ای الگو در میان مدارس ایرانی خارج از کشور که دانش‌آموزانی توانمند، مسئول و افتخارآفرین برای ایران و جامعه پرورش می‌دهد.
            </p>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-primary">ارزش‌های ما</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-3">
            {[
              { t: "اخلاق و ایمان", d: "پایبندی به ارزش‌های اسلامی و اخلاق حرفه‌ای.", i: Heart },
              { t: "دانش و یادگیری", d: "تعهد به آموزش عمیق و روش‌های نوین.", i: BookOpen },
              { t: "احترام و شفافیت", d: "ارتباط محترمانه و شفاف با خانواده‌ها.", i: Shield },
              { t: "هویت ایرانی", d: "پاسداری از زبان و فرهنگ ایرانی.", i: Sparkles },
              { t: "مسئولیت‌پذیری", d: "پرورش شهروندانی مسئول و متعهد.", i: Target },
              { t: "همراهی خانواده", d: "همکاری مستمر با والدین.", i: Compass },
            ].map(({ t, d, i: Icon }) => (
              <Card key={t} className="p-5">
                <div className="flex items-center gap-2 text-brand"><Icon className="size-5" /><h3 className="font-semibold text-primary">{t}</h3></div>
                <p className="mt-2 text-sm text-muted-foreground leading-6">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
