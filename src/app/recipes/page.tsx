import Link from "next/link";

const ideas = [
  ["Eggs", "A spoonful over soft eggs adds savory depth and a gentle kick."],
  ["Pasta", "Finish noodles or pasta with San San for warmth, richness, and texture."],
  ["Roast Chicken", "Serve alongside crisp-skinned roast chicken for an effortless finishing sauce."],
  ["Seared Steak", "Pair with sliced steak for a deeply savory contrast."],
  ["Roasted Vegetables", "Spoon over roasted seasonal vegetables just before serving."],
];

export default function RecipesPage() {
  return <main className="min-h-screen bg-[#f6f0e6] px-6 py-16 sm:px-8 sm:py-20"><div className="mx-auto max-w-6xl"><p className="text-[10px] uppercase tracking-[.3em] text-brand">San San at the table</p><h1 className="mt-4 font-display text-5xl sm:text-6xl">Everyday Food,<br/>Elevated.</h1><p className="mt-6 max-w-xl font-display text-lg leading-8 text-foreground/65">Simple ways to bring deeper flavor to the food you already love.</p><div className="mt-14 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3">{ideas.map(([name,copy])=><article key={name} className="min-h-56 bg-[#f6f0e6] p-8"><div className="h-[2px] w-6 bg-brand"/><h2 className="mt-5 font-display text-2xl">{name}</h2><p className="mt-4 text-sm leading-6 text-foreground/60">{copy}</p></article>)}</div><Link href="/shop" className="mt-12 inline-flex border border-brand px-6 py-3 text-[10px] uppercase tracking-[.2em] text-brand">Shop sauces →</Link></div></main>;
}
