import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  { q: "آیین‌نامه انضباطی دانش‌آموزان", a: "دانش‌آموزان موظف به رعایت مقررات مدرسه، پوشش رسمی، حضور به‌موقع و رعایت احترام متقابل هستند." },
  { q: "آیین‌نامه پوشش مدرسه", a: "پوشش رسمی مدرسه در تمام روزهای هفته الزامی است و جزئیات آن از سوی مدرسه ابلاغ می‌شود." },
  { q: "آیین‌نامه ارزشیابی تحصیلی", a: "ارزشیابی طبق شیوه‌نامه مصوب آموزش و پرورش جمهوری اسلامی ایران انجام می‌گیرد." },
  { q: "آیین‌نامه غیبت و حضور", a: "غیبت غیرموجه مطابق مقررات پیگیری خواهد شد و خانواده‌ها موظف به اطلاع قبلی هستند." },
  { q: "آیین‌نامه مالی و پرداخت", a: "شرایط پرداخت شهریه، اقساط و بازپرداخت در آیین‌نامه مالی تشریح شده است." },
  { q: "آیین‌نامه استفاده از فضاهای مدرسه", a: "استفاده از کتابخانه، آزمایشگاه و سالن ورزش تابع مقررات ویژه هر بخش است." },
];

export const Route = createFileRoute("/resources/policies")({
  head: () => ({
    meta: [
      { title: "آیین‌نامه‌ها — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "آیین‌نامه‌ها و مقررات رسمی مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:title", content: "آیین‌نامه‌ها" },
      { property: "og:description", content: "مقررات رسمی مدرسه." },
      { property: "og:url", content: "/resources/policies" },
    ],
    links: [{ rel: "canonical", href: "/resources/policies" }],
  }),
  component: PoliciesPage,
});

function PoliciesPage() {
  return (
    <>
      <PageHeader eyebrow="مقررات" title="آیین‌نامه‌ها" description="مقررات رسمی مجتمع آموزشی ایرانیان مسقط." crumbs={[{ t: "منابع" }, { t: "آیین‌نامه‌ها" }]} />
      <Section>
        <Accordion type="single" collapsible className="rounded-xl border border-border bg-card">
          {items.map((f, i) => (
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
