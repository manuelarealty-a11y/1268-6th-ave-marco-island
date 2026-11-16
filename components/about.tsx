import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-white px-6 py-20 md:px-14">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
        <Image
          src="/images/manuela.webp"
          alt="Manuela Schinagl, Manuela Realty International"
          width={160}
          height={160}
          className="h-40 w-40 shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Your agent
          </p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            About Manuela
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Manuela Schinagl is a licensed Florida realtor with Manuela Realty
            International on Marco Island. In Florida since 1993 and selling
            real estate since 2009, she is consistently ranked among Collier
            County&rsquo;s Top 5 agents (2022, 2023, 2024, 2026).
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
            <a
              href="tel:+12394505622"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              <Phone className="h-4 w-4" />
              239-450-5622
            </a>
            <a
              href="mailto:manuelarealty@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              <Mail className="h-4 w-4" />
              manuelarealty@gmail.com
            </a>
            <a
              href="https://www.manuelarealty.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-600 underline underline-offset-4 hover:text-slate-900"
            >
              More about Manuela
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
