import { createFileRoute } from "@tanstack/react-router";
import { ResourceList } from "@/components/site/ResourceList";
import { BookOpen, FileDown, ClipboardList, LogIn, Users, Bell } from "lucide-react";

export const Route = createFileRoute("/resources/teachers")({
  head: () => ({
    meta: [
      { title: "منابع معلمان — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "منابع، آیین‌نامه و ابزار برای معلمان مجتمع." },
      { property: "og:title", content: "منابع معلمان" },
      { property: "og:description", content: "ابزار آموزشی برای معلمان." },
      { property: "og:url", content: "/resources/teachers" },
    ],
    links: [{ rel: "canonical", href: "/resources/teachers" }],
  }),
  component: () => (
    <ResourceList
      eyebrow="معلمان" title="منابع معلمان" crumbTitle="معلمان"
      description="ابزار، آیین‌نامه‌ها و منابع مورد نیاز کادر آموزشی."
      items={[
        { i: BookOpen, t: "طرح درس‌های سالانه", d: "الگوهای طرح درس", to: "/resources/forms" },
        { i: FileDown, t: "فرم‌های آموزشی", d: "فرم‌های ارزیابی و گزارش", to: "/resources/forms" },
        { i: ClipboardList, t: "آیین‌نامه آموزشی", d: "مقررات و رویه‌ها", to: "/resources/policies" },
        { i: LogIn, t: "پنل معلمان", d: "ورود به پنل کاربری", to: "/portal" },
        { i: Users, t: "همکاران کادر", d: "معرفی کادر اداری و آموزشی", to: "/about/leadership" },
        { i: Bell, t: "اطلاعیه‌های داخلی", d: "اطلاعیه‌های ویژه کادر", to: "/news" },
      ]}
    />
  ),
});
