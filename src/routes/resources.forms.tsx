import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const forms = [
  { t: "فرم درخواست ثبت‌نام سال تحصیلی جدید", s: "PDF · ۲۴۰KB" },
  { t: "فرم تکمیلی مشخصات دانش‌آموز", s: "PDF · ۱۸۰KB" },
  { t: "فرم رضایت‌نامه سرویس مدرسه", s: "PDF · ۱۲۰KB" },
  { t: "فرم انصراف / انتقالی", s: "PDF · ۱۵۰KB" },
  { t: "فرم درخواست تخفیف شهریه", s: "PDF · ۱۴۰KB" },
  { t: "فرم اطلاعات پزشکی دانش‌آموز", s: "PDF · ۱۶۰KB" },
  { t: "فرم درخواست معافیت درس", s: "PDF · ۱۱۰KB" },
  { t: "فرم گزارش پیشرفت تحصیلی (کادر)", s: "DOCX · ۹۰KB" },
];

export const Route = createFileRoute("/resources/forms")({
  head: () => ({
    meta: [
      { title: "دانلود فرم‌ها — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "دانلود فرم‌های اداری و آموزشی مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:title", content: "دانلود فرم‌ها" },
      { property: "og:description", content: "فرم‌های رسمی مدرسه." },
      { property: "og:url", content: "/resources/forms" },
    ],
    links: [{ rel: "canonical", href: "/resources/forms" }],
  }),
  component: FormsPage,
});

function FormsPage() {
  return (
    <>
      <PageHeader eyebrow="فرم‌ها" title="دانلود فرم‌ها" description="فرم‌های رسمی مدرسه برای ثبت‌نام، امور اداری و آموزشی." crumbs={[{ t: "منابع" }, { t: "فرم‌ها" }]} />
      <Section>
        <div className="grid md:grid-cols-2 gap-3">
          {forms.map((f) => (
            <Card key={f.t} className="p-4 flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-brand-soft text-brand"><FileDown className="size-5" /></div>
              <div className="flex-1">
                <div className="font-medium text-primary">{f.t}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{f.s}</div>
              </div>
              <Button size="sm" variant="outline">دانلود</Button>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
