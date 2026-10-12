import Link from "next/link";
import { EverydayFoodSection } from "@/components/EverydayFoodSection";
import { prisma } from "@/lib/prisma";
import { MenuItemCard } from "@/components/MenuItemCard";
import { displaySauce, imageForSauce } from "@/lib/sauceImages";

export const dynamic = "force-dynamic";

type Hotspot = { href: string; label: string; className: string };
type VisualSection = { src: string; alt: string; id?: string; hotspots: Hotspot[] };

const sections: VisualSection[] = [
  {
    src: "/1.%20Hero.png",
    alt: "San San — A More Delicious Life",
    hotspots: [{ href: "/shop", label: "Shop sauces", className: "left-[5%] top-[70.8%] h-[8%] w-[16%]" }],
  },
  {
    src: "/2.%20Our%20Sauce.png",
    alt: "San San Chili Oil and Beef Chili",
    id: "sauces",
    hotspots: [
      { href: "/shop", label: "Shop all sauces", className: "left-[5%] top-[42%] h-[10%] w-[14%]" },
      { href: "/shop", label: "Shop Chili Oil", className: "left-[79%] top-[12%] h-[25%] w-[19%]" },
      { href: "/shop", label: "Shop Beef Chili", className: "left-[79%] top-[39%] h-[25%] w-[19%]" },
    ],
  },
  {
    src: "/3.%20Real%20Ingredients.png",
    alt: "Real ingredients, deeper flavors",
    hotspots: [{ href: "/craft", label: "Our craft", className: "left-[10%] top-[60%] h-[11%] w-[15%]" }],
  },
  {
    src: "/4.%20Everyday%20Food,%20Elevated.png",
    alt: "Everyday Food, Elevated — eggs, pasta, eggs and toast, roasted squash and noodles",
    id: "recipes",
    hotspots: [{ href: "/recipes", label: "Explore recipes", className: "left-[2%] top-[56%] h-[12%] w-[16%]" }],
  },
  {
    src: "/5.%20Good%20Food%20brings%20Good%20People%20Together.png",
    alt: "Good Food Brings Good People Together",
    id: "story",
    hotspots: [{ href: "/story", label: "Our story", className: "left-[63%] top-[61%] h-[12%] w-[15%]" }],
  },
];

export default async function HomePage() {
  const items = await prisma.menuItem.findMany({ where: { available: true }, orderBy: { sortOrder: "asc" } });

  return (
    <div className="bg-[#f6f0e6]">
      <p className="bg-[#171615] px-6 py-4 text-center font-display text-lg tracking-wide text-[#f3eee5] sm:text-xl">One Spoon, Endless Ways.</p>
      <div className="w-full overflow-hidden">
        {sections.map((section, index) => (
          section.id === "recipes" ? <EverydayFoodSection key="recipes" /> :
          <section key={section.src} id={section.id} className="relative w-full">
            <img src={section.src} alt={section.alt} className="block h-auto w-full" loading={index === 0 ? "eager" : "lazy"} />
            {section.hotspots.map((hotspot) => (
              <Link
                key={`${section.src}-${hotspot.label}`}
                href={hotspot.href}
                aria-label={hotspot.label}
                title={hotspot.label}
                className={`absolute z-10 hidden cursor-pointer rounded-sm outline-offset-2 hover:outline hover:outline-2 hover:outline-[#a62525] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a62525] sm:block ${hotspot.className}`}
              >
                <span className="sr-only">{hotspot.label}</span>
              </Link>
            ))}
            {section.hotspots.length > 0 && (
              <div className="flex flex-wrap gap-2 bg-[#f6f0e6] px-4 py-3 sm:hidden">
                {section.hotspots.map((hotspot) => (
                  <Link key={`${section.src}-${hotspot.label}-mobile`} href={hotspot.href} className="inline-flex min-h-11 items-center border border-[#a62525] px-4 text-sm text-[#852222]">
                    {hotspot.label} →
                  </Link>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {items.length > 0 && (
        <section id="shop-preview" className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-black/10 pb-5">
            <div><div className="h-[2px] w-7 bg-brand" /><h2 className="mt-5 font-display text-4xl sm:text-5xl">Shop San San</h2></div>
            <Link href="/shop" className="text-[10px] uppercase tracking-[.2em] text-brand">Shop all →</Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => <MenuItemCard key={item.id} id={item.id} {...displaySauce(item.name, item.description)} priceCents={item.priceCents} imageUrl={imageForSauce(item.name, item.imageUrl)} />)}
          </div>
        </section>
      )}
      <section id="label-concept" className="mx-auto grid max-w-5xl items-center gap-8 border-t border-black/10 px-6 py-12 sm:grid-cols-2 sm:px-8">
        <div>
          <p className="text-[10px] uppercase tracking-[.25em] text-brand">Packaging · A first look</p>
          <h2 className="mt-4 font-display text-3xl">A new label for San San.</h2>
          <p className="mt-4 text-sm leading-7 text-foreground/65">Cream-white paper, black lettering, and our red 三 seal. A simple direction for the sauce collection, with the final design still taking shape.</p>
        </div>
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element -- original vector packaging illustration */}
          <img src="/label-concept.svg" alt="Illustrated cream-white San San label concepts for Chili Oil and Beef Chili, with black lettering and red seals." width={1000} height={760} loading="lazy" className="h-auto w-full" />
          <figcaption className="mt-3 text-xs leading-5 text-foreground/60">Packaging concept · Illustration, not a photograph of the finished product.</figcaption>
        </figure>
      </section>
    </div>
  );
}
