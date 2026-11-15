"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

const TOUR_URL =
  "https://simple-solutions-for-listings.aryeo.com/sites/eyvmklbx/unbranded";

const photos = [
  { src: "/images/31.webp", alt: "1268 6th Ave, Marco Island — Front Elevation" },
  { src: "/images/01.webp", alt: "1268 6th Ave, Marco Island — Island Living" },
  { src: "/images/02.webp", alt: "1268 6th Ave, Marco Island — Coastal Setting" },
  { src: "/images/03.webp", alt: "1268 6th Ave, Marco Island — Single Family Home" },
  { src: "/images/32.webp", alt: "1268 6th Ave, Marco Island — Bird's Eye View" },
  { src: "/images/04.webp", alt: "1268 6th Ave, Marco Island — Tropical Landscaping" },
  { src: "/images/05.webp", alt: "1268 6th Ave, Marco Island — Great Room Design" },
  { src: "/images/06.webp", alt: "1268 6th Ave, Marco Island — Cathedral Ceiling" },
  { src: "/images/07.webp", alt: "1268 6th Ave, Marco Island — Open Concept Kitchen" },
  { src: "/images/08.webp", alt: "1268 6th Ave, Marco Island — Dining Area & Kitchen" },
  { src: "/images/09.webp", alt: "1268 6th Ave, Marco Island — Stainless Steel Appliances" },
  { src: "/images/10.webp", alt: "1268 6th Ave, Marco Island — Designer Cabinetry" },
  { src: "/images/11.webp", alt: "1268 6th Ave, Marco Island — High-End Light Fixtures & Fans" },
  { src: "/images/12.webp", alt: "1268 6th Ave, Marco Island — Wonderful Layout" },
  { src: "/images/13.webp", alt: "1268 6th Ave, Marco Island — Lots Of Natural Lighting" },
  { src: "/images/14.webp", alt: "1268 6th Ave, Marco Island — Split Bedroom Floor Plan" },
  { src: "/images/15.webp", alt: "1268 6th Ave, Marco Island — Primary Bedroom" },
  { src: "/images/16.webp", alt: "1268 6th Ave, Marco Island — Primary Bedroom" },
  { src: "/images/17.webp", alt: "1268 6th Ave, Marco Island — Primary Bedroom" },
  { src: "/images/18.webp", alt: "1268 6th Ave, Marco Island — Primary Bathroom" },
  { src: "/images/19.webp", alt: "1268 6th Ave, Marco Island — Guest Room" },
  { src: "/images/20.webp", alt: "1268 6th Ave, Marco Island — Guest Room" },
  { src: "/images/21.webp", alt: "1268 6th Ave, Marco Island — Guest Full Bath" },
  { src: "/images/22.webp", alt: "1268 6th Ave, Marco Island — Guest Room" },
  { src: "/images/23.webp", alt: "1268 6th Ave, Marco Island — Guest Room" },
  { src: "/images/24.webp", alt: "1268 6th Ave, Marco Island — Laundry Room" },
  { src: "/images/25.webp", alt: "1268 6th Ave, Marco Island — Attached Garage" },
  { src: "/images/26.webp", alt: "1268 6th Ave, Marco Island — Rear Lanai" },
  { src: "/images/27.webp", alt: "1268 6th Ave, Marco Island — Large Enough For Outdoor Dining Set & Lounging Area" },
  { src: "/images/28.webp", alt: "1268 6th Ave, Marco Island — Room For A Pool" },
  { src: "/images/29.webp", alt: "1268 6th Ave, Marco Island — Grill Hutch" },
  { src: "/images/30.webp", alt: "1268 6th Ave, Marco Island — Rear Elevation" },
  { src: "/images/33.webp", alt: "1268 6th Ave, Marco Island — Non-Gated Neighborhood" },
  { src: "/images/34.webp", alt: "1268 6th Ave, Marco Island — No Homeowner Association Fees" },
  { src: "/images/35.webp", alt: "1268 6th Ave, Marco Island — Perfect For Seasonal Living" },
];

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const next = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length));

  return (
    <section id="gallery" className="bg-white px-6 py-20 md:px-14">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Photos &amp; Virtual Tour
        </p>
        <h2 className="mt-2 font-serif text-3xl text-slate-900 md:text-4xl">
          See the home at 1268 6th Avenue
        </h2>

        <a
          href={TOUR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-8 block h-64 w-full overflow-hidden rounded-2xl md:h-96"
        >
          <Image
            src="/images/01.webp"
            alt="1268 6th Ave, Marco Island — virtual tour preview"
            fill
            sizes="(min-width: 768px) 1152px, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 transition group-hover:bg-slate-950/50">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg">
              <Play className="ml-1 h-6 w-6" />
            </span>
          </div>
          <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold tracking-wide text-slate-900">
            Take the virtual tour — 35 photos
          </span>
        </a>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setOpenIndex(i)}
              className="relative h-32 w-full overflow-hidden rounded-xl sm:h-40"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 280px, 45vw"
                className="object-cover transition duration-300 hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
          onClick={close}
        >
          <button
            className="absolute right-6 top-6 text-white"
            onClick={close}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            className="absolute left-4 text-white md:left-10"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <div className="relative h-[85vh] w-[90vw]">
            <Image
              src={photos[openIndex].src}
              alt={photos[openIndex].alt}
              fill
              sizes="90vw"
              className="rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button
            className="absolute right-4 text-white md:right-10"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </section>
  );
}
