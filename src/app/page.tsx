import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { MenuItemCard } from "@/components/MenuItemCard";

export const dynamic = "force-dynamic";

const pairings = [
  ["Eggs", "A bright start."],
  ["Noodles", "Twirl, spoon, finish."],
  ["Roast Chicken", "Savory heat for the centerpiece."],
  ["Vegetables", "Heat, aroma and depth."],
];

export default async function HomePage() {
  const items = await prisma.menuItem.findMany({ where: { available: true }, orderBy: { sortOrder: "asc" } });
  return (
    <div className="paper bg-[#f6f0e6]">
      <section className="relative min-h-[78vh] overflow-hidden bg-[#17110d] text-[#f6f0e6]">
        <img src="/vision/hero.jpg" alt="Chili being finished by hand over a dark ceramic bowl" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 py-20 sm:px-8">
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[.3em] text-[#d8c5aa]">Handcrafted sauces for a brighter table</p>
            <div className="mt-7 h-[2px] w-7 bg-brand" />
            <h1 className="mt-6 font-display text-6xl leading-[.94] sm:text-7xl lg:text-[5.7rem]">A More<br/>Delicious Life</h1>
            <p className="mt-7 max-w-md font-display text-lg leading-7 text-white/80">Handcrafted sauces with deep flavor, made to bring something extraordinary to the everyday table.</p>
            <Link href="#sauces" className="mt-8 inline-flex bg-brand px-6 py-3 text-[9px] font-semibold uppercase tracking-[.2em] transition hover:bg-[#a62525]">Shop sauces <span className="ml-4">→</span></Link>
          </div>
        </div>
      </section>

      <section id="sauces" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.5fr_.7fr] lg:items-center">
          <div><div className="h-[2px] w-7 bg-brand"/><h2 className="mt-5 font-display text-5xl">Our Sauces</h2><p className="mt-5 max-w-xs font-display text-lg leading-7 text-foreground/70">Handcrafted in small batches with real ingredients. Two essential sauces, a world of possibilities.</p><Link href="#collection" className="mt-8 inline-block text-[9px] uppercase tracking-[.22em] text-brand">Shop all &nbsp; →</Link></div>
          <div className="relative flex min-h-80 items-end justify-center border-x border-black/10 px-8"><div className="grid w-full max-w-lg grid-cols-2 gap-8">{["Chili Oil","Beef Chili"].map((name)=><div key={name} className="flex aspect-[3/4] flex-col justify-end border border-black/15 bg-[#ede3d3] p-6 text-center shadow-[0_20px_50px_rgba(52,35,20,.08)]"><div className="mb-auto pt-7 font-display text-6xl text-brand">三</div><p className="font-display text-xl tracking-[.08em]">SAN SAN</p><p className="mt-3 text-[9px] uppercase tracking-[.2em] text-foreground/55">{name}</p></div>)}</div></div>
          <div className="space-y-10"><div><div className="h-[2px] w-6 bg-brand"/><h3 className="mt-4 font-display text-xl">CHILI OIL</h3><p className="mt-3 text-sm leading-6 text-foreground/65">Fragrant, balanced, and made for eggs, pizza, noodles, vegetables and more.</p></div><div><div className="h-[2px] w-6 bg-brand"/><h3 className="mt-4 font-display text-xl">BEEF CHILI</h3><p className="mt-3 text-sm leading-6 text-foreground/65">Rich, savory and deeply satisfying. Real ingredients. Real depth.</p></div></div>
        </div>
        <div id="collection" className="mt-16">{items.length > 0 && <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{items.map((item)=><MenuItemCard key={item.id} id={item.id} name={item.name} description={item.description} priceCents={item.priceCents} imageUrl={item.imageUrl}/>)}</div>}</div>
      </section>

      <section className="bg-[#1b120d] text-[#f6f0e6]"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><div><div className="h-[2px] w-7 bg-brand"/><h2 className="mt-5 font-display text-5xl">Real Ingredients.<br/>Deeper Flavors.</h2><p className="mt-6 max-w-sm font-display text-lg leading-7 text-white/65">Chilies. Sichuan peppercorns. Garlic. Ginger. Shallots. Tradition. Care.</p><p className="mt-3 text-sm text-white/45">Nothing unnecessary.</p></div><div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">{["Chilies","Peppercorns","Garlic","Ginger"].map((x)=><div key={x} className="flex aspect-square items-end bg-[#24150f] p-5"><span className="font-display text-xl text-white/70">{x}</span></div>)}</div></div></section>

      <section id="pairings" className="mx-auto max-w-7xl px-6 py-20 sm:px-8"><div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]"><div className="lg:pr-10"><h2 className="font-display text-5xl">Everyday Food,<br/>Elevated.</h2><div className="mt-6 h-[2px] w-7 bg-brand"/><p className="mt-5 max-w-xs text-sm leading-6 text-foreground/65">From morning eggs to weekend dinners, San San brings depth, warmth, and character to the food you already love.</p></div><div className="grid grid-cols-2 gap-1 sm:grid-cols-4">{pairings.map(([name,note])=><article key={name} className="flex aspect-[3/4] flex-col justify-end bg-[#26150f] p-5 text-[#f6f0e6]"><div className="mb-auto font-display text-5xl text-brand/70">三</div><h3 className="font-display text-xl">{name}</h3><p className="mt-2 text-xs leading-5 text-white/45">{note}</p></article>)}</div></div></section>

      <section id="story" className="border-t border-black/10"><div className="mx-auto grid max-w-7xl lg:grid-cols-2"><div className="min-h-96 bg-[#1b120d] p-10 text-[#f6f0e6] sm:p-16"><p className="text-[9px] uppercase tracking-[.25em] text-brand">Handcrafted in small batches</p><div className="mt-16 font-display text-8xl text-brand/80">三</div><p className="mt-8 max-w-sm font-display text-2xl italic text-white/65">Good food brings good people together.</p></div><div className="p-10 sm:p-16"><div className="h-[2px] w-7 bg-brand"/><h2 className="mt-5 font-display text-5xl">Made with care.<br/>Shared with joy.</h2><p className="mt-6 max-w-lg font-display text-lg leading-8 text-foreground/70">San San is about the power of food to bring people together — at home, around the table, and in everyday moments. We make sauces with deep flavor and fine-dining attention to detail, for a more delicious life.</p><p className="mt-9 text-[9px] uppercase tracking-[.25em] text-brand">Good food brings good people together.</p></div></div></section>
    </div>
  );
}
