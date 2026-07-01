import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { Quote } from "lucide-react";
import principal from "@/assets/principal.jpg";

export const Route = createFileRoute("/about/principal")({
  head: () => ({
    meta: [
      { title: "پیام مدیر — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "سخنی از مدیر مجتمع آموزشی ایرانیان مسقط درباره مأموریت آموزشی و تربیتی مدرسه." },
      { property: "og:title", content: "پیام مدیر" },
      { property: "og:description", content: "پیام مدیر مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:url", content: "/about/principal" },
    ],
    links: [{ rel: "canonical", href: "/about/principal" }],
  }),
  component: PrincipalPage,
});

function PrincipalPage() {
  return (
    <>
      <PageHeader eyebrow="مدیریت" title="پیام مدیر" crumbs={[{ t: "درباره مجتمع", to: "/about" }, { t: "پیام مدیر" }]} />
      <Section>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src={principal} alt="دکتر سعید محمدی، مدیر مجتمع" loading="lazy" width={800} height={1024} className="w-full h-full object-cover" />
            </div>
            <div className="mt-4">
              <div className="font-bold text-primary">دکتر سعید محمدی</div>
              <div className="text-sm text-muted-foreground">مدیر مجتمع آموزشی ایرانیان مسقط</div>
            </div>
          </div>
          <div className="md:col-span-2 relative">
            <Quote className="absolute -top-2 -right-2 size-10 text-brand/20" />
            <div className="space-y-5 text-[15px] leading-8 text-foreground">
              <p>خانواده‌های محترم ایرانی مقیم سلطنت عمان، دانش‌آموزان عزیز، همکاران گرامی؛ سلام و درود.</p>
              <p>
                در مجتمع آموزشی ایرانیان مسقط، هدف ما تربیت نسلی دانا، مسئول و متعهد به ایران و آموزه‌های اسلامی است. ما بر این باوریم که آموزش با کیفیت، وقتی با تربیت اخلاقی و پرورش مهارت‌های زندگی همراه شود، می‌تواند فرزندانی توانمند برای فردای بهتر بسازد.
              </p>
              <p>
                همراهی خانواده‌ها با مدرسه، ستون اصلی موفقیت دانش‌آموزان است. تلاش می‌کنیم با شفافیت، احترام و ارتباط مستمر، در کنار شما باشیم و از هر پیشنهاد و انتقاد سازنده استقبال کنیم.
              </p>
              <p>امیدواریم سالی سرشار از رشد، سلامتی و موفقیت برای فرزندان‌مان رقم بخورد.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
