import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, SectionTitle } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { site } from "@/lib/site";
import type { FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تماس با ما — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "راه‌های تماس با مجتمع آموزشی ایرانیان مسقط، آدرس، تلفن، ایمیل و فرم تماس." },
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
      <PageHeader eyebrow="ارتباط" title="تماس با ما" description="با هر پرسش یا نظری در ارتباط باشید. کارشناسان ما در ساعات اداری پاسخگو هستند." crumbs={[{ t: "تماس با ما" }]} />
      <Section>
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <SectionTitle title="فرم تماس" description="پیام خود را برای ما ارسال کنید؛ در اسرع وقت پاسخ می‌دهیم." />
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
                  <Textarea id="msg" rows={6} required placeholder="متن پیام..." />
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" className="bg-brand text-brand-foreground hover:bg-brand/90">ارسال پیام</Button>
                </div>
              </form>
            </Card>
          </div>

          <aside className="space-y-4">
            <Card className="p-5 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="size-5 text-brand mt-0.5" />
                <div><div className="text-xs text-muted-foreground">تلفن</div><div className="font-semibold text-primary" dir="ltr">{site.phone}</div></div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="size-5 text-brand mt-0.5" />
                <div><div className="text-xs text-muted-foreground">واتساپ</div><div className="font-semibold text-primary" dir="ltr">{site.whatsapp}</div></div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="size-5 text-brand mt-0.5" />
                <div><div className="text-xs text-muted-foreground">ایمیل</div><div className="font-semibold text-primary">{site.email}</div></div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-brand mt-0.5" />
                <div><div className="text-xs text-muted-foreground">آدرس</div><div className="font-semibold text-primary">{site.address}</div></div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="size-5 text-brand mt-0.5" />
                <div><div className="text-xs text-muted-foreground">ساعت کار</div><div className="font-semibold text-primary">شنبه تا چهارشنبه · ۸ تا ۱۵</div></div>
              </div>
            </Card>
            <Card className="p-2 overflow-hidden">
              <div className="aspect-video rounded-md bg-muted flex items-center justify-center text-muted-foreground text-sm">
                <MapPin className="size-8 text-brand ml-2" /> نقشه موقعیت مدرسه
              </div>
            </Card>
          </aside>
        </div>
      </Section>
    </>
  );
}
