import { createFileRoute } from "@tanstack/react-router";
import { StagePage } from "@/components/site/StagePage";
import img from "@/assets/stage-elementary.jpg";

export const Route = createFileRoute("/stages/elementary")({
  head: () => ({
    meta: [
      { title: "مقطع ابتدایی — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "معرفی مقطع ابتدایی (پایه اول تا ششم) در مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:title", content: "مقطع ابتدایی" },
      { property: "og:description", content: "پایه اول تا ششم — مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:url", content: "/stages/elementary" },
    ],
    links: [{ rel: "canonical", href: "/stages/elementary" }],
  }),
  component: () => (
    <StagePage
      title="مقطع ابتدایی"
      grades="پایه اول تا ششم"
      img={img}
      crumbTitle="ابتدایی"
      intro="آغاز مسیر یادگیری با تمرکز بر پایه‌های خواندن، نوشتن، ریاضی و پرورش مهارت‌های اجتماعی و اخلاقی."
      features={[
        "کلاس‌های کم‌جمعیت با توجه فردی به دانش‌آموزان",
        "برنامه پرورشی و فرهنگی متناسب با سن",
        "ارتباط مستمر با والدین از طریق پنل و جلسات",
        "فضای امن و شاد آموزشی",
        "معلمان با تجربه در مقطع ابتدایی",
        "فعالیت‌های هنری، ورزشی و علمی",
      ]}
      subjects={["فارسی", "ریاضی", "علوم", "قرآن", "هدیه‌های آسمان", "مطالعات اجتماعی", "هنر", "تربیت بدنی", "زبان انگلیسی"]}
    />
  ),
});
