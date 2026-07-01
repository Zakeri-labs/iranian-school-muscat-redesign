import logo from "@/assets/logo.png";
import { site } from "@/lib/site";
import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label={site.name}>
      <img src={logo} alt="" width={40} height={40} className="h-10 w-10 shrink-0" />
      <div className="flex flex-col leading-tight">
        <span className="text-[15px] font-bold text-primary group-hover:text-brand transition-colors">
          {site.name}
        </span>
        {!compact && (
          <span className="text-[11px] text-muted-foreground">{site.descriptor}</span>
        )}
      </div>
    </Link>
  );
}
