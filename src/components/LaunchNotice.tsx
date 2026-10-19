import Link from "next/link";

export function LaunchNotice() {
  return <section className="mx-auto max-w-xl px-6 py-20 text-center">
    <p className="text-xs uppercase tracking-[.2em] text-brand">Coming Soon</p>
    <h1 className="mt-5 font-display text-4xl">A new chapter is on its way.</h1>
    <p className="mt-6 text-sm leading-7 text-foreground/70">Ordering is paused while we confirm our launch details. Previously saved cart items cannot be purchased at this time.</p>
    <Link href="/ingredients-spices" className="mt-8 inline-flex min-h-12 items-center border border-foreground px-6 text-sm">Explore Ingredients &amp; Spices →</Link>
  </section>;
}
