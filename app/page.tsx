import { Hero } from "@/components/hero";
import { SiteNav } from "@/components/site-nav";
import { Gallery } from "@/components/gallery";
import { Details } from "@/components/details";
import { Area } from "@/components/area";
import { Faq } from "@/components/faq";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function ListingPage() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <Gallery />
      <Details />
      <Area />
      <Faq />
      <About />
      <Contact />
      <SiteFooter />
    </main>
  );
}
