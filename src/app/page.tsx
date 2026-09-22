import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { MenuItemCard } from "@/components/MenuItemCard";

export const dynamic = "force-dynamic";

const pairings = [
  ["Noodles", "Twirl, spoon, finish."],
  ["Dumplings", "A fragrant dipping companion."],
  ["Rice", "One spoon changes the bowl."],
  ["Vegetables", "Heat, aroma and depth."],
];

export default async function HomePage() {
  const items = await prisma.menuItem.findMany({ where: { available: true }, orderBy: { sortOrder: "asc" } });

  return (
    <div className="paper bg-[#f6f0e6]">
      <section className="relative overflow-hidden bg-[#17110d] text-[#f6f0e6]">
        <div className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_72%_38%,#632014_0,transparent_25%),radial-gradient(circle_at_80%_75%,#2b160e_0,transparent_38%)]" />
        <div className="relative mx-auto grid min-h-[76vh] max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:py-24">
          <div>
            <p className="text-[10px] uppercase tracking-[.3em] text-[#d8c5aa]">Chinese flavors<br/>for a brighter table</p>
            <div className="mt-7 h-[2px] w-7 bg-brand" />
            <h1 className="mt-6 max-w-xl font-display text-6xl leading-[.94] sm:text-7xl lg:text-[5.7rem]">A More<br/>Delicious Life</h1>
            <p className="mt-7 max-w-md font-display text-lg leading-7 text-white/75">Rooted in Chongqing. Thoughtfully crafted.<br/>Made for everyday moments.</p>
            <Link href="#sauces" className="mt-8 inline-flex bg-brand px-6 py-3 text-[9px] font-semibold uppercase tracking-[.2em] transition hover:bg-[#a62525]">Shop sauces <span className="ml-4">→</span></Link>
          </div>
          <div className="relative mx-auto flex aspect-[5/4] w-full max-w-2xl items-center justify-center">
            <div className="absolute h-[72%] w-[72%] rounded-full bg-[#4d1c12]/35 blur-3xl" />
            <div className="relative text-center">
              <div className="font-display text-[8rem] leading-none text-brand/90 sm:text-[11rem]">三</div>
              <p className="mt-3 text-[10px] uppercase tracking-[.28em] text-white/45">Good food brings good people together</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sauces" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.5fr_.7fr] lg:items-center">
          <div>
            <div className="h-[2px] w-7 bg-brand" />
            <h2 className="mt-5 font-display text-5xl">Our Sauces</h2>
            <p className="mt-5 max-w-xs font-display text-lg leading-7 text-foreground/70">Handcrafted in small batches with real ingredients. Two essential sauces, a world of possibilities.</p>
            <Link href="#collection" className="mt-8 inline-block text-[9px] uppercase tracking-[.22em] text-brand">Shop all &nbsp; →</Link>
          </div>
          <div className="relative flex min-h-80 items-end justify-center border-x border-black/10 px-8">
            <div className="grid w-full max-w-lg grid-cols-2 gap-8">
              {["Chili Oil", "Beef Chili"].map((name) => <div key={name} className="flex aspect-[3/4] flex-col justify-end border border-black/15 bg-[#ede3d3] p-6 text-center shadow-[0_20px_50px_rgba(52,35,20,.08)]"><div className="mb-auto pt-7 font-display text-6xl text-brand">三</div><p className="font-display text-xl tracking-[.08em]">SAN SAN</p><p className="mt-3 text-[9px] uppercase tracking-[.2em] text-foreground/55">{name}</p></div>)}
            </div>
          </div>
          <div className="space-y-10">
            <div><div className="h-[2px] w-6 bg-brand"/><h3 className="mt-4 font-display text-xl">CHILI OIL</h3><p className="mt-3 text-sm leading-6 text-foreground/65">For noodles, rice, dumplings, vegetables and more.</p></div>
            <div><div className="h-[2px] w-6 bg-brand"/><h3 className="mt-4 font-display text-xl">BEEF CHILI</h3><p className="mt-3 text-sm leading-6 text-foreground/65">Rich, savory and deeply satisfying. A Chongqing-inspired classic.</p></div>
          </div>
        </div>
        <div id="collection" className="mt-16">
          {items.length > 0 && <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{items.map((item) => <MenuItemCard key={item.id} id={item.id} name={item.name} description={item.description} priceCents={item.priceCents} imageUrl={item.imageUrl} />)}</div>}
        </div>
      </section>

      <section className="bg-[#1b120d] text-[#f6f0e6]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <div><div className="h-[2px] w-7 bg-brand"/><h2 className="mt-5 font-display text-5xl">Real Ingredients.<br/>Deeper Flavors.</h2><p className="mt-6 max-w-sm font-display text-lg leading-7 text-white/65">Chilies. Sichuan peppercorns. Garlic. Ginger. Shallots. Tradition. Care.</p><p className="mt-3 text-sm text-white/45">Nothing unnecessary.</p></div>
          <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">{["Chilies","Peppercorns","Garlic","Ginger"].map((x)=><div key={x} className="flex aspect-square items-end bg-[#24150f] p-5"><span className="font-display text-xl text-white/70">{x}</span></div>)}</div>
        </div>
      </section>

      <section id="pairings" className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
          <div className="lg:pr-10"><h2 className="font-display text-5xl">Everyday Food,<br/>Elevated.</h2><div className="mt-6 h-[2px] w-7 bg-brand"/><p className="mt-5 max-w-xs text-sm leading-6 text-foreground/65">From morning eggs to weekend dinners, San San brings depth, warmth, and character to the food you already love.</p></div>
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-4">{pairings.map(([name,note])=><article key={name} className="flex aspect-[3/4] flex-col justify-end bg-[#26150f] p-5 text-[#f6f0e6]"><div className="mb-auto font-display text-5xl text-brand/70">三</div><h3 className="font-display text-xl">{name}</h3><p className="mt-2 text-xs leading-5 text-white/45">{note}</p></article>)}</div>
        </div>
      </section>

      <section id="story" className="border-t border-black/10">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="min-h-96 bg-[#ded2bf] p-10 sm:p-16"><p className="text-[9px] uppercase tracking-[.25em] text-brand">重庆 · Chongqing</p><div className="mt-16 font-display text-8xl text-brand/80">三</div><p className="mt-8 max-w-sm font-display text-2xl italic text-foreground/55">Mountains, rivers, night markets, and flavors that stay with you.</p></div>
          <div className="p-10 sm:p-16"><div className="h-[2px] w-7 bg-brand"/><h2 className="mt-5 font-display text-5xl">From Chongqing<br/>to Your Table</h2><p className="mt-6 max-w-lg font-display text-lg leading-8 text-foreground/70">San San is inspired by the flavors of my hometown, Chongqing, and made for the place I now call home. It’s a bridge between where I come from and the life we share here — one meal, one jar, one brighter table at a time.</p><p className="mt-9 text-[9px] uppercase tracking-[.25em] text-brand">Good food brings good people together.</p></div>
        </div>
      </section>
    </div>
  );
}
