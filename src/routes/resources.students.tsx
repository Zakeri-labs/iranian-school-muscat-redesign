import { createFileRoute } from "@tanstack/react-router";
import { ResourceList } from "@/components/site/ResourceList";
import { BookOpen, Calendar, GraduationCap, LogIn, FileDown, Bell } from "lucide-react";

export const Route = createFileRoute("/resources/students")({
  head: () => ({
    meta: [
      { title: "منابع دانش‌آموزان — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "منابع آموزشی و ابزار برای دانش‌آموزان." },
      { property: "og:title", content: "منابع دانش‌آموزان" },
      { property: "og:description", content: "منابع آموزشی برای دانش‌آموزان." },
      { property: "og:url", content: "/resources/students" },
    ],
    links: [{ rel: "canonical", href: "/resources/students" }],
  }),
  component: () => (
    <ResourceList
      eyebrow="دانش‌آموزان" title="منابع دانش‌آموزان" crumbTitle="دانش‌آموزان"
      description="ابزار، برنامه درسی و منابع تکمیلی برای دانش‌آموزان."
      items={[
        { i: BookOpen, t: "برنامه درسی", d: "جدول برنامه هفتگی مقاطع", to: "/stages" },
        { i: Calendar, t: "تقویم امتحانات", d: "تاریخ‌های آزمون‌ها", to: "/news/calendar" },
        { i: GraduationCap, t: "منابع تکمیلی", d: "کتاب‌ها و منابع درسی", to: "/resources/forms" },
        { i: LogIn, t: "پنل دانش‌آموزی", d: "ورود به پنل کاربری", to: "/portal" },
        { i: FileDown, t: "دانلود فرم‌ها", d: "فرم‌های عمومی", to: "/resources/forms" },
        { i: Bell, t: "اطلاعیه‌ها", d: "اطلاعیه‌های دانش‌آموزی", to: "/news" },
      ]}
    />
  ),
});
