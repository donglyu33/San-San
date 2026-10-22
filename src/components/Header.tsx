"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
export function Header() {
  const { itemCount } = useCart();
  return <header className="reference-header"><div className="reference-nav"><Link href="/" className="reference-logo" aria-label="San San home">SAN SAN <span aria-hidden="true">☰</span></Link><nav aria-label="Main navigation"><Link href="/shop">Shop</Link><Link href="/craft">Our Craft</Link><Link href="/recipes">Recipes</Link><Link href="/story">Our Story</Link><a href="mailto:sansanfoods33@gmail.com">Contact</a></nav><div className="reference-actions"><Link href="/track">Orders</Link><Link href="/cart">Cart{itemCount > 0 ? ` (${itemCount})` : ""}</Link></div></div></header>;
}
