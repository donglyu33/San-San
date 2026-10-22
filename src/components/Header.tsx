"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
export function Header() {
  const { itemCount } = useCart();
  return <header className="reference-header"><div className="reference-nav"><Link href="/" className="reference-logo" aria-label="San San home">SAN SAN <svg aria-hidden="true" viewBox="0 0 40 46" width="24" height="28" className="ml-2 inline-block align-middle text-[#aa3826]" fill="none"><path d="M3 3H37V43H3Z" stroke="currentColor" strokeWidth="3"/><path d="M10 13H30M12 23H28M10 33H30" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square"/></svg></Link><nav aria-label="Main navigation"><Link href="/shop">Shop</Link><Link href="/craft">Our Craft</Link><Link href="/recipes">Recipes</Link><Link href="/story">Our Story</Link><a href="mailto:sansanfoods33@gmail.com">Contact</a></nav><div className="reference-actions"><Link href="/track">Orders</Link><Link href="/cart">Cart{itemCount > 0 ? ` (${itemCount})` : ""}</Link></div></div></header>;
}
