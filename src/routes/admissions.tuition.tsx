import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section, SectionTitle } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard, Landmark, Info, Phone } from "lucide-react";

const rows = [
  { s: "ابتدایی", reg: "۱۲۰", tuition: "۱٬۸۰۰", total: "۱٬۹۲۰" },
  { s: "متوسطه اول", reg: "۱۵۰", tuition: "۲٬۲۰۰", total: "۲٬۳۵۰" },
  { s: "متوسطه دوم", reg: "۱۸۰", tuition: "۲٬۶۰۰", total: "۲٬۷۸۰" },
];

export const Route = createFileRoute("/admissions/tuition")({
  head: () => ({
    meta: [
      { title: "شهریه و پرداخت — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "جدول شهریه سالانه، روش‌های پرداخت، نکات و پرسش‌های مالی مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:title", content: "شهریه و پرداخت" },
      { property: "og:description", content: "شهریه سالانه مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:url", content: "/admissions/tuition" },
    ],
    links: [{ rel: "canonical", href: "/admissions/tuition" }],
  }),
  component: TuitionPage,
});

function TuitionPage() {
  return (
    <>
      <PageHeader
        eyebrow="مالی"
        title="شهریه و پرداخت"
        description="اطلاعات رسمی شهریه سالانه و راهنمای پرداخت برای سال تحصیلی جاری."
        crumbs={[{ t: "ثبت‌نام و شهریه", to: "/admissions" }, { t: "شهریه و پرداخت" }]}
      />

      <Section>
        <SectionTitle title="جدول شهریه سالانه" description="مبالغ به ریال عمانی (OMR) و مطابق مصوبه هیأت مدیره است." />
        <Card className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">مقطع تحصیلی</TableHead>
                <TableHead className="text-right">ثبت‌نام (OMR)</TableHead>
                <TableHead className="text-right">شهریه سالانه (OMR)</TableHead>
                <TableHead className="text-right">جمع کل (OMR)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.s}>
                  <TableCell className="font-semibold text-primary">{r.s}</TableCell>
                  <TableCell>{r.reg}</TableCell>
                  <TableCell>{r.tuition}</TableCell>
                  <TableCell className="font-semibold text-brand">{r.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
        <p className="mt-3 text-xs text-muted-foreground">* هزینه کتب درسی، سرویس رفت‌وآمد و پوشاک مدرسه جداگانه محاسبه می‌شود.</p>
      </Section>

      <Section className="bg-surface">
        <div className="container mx-auto grid md:grid-cols-2 gap-5">
          <Card className="p-6">
            <div className="flex items-center gap-2 text-brand"><CreditCard className="size-5" /><h3 className="font-semibold text-primary">روش‌های پرداخت</h3></div>
            <ul className="mt-4 space-y-2 text-sm text-foreground list-disc pr-5 leading-7">
              <li>پرداخت الکترونیکی از طریق پنل کاربری</li>
              <li>واریز مستقیم به حساب بانکی مدرسه</li>
              <li>پرداخت نقدی در واحد مالی مدرسه</li>
              <li>پرداخت اقساطی با هماهنگی واحد مالی</li>
            </ul>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-2 text-brand"><Landmark className="size-5" /><h3 className="font-semibold text-primary">حساب بانکی رسمی</h3></div>
            <div className="mt-4 space-y-2 text-sm text-foreground">
              <div>بانک: <span className="font-semibold">Bank Muscat</span></div>
              <div>نام حساب: مجتمع آموزشی ایرانیان مسقط</div>
              <div dir="ltr">IBAN: OMxx BMUS xxxx xxxx xxxx</div>
              <div className="text-xs text-muted-foreground">پس از پرداخت، رسید را به واحد مالی ارسال کنید.</div>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="rounded-xl border border-brand/30 bg-brand-soft p-5 flex items-start gap-3">
          <Info className="size-5 text-brand shrink-0 mt-0.5" />
          <div className="text-sm text-foreground leading-7">
            برای دانش‌آموزان با شرایط ویژه (چند فرزند، شرایط خانوادگی و…)، امکان بررسی تخفیف یا تسهیل در پرداخت وجود دارد. لطفاً درخواست خود را به واحد مالی مدرسه ارائه دهید.
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="container mx-auto">
          <SectionTitle title="پرسش‌های پرتکرار مالی" />
          <Accordion type="single" collapsible className="rounded-xl border border-border bg-card">
            {[
              { q: "شهریه به چه صورت اعلام می‌شود؟", a: "شهریه سالانه در ابتدای هر سال تحصیلی توسط هیأت مدیره تصویب و در همین صفحه منتشر می‌شود." },
              { q: "امکان بازپرداخت شهریه در صورت انصراف وجود دارد؟", a: "بر اساس آیین‌نامه مالی مدرسه، درصدی از شهریه با توجه به زمان انصراف قابل بازپرداخت است." },
              { q: "پرداخت اقساطی چگونه است؟", a: "پس از تأیید ثبت‌نام، می‌توانید با واحد مالی برای زمان‌بندی اقساط هماهنگ کنید." },
            ].map((f, i) => (
              <AccordionItem key={i} value={`i${i}`} className="px-4">
                <AccordionTrigger className="text-right">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-7">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <Section>
        <Card className="p-6 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <div>
            <h3 className="text-lg font-bold text-primary">پشتیبانی مالی</h3>
            <p className="text-sm text-muted-foreground mt-1">برای پرسش‌های مالی و پرداخت با واحد مالی تماس بگیرید.</p>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline"><a href="tel:+96824601234" dir="ltr"><Phone className="size-4 ml-1" /> +968 2460 1234</a></Button>
            <Button asChild className="bg-brand text-brand-foreground hover:bg-brand/90"><Link to="/contact">تماس با ما</Link></Button>
          </div>
        </Card>
      </Section>
    </>
  );
}
