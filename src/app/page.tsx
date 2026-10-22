import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { MenuItemCard } from "@/components/MenuItemCard";
import { displaySauce, imageForSauce } from "@/lib/sauceImages";

export const dynamic = "force-dynamic";

const featured = [
  { title: "Soul Chili Oil", text: "Fragrant, bold, and deeply satisfying.", image: "/packaging/soul-jar.png" },
  { title: "Smoky Green Chili", text: "Chopped roasted green chilies, garlic, and green Sichuan peppercorns.", image: "/packaging/green-jar.png" },
  { title: "Slow-Simmered Beef Chili", text: "Rich, savory, and full of texture.", image: "/packaging/beef-jar.png" },
];

const recipes = [
  { name: "FISH", image: "/serving/green-pepper-fish.png" },
  { name: "BEEF", image: "/serving/green-pepper-beef.png" },
  { name: "EGGS & TOAST", image: "/serving/eggs-and-toast.webp" },
  { name: "ROASTED SQUASH", image: "/serving/roasted-squash.webp" },
  { name: "NOODLES", image: "/serving/sauce-noodles.webp" },
];

export default async function HomePage() {
  const items = await prisma.menuItem.findMany({ where: { available: true }, orderBy: { sortOrder: "asc" } });
  return (
    <div className="bg-[#f6f0e6] text-[#231d19]">
      {/* The global site header and footer are supplied by layout.tsx.
          Do not use full-page mockup images here: they contain baked-in text. */}
      <section className="relative grid min-h-[540px] items-center overflow-hidden bg-[#e7ded0] md:min-h-[660px] md:grid-cols-2">
        <div className="relative z-10 order-2 px-7 py-14 md:order-1 md:px-[max(2rem,calc((100vw-80rem)/2))] md:py-20">
          <p className="mb-5 text-[11px] uppercase tracking-[.24em] text-[#a44735]">Sichuan flavors, everyday meals</p>
          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">One Spoon,<br/>Endless Ways.</h1>
          <p className="mt-6 max-w-sm font-display text-lg leading-relaxed text-[#54473d]">Bold flavors, thoughtfully crafted for modern kitchens.</p>
          <Link href="/shop" className="mt-8 inline-flex min-h-11 items-center bg-[#9e4331] px-6 py-3 text-sm text-white hover:bg-[#762c20]">Shop Our Sauces →</Link>
        </div>
        <div className="order-1 h-[310px] md:order-2 md:h-full">
          <img src="/serving/sauce-noodles.webp" alt="Fresh noodles topped with San San sauce" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-9 grid gap-5 md:grid-cols-2 md:items-end">
          <div><p className="mb-4 text-[11px] uppercase tracking-[.2em] text-[#a44735]">02 / Explore</p><h2 className="font-display text-4xl leading-tight md:text-5xl">Two Ways to Bring<br/>the Flavor Home.</h2></div>
          <p className="max-w-sm font-display text-lg text-[#65594e]">From our signature sauces to the carefully chosen ingredients behind them.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Link href="/shop" className="group relative block aspect-[1.65] overflow-hidden bg-[#382d22]">
            <img src="/serving/green-pepper-beef.png" alt="Sauce served with beef" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
            <span className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent"/>
            <span className="absolute bottom-7 left-7 font-display text-2xl text-white">Signature Sauces →</span>
          </Link>
          <Link href="/craft" className="group relative block aspect-[1.65] overflow-hidden bg-[#382d22]">
            <img src="/packaging/sauces-stone-new-labels.png" alt="San San sauces and their chili ingredients" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
            <span className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent"/>
            <span className="absolute bottom-7 left-7 font-display text-2xl text-white">Ingredients &amp; Spices →</span>
          </Link>
        </div>
      </section>

      <section id="sauces" className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div><p className="mb-4 text-[11px] uppercase tracking-[.2em] text-[#a44735]">03 / Our Signature Sauces</p><h2 className="font-display text-4xl leading-tight md:text-5xl">A Little Jar.<br/>A Lot of Possibilities.</h2></div>
          <Link href="/shop" className="text-sm text-[#9e4331] underline underline-offset-4">Shop All →</Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {featured.map((p) => <Link key={p.title} href="/shop" className="group">
            <div className="aspect-[1.08] overflow-hidden bg-[#e9dfd1]"><img src={p.image} alt={p.title + " packaging concept"} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/></div>
            <h3 className="mt-5 font-display text-2xl">{p.title}</h3><p className="mt-2 text-sm leading-relaxed text-[#65594e]">{p.text}</p><span className="mt-3 inline-block text-sm text-[#9e4331]">View →</span>
          </Link>)}
        </div>
        <p className="mt-6 text-xs text-[#746b62]">Packaging artwork is a concept; final product photography is coming soon.</p>
      </section>

      <section id="ingredients" className="grid bg-[#352a23] text-[#f9f4eb] md:grid-cols-2">
        <div className="flex min-h-[370px] items-center px-7 py-16 md:px-[max(2rem,calc((100vw-80rem)/2))]">
          <div className="max-w-lg"><p className="mb-5 text-[11px] uppercase tracking-[.2em] text-[#e0b4a0]">04 / Good Flavor Begins with Good Ingredients</p><h2 className="font-display text-4xl leading-tight md:text-5xl">Thoughtful Ingredients.<br/>Extraordinary Flavor.</h2><p className="mt-6 font-display text-lg leading-relaxed text-[#e2d6c8]">Chilies, Sichuan peppercorns, and olive oil come together in carefully crafted, layered flavors.</p><Link href="/craft" className="mt-7 inline-flex min-h-11 items-center bg-[#a44735] px-6 text-sm text-white">Our Ingredients →</Link></div>
        </div>
        <div className="min-h-[330px]"><img src="/packaging/sauces-stone-new-labels.png" alt="Chili peppers and Sichuan peppercorns with San San jars" className="h-full w-full object-cover"/></div>
      </section>

      <section id="recipes" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <p className="mb-4 text-[11px] uppercase tracking-[.2em] text-[#a44735]">05 / Everyday Food, Elevated</p>
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5"><div><h2 className="font-display text-4xl md:text-5xl">Everyday Food, Elevated.</h2><p className="mt-4 max-w-lg font-display text-lg text-[#65594e]">From morning eggs to late-night noodles, one spoon makes every meal more memorable.</p></div><Link href="/recipes" className="text-sm text-[#9e4331] underline underline-offset-4">Explore Recipes →</Link></div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {recipes.map((recipe) => <Link key={recipe.name} href="/recipes" className="group relative aspect-[3/4] overflow-hidden bg-[#352a23]"><img src={recipe.image} alt={recipe.name.toLowerCase() + " recipe inspiration"} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/><span className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"/><span className="absolute bottom-5 left-4 font-display text-sm text-white md:text-base">{recipe.name}</span></Link>)}
        </div>
      </section>

      <section id="story" className="grid bg-[#e9dfd1] md:grid-cols-2">
        <div className="min-h-[340px]"><img src="/serving/eggs-and-toast.webp" alt="Food made to share around the table" className="h-full w-full object-cover"/></div>
        <div className="flex items-center px-7 py-16 md:px-16">
          <div className="max-w-lg"><p className="mb-5 text-[11px] uppercase tracking-[.2em] text-[#a44735]">06 / Our Story</p><h2 className="font-display text-4xl leading-tight md:text-5xl">Good Food, Bring Good People Together.</h2><p className="mt-6 font-display text-lg leading-relaxed text-[#65594e]">Our story began in a family restaurant in Chongqing in 1986. Today, San San brings those deeply loved flavors to everyday kitchens and the people who gather around them.</p><Link href="/story" className="mt-7 inline-flex min-h-11 items-center bg-[#9e4331] px-6 text-sm text-white">Our Story →</Link></div>
        </div>
      </section>

      <section className="bg-[#281b17] px-6 py-16 text-center text-[#f9f4eb] md:py-20">
        <p className="mb-4 text-[11px] uppercase tracking-[.22em]">Stay in Touch</p><h2 className="font-display text-4xl">Good Food, More Inspiration.</h2><p className="mx-auto mt-4 max-w-lg font-display text-lg text-[#dfd2c4]">Discover fresh ideas for bringing bold flavor to your table.</p><Link href="/recipes" className="mt-7 inline-flex min-h-11 items-center border border-[#dfd2c4] px-6 text-sm">Explore Recipes →</Link>
      </section>

      {items.length > 0 && <section className="mx-auto max-w-7xl px-6 py-16 md:px-10"><div className="mb-8 flex items-end justify-between"><h2 className="font-display text-3xl">Shop San San</h2><Link href="/shop" className="text-sm text-[#9e4331]">Shop all →</Link></div><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{items.map((item) => <MenuItemCard key={item.id} id={item.id} {...displaySauce(item.name, item.description)} priceCents={item.priceCents} imageUrl={imageForSauce(item.name, item.imageUrl)}/>)}</div></section>}
    </div>
  );
}
