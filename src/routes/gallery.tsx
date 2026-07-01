import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";
import lib from "@/assets/life-library.jpg";
import sports from "@/assets/life-sports.jpg";
import trip from "@/assets/life-trip.jpg";
import elem from "@/assets/stage-elementary.jpg";
import mid from "@/assets/stage-middle.jpg";
import high from "@/assets/stage-high.jpg";

const imgs = [lib, sports, trip, elem, mid, high, lib, sports, trip];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "گالری تصاویر — مجتمع آموزشی ایرانیان مسقط" },
      { name: "description", content: "گالری تصاویر زندگی مدرسه، کلاس‌ها، فعالیت‌ها و رویدادها." },
      { property: "og:title", content: "گالری تصاویر" },
      { property: "og:description", content: "نگاهی به زندگی مدرسه." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="تصاویر" title="گالری تصاویر" description="نگاهی به زندگی روزمره در مجتمع آموزشی ایرانیان مسقط." crumbs={[{ t: "گالری" }]} />
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {imgs.map((src, i) => (
            <div key={i} className="aspect-square rounded-xl overflow-hidden bg-muted group">
              <img src={src} alt={`تصویر گالری ${i + 1}`} width={640} height={640} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
