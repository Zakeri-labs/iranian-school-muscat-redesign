import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section, SectionTitle } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, FileText, Send, ClipboardCheck, Download, Calendar, Phone } from "lucide-react";

const docs = [
  "کپی شناسنامه دانش‌آموز و والدین",
  "کپی کارت ملی والدین",
  "کپی گذرنامه و ویزای اقامت",
  "کارنامه سال تحصیلی گذشته",
  "گواهی سلامت و واکسیناسیون",
  "شش قطعه عکس ۳×۴ جدید",
  "تکمیل فرم درخواست ثبت‌نام",
  "رسید پرداخت پیش‌شهریه",
];

export const Route = createFileRoute("/admissions/")({
  head: () => ({
    meta: [
      { title: "ثبت‌نام — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "راهنمای کامل ثبت‌نام، مدارک لازم، تاریخ‌های مهم و فرم‌های ثبت‌نام در مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:title", content: "ثبت‌نام در مجتمع آموزشی ایرانیان مسقط" },
      { property: "og:description", content: "مراحل، مدارک و زمان‌بندی ثبت‌نام." },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="ثبت‌نام"
        title="راهنمای ثبت‌نام"
        description="در چهار گام ساده، ثبت‌نام فرزندتان را کامل کنید."
        crumbs={[{ t: "ثبت‌نام" }]}
        action={
          <div className="flex gap-2">
            <Button asChild className="bg-brand text-brand-foreground hover:bg-brand/90"><Link to="/admissions/tuition">شهریه و پرداخت</Link></Button>
            <Button asChild variant="outline"><Link to="/contact">پرسش دارید؟</Link></Button>
          </div>
        }
      />

      {/* Steps */}
      <Section>
        <SectionTitle title="مراحل ثبت‌نام" />
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { n: 1, t: "بررسی شرایط", d: "شرایط پذیرش و مقطع مورد نظر را مطالعه کنید.", i: ClipboardCheck },
            { n: 2, t: "آماده‌سازی مدارک", d: "مدارک لازم را طبق چک‌لیست تهیه کنید.", i: FileText },
            { n: 3, t: "ارسال درخواست", d: "فرم را تکمیل و مدارک را ارسال کنید.", i: Send },
            { n: 4, t: "تأیید ثبت‌نام", d: "پس از بررسی، تأییدیه و کد کاربری دریافت می‌کنید.", i: CheckCircle2 },
          ].map(({ n, t, d, i: Icon }) => (
            <Card key={n} className="p-5">
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-lg bg-brand-soft text-brand"><Icon className="size-5" /></div>
                <span className="text-2xl font-bold text-primary/20">{toFa(n)}</span>
              </div>
              <div className="mt-4 font-semibold text-primary">{t}</div>
              <p className="mt-1 text-sm text-muted-foreground leading-6">{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Documents */}
      <div id="documents" />
      <Section className="bg-surface">

        <div className="container mx-auto">
          <SectionTitle eyebrow="چک‌لیست" title="مدارک لازم" description="پیش از مراجعه یا ارسال، لطفاً مدارک زیر را آماده کنید." />
          <div className="grid md:grid-cols-2 gap-3">
            {docs.map((d) => (
              <div key={d} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{d}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-2">
            <Button asChild variant="outline"><Link to="/resources/forms"><Download className="size-4 ml-1" /> دانلود فرم‌ها</Link></Button>
          </div>
        </div>
      </Section>

      {/* Dates */}
      <Section>
        <SectionTitle eyebrow="زمان‌بندی" title="تاریخ‌های مهم ثبت‌نام" />
        <ol className="relative border-r-2 border-brand/30 pr-6 space-y-6">
          {[
            { d: "۱ تیر ۱۴۰۴", t: "آغاز ثبت‌نام دانش‌آموزان جدید" },
            { d: "۲۰ تیر ۱۴۰۴", t: "پایان ثبت‌نام اولیه و بررسی مدارک" },
            { d: "۱۵ مرداد ۱۴۰۴", t: "اعلام نتایج پذیرش" },
            { d: "۱ شهریور ۱۴۰۴", t: "برگزاری جلسه توجیهی خانواده‌ها" },
            { d: "۲۳ شهریور ۱۴۰۴", t: "آغاز سال تحصیلی" },
          ].map((x, i) => (
            <li key={i} className="relative">
              <span className="absolute -right-[35px] top-1 size-4 rounded-full bg-brand ring-4 ring-brand-soft" />
              <div className="flex items-center gap-2 text-xs text-muted-foreground"><Calendar className="size-3.5" /> {x.d}</div>
              <div className="mt-1 font-semibold text-primary">{x.t}</div>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section className="bg-surface">
        <div className="container mx-auto">
          <SectionTitle eyebrow="سوالات" title="پرسش‌های پرتکرار ثبت‌نام" />
          <Accordion type="single" collapsible className="rounded-xl border border-border bg-card">
            {[
              { q: "آیا ثبت‌نام حضوری الزامی است؟", a: "خیر، مراحل اولیه به‌صورت آنلاین انجام می‌شود، اما برای تحویل مدارک، حضور یکی از والدین لازم است." },
              { q: "شرایط پذیرش دانش‌آموز جدید چیست؟", a: "داشتن گذرنامه معتبر ایرانی، اقامت قانونی در عمان و کارنامه سال تحصیلی گذشته از الزامات اصلی است." },
              { q: "امکان پرداخت شهریه به‌صورت اقساط وجود دارد؟", a: "بله، جزئیات در صفحه شهریه و پرداخت آمده است. برای درخواست، با واحد مالی تماس بگیرید." },
              { q: "زبان اصلی آموزش چیست؟", a: "زبان اصلی آموزش فارسی و بر اساس برنامه رسمی جمهوری اسلامی ایران است." },
            ].map((f, i) => (
              <AccordionItem key={i} value={`i${i}`} className="px-4">
                <AccordionTrigger className="text-right">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-7">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Contact */}
      <Section>
        <Card className="p-6 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <div>
            <h3 className="text-lg font-bold text-primary">پشتیبانی ثبت‌نام</h3>
            <p className="text-sm text-muted-foreground mt-1">در ساعات اداری با واحد ثبت‌نام در تماس باشید.</p>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline"><a href="tel:+96824601234" dir="ltr"><Phone className="size-4 ml-1" /> +968 2460 1234</a></Button>
            <Button asChild className="bg-brand text-brand-foreground hover:bg-brand/90"><Link to="/contact">فرم تماس</Link></Button>
          </div>
        </Card>
      </Section>
    </>
  );
}

function toFa(n: number) { return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]); }
