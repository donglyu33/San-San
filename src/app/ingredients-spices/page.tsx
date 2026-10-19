import type { Metadata } from "next";
import { CategoryNav } from "@/components/CategoryNav";
import { SPICE_PREVIEWS, spiceNotificationHref } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Ingredients & Spices | San San",
  description: "Explore San San’s upcoming peppercorns, dried chilies, and dry dipping seasoning. Coming soon.",
};

export default function IngredientsSpicesPage() {
  return <div className="min-h-screen bg-[#f6f0e6]">
    <section className="border-b border-black/10 px-6 py-16 text-center sm:py-24">
      <span aria-hidden="true" className="mx-auto flex h-12 w-10 items-center justify-center border border-brand font-display text-2xl text-brand">三</span>
      <p className="mt-6 text-[10px] uppercase tracking-[.3em] text-brand">The San San pantry · Coming Soon</p>
      <h1 className="mt-5 font-display text-4xl sm:text-6xl">Ingredients &amp; Spices</h1>
      <p className="mx-auto mt-6 max-w-xl font-display text-xl leading-8 text-foreground/70">A new chapter for your everyday table. Peppercorns, dried chilies, and a finishing touch of spice.</p>
      <p className="mt-5 font-display italic">One Spoon, Endless Ways.</p>
      <CategoryNav active="spices" />
    </section>
    <section aria-labelledby="collection-title" className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
      <div className="mb-10 max-w-2xl">
        <h2 id="collection-title" className="font-display text-3xl">Meet the upcoming collection.</h2>
        <p className="mt-4 text-sm leading-7 text-foreground/70">These products are in development and are not yet available to order. Prices, pack sizes, and launch dates will be shared when confirmed.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SPICE_PREVIEWS.map((product, index) => <article id={product.slug} key={product.slug} className="flex flex-col border border-black/15 p-7 sm:p-8">
          <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[.18em]"><span className="text-foreground/60">{product.type}</span><span className="text-brand">Coming Soon</span></div>
          <div aria-hidden="true" className="my-9 flex min-h-24 items-center border-l-2 border-brand pl-6 font-display text-3xl leading-relaxed text-brand">{product.chinese}</div>
          <p className="text-[10px] tracking-[.2em] text-foreground/50">SAN SAN / 0{index + 1}</p>
          <h3 className="mt-3 font-display text-2xl leading-8">{product.name}</h3>
          <p lang="zh" className="mt-2 text-sm text-foreground/65">{product.chinese}</p>
          <a href={spiceNotificationHref(product.name)} aria-label={`Notify me by email about ${product.name}`} className="mt-8 inline-flex min-h-11 items-center self-start border-b border-brand text-xs uppercase tracking-[.16em] text-brand">Notify Me <span aria-hidden="true" className="ml-4">↗</span></a>
        </article>)}
      </div>
      <p className="mt-8 max-w-2xl text-xs leading-6 text-foreground/65">Notify Me opens your email app with a request to San San. Send the email to express interest; this is not an order or an automatic mailing-list signup.</p>
    </section>
  </div>;
}
