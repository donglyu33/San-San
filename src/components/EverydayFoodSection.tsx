import Link from "next/link";

const replacements = [
  { src: "/serving/green-pepper-fish.png", label: "FISH", alt: "Fish with green pepper chili relish", left: 490, width: 276, position: "50% 65%" },
  { src: "/serving/green-pepper-beef.png", label: "BEEF", alt: "Beef with green pepper and garlic sauce", left: 775, width: 300, position: "50% 50%" },
  { src: "/serving/eggs-and-toast.webp", label: "EGGS & TOAST", alt: "Soft eggs with sauce and bread", left: 1084, width: 301, position: "48% 55%" },
  { src: "/serving/roasted-squash.webp", label: "ROASTED SQUASH", alt: "Roasted squash with sauce", left: 1395, width: 315, position: "50% 50%" },
  { src: "/serving/sauce-noodles.webp", label: "NOODLES", alt: "Noodles topped with sauce and greens", left: 1721, width: 315, position: "50% 50%" },
];

export function EverydayFoodSection() {
  return (
    <section id="recipes" className="relative w-full">
      <div className="relative">
      {/* eslint-disable-next-line @next/next/no-img-element -- retained full-width artwork */}
      <img src="/4.%20Everyday%20Food,%20Elevated.png" alt="Everyday Food, Elevated. From morning eggs to late-night noodles, our sauces add bold flavor to everyday meals. Fish, beef, eggs and toast, roasted squash and noodles serving ideas." width={2079} height={756} loading="lazy" className="block h-auto w-full" />
      {replacements.map(photo => (
        <figure key={photo.src} className="absolute overflow-hidden" style={{ left: `${photo.left / 2079 * 100}%`, top: `${64 / 756 * 100}%`, width: `${photo.width / 2079 * 100}%`, height: `${602 / 756 * 100}%`, margin: 0, background: "#171615" }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- owner-provided serving photographs */}
          <img src={photo.src} alt={photo.alt} loading="lazy" className="h-full w-full object-cover" style={{ objectPosition: photo.position }} />
          <figcaption className="absolute inset-x-0 bottom-0 text-[#f3eee5]" style={{ padding: "13% 9% 10%", background: "linear-gradient(transparent, rgba(0,0,0,.9) 45%)", fontFamily: "Georgia, serif", fontSize: "clamp(7px, 1.3vw, 27px)", lineHeight: 1.2 }}>
            {photo.label}
            <span aria-hidden="true" style={{ display: "block", width: "20%", height: 2, marginTop: "8%", background: "#f3eee5" }} />
          </figcaption>
        </figure>
      ))}
      <Link href="/recipes" aria-label="Explore recipes" className="absolute left-[2.5%] top-[58.8%] z-10 hidden h-[7.5%] w-[14.1%] outline-offset-2 hover:outline hover:outline-2 hover:outline-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand sm:block"><span className="sr-only">Explore recipes</span></Link>
      </div>
      <div className="bg-[#f6f0e6] px-4 py-3 sm:hidden"><Link href="/recipes" className="inline-flex min-h-11 items-center border border-brand px-4 text-sm text-brand">Explore recipes →</Link></div>
    </section>
  );
}
