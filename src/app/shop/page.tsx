import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { MenuItemCard } from "@/components/MenuItemCard";

export const dynamic = "force-dynamic";

export default async function ShopPage() {
  const items = await prisma.menuItem.findMany({ where: { available: true }, orderBy: { sortOrder: "asc" } });
  return (
    <main className="min-h-screen bg-[#f6f0e6]">
      <section className="border-b border-black/10 px-6 py-16 text-center sm:px-8 sm:py-20">
        <p className="text-[10px] uppercase tracking-[.3em] text-brand">San San · New York</p>
        <h1 className="mt-4 font-display text-5xl sm:text-6xl">Our Sauces</h1>
        <p className="mx-auto mt-5 max-w-xl font-display text-lg leading-7 text-foreground/65">Handcrafted in small batches with real ingredients and deep, savory flavor.</p>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
        {items.length ? <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{items.map(item => <MenuItemCard key={item.id} id={item.id} name={item.name} description={item.description} priceCents={item.priceCents} imageUrl={item.imageUrl} />)}</div> : <div className="py-20 text-center"><p className="font-display text-2xl">Our next batch is coming soon.</p><Link href="/" className="mt-6 inline-block text-xs uppercase tracking-[.2em] text-brand">Back home →</Link></div>}
      </section>
    </main>
  );
}
