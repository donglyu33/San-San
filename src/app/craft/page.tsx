import Link from "next/link";

export const metadata = {
  title: "Chili, Considered. | Our Craft | San San",
  description: "Explore the ingredients, traditions, and thoughtful techniques behind San San's Chongqing-inspired chili flavors.",
};

const chapters = [
  {
    number: "01",
    title: "Every Chili Has a Character",
    subtitle: "An ingredient is never just an ingredient.",
    description: "Some chilies bring a warm, rounded fragrance. Others taste bright, smoky, or deeply savory. We look beyond a single heat level to understand the aroma, texture, and personality each one brings to food.",
    image: "/editorial/chapter-01-chili-character.webp",
    alt: "Sichuan peppercorns selected for their distinctive fragrance",
  },
  {
    number: "02",
    title: "The Details Make the Difference",
    subtitle: "Flavor is shaped by the way we cook.",
    description: "Roasting green chilies changes their character. Infusing aromatics into oil builds fragrance. Balancing ingredients gives each flavor room to shine. These are the thoughtful choices we keep learning from and refining.",
    image: "/editorial/chapter-02-roasted-green-chili.webp",
    alt: "Chilies, garlic, peppercorns and other ingredients used in cooking",
  },
  {
    number: "03",
    title: "Made for Your Table",
    subtitle: "A little more flavor, every day.",
    description: "Our inspiration comes from family cooking in Chongqing, where a good sauce could make a simple meal memorable. That spirit is what we hope to share: a spoonful that makes eggs, noodles, vegetables, or a family dinner feel special.",
    image: "/editorial/chapter-03-chili-noodles.webp",
    alt: "Noodles served with chili sauce as everyday meal inspiration",
  },
];

const journal = [
  {
    label: "CHILI / FLAVOR",
    title: "Not All Heat Tastes the Same",
    description: "A look at the aromas and flavors that make different chilies distinctive.",
  },
  {
    label: "TECHNIQUE / ROASTING",
    title: "Why Roast Green Chilies?",
    description: "How roasting changes aroma, texture, and the character of a sauce.",
  },
  {
    label: "INGREDIENTS / SICHUAN",
    title: "Chili and Sichuan Peppercorn: Two Different Stories",
    description: "Understanding the contrast between chili heat and Sichuan peppercorn's citrusy, tingling character.",
  },
];

export default function CraftPage() {
  return (
    <main className="min-h-screen bg-[#f6f0e6] text-[#251e19]">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <p className="text-xs uppercase tracking-[.24em] text-[#a33d2b]">San San / Our Craft</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-20">
          <div>
            <h1 className="font-display text-5xl leading-[1.06] sm:text-7xl">Chili,<br />Considered.</h1>
            <p className="mt-7 max-w-2xl font-display text-xl leading-relaxed text-[#51483f] sm:text-2xl">
              There’s more to chili than heat.
            </p>
          </div>
          <div className="border-t border-[#b8a89a] pt-6">
            <p className="max-w-lg text-base leading-8 text-[#65594e]">
              Every chili has its own character. Rooted in Chongqing’s rich food traditions, we explore how aroma, texture, thoughtful ingredients, and careful techniques come together. Because great chili isn’t simply about turning up the heat. It’s about bringing out the flavor.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ddd1c3] bg-[#eee5d9]">
        <div className="mx-auto max-w-7xl px-6 pb-5 pt-16 sm:px-8 sm:pt-24">
          <p className="text-xs uppercase tracking-[.24em] text-[#a33d2b]">Three chapters / Our approach</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">Good flavor begins with curiosity.</h2>
          <p className="mt-5 max-w-2xl leading-8 text-[#65594e]">We grew up with these flavors. We still find something new to appreciate in every ingredient and every meal.</p>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-24">
          {chapters.map((chapter, index) => (
            <article key={chapter.number} className="grid gap-8 border-t border-[#cbbbab] py-10 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] overflow-hidden bg-[#d9ccbc]">
                  <img src={chapter.image} alt={chapter.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-xs uppercase tracking-[.22em] text-[#a33d2b]">Chapter {chapter.number}</p>
                <h3 className="mt-5 max-w-xl font-display text-4xl leading-tight sm:text-5xl">{chapter.title}</h3>
                <p className="mt-6 font-display text-xl italic text-[#68574b]">{chapter.subtitle}</p>
                <p className="mt-5 max-w-lg text-base leading-8 text-[#65594e]">{chapter.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24">
        <p className="text-xs uppercase tracking-[.24em] text-[#a33d2b]">Beyond the Heat / The San San Journal</p>
        <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-4xl sm:text-5xl">There is always more to discover.</h2>
          <p className="max-w-sm leading-7 text-[#65594e]">Our ongoing exploration of chili, ingredients, and the craft of building flavor. Longer stories and guides are in development.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {journal.map((entry) => (
            <article key={entry.title} className="flex min-h-64 flex-col border border-[#d8cbbd] p-7 sm:p-8">
              <p className="text-[11px] uppercase tracking-[.18em] text-[#a33d2b]">{entry.label}</p>
              <h3 className="mt-8 font-display text-2xl leading-snug">{entry.title}</h3>
              <p className="mt-4 leading-7 text-[#65594e]">{entry.description}</p>
              <p className="mt-auto pt-7 text-xs uppercase tracking-[.16em] text-[#8b7c6d]">Coming soon</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#251e19] px-6 py-16 text-[#f6f0e6] sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[.24em] text-[#d6a18c]">One Spoon, Endless Ways.</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Made to bring more to the table.</h2>
          </div>
          <Link href="/shop" className="inline-flex min-h-12 items-center justify-center self-start border border-[#f6f0e6] px-7 text-sm transition-colors hover:bg-[#f6f0e6] hover:text-[#251e19]">Explore Our Sauces →</Link>
        </div>
      </section>
    </main>
  );
}
