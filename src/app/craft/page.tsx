import Link from "next/link";

export const metadata = {
  title: "The Art of Chili | Our Craft | San San",
  description: "Explore the ingredients, traditions, and thoughtful techniques behind San San's Chongqing-inspired chili flavors.",
};

const notes = [
  {
    number: "01",
    title: "More than heat",
    description: "Chili can be fragrant, smoky, earthy, bright, or deeply savory. We pay attention to those differences, not simply how hot something tastes.",
  },
  {
    number: "02",
    title: "Ingredients with character",
    description: "From chilies to Sichuan peppercorns and aromatics, every ingredient brings its own fragrance, texture, and personality to the table.",
  },
  {
    number: "03",
    title: "Technique makes the difference",
    description: "Roasting, infusing, and balancing ingredients can transform a familiar chili into something wonderfully layered. The small details matter.",
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
            <h1 className="font-display text-5xl leading-[1.06] sm:text-7xl">The Art<br />of Chili.</h1>
            <p className="mt-7 max-w-2xl font-display text-xl leading-relaxed text-[#51483f] sm:text-2xl">
              A lifelong appreciation for flavor, tradition, and the little details that make food memorable.
            </p>
          </div>
          <div className="border-t border-[#b8a89a] pt-6">
            <p className="max-w-lg text-base leading-8 text-[#65594e]">
              Rooted in the flavors of Chongqing, we believe chili is about so much more than heat. We are always exploring how ingredients, aroma, texture, and technique come together in a great spoonful.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ddd1c3] bg-[#eee5d9]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24">
          <p className="text-xs uppercase tracking-[.24em] text-[#a33d2b]">What we pay attention to</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">Good flavor begins with curiosity.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {notes.map((note) => (
              <article key={note.number} className="border-t border-[#b8a89a] pt-5">
                <p className="text-xs tracking-[.2em] text-[#a33d2b]">{note.number}</p>
                <h3 className="mt-5 font-display text-3xl">{note.title}</h3>
                <p className="mt-4 leading-7 text-[#65594e]">{note.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24">
        <p className="text-xs uppercase tracking-[.24em] text-[#a33d2b]">Beyond the Heat / The San San Journal</p>
        <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-4xl sm:text-5xl">There is always more to discover.</h2>
          <p className="max-w-sm leading-7 text-[#65594e]">Notes on chili, ingredients, and the craft of building flavor. Stories and guides are in development.</p>
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
