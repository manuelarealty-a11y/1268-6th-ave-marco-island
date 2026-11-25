import { ArrowLeft, Phone } from "lucide-react";

const LINKS = [
  { href: "#gallery", label: "Photos" },
  { href: "#details", label: "Details" },
  { href: "#area", label: "Area" },
  { href: "#faq", label: "FAQ" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur">
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-14">
        <a
          href="https://www.naplesrealestate.sale"
          className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-white/80 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Naples Real Estate
        </a>
        <a href="#" className="shrink-0 text-sm font-semibold tracking-widest">
          1268 6TH AVE
        </a>
        <nav
          aria-label="Page sections"
          className="flex items-center gap-4 overflow-x-auto text-sm whitespace-nowrap md:gap-6"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+12394505622"
          className="hidden shrink-0 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 sm:inline-flex"
        >
          <Phone className="h-4 w-4" />
          239-450-5622
        </a>
      </div>
    </header>
  );
}
