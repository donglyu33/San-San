import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { MenuItemCard } from "@/components/MenuItemCard";
import { displaySauce, imageForSauce } from "@/lib/sauceImages";
import { PEPPERCORNS, isSpiceCategory } from "@/lib/peppercorns";

export const dynamic = "force-dynamic";

export default async function ShopPage() {
  const items = await prisma.menuItem.findMany({ where: { available: true }, orderBy: { sortOrder: "asc" } });
  const sauces = items.filter(item => !isSpiceCategory(item.category));
  const spices = items.filter(item => isSpiceCategory(item.category));
  const upcoming = PEPPERCORNS.filter(product => !items.some(item => item.id === product.id));
  return (
    <main className="min-h-screen bg-[#f6f0e6]">
      <section className="border-b border-black/10 px-6 py-16 text-center sm:px-8 sm:py-20">
        <p className="text-[10px] uppercase tracking-[.3em] text-brand">San San / Shop</p>
        <h1 className="mt-4 font-display text-5xl sm:text-6xl">Sauces &amp; Spices</h1>
        <p className="mx-auto mt-5 max-w-xl font-display text-lg leading-7 text-foreground/65">Bold flavor. Effortless cooking.</p>
        <nav aria-label="Shop categories" className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <a href="#sauces" className="inline-flex min-h-11 items-center border border-brand-light px-5 hover:border-brand">Signature Sauces</a>
          <a href="#ingredients-spices" className="inline-flex min-h-11 items-center border border-brand-light px-5 hover:border-brand">Ingredients &amp; Spices</a>
        </nav>
      </section>
      <section id="sauces" aria-labelledby="sauces-heading" className="mx-auto max-w-7xl scroll-mt-8 px-6 py-14 sm:px-8">
        <h2 id="sauces-heading" className="mb-8 font-display text-3xl sm:text-4xl">Signature Sauces</h2>
        {sauces.length ? <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{sauces.map(item => <MenuItemCard key={item.id} id={item.id} {...displaySauce(item.name, item.description)} priceCents={item.priceCents} imageUrl={imageForSauce(item.name, item.imageUrl)} />)}</div> : <div className="py-20 text-center"><p className="font-display text-2xl">Our next batch is coming soon.</p><Link href="/" className="mt-6 inline-block text-xs uppercase tracking-[.2em] text-brand">Back home →</Link></div>}
      </section>
      <section id="ingredients-spices" aria-labelledby="spices-heading" className="mx-auto max-w-7xl scroll-mt-8 border-t border-brand-light px-6 py-14 sm:px-8">
        <h2 id="spices-heading" className="mb-8 font-display text-3xl sm:text-4xl">Ingredients &amp; Spices</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {spices.map(item => <MenuItemCard key={item.id} id={item.id} name={item.name} description={item.description} priceCents={item.priceCents} imageUrl={item.imageUrl} imageFit="contain" />)}
          {upcoming.map(product => <MenuItemCard key={product.id} id={product.id} name={product.name} description={product.description} priceCents={null} imageUrl={product.imageUrl} imageFit="contain" />)}
        </div>
      </section>
    </main>
  );
}
