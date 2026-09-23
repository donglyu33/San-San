import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { MenuItemCard } from "@/components/MenuItemCard";

export const dynamic = "force-dynamic";

type Hotspot = { href: string; label: string; className: string };
type VisualSection = { src: string; alt: string; id?: string; hotspots: Hotspot[] };

const sections: VisualSection[] = [
  {
    src: "/1.%20Hero.png",
    alt: "San San — A More Delicious Life",
    hotspots: [{ href: "/shop", label: "Shop sauces", className: "left-[8%] top-[64%] h-[10%] w-[18%]" }],
  },
  {
    src: "/2.%20Our%20Sauce.png",
    alt: "San San Chili Oil and Beef Chili",
    id: "sauces",
    hotspots: [
      { href: "/shop", label: "Shop all sauces", className: "left-[6%] top-[61%] h-[10%] w-[17%]" },
      { href: "/shop", label: "Shop Chili Oil", className: "left-[67%] top-[26%] h-[23%] w-[27%]" },
      { href: "/shop", label: "Shop Beef Chili", className: "left-[67%] top-[54%] h-[25%] w-[27%]" },
    ],
  },
  {
    src: "/3.%20Real%20Ingredients.png",
    alt: "Real ingredients, deeper flavors",
    hotspots: [],
  },
  {
    src: "/4.%20Everyday%20Food,%20Elevated.png",
    alt: "Everyday Food, Elevated — eggs, pasta, chicken, steak and vegetables",
    id: "recipes",
    hotspots: [{ href: "/recipes", label: "Explore recipes", className: "left-[6%] top-[58%] h-[11%] w-[20%]" }],
  },
  {
    src: "/5.%20Good%20Food%20brings%20Good%20People%20Together.png",
    alt: "Good Food Brings Good People Together",
    id: "story",
    hotspots: [{ href: "/story", label: "Our story", className: "left-[64%] top-[57%] h-[11%] w-[17%]" }],
  },
];

export default async function HomePage() {
  const items = await prisma.menuItem.findMany({ where: { available: true }, orderBy: { sortOrder: "asc" } });

  return (
    <main className="bg-[#f6f0e6]">
      <div className="w-full overflow-hidden">
        {sections.map((section, index) => (
          <section key={section.src} id={section.id} className="relative w-full">
            <img src={section.src} alt={section.alt} className="block h-auto w-full" loading={index === 0 ? "eager" : "lazy"} />
            {section.hotspots.map((hotspot) => (
              <Link
                key={`${section.src}-${hotspot.label}`}
                href={hotspot.href}
                aria-label={hotspot.label}
                title={hotspot.label}
                className={`absolute z-10 cursor-pointer rounded-sm focus:outline-none focus:ring-2 focus:ring-[#a62525] focus:ring-offset-2 ${hotspot.className}`}
              >
                <span className="sr-only">{hotspot.label}</span>
              </Link>
            ))}
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
            {items.map((item) => <MenuItemCard key={item.id} id={item.id} name={item.name} description={item.description} priceCents={item.priceCents} imageUrl={item.imageUrl} />)}
          </div>
        </section>
      )}
    </main>
  );
}
