import { createFileRoute } from "@tanstack/react-router";
import { StagePage } from "@/components/site/StagePage";
import img from "@/assets/stage-middle.jpg";

export const Route = createFileRoute("/stages/middle")({
  head: () => ({
    meta: [
      { title: "متوسطه اول — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "معرفی مقطع متوسطه اول (پایه هفتم تا نهم) در مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:title", content: "مقطع متوسطه اول" },
      { property: "og:description", content: "پایه هفتم تا نهم — مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:url", content: "/stages/middle" },
    ],
    links: [{ rel: "canonical", href: "/stages/middle" }],
  }),
  component: () => (
    <StagePage
      title="مقطع متوسطه اول"
      grades="پایه هفتم تا نهم"
      img={img}
      crumbTitle="متوسطه اول"
      intro="تعمیق دانش پایه، آشنایی با علوم و کشف علایق تحصیلی برای انتخاب مسیر متوسطه دوم."
      features={[
        "برنامه درسی رسمی و منسجم",
        "مشاوره تحصیلی و هدایت به مسیر مناسب",
        "کارگاه‌های علمی و مهارتی",
        "پروژه‌های گروهی و پژوهشی",
        "برنامه پرورشی و اردوهای علمی",
        "پیگیری منظم پیشرفت تحصیلی",
      ]}
      subjects={["فارسی", "ریاضی", "علوم تجربی", "مطالعات اجتماعی", "قرآن", "پیام‌های آسمان", "زبان انگلیسی", "عربی", "کار و فناوری", "تربیت بدنی"]}
    />
  ),
});
