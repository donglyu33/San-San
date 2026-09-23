"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function Header() {
  const { itemCount } = useCart();
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-[#f6f0e6]/95 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 py-4 sm:px-8">
        <nav className="hidden items-center gap-7 text-[9px] uppercase tracking-[.22em] md:flex">
          <Link href="/shop" className="hover:text-brand">Shop</Link>
          <Link href="/story" className="hover:text-brand">Our story</Link>
          <Link href="/recipes" className="hover:text-brand">Recipes</Link>
        </nav>
        <Link href="/" className="col-start-1 flex items-center gap-3 md:col-start-2">
          <span className="flex h-10 w-8 items-center justify-center border border-brand text-xl font-display text-brand">三</span>
          <span><span className="block font-display text-lg tracking-[.3em]">SAN SAN</span><span className="block text-[7px] uppercase tracking-[.32em] text-foreground/40">Chongqing · New York</span></span>
        </Link>
        <nav className="col-start-3 flex items-center justify-end gap-5 text-[9px] uppercase tracking-[.2em]">
          <Link href="/track" className="hidden hover:text-brand sm:block">Orders</Link>
          <Link href="/cart" className="hover:text-brand">Cart{itemCount > 0 ? ` · ${itemCount}` : ""}</Link>
        </nav>
      </div>
      <nav aria-label="Mobile navigation" className="flex justify-center gap-7 border-t border-black/10 px-4 py-3 text-xs uppercase tracking-widest md:hidden">
        <Link href="/shop" className="hover:text-brand">Shop</Link>
        <Link href="/story" className="hover:text-brand">Our story</Link>
        <Link href="/recipes" className="hover:text-brand">Recipes</Link>
        <Link href="/track" className="hover:text-brand">Orders</Link>
      </nav>
    </header>
  );
}
