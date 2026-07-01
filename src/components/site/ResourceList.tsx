import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

export function ResourceList({
  eyebrow, title, description, crumbTitle, items,
}: {
  eyebrow: string; title: string; description: string; crumbTitle: string;
  items: { i: LucideIcon; t: string; d: string; to: string }[];
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={description} crumbs={[{ t: "منابع" }, { t: crumbTitle }]} />
      <Section>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((r) => (
            <Card key={r.t} className="p-5 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-brand-soft text-brand"><r.i className="size-5" /></div>
              <div className="flex-1">
                <div className="font-semibold text-primary">{r.t}</div>
                <p className="text-sm text-muted-foreground mt-1 leading-6">{r.d}</p>
                <Button asChild variant="link" className="px-0 mt-1 text-brand"><Link to={r.to}>مشاهده</Link></Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

// Dummy route so this file is inside src/routes/... wait — it's in components; ok
export const Route = createFileRoute as unknown as never;
