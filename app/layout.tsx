import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://12686thave.com";
const title =
  "1268 6th Ave, Marco Island, FL 34145 | $775,000 | 3BR Ranch Home Under Contract";
const description =
  "Listed at $775,000 — under contract within 5 days of listing. Furnished 3-bed, 2-bath ranch on Marco Island — 1,440 sq ft, impact windows, new A/C, oversized garage, no HOA, room for a pool. MLS #2261999.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "1268 6th Ave Marco Island",
    "Marco Island real estate",
    "Marco Island homes for sale",
    "Marco Island ranch home",
    "Marco Island home no HOA",
    "Marco Island furnished home",
    "Manuela Schinagl",
    "Manuela Realty International",
  ],
  authors: [{ name: "Manuela Schinagl" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "1268 6th Ave, Marco Island",
    images: [
      {
        url: `${siteUrl}/images/31.webp`,
        width: 1600,
        height: 1066,
        alt: "1268 6th Ave, Marco Island, FL — front exterior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/images/31.webp`],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Marco Island",
    "geo.position": "25.95453;-81.71581",
    ICBM: "25.95453, -81.71581",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: "1268 6th Ave, Marco Island, FL 34145",
    description,
    url: siteUrl,
    offers: {
      "@type": "Offer",
      price: 775000,
      priceCurrency: "USD",
      availability: "https://schema.org/OutOfStock",
    },
    datePosted: "2026-11-15",
    image: [
      `${siteUrl}/images/31.webp`,
      `${siteUrl}/images/01.webp`,
      `${siteUrl}/images/03.webp`,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "1268 6th Ave",
      addressLocality: "Marco Island",
      addressRegion: "FL",
      postalCode: "34145",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.95453,
      longitude: -81.71581,
    },
    numberOfRooms: 3,
    numberOfBathroomsTotal: 2,
    floorSize: {
      "@type": "QuantitativeValue",
      value: 1440,
      unitCode: "FTK",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "No HOA fees",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Impact windows and doors",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "New A/C system",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Oversized garage",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Furnished",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Transferable flood insurance",
        value: true,
      },
    ],
    additionalProperty: [
      { "@type": "PropertyValue", name: "MLS Number", value: "2261999" },
      {
        "@type": "PropertyValue",
        name: "Parcel Number",
        value: "56678560007",
      },
      {
        "@type": "PropertyValue",
        name: "Annual Taxes (2026, homestead)",
        value: "$1,336",
      },
      { "@type": "PropertyValue", name: "Year Built", value: "1989" },
      { "@type": "PropertyValue", name: "Lot Size", value: "80 x 110 ft" },
    ],
    broker: {
      "@type": "RealEstateAgent",
      name: "Manuela Schinagl",
      worksFor: "Manuela Realty International",
      telephone: "+1-239-450-5622",
      email: "manuelarealty@gmail.com",
      url: "https://www.naplesrealestate.sale",
    },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
