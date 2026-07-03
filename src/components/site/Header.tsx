import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  Phone,
  Mail,
  MapPin,
  LogIn,
  UserPlus,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { mainNav, mobilePriority } from "@/lib/nav";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [dismissedMenu, setDismissedMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      {/* Utility bar (desktop) */}
      <div className="hidden lg:block bg-primary text-primary-foreground text-xs">
        <div className="container mx-auto flex items-center justify-between h-9 px-4">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <MapPin className="size-3.5" /> {site.addressShort}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 hover:text-brand transition-colors"
            >
              <Mail className="size-3.5" /> {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-brand transition-colors"
              dir="ltr"
            >
              <Phone className="size-3.5" /> {site.phone}
            </a>
            <Link
              to="/portal"
              className="flex items-center gap-1.5 hover:text-brand transition-colors"
            >
              <LogIn className="size-3.5" /> ورود به پنل
            </Link>
            <Link
              to="/portal"
              className="flex items-center gap-1.5 hover:text-brand transition-colors"
            >
              <UserPlus className="size-3.5" /> درخواست نام کاربری
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container mx-auto flex items-center justify-between px-4 h-16 lg:h-20">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="ناوبری اصلی">
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.title}
                className="group relative"
                onMouseLeave={() => setDismissedMenu(null)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary group-hover:bg-secondary group-hover:text-primary"
                  aria-haspopup="true"
                >
                  {item.title} <ChevronDown className="size-3.5 opacity-60" />
                </button>
                <div
                  dir="rtl"
                  className={cn(
                    "invisible absolute right-0 top-full z-50 w-72 pt-2 text-right opacity-0 transition-opacity duration-150",
                    dismissedMenu !== item.title && "group-hover:visible group-hover:opacity-100",
                  )}
                >
                  <div className="rounded-md border bg-popover p-2 text-popover-foreground shadow-md">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        onClick={() => setDismissedMenu(item.title)}
                        className="block rounded-md px-3 py-2 text-right hover:bg-secondary group/link"
                      >
                        <div className="text-sm font-medium text-primary group-hover/link:text-brand">
                          {c.title}
                        </div>
                        {c.desc && (
                          <div className="text-xs text-muted-foreground mt-0.5">{c.desc}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.title}
                to={item.to!}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
                activeProps={{
                  className: "rounded-md px-3 py-2 text-sm font-medium text-brand bg-brand-soft",
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.title}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link to="/contact">تماس با مدرسه</Link>
          </Button>
          <Button asChild size="sm" className="bg-brand hover:bg-brand/90 text-brand-foreground">
            <Link to="/admissions">ثبت‌نام</Link>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="باز کردن منو"
                className="min-h-11 min-w-11"
              >
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[92vw] sm:w-96 p-0 flex flex-col">
              <div className="p-5 border-b border-border">
                <Logo />
                <p className="text-xs text-muted-foreground mt-3">{site.descriptor}</p>
              </div>
              <nav className="flex-1 overflow-y-auto p-3" aria-label="منوی موبایل">
                <ul className="flex flex-col gap-1">
                  {mobilePriority.map((it) => (
                    <li key={it.to}>
                      <Link
                        to={it.to}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-medium text-foreground hover:bg-secondary min-h-11"
                      >
                        {it.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border my-3" />
                <div className="px-2 pb-2 text-xs text-muted-foreground">تماس مستقیم</div>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-secondary"
                  dir="ltr"
                >
                  <Phone className="size-4 text-brand" /> {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-secondary"
                >
                  <Mail className="size-4 text-brand" /> {site.email}
                </a>
              </nav>
              <div className="p-3 border-t border-border grid grid-cols-2 gap-2">
                <Button asChild variant="outline" onClick={() => setOpen(false)}>
                  <Link to="/portal">ورود به پنل</Link>
                </Button>
                <Button
                  asChild
                  className="bg-brand hover:bg-brand/90 text-brand-foreground"
                  onClick={() => setOpen(false)}
                >
                  <Link to="/admissions">ثبت‌نام</Link>
                </Button>
              </div>
              <SheetTitle className="sr-only">منوی اصلی</SheetTitle>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-background/95 backdrop-blur border-t border-border">
      <div className="grid grid-cols-4">
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          className="flex flex-col items-center justify-center gap-1 py-2 text-[11px] min-h-14 text-foreground hover:bg-secondary"
        >
          <Phone className="size-5 text-brand" /> تماس
        </a>
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2 text-[11px] min-h-14 text-foreground hover:bg-secondary"
        >
          <MessageCircle className="size-5 text-brand" /> واتساپ
        </a>
        <Link
          to="/admissions"
          className="flex flex-col items-center justify-center gap-1 py-2 text-[11px] min-h-14 text-foreground hover:bg-secondary"
        >
          <UserPlus className="size-5 text-brand" /> ثبت‌نام
        </Link>
        <Link
          to="/news"
          className="flex flex-col items-center justify-center gap-1 py-2 text-[11px] min-h-14 text-foreground hover:bg-secondary"
        >
          <svg
            className="size-5 text-brand"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          اطلاعیه‌ها
        </Link>
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}
