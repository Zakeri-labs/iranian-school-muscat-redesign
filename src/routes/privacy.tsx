import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "حریم خصوصی و دسترس‌پذیری — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "سیاست حریم خصوصی و دسترس‌پذیری وب‌سایت مجتمع آموزشی ایرانیان مسقط." },
      { property: "og:title", content: "حریم خصوصی و دسترس‌پذیری" },
      { property: "og:description", content: "سیاست‌های حریم خصوصی و دسترس‌پذیری." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="سیاست‌ها" title="حریم خصوصی و دسترس‌پذیری" crumbs={[{ t: "حریم خصوصی" }]} />
      <Section>
        <div className="max-w-3xl space-y-6 text-[15px] leading-8 text-foreground">
          <section>
            <h2 className="text-xl font-bold text-primary">حریم خصوصی</h2>
            <p className="mt-2">
              مجتمع آموزشی ایرانیان مسقط به حریم خصوصی خانواده‌ها و دانش‌آموزان احترام می‌گذارد. اطلاعات دریافتی صرفاً برای ارائه خدمات آموزشی و اداری استفاده می‌شود و بدون رضایت با اشخاص ثالث به اشتراک گذاشته نمی‌شود.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-primary">دسترس‌پذیری</h2>
            <p className="mt-2">
              این وب‌سایت با هدف دسترسی برابر همه کاربران طراحی شده و از اصول WCAG پیروی می‌کند. در صورت مواجهه با مشکل دسترسی، لطفاً از طریق صفحه تماس با ما ارتباط بگیرید.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-primary">استفاده از کوکی‌ها</h2>
            <p className="mt-2">
              این وب‌سایت از کوکی‌ها صرفاً برای بهبود تجربه کاربری و اندازه‌گیری بازدید استفاده می‌کند.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
