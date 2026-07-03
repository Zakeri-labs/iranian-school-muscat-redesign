import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site";
import type { FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تماس با ما — مجتمع آموزشی ایرانیان مسقط" },
      {
        name: "description",
        content: "راه‌های تماس با مجتمع آموزشی ایرانیان مسقط، آدرس، تلفن، ایمیل و فرم تماس.",
      },
      { property: "og:title", content: "تماس با مدرسه" },
      { property: "og:description", content: "راه‌های ارتباطی با مدرسه." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    toast.success("پیام شما با موفقیت ارسال شد.");
  }
  return (
    <>
      <PageHeader
        eyebrow="ارتباط"
        title="تماس با ما"
        description="با هر پرسش یا نظری در ارتباط باشید. کارشناسان ما در ساعات اداری پاسخگو هستند."
        crumbs={[{ t: "تماس با ما" }]}
      />
      <section className="container mx-auto px-4 py-6 lg:py-8 space-y-6">
        {/* کارت‌های اطلاعات تماس - ردیف افقی */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Card className="p-5 flex flex-col items-center text-center gap-3">
            <div className="size-12 rounded-full bg-brand/10 flex items-center justify-center">
              <Phone className="size-6 text-brand" />
            </div>
            <div>
              <div className="text-sm font-semibold text-primary mb-0.5">تلفن مدرسه</div>
              <div className="text-sm text-primary" dir="ltr">{site.phone}</div>
            </div>
          </Card>
          <Card className="p-5 flex flex-col items-center text-center gap-3">
            <div className="size-12 rounded-full bg-brand/10 flex items-center justify-center">
              <Mail className="size-6 text-brand" />
            </div>
            <div>
              <div className="text-sm font-semibold text-primary mb-0.5">ایمیل</div>
              <div className="text-xs text-primary break-all">{site.email}</div>
            </div>
          </Card>
          <Card className="p-5 flex flex-col items-center text-center gap-3">
            <div className="size-12 rounded-full bg-brand/10 flex items-center justify-center">
              <MapPin className="size-6 text-brand" />
            </div>
            <div>
              <div className="text-sm font-semibold text-primary mb-0.5">آدرس</div>
              <div className="text-xs text-primary leading-relaxed">{site.address}</div>
            </div>
          </Card>
          <Card className="p-5 flex flex-col items-center text-center gap-3">
            <div className="size-12 rounded-full bg-brand/10 flex items-center justify-center">
              <MapPin className="size-6 text-brand" />
            </div>
            <div>
              <div className="text-sm font-semibold text-primary mb-0.5">لوکیشن و نقشه</div>
              <div className="text-xs text-primary leading-relaxed mb-1">{site.address}</div>
              <a href={site.mapUrl} target="_blank" rel="noreferrer" className="text-xs text-brand hover:underline">
                مشاهده نقشه
              </a>
            </div>
          </Card>
        </div>

        {/* فرم تماس */}
        <Card className="p-5">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-primary">فرم تماس</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">پیام خود را ارسال کنید؛ در اسرع وقت پاسخ می‌دهیم.</p>
          </div>
          <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">نام و نام خانوادگی</Label>
              <Input id="name" required placeholder="نام کامل شما" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">ایمیل</Label>
              <Input id="email" type="email" required placeholder="you@example.com" dir="ltr" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="subject">موضوع</Label>
              <Input id="subject" required placeholder="موضوع پیام" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="msg">پیام</Label>
              <Textarea id="msg" rows={5} required placeholder="متن پیام..." />
            </div>
            <div className="md:col-span-2">
              <Button type="submit" className="bg-brand text-brand-foreground hover:bg-brand/90">
                ارسال پیام
              </Button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
}
