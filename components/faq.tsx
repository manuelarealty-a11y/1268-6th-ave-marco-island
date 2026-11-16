const faqs = [
  {
    q: "What is the asking price?",
    a: "The home is offered at $775,000 — a new listing as of November 15, 2026.",
  },
  {
    q: "How many bedrooms and bathrooms does the home have?",
    a: "The home has 3 bedrooms and 2 full bathrooms across approximately 1,440 square feet of living space, in a single-story ranch built in 1989.",
  },
  {
    q: "Is there an HOA?",
    a: "No — there is no homeowners association and no HOA fees.",
  },
  {
    q: "Can the home be rented short-term?",
    a: "Yes — the MLS listing allows rentals up to 365 times per year with a minimum stay of 1 day, which makes the home attractive for seasonal owners and investors. Confirm current county rules before relying on them.",
  },
  {
    q: "What about flood insurance?",
    a: "The home is in a flood plain, and the listing notes transferable flood insurance. Buyers should confirm coverage and cost with their own insurer.",
  },
  {
    q: "How do I schedule a private showing?",
    a: "Contact Manuela Schinagl of Manuela Realty International at 239-450-5622 or manuelarealty@gmail.com, or use the inquiry form on this page.",
  },
];

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  return (
    <section id="faq" className="bg-slate-50 px-6 py-20 md:px-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Frequently Asked Questions
        </p>
        <h2 className="mt-2 font-serif text-3xl text-slate-900 md:text-4xl">
          Common questions about this Marco Island home
        </h2>

        <dl className="mt-8 divide-y divide-slate-200">
          {faqs.map(({ q, a }) => (
            <div key={q} className="py-6">
              <dt className="text-lg font-semibold text-slate-900">{q}</dt>
              <dd className="mt-2 text-slate-600">{a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
