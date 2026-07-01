import { createFileRoute } from "@tanstack/react-router";
import { ResourceList } from "@/components/site/ResourceList";
import { Calendar, CreditCard, Bell, FileDown, BookOpen, Phone } from "lucide-react";

export const Route = createFileRoute("/resources/parents")({
  head: () => ({
    meta: [
      { title: "منابع والدین — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "منابع و راهنمای والدین در مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:title", content: "منابع والدین" },
      { property: "og:description", content: "راهنما و ابزار برای والدین." },
      { property: "og:url", content: "/resources/parents" },
    ],
    links: [{ rel: "canonical", href: "/resources/parents" }],
  }),
  component: () => (
    <ResourceList
      eyebrow="والدین" title="منابع والدین" crumbTitle="والدین"
      description="راهنماها، فرم‌ها و ابزار مورد نیاز خانواده‌ها."
      items={[
        { i: Calendar, t: "تقویم آموزشی", d: "برنامه سالانه و رویدادها", to: "/news/calendar" },
        { i: CreditCard, t: "شهریه و پرداخت", d: "اطلاعات مالی و روش‌های پرداخت", to: "/admissions/tuition" },
        { i: Bell, t: "اطلاعیه‌ها", d: "آخرین اطلاعیه‌های مدرسه", to: "/news" },
        { i: FileDown, t: "دانلود فرم‌ها", d: "فرم‌های ثبت‌نام و اداری", to: "/resources/forms" },
        { i: BookOpen, t: "آیین‌نامه‌های آموزشی", d: "قوانین و مقررات مدرسه", to: "/resources/policies" },
        { i: Phone, t: "پشتیبانی مدرسه", d: "تماس با کادر مدرسه", to: "/contact" },
      ]}
    />
  ),
});
