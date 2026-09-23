import Link from "next/link";

export const metadata = {
  title: "Our Craft | San San",
  description: "The ingredients and traditions behind San San's Chongqing-inspired sauces.",
};

export default function CraftPage() {
  return (
    <main className="min-h-screen bg-[#f6f0e6]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-sm uppercase tracking-[.2em] text-brand">Our craft</p>
          <h1 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">Flavor begins with the ingredients.</h1>
          <p className="mt-7 max-w-xl font-display text-lg leading-8 text-foreground/75">
            Our sauces draw on the flavors of Chongqing: fragrant chilies, Sichuan peppercorns, aromatics, and the savory depth of fermented ingredients.
          </p>
          <Link href="/shop" className="mt-10 inline-flex min-h-11 items-center border border-brand px-6 text-sm text-brand hover:bg-brand hover:text-white">Explore our sauces →</Link>
        </div>
        <div className="border-t border-brand/30 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <h2 className="font-display text-3xl">Made to bring a meal to life</h2>
          <p className="mt-5 font-display text-lg leading-8 text-foreground/75">
            For our beef chili, onion, scallion greens, and cilantro bring fragrance to the oil. Sichuan peppercorn, star anise, cassia, bay leaf, chili, doubanjiang, and douchi build its layered flavor around beef and shiitake mushroom.
          </p>
          <p className="mt-5 font-display text-lg leading-8 text-foreground/75">
            We’re preparing a closer look at how each sauce is made. Come back for the full process and a look behind the scenes.
          </p>
        </div>
      </div>
    </main>
  );
}
