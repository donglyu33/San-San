import Image from "next/image";
import Link from "next/link";

export default function StoryPage() {
  return (
    <article className="bg-[#f6f0e6]">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        <header className="mb-8 sm:mb-12">
          <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-brand">Our story</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
            It Started With Two Bowls.
          </h1>
        </header>

        <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <figure>
            <Image
              src="/story/two-bowls.svg"
              alt="A father and young daughter season two bowls of noodles at a table in a small Chongqing restaurant."
              width={760}
              height={620}
              className="h-auto w-full"
              unoptimized
            />
            <figcaption className="mt-3 text-xs tracking-wide text-foreground/65">
              Illustration inspired by the founder’s childhood memories in Chongqing.
            </figcaption>
          </figure>

          <div>
            <div className="max-w-[52ch] space-y-5 font-display text-lg leading-relaxed text-foreground/80 sm:text-xl">
              <p>Some of my earliest memories are of standing beside my father in his restaurant in Chongqing. I can still hear the clatter of porcelain and smell the rich aroma of chili oil. It was there that I first learned the art of seasoning from him.</p>
              <p>He had two bowls, one for him and one for me.</p>
              <p>In front of us was an array of seasonings. He would add one ingredient, and I would follow — salt, soy sauce, ground Sichuan pepper, red chili oil, and so much more.</p>
              <p>Whenever we tried something new, he&apos;d remind me, <em>“Xiān cháng yí xià.”</em> Taste it first on its own.</p>
              <p>He taught me to appreciate what each ingredient brought to the bowl, and to discover flavor for myself.</p>
              <p>Years later, I began experimenting in my own kitchen, bringing together the flavors I grew up with and the ones I discovered along the way.</p>
              <p>And through it all, I kept coming back to my father&apos;s lesson: <strong>taste first, stay curious, and trust your own palate.</strong></p>
              <p>That&apos;s how SAN SAN came to life.</p>
              <p>San San is what my family has called me since I was little. To me, it means home.</p>
              <p>But home isn&apos;t something you have to leave behind as you discover the world. It&apos;s something you carry with you, and something that grows with every new experience.</p>
              <p>Every jar begins with the flavors of Chongqing, shaped by the places I&apos;ve been, the people I&apos;ve met, and everything I&apos;ve learned to love along the way. And now, I&apos;m excited to share that with you.</p>
              <p><strong>I still have my bowl, and the other bowl is yours.</strong></p>
              <p><em>Taste it first. Then make it your own.</em></p>
              <p className="text-brand"><strong>One Spoon, Endless Ways.</strong></p>
            </div>

            <Link href="/shop" className="mt-8 inline-flex min-h-11 items-center border border-brand px-6 py-3 text-[10px] uppercase tracking-[.2em] text-brand">
              Shop San San →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
