import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: { t: string; to?: string }[];
  action?: ReactNode;
}) {
  return (
    <section className="bg-gradient-to-b from-surface to-background border-b border-border">
      <div className="container mx-auto px-4 py-10 lg:py-14">
        {crumbs && (
          <nav aria-label="مسیر" className="mb-4 text-xs text-muted-foreground flex flex-wrap items-center gap-1.5">
            <Link to="/" className="hover:text-brand">خانه</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronLeft className="size-3.5" />
                {c.to ? <Link to={c.to} className="hover:text-brand">{c.t}</Link> : <span className="text-foreground">{c.t}</span>}
              </span>
            ))}
          </nav>
        )}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            {eyebrow && <div className="text-xs font-medium text-brand mb-2">{eyebrow}</div>}
            <h1 className="text-3xl lg:text-4xl font-bold text-primary">{title}</h1>
            {description && <p className="mt-3 max-w-2xl text-muted-foreground leading-8">{description}</p>}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`container mx-auto px-4 py-10 lg:py-14 ${className}`}>{children}</section>;
}

export function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mb-8">
      {eyebrow && <div className="text-xs font-medium text-brand mb-2">{eyebrow}</div>}
      <h2 className="text-2xl lg:text-3xl font-bold text-primary">{title}</h2>
      {description && <p className="mt-2 text-muted-foreground max-w-2xl leading-7">{description}</p>}
    </div>
  );
}
