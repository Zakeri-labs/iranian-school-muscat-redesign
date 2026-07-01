import { createFileRoute } from "@tanstack/react-router";
import { StagePage } from "@/components/site/StagePage";
import img from "@/assets/stage-high.jpg";

export const Route = createFileRoute("/stages/high")({
  head: () => ({
    meta: [
      { title: "متوسطه دوم — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "معرفی مقطع متوسطه دوم (پایه دهم تا دوازدهم) در مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:title", content: "مقطع متوسطه دوم" },
      { property: "og:description", content: "پایه دهم تا دوازدهم — مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:url", content: "/stages/high" },
    ],
    links: [{ rel: "canonical", href: "/stages/high" }],
  }),
  component: () => (
    <StagePage
      title="مقطع متوسطه دوم"
      grades="پایه دهم تا دوازدهم"
      img={img}
      crumbTitle="متوسطه دوم"
      intro="آماده‌سازی تخصصی برای کنکور و ورود به دانشگاه در رشته‌های ریاضی، تجربی و انسانی."
      features={[
        "رشته‌های ریاضی، تجربی و انسانی",
        "کلاس‌های تقویتی و آمادگی آزمون",
        "مشاوره تخصصی انتخاب رشته و کنکور",
        "معلمان متخصص و باتجربه",
        "آزمون‌های دوره‌ای و تحلیلی",
        "برنامه‌های پژوهشی و مسابقات علمی",
      ]}
      subjects={["ادبیات فارسی", "ریاضی/حساب", "فیزیک", "شیمی", "زیست‌شناسی", "دین و زندگی", "زبان انگلیسی", "عربی", "علوم انسانی", "تربیت بدنی"]}
    />
  ),
});
