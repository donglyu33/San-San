import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { MenuItemCard } from "@/components/MenuItemCard";

export const dynamic = "force-dynamic";

const sections = [
  { src: "/1.%20Hero.png", alt: "San San — A More Delicious Life" },
  { src: "/2.%20Our%20Sauce.png", alt: "San San Chili Oil and Beef Chili" },
  { src: "/3.%20Real%20Ingredients.png", alt: "Real ingredients, deeper flavors" },
  { src: "/4.%20Everyday%20Food,%20Elevated.png", alt: "Everyday Food, Elevated — eggs, pasta, chicken, steak and vegetables" },
  { src: "/5.%20Good%20Food%20brings%20Good%20People%20Together.png", alt: "Good Food Brings Good People Together" },
];

export default async function HomePage() {
  const items = await prisma.menuItem.findMany({
    where: { available: true },
    orderBy: { sortOrder: "asc" },
  });

  return (
    <main className="bg-[#f6f0e6]">
      <div className="w-full overflow-hidden">
        {sections.map((section, index) => (
          <section key={section.src} id={index === 1 ? "sauces" : index === 3 ? "recipes" : index === 4 ? "story" : undefined} className="w-full">
            <img
              src={section.src}
              alt={section.alt}
              className="block h-auto w-full"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </section>
        ))}
      </div>

      {items.length > 0 && (
        <section id="shop" className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-black/10 pb-5">
            <div>
              <div className="h-[2px] w-7 bg-brand" />
              <h2 className="mt-5 font-display text-4xl sm:text-5xl">Shop San San</h2>
            </div>
            <Link href="#sauces" className="text-[10px] uppercase tracking-[.2em] text-brand">Our sauces ↑</Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <MenuItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                priceCents={item.priceCents}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
