import Link from "next/link";
import { RecipeCarousel } from "@/components/RecipeCarousel";

const sauces = [
  { name: "Soul Chili Oil", copy: "Fragrant, bold, and deeply satisfying.", image: "/editorial/soul-jar-v2.webp" },
  { name: "Smoky Green Chili Oil", copy: "Roasted green chilies with garlic and green Sichuan peppercorns.", image: "/editorial/green-jar-v2.webp" },
  { name: "Savory Beef Chili", copy: "Rich, savory, and full of texture.", image: "/editorial/beef-jar-v2.webp" },
];
const recipes = [
  ["Fish", "/serving/green-pepper-fish.png"],
  ["Beef", "/serving/green-pepper-beef.png"],
  ["Eggs & toast", "/serving/eggs-and-toast.webp"],
  ["Roasted squash", "/serving/roasted-squash.webp"],
  ["Noodles", "/serving/sauce-noodles.webp"],
];

export default function HomePage() {
  return <div className="reference-home">
    <section className="reference-hero">
      <img className="section-photo" src="/editorial/hero-v2.webp" alt="A spoon drizzling chili oil over burrata and vegetables" fetchPriority="high" />
      <div className="hero-copy"><p className="eyebrow">Sichuan flavors, everyday meals</p><h1>One Spoon,<br />Endless Ways.</h1><p className="hero-description">Bold flavors, thoughtfully crafted<br className="hidden sm:block" /> for modern kitchens.</p><Link className="brand-button" href="/shop">Shop Our Sauces <span aria-hidden="true">→</span></Link></div>
    </section>

    <section className="reference-container explore-section">
      <div className="section-heading"><div><p className="eyebrow">02 / Explore</p><h2>Two Ways to<br />Bring the Flavor Home.</h2></div><p>From our signature sauces to the carefully<br className="hidden lg:block" /> selected ingredients behind them.</p></div>
      <div className="explore-grid">
        <Link href="/shop" className="photo-card"><img loading="lazy" decoding="async" src="/editorial/explore-v2.webp" alt="Chili oil poured into a ceramic bowl" /><span>Signature Sauces →</span></Link>
        <Link href="/shop#ingredients-spices" className="photo-card"><img loading="lazy" decoding="async" src="/editorial/peppercorns-approved.jpg" alt="Dried red and fresh green Sichuan peppercorns on a slate board" /><span>Ingredients &amp; Spices →</span></Link>
      </div>
    </section>

    <section className="reference-container signature-section">
      <div className="section-heading"><div><p className="eyebrow">03 / Our Signature Sauces</p><h2>A Little Jar.<br />A Lot of Possibilities.</h2></div><div><p>Distinct flavors, real ingredients, and the taste<br className="hidden lg:block" /> of Chongqing in every jar.</p><Link className="text-link" href="/shop">Shop All →</Link></div></div>
      <div className="signature-grid">{sauces.map(sauce => <Link className="sauce-card" href="/shop" key={sauce.name}><div className="sauce-photo"><img loading="lazy" decoding="async" src={sauce.image} alt={`${sauce.name} packaging concept`} /></div><h3>{sauce.name}</h3><p>{sauce.copy}</p><span className="text-link">View →</span></Link>)}</div>
      <p className="concept-note">Packaging shown is a design concept.</p>
    </section>

    <section className="ingredient-banner">
      <img loading="lazy" decoding="async" className="section-photo" src="/editorial/ingredients-v2.webp" alt="Chilies, garlic, peppercorns and olive oil arranged on wood" />
      <div className="ingredient-copy"><p className="eyebrow">04 / Good Flavor Begins with Good Ingredients</p><h2>Thoughtful Ingredients.<br />Extraordinary Flavor.</h2><p>Chilies, Sichuan peppercorns, olive oil and carefully selected ingredients create rich, layered flavors you can taste.</p><Link className="brand-button" href="/craft">Our Ingredients →</Link></div>
    </section>

    <section className="reference-container recipe-strip">
      <div className="section-heading recipe-intro">
        <div><p className="eyebrow">05 / Everyday Food, Elevated</p><h2>Everyday Food,<br />Elevated.</h2></div>
        <div><p>From morning eggs to late-night noodles, our sauces add bold flavor to everyday meals.</p><Link className="text-link" href="/recipes">Explore Recipes →</Link></div>
      </div>
      <RecipeCarousel recipes={recipes.map(([name, image]) => ({ name, image }))} />
    </section>

    <section className="story-strip"><img loading="lazy" decoding="async" src="/editorial/table-v2.webp" alt="Dishes shared around a sunlit dining table" /><div className="story-copy"><p className="eyebrow">06 / Our Story</p><h2>From Our Family<br />Kitchen to Yours.</h2><p>Inspired by generations of family cooking in Chongqing, SAN SAN brings rich, layered flavors to everyday meals. Made for real life. Crafted for great flavor.</p><Link className="brand-button" href="/story">Our Story →</Link></div></section>

    <section className="inspiration-banner"><img loading="lazy" decoding="async" className="section-photo" src="/editorial/explore-v2.webp" alt="Rich chili oil with visible chili texture" /><div><p className="eyebrow">Stay in Touch</p><h2>Good Food, More Inspiration.</h2><p>Spoon It. Toss It. Dip It. Discover your next favorite way.</p><a className="brand-button" href="mailto:sansanfoods33@gmail.com">Get in Touch →</a></div></section>
  </div>;
}
