import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { MenuItemCard } from "@/components/MenuItemCard";
import { displaySauce, imageForSauce } from "@/lib/sauceImages";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const items = await prisma.menuItem.findMany({ where: { available: true }, orderBy: { sortOrder: "asc" } });
  return (
    <div className="bg-[#f6f0e6]">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[.25em] text-brand">San San · Sauces for everyday tables</p>
          <h1 className="mt-7 font-display text-5xl leading-tight sm:text-7xl">One Spoon,<br />Endless Ways.</h1>
          <div className="mt-8 h-0.5 w-10 bg-brand" />
          <p className="mt-7 max-w-md font-display text-xl leading-8 text-foreground/70">Deep flavor. Simple pleasures. A spoonful to make the everyday table your own.</p>
          <Link href="/shop" className="mt-9 inline-flex min-h-12 items-center bg-brand px-7 text-xs uppercase tracking-[.2em] text-background hover:bg-brand-dark">Explore our sauces →</Link>
        </div>
        <figure>
          <Image src="/label-concept.svg" width={1000} height={760} preload unoptimized alt="Illustrated San San glass jars with cream-white labels, black type and red seals, showing Chili Oil and Beef Chili label concepts." className="h-auto w-full" />
          <figcaption className="mt-4 text-xs leading-6 text-foreground/60">Packaging design concept · Illustrated mockup. Final jars and labels may differ.</figcaption>
        </figure>
      </section>
      <section id="label-concept" className="border-y border-black/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-8 lg:grid-cols-2">
          <div><p className="text-xs uppercase tracking-[.25em] text-brand">A first look · Label concept</p><h2 className="mt-5 font-display text-4xl">Quiet design.<br />Distinctly San San.</h2></div>
          <div className="space-y-4 text-base leading-8 text-foreground/70"><p>A warm cream-white label, generous space, and crisp black lettering. Our red 三 seal brings a single, recognizable accent to the glass jar.</p><p>One consistent design across the collection, with each sauce named clearly on the front. This is an early packaging direction, shared while the final label is being developed.</p></div>
        </div>
      </section>
      <section id="recipes" className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <p className="text-xs uppercase tracking-[.25em] text-brand">At your table</p>
        <h2 className="mt-5 font-display text-4xl sm:text-5xl">Everyday food, elevated.</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {[["Warm rice", "A spoonful of Beef Chili, a bowl of rice, and a moment to enjoy it."], ["Noodles", "Toss with Chili Oil, then finish with the toppings you love."], ["Vegetables & tofu", "A little sauce brings a new dimension to a simple plate."]].map(([title, copy]) => <article key={title} className="border-t border-black/15 pt-6"><h3 className="font-display text-2xl">{title}</h3><p className="mt-4 text-sm leading-7 text-foreground/65">{copy}</p></article>)}
        </div>
        <Link href="/recipes" className="mt-8 inline-flex min-h-11 items-center text-sm text-brand underline underline-offset-4">Explore serving ideas →</Link>
      </section>
      {items.length > 0 && <section id="shop-preview" className="mx-auto max-w-7xl px-6 pb-16 sm:px-8"><div className="mb-8 flex flex-wrap items-end justify-between gap-5 border-b border-black/10 pb-5"><h2 className="font-display text-4xl">Our sauces</h2><Link href="/shop" className="inline-flex min-h-11 items-center text-sm text-brand">View all →</Link></div><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{items.map(item => <MenuItemCard key={item.id} id={item.id} {...displaySauce(item.name, item.description)} priceCents={item.priceCents} imageUrl={imageForSauce(item.name, item.imageUrl)} />)}</div></section>}
      <section id="story" className="bg-[#171615] px-6 py-16 text-center text-background sm:px-8"><span aria-hidden="true" className="inline-flex h-14 w-11 items-center justify-center border border-[#b64b42] font-display text-3xl text-[#b64b42]">三</span><h2 className="mt-6 font-display text-4xl sm:text-5xl">Good food brings<br />good people together.</h2><Link href="/story" className="mt-7 inline-flex min-h-11 items-center text-sm underline underline-offset-4">Our story →</Link></section>
    </div>
  );
}
