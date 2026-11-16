import { MapPin } from "lucide-react";

const highlights = [
  "Easy on/off-island access",
  "Shopping & restaurants nearby",
  "White-sand beaches",
  "Boating & fishing",
  "No HOA fees",
];

export function Area() {
  return (
    <section id="area" className="bg-white px-6 py-20 md:px-14">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
          The Marco Island Lifestyle
        </p>
        <h2 className="mt-2 font-serif text-3xl text-slate-900 md:text-4xl">
          North Marco Island — close to everything
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          1268 6th Avenue sits on the north side of Marco Island — Center
          Island North — with easy access on and off the island and shopping
          and restaurants minutes away. White-sand beaches, boating, golf,
          and dining are all part of everyday life here.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=25.95453,-81.71581"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-900 hover:text-white"
        >
          <MapPin className="h-4 w-4" />
          View 1268 6th Ave on Google Maps
        </a>
      </div>
    </section>
  );
}
