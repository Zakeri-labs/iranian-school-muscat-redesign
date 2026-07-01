import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, UserPlus, HelpCircle } from "lucide-react";
import type { FormEvent } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/portal")({
  head: () => ({
    meta: [
      { title: "ورود به پنل کاربری — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "ورود دانش‌آموزان، والدین و کادر به پنل کاربری مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:title", content: "ورود به پنل کاربری" },
      { property: "og:description", content: "پنل کاربری مجتمع." },
      { property: "og:url", content: "/portal" },
    ],
    links: [{ rel: "canonical", href: "/portal" }],
  }),
  component: PortalPage,
});

function PortalPage() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.info("پنل کاربری به‌زودی فعال خواهد شد.");
  }
  return (
    <>
      <PageHeader eyebrow="پنل" title="ورود به پنل کاربری" description="دسترسی امن برای والدین، دانش‌آموزان و کادر مدرسه." crumbs={[{ t: "پنل کاربری" }]} />
      <Section>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
          <Card className="p-6">
            <div className="flex items-center gap-2 text-brand"><LogIn className="size-5" /><h3 className="font-semibold text-primary">ورود</h3></div>
            <form onSubmit={onSubmit} className="mt-5 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="user">نام کاربری</Label>
                <Input id="user" placeholder="کد ملی یا نام کاربری" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pass">رمز عبور</Label>
                <Input id="pass" type="password" placeholder="رمز عبور" />
              </div>
              <Button type="submit" className="w-full bg-brand text-brand-foreground hover:bg-brand/90">ورود</Button>
              <div className="text-xs text-muted-foreground text-center">فراموشی رمز؟ با پشتیبانی مدرسه در تماس باشید.</div>
            </form>
          </Card>
          <div className="space-y-4">
            <Card className="p-5">
              <div className="flex items-center gap-2 text-brand"><UserPlus className="size-5" /><h3 className="font-semibold text-primary">درخواست نام کاربری</h3></div>
              <p className="mt-2 text-sm text-muted-foreground leading-7">اگر هنوز نام کاربری ندارید، پس از تکمیل ثبت‌نام، اطلاعات ورود به شما ارسال می‌شود.</p>
              <Button asChild variant="outline" className="mt-3"><Link to="/admissions">مراجعه به ثبت‌نام</Link></Button>
            </Card>
            <Card className="p-5">
              <div className="flex items-center gap-2 text-brand"><HelpCircle className="size-5" /><h3 className="font-semibold text-primary">نیاز به کمک؟</h3></div>
              <p className="mt-2 text-sm text-muted-foreground leading-7">در صورت مشکل در ورود با پشتیبانی مدرسه در تماس باشید.</p>
              <Button asChild variant="outline" className="mt-3"><Link to="/contact">تماس با ما</Link></Button>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
