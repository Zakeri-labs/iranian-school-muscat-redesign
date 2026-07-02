import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const links = [
  { t: "وزارت آموزش و پرورش جمهوری اسلامی ایران", u: "https://medu.ir" },
  { t: "سازمان مدارس ایرانی خارج از کشور", u: "https://oesc.ir" },
  { t: "سفارت جمهوری اسلامی ایران در مسقط", u: "https://muscat.mfa.ir" },
  { t: "وزارت آموزش سلطنت عمان", u: "https://moe.gov.om" },
  { t: "سازمان سنجش آموزش کشور", u: "https://sanjesh.org" },
  { t: "سامانه پیک ادوکیت", u: "https://my.medu.ir" },
  { t: "پایگاه اطلاع‌رسانی ریاست جمهوری اسلامی ایران", u: "https://president.ir/" },
  { t: "پایگاه اطلاع‌رسانی دفتر مقام معظم رهبری", u: "https://www.leader.ir/fa" },
];

export const Route = createFileRoute("/official-links")({
  head: () => ({
    meta: [
      { title: "لینک‌های رسمی — مجتمع آموزشی ایرانیان مسقط" },
      {
        name: "description",
        content: "پیوند به مراجع رسمی و نهادهای مرتبط با مجتمع آموزشی ایرانیان مسقط.",
      },
      { property: "og:title", content: "لینک‌های رسمی" },
      { property: "og:description", content: "پیوندهای مرجع." },
      { property: "og:url", content: "/official-links" },
    ],
    links: [{ rel: "canonical", href: "/official-links" }],
  }),
  component: LinksPage,
});

function LinksPage() {
  return (
    <>
      <PageHeader
        eyebrow="مراجع"
        title="لینک‌های رسمی"
        description="پیوند به نهادها و مراجع رسمی مرتبط."
        crumbs={[{ t: "لینک‌های رسمی" }]}
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-3">
          {links.map((l) => (
            <a key={l.u} href={l.u} target="_blank" rel="noreferrer">
              <Card className="p-4 flex items-center justify-between hover:border-brand/40 transition-colors">
                <div className="font-medium text-primary">{l.t}</div>
                <ExternalLink className="size-4 text-brand" />
              </Card>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
