import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { MenuItemCard } from "@/components/MenuItemCard";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const items = await prisma.menuItem.findMany({ where: { available: true }, orderBy: { sortOrder: "asc" } });

  return (
    <div className="paper">
      <section className="relative overflow-hidden bg-[#171615] text-[#f3eee5]">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_75%_35%,#8b1c1c_0,transparent_35%)]" />
        <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="mb-7 text-[10px] uppercase tracking-[.32em] text-[#c9a05f]">Traditional roots · thoughtfully crafted</p>
            <h1 className="max-w-xl font-display text-6xl leading-[.95] sm:text-7xl lg:text-8xl">A brighter<br/><span className="italic">table.</span></h1>
            <p className="mt-8 max-w-md text-base leading-7 text-white/65">Chongqing-rooted chili sauces, handcrafted in small batches to bring depth, warmth and character to everyday food.</p>
            <Link href="#sauces" className="mt-10 inline-block bg-brand px-7 py-3 text-[10px] font-semibold uppercase tracking-[.22em] transition hover:bg-[#a52626]">Discover the sauces</Link>
          </div>
          <div className="relative mx-auto flex aspect-[4/5] w-full max-w-md items-center justify-center border border-white/10 bg-gradient-to-b from-[#281b16] to-[#0d0c0b] p-10">
            <div className="text-center">
              <div className="mx-auto mb-8 flex h-28 w-20 items-center justify-center border border-brand/80 font-display text-6xl text-brand">三</div>
              <p className="font-display text-3xl tracking-[.2em]">SAN SAN</p>
              <div className="mx-auto my-6 h-px w-12 bg-[#c9a05f]" />
              <p className="text-[10px] uppercase tracking-[.3em] text-white/45">Chongqing · New York / New Jersey</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sauces" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:py-32">
        <div className="mb-14 grid gap-6 border-b border-black/15 pb-8 md:grid-cols-2">
          <p className="text-[10px] uppercase tracking-[.28em] text-brand">The collection</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Two sauces. Two expressions of the flavors that feel like home.</h2>
        </div>
        {items.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => <MenuItemCard key={item.id} id={item.id} name={item.name} description={item.description} priceCents={item.priceCents} imageUrl={item.imageUrl} />)}
          </div>
        ) : (
          <div className="grid gap-px bg-black/15 md:grid-cols-2">
            {[{name:"Chili Oil",note:"Fragrant · complex · versatile"},{name:"Beef Chili",note:"Savory · deeply aromatic · bold"}].map((p) => (
              <article key={p.name} className="bg-[#f3eee5] p-10 sm:p-14">
                <p className="text-[9px] uppercase tracking-[.28em] text-brand">San San signature</p>
                <h3 className="mt-20 font-display text-5xl">{p.name}</h3>
                <p className="mt-4 text-sm uppercase tracking-[.16em] text-foreground/45">{p.note}</p>
                <p className="mt-8 max-w-sm leading-7 text-foreground/65">Small-batch sauce inspired by Chongqing, built for rice, noodles, dumplings, vegetables and whatever is on your table.</p>
              </article>
            ))}
          </div>
        )}
      </section>

      <section id="story" className="bg-[#8b1c1c] text-[#f3eee5]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 sm:px-8 lg:grid-cols-2 lg:py-32">
          <div><p className="text-[10px] uppercase tracking-[.3em] text-white/55">More than a sauce</p><h2 className="mt-7 font-display text-5xl leading-tight sm:text-6xl">A bridge between hometown flavor and the table today.</h2></div>
          <div className="self-end border-l border-white/25 pl-8"><p className="font-display text-2xl italic leading-relaxed text-white/85">“The flavor of home doesn’t have to stay in memory. It can live at the table.”</p><p className="mt-8 max-w-md text-sm leading-7 text-white/65">San San begins with the flavors of Chongqing and the belief that carefully made food can turn an ordinary meal into something worth remembering.</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-3">
          {[['01','Real ingredients','Flavor starts with ingredients chosen for aroma, texture and depth.'],['02','Small batch','Made with attention and restraint, not designed for mass-market sameness.'],['03','Made for the table','A spoonful for noodles, rice, dumplings, vegetables, eggs and more.']].map(([n,t,d]) => <div key={n} className="border-t border-black/20 pt-6"><span className="text-[9px] tracking-[.2em] text-brand">{n}</span><h3 className="mt-8 font-display text-3xl">{t}</h3><p className="mt-4 max-w-xs text-sm leading-6 text-foreground/55">{d}</p></div>)}
        </div>
      </section>
    </div>
  );
}
