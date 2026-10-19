import Link from "next/link";
import { CATEGORIES } from "@/lib/catalog";

export function CategoryNav({ active }: { active: keyof typeof CATEGORIES }) {
  return <nav aria-label="Product categories" className="mt-8 flex flex-wrap justify-center gap-3">
    {Object.entries(CATEGORIES).map(([key, category]) => <Link key={key} href={category.href} aria-current={key === active ? "page" : undefined} className={`inline-flex min-h-11 items-center border px-5 text-xs tracking-wide ${key === active ? "border-foreground bg-foreground text-background" : "border-black/20 hover:border-brand hover:text-brand"}`}>{category.label}</Link>)}
  </nav>;
}
