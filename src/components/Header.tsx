"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function Header() {
  const { itemCount } = useCart();
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-[#f3eee5]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-7 items-center justify-center border border-brand text-lg font-display text-brand">三</span>
          <span>
            <span className="block font-display text-lg tracking-[.28em]">SAN SAN</span>
            <span className="block text-[8px] uppercase tracking-[.3em] text-foreground/45">Chongqing · New York / New Jersey</span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-[10px] font-medium uppercase tracking-[.2em] sm:gap-8">
          <Link href="/#sauces" className="hidden hover:text-brand sm:block">Sauces</Link>
          <Link href="/#story" className="hidden hover:text-brand sm:block">Our story</Link>
          <Link href="/track" className="hidden hover:text-brand md:block">Orders</Link>
          <Link href="/cart" className="border border-foreground px-4 py-2 transition hover:bg-foreground hover:text-background">
            Cart{itemCount > 0 ? ` · ${itemCount}` : ""}
          </Link>
        </nav>
      </div>
    </header>
  );
}
