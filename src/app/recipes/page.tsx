import Link from "next/link";
import { SERVING_IDEAS } from "@/lib/servingIdeas";

export default function RecipesPage() {
  return (
    <main className="min-h-screen bg-[#f6f0e6] px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-[10px] uppercase tracking-[.3em] text-brand">San San at the table</p>
        <h1 className="mt-4 font-display text-5xl sm:text-6xl">Spoon It. Toss It. Dip It.</h1>
        <p className="mt-6 max-w-xl font-display text-lg leading-8 text-foreground/65">Simple ways to bring deeper flavor to the food you already love.</p>
        <nav aria-label="Serving ideas" className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand">
          {SERVING_IDEAS.map(idea => <a href={`#${idea.id}`} key={idea.id} className="inline-flex min-h-11 items-center underline underline-offset-4">{idea.name}</a>)}
        </nav>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVING_IDEAS.map(idea => (
            <article id={idea.id} key={idea.id} aria-labelledby={`${idea.id}-heading`} className="flex scroll-mt-8 flex-col overflow-hidden border border-[#d8cbbd] bg-[#f6f0e6] target:border-brand">
              {idea.image ? (
                // eslint-disable-next-line @next/next/no-img-element -- same local serving photography as the homepage
                <img src={idea.image} alt={`${idea.name} serving inspiration`} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
              ) : null}
              <div className={`flex flex-1 flex-col p-7 ${idea.image ? "" : "justify-center"}`}>
                <div className="h-[2px] w-6 bg-brand" />
                <h2 id={`${idea.id}-heading`} className="mt-5 font-display text-2xl">{idea.name}</h2>
                <p className="mt-4 text-sm leading-6 text-foreground/60">{idea.description}</p>
                <Link href="/shop#sauces" className="mt-6 inline-flex min-h-11 items-center self-start text-xs uppercase tracking-[.12em] text-brand underline underline-offset-4">Shop sauces →</Link>
              </div>
            </article>
          ))}
        </div>
        <Link href="/shop#sauces" className="mt-12 inline-flex min-h-11 items-center border border-brand px-6 py-3 text-[10px] uppercase tracking-[.2em] text-brand">Shop sauces →</Link>
      </div>
    </main>
  );
}
