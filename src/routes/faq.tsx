import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "چگونه ثبت‌نام کنم؟", a: "به صفحه ثبت‌نام مراجعه کنید و پس از مطالعه شرایط، فرم مربوطه را تکمیل و مدارک را ارسال کنید." },
  { q: "شهریه سالانه چقدر است؟", a: "جدول کامل شهریه در صفحه «شهریه و پرداخت» در دسترس است." },
  { q: "چگونه نام کاربری پنل را دریافت کنم؟", a: "پس از تأیید ثبت‌نام، نام کاربری از طریق پیامک/ایمیل ارسال می‌شود. در صورت نیاز از صفحه پنل درخواست کنید." },
  { q: "آیا مدرسه سرویس رفت‌وآمد دارد؟", a: "بله، سرویس در مناطق مشخص شده ارائه می‌شود. جزئیات را از واحد اجرایی دریافت کنید." },
  { q: "زبان اصلی آموزش چیست؟", a: "زبان اصلی فارسی است و بر اساس برنامه رسمی جمهوری اسلامی ایران تدریس می‌شود." },
  { q: "برای دیدار حضوری چه باید کرد؟", a: "لطفاً از قبل با واحد ثبت‌نام هماهنگ کنید تا وقت ملاقات تنظیم شود." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "پرسش‌های پرتکرار — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "پاسخ رایج‌ترین پرسش‌های خانواده‌ها و دانش‌آموزان درباره مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:title", content: "پرسش‌های پرتکرار" },
      { property: "og:description", content: "پاسخ سوالات رایج." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <PageHeader eyebrow="راهنما" title="پرسش‌های پرتکرار" description="پاسخ به رایج‌ترین سوالات خانواده‌ها و دانش‌آموزان." crumbs={[{ t: "پرسش‌های پرتکرار" }]} />
      <Section>
        <Accordion type="single" collapsible className="rounded-xl border border-border bg-card">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`i${i}`} className="px-4">
              <AccordionTrigger className="text-right">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-7">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
