import { Home, Bath, Ruler, ShieldCheck, Zap, Car } from "lucide-react";

const features = [
  { icon: Home, label: "3 Bedrooms" },
  { icon: Bath, label: "2 Full Bathrooms" },
  { icon: Ruler, label: "1,440 Sq Ft Living Space" },
  { icon: ShieldCheck, label: "No HOA Fees" },
  { icon: Zap, label: "New A/C System" },
  { icon: Car, label: "Oversized Garage" },
];

export function Details() {
  return (
    <section id="details" className="bg-slate-50 px-6 py-20 md:px-14">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Property Details
          </p>
          <h2 className="mt-2 font-serif text-3xl text-slate-900 md:text-4xl">
            A move-in-ready Marco Island ranch, cared for by one owner
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Set on the north side of Marco Island, 1268 6th Avenue is a
            beautifully maintained, furnished one-owner ranch that shows like
            a model. The open floor plan connects the living room, dining
            area, and kitchen — ideal for everyday living and entertaining —
            while the split-bedroom layout gives the primary suite real
            privacy.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Highlights include impact windows and doors, a new A/C system,
            and an oversized garage with an impact-rated, insulated garage
            door. The cathedral ceiling, stainless-steel appliances, and
            designer cabinetry give the home a bright, updated feel
            throughout.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            The spacious backyard offers plenty of room to add a pool and
            create your own outdoor retreat, with a covered lanai and grill
            hutch already in place. Minutes from shopping and restaurants,
            with easy access on and off the island — and no HOA fees,
            transferable flood insurance, and short-term rentals allowed —
            this is an excellent opportunity for a first-time buyer, seasonal
            owner, or investor.
          </p>
          <p className="mt-6 text-sm text-slate-400">
            MLS #2261999 · Parcel 56678560007 · Built 1989 · Lot 80 x 110 ft
          </p>

          <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Auch auf Deutsch
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Entdecken Sie 1268 6th Avenue auf Marco Island, Florida — ein
              gepflegtes, möbliertes Einfamilienhaus mit 3 Schlafzimmern, 2
              Bädern und ca. 1.440 sq ft Wohnfläche, ohne HOA-Gebühren, mit
              Impact-Fenstern, neuer Klimaanlage und großer Garage.
              Kontaktieren Sie uns für einen privaten Besichtigungstermin.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
            >
              <Icon className="h-6 w-6 text-emerald-700" />
              <p className="text-sm font-medium text-slate-800">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
