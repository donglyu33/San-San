import Link from "next/link";
import { EverydayFoodSection } from "@/components/EverydayFoodSection";

const products = [
  { name: "Soul Chili Oil", description: "Fragrant, bold, and deeply satisfying.", image: "/packaging/soul-jar.png", alt: "Soul Chili Oil jar" },
  { name: "Smoky Green Chili", description: "Chopped roasted green chilies with garlic and green Sichuan peppercorns.", image: "/packaging/green-jar.png", alt: "Smoky Green Chili jar" },
  { name: "Slow-Simmered Beef Chili", description: "Rich, savory, and full of texture.", image: "/packaging/beef-jar.png", alt: "Slow-Simmered Beef Chili jar" },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[#f8f5ef] text-[#241f1a]">
      <section className="relative min-h-[470px] overflow-hidden md:min-h-[650px]">
        <img src="/1.%20Hero.png" alt="San San food and culinary inspiration" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f5ef]/95 via-[#f8f5ef]/75 to-transparent md:via-[#f8f5ef]/20" />
        <div className="relative mx-auto flex min-h-[470px] max-w-7xl items-center px-7 py-20 md:min-h-[650px] md:px-12">
          <div className="max-w-md">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[.22em] text-[#a34432]">Sichuan flavors, everyday meals</p>
            <h1 className="font-display text-5xl leading-[1.06] md:text-7xl">One Spoon,<br />Endless Ways.</h1>
            <p className="mt-6 max-w-xs font-display text-lg leading-relaxed">Bold flavors, thoughtfully crafted for modern kitchens.</p>
            <Link href="/shop" className="mt-7 inline-flex min-h-11 items-center bg-[#a44735] px-6 text-sm text-white transition hover:bg-[#823324]">Shop Our Sauces&nbsp; →</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <div className="mb-9 grid gap-5 md:grid-cols-[2fr_1fr] md:items-end">
          <div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[.22em] text-[#a34432]">02 / Explore</p><h2 className="font-display text-4xl leading-tight md:text-5xl">Two Ways to<br />Bring the Flavor Home.</h2></div>
          <p className="max-w-xs font-display text-base leading-relaxed text-[#504942]">From our signature sauces to the carefully selected ingredients behind them.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/shop" className="group relative block aspect-[1.65] overflow-hidden bg-[#342b22]">
            <img src="/serving/sauce-noodles.webp" alt="Signature sauces for everyday food" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
            <span className="absolute bottom-6 left-7 font-display text-2xl text-white">Signature Sauces &nbsp;→</span>
          </Link>
          <Link href="/craft" className="group relative block aspect-[1.65] overflow-hidden bg-[#342b22]">
            <img src="/3.%20Real%20Ingredients.png" alt="Sichuan chilies and peppercorns" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
            <span className="absolute bottom-6 left-7 font-display text-2xl text-white">Ingredients &amp; Spices &nbsp;→</span>
          </Link>
        </div>
      </section>

      <section id="sauces" className="mx-auto max-w-7xl px-6 pb-20 md:px-12 md:pb-28">
        <div className="mb-8 grid gap-5 md:grid-cols-[2fr_1fr] md:items-end">
          <div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[.22em] text-[#a34432]">03 / Our Signature Sauces</p><h2 className="font-display text-4xl leading-tight md:text-5xl">A Little Jar.<br />A Lot of Possibilities.</h2></div>
          <div><p className="max-w-xs font-display text-base text-[#504942]">Distinct flavors, real ingredients, and the taste of Chongqing in every jar.</p><Link href="/shop" className="mt-4 inline-block text-sm text-[#a34432] underline underline-offset-4">Shop All →</Link></div>
        </div>
        <div className="grid gap-7 sm:grid-cols-3">
          {products.map((product) => <Link href="/shop" key={product.name} className="group block">
            <div className="aspect-[1.14] overflow-hidden bg-[#eee6d9]"><img src={product.image} alt={product.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" /></div>
            <h3 className="mt-4 font-display text-xl">{product.name}</h3>
            <p className="mt-1 max-w-xs font-display text-sm leading-relaxed text-[#635a51]">{product.description}</p>
            <span className="mt-3 inline-block text-sm text-[#a34432] underline underline-offset-4">View →</span>
          </Link>)}
        </div>
      </section>

      <section id="ingredients" className="relative min-h-[390px] overflow-hidden bg-[#34281e] text-white md:min-h-[470px]">
        <img src="/3.%20Real%20Ingredients.png" alt="Thoughtfully selected Sichuan ingredients" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
        <div className="relative mx-auto flex min-h-[390px] max-w-7xl items-center px-7 py-14 md:min-h-[470px] md:px-12">
          <div className="max-w-md"><p className="mb-4 text-[10px] font-semibold uppercase tracking-[.2em]">04 / Good Flavor Begins with Good Ingredients</p><h2 className="font-display text-4xl leading-tight md:text-5xl">Thoughtful Ingredients.<br />Extraordinary Flavor.</h2><p className="mt-5 font-display text-base leading-relaxed">Chilies, Sichuan peppercorns, olive oil, and carefully selected ingredients come together to create clean, layered flavor.</p><Link href="/craft" className="mt-6 inline-flex min-h-11 items-center bg-[#a44735] px-5 text-sm">Our Ingredients →</Link></div>
        </div>
      </section>

      <div className="bg-[#f8f5ef]"><EverydayFoodSection /></div>

      <section id="story" className="grid md:grid-cols-2">
        <div className="min-h-[320px] md:min-h-[430px]"><img src="/5.%20Good%20Food%20brings%20Good%20People%20Together.png" alt="Food shared around a welcoming dinner table" className="h-full w-full object-cover" /></div>
        <div className="flex items-center bg-[#f8f5ef] px-7 py-14 md:px-14">
          <div className="max-w-md"><p className="mb-4 text-[10px] font-semibold uppercase tracking-[.2em] text-[#a34432]">06 / Our Story</p><h2 className="font-display text-4xl leading-tight md:text-5xl">Good Food,<br />Bring Good People Together.</h2><p className="mt-5 font-display text-base leading-relaxed text-[#514940]">Born from a family restaurant in Chongqing in 1986, San San brings the flavors we grew up with to modern kitchens, so good food can be simple, everyday, and joyful.</p><Link href="/story" className="mt-6 inline-flex min-h-11 items-center bg-[#a44735] px-5 text-sm text-white">Our Story →</Link></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#271710] px-6 py-16 text-center text-white md:py-20">
        <img src="/packaging/sauces-stone-new-labels.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative"><p className="mb-3 text-[10px] uppercase tracking-[.25em]">Stay in touch</p><h2 className="font-display text-3xl md:text-4xl">Good Food, More Inspiration.</h2><p className="mx-auto mt-4 max-w-lg font-display text-sm leading-relaxed">Follow along for recipes, seasonal updates, and behind-the-scenes stories.</p><Link href="/recipes" className="mt-6 inline-block border border-white/70 px-6 py-3 text-sm">Explore Recipes →</Link></div>
      </section>
    </div>
  );
}
