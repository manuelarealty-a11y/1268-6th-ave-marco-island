import Image from "next/image";
import { Phone, Mail, MapPin, Play } from "lucide-react";

const TOUR_URL =
  "https://simple-solutions-for-listings.aryeo.com/sites/1268-6th-ave-marco-island-fl-34145-30958753/branded";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950 text-white">
      <Image
        src="/images/31.webp"
        alt="1268 6th Ave, Marco Island, FL — front exterior"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/20 to-transparent" />

      <div className="relative z-10 flex min-h-[92vh] flex-col justify-between px-6 py-8 md:px-14 md:py-10">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light tracking-[0.35em] text-white drop-shadow-md">
            MANUELA REALTY INTERNATIONAL
          </span>
          <a
            href="#contact"
            className="hidden rounded-full border border-white/60 bg-black/20 px-5 py-2 text-sm tracking-wide backdrop-blur-sm transition hover:bg-white hover:text-slate-950 md:inline-block"
          >
            Request a Private Showing
          </a>
        </div>

        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-2 text-sm font-medium tracking-widest text-emerald-300 drop-shadow-md">
            <MapPin className="h-4 w-4" />
            MARCO ISLAND, FLORIDA
          </p>
          <h1 className="font-serif text-4xl leading-tight drop-shadow-lg sm:text-5xl md:text-6xl">
            1268 6th Avenue
          </h1>
          <p className="mt-5 max-w-xl text-lg font-light text-white drop-shadow-md md:text-xl">
            A beautifully maintained, furnished one-owner ranch with 3
            bedrooms, 2 bathrooms, and 1,440 sq ft of open living space — no
            HOA, impact windows, new A/C, and room for a pool on the north
            side of Marco Island.
          </p>

          <div className="mt-8">
            <p className="font-serif text-4xl drop-shadow-lg sm:text-5xl">
              $775,000
            </p>
            <p className="mt-3 inline-block rounded-full bg-emerald-400/90 px-4 py-1.5 text-sm font-semibold text-slate-950">
              New Listing — November 15, 2026
            </p>
            <p className="mt-3 text-sm font-medium text-white/90 drop-shadow-md">
              $538 per sq ft · MLS #2261999
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={TOUR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              <Play className="h-4 w-4" />
              Take the Virtual Tour
            </a>
            <a
              href="#gallery"
              className="rounded-full border border-white/70 bg-black/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              View Photos
            </a>
            <a
              href="tel:+12394505622"
              className="flex items-center gap-2 rounded-full border border-white/70 bg-black/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              239-450-5622
            </a>
            <a
              href="mailto:manuelarealty@gmail.com"
              className="flex items-center gap-2 rounded-full border border-white/70 bg-black/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Email Manuela
            </a>
          </div>
        </div>

        <div className="grid max-w-2xl grid-cols-3 gap-4 rounded-2xl bg-black/25 p-4 backdrop-blur-sm md:p-6 text-center md:text-left">
          <div>
            <p className="text-3xl font-serif drop-shadow-md">3</p>
            <p className="text-xs uppercase tracking-widest text-white/90">
              Bedrooms
            </p>
          </div>
          <div>
            <p className="text-3xl font-serif drop-shadow-md">2</p>
            <p className="text-xs uppercase tracking-widest text-white/90">
              Bathrooms
            </p>
          </div>
          <div>
            <p className="text-3xl font-serif drop-shadow-md">1,440</p>
            <p className="text-xs uppercase tracking-widest text-white/90">
              Sq Ft (approx.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
