import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section, SectionTitle } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, GraduationCap, Landmark, Users } from "lucide-react";
import hero from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "درباره مجتمع — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "معرفی مجتمع آموزشی ایرانیان مسقط، تاریخچه، اهداف و هویت رسمی مدرسه ایرانی در سلطنت عمان." },
      { property: "og:title", content: "درباره مجتمع آموزشی ایرانیان مسقط" },
      { property: "og:description", content: "معرفی رسمی مدرسه ایرانی در مسقط، عمان." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="درباره مجتمع"
        title="معرفی مجتمع آموزشی ایرانیان مسقط"
        description="مدرسه‌ای رسمی برای فرزندان ایرانی مقیم سلطنت عمان، متعهد به آموزش با کیفیت و پرورش هویت اسلامی-ایرانی."
        crumbs={[{ t: "درباره مجتمع" }]}
      />
      <Section>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6 text-[15px] leading-8 text-foreground">
            <p>
              مجتمع آموزشی ایرانیان مسقط با بهره‌گیری از برنامه‌های آموزشی رسمی جمهوری اسلامی ایران، خدمت‌رسانی به خانواده‌های ایرانی ساکن سلطنت عمان را در سه مقطع ابتدایی، متوسطه اول و متوسطه دوم برعهده دارد.
            </p>
            <p>
              فعالیت مدرسه با مجوز رسمی از وزارت آموزش و پرورش جمهوری اسلامی ایران و با هماهنگی نهادهای رسمی سلطنت عمان انجام می‌شود. کادر آموزشی و اداری مدرسه از میان معلمان و مدیران باتجربه و متخصص انتخاب شده‌اند.
            </p>
            <p>
              محیط آموزشی مدرسه با تمرکز بر تربیت اخلاقی، پیشرفت علمی و پرورش مهارت‌های زندگی طراحی شده و تلاش می‌کند فضایی امن، شاد و کارآمد برای دانش‌آموزان فراهم آورد.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border">
            <img src={hero} alt="نمای مجتمع آموزشی ایرانیان مسقط" width={1024} height={768} loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="container mx-auto">
          <SectionTitle title="یک نگاه به مجتمع" />
          <div className="grid md:grid-cols-4 gap-3">
            {[
              { t: "۳ مقطع تحصیلی", d: "ابتدایی، متوسطه اول و دوم", i: GraduationCap },
              { t: "کادر مجرب", d: "معلمان دارای صلاحیت رسمی", i: Users },
              { t: "برنامه رسمی", d: "منطبق با آموزش و پرورش ایران", i: Landmark },
              { t: "پشتیبانی خانواده", d: "همراهی مستمر با والدین", i: CheckCircle2 },
            ].map(({ t, d, i: Icon }) => (
              <Card key={t} className="p-5">
                <Icon className="size-5 text-brand" />
                <div className="mt-3 font-semibold text-primary">{t}</div>
                <div className="text-sm text-muted-foreground">{d}</div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">با ما در ارتباط باشید</h3>
            <p className="text-primary-foreground/80 mt-1 text-sm">برای بازدید، مشاوره یا اطلاعات بیشتر با مدرسه تماس بگیرید.</p>
          </div>
          <div className="flex gap-2">
            <Button asChild className="bg-brand text-brand-foreground hover:bg-brand/90"><Link to="/contact">تماس با ما</Link></Button>
            <Button asChild variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"><Link to="/about/leadership">مدیریت و کادر</Link></Button>
          </div>
        </div>
      </Section>
    </>
  );
}
