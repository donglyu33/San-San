import Image from "next/image";
import Link from "next/link";
const socialLinks = [
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/sansan.sauce/" },
  { name: "Facebook", icon: "facebook", href: "https://facebook.com/profile.php?id=100013677274054" },
  { name: "小红书 / RedNote", icon: "xiaohongshu", href: "https://xhslink.cn/m/Ax1Q7D5cXai" },
];
export function Footer() {
  return <footer className="bg-[#f5f2ec] text-[#241f1a]"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 py-10 sm:px-12"><div><Link href="/" className="reference-logo">SAN SAN <span aria-hidden="true">☰</span></Link><p className="mt-3 font-serif text-sm">One Spoon, Endless Ways.</p><p lang="zh-Hans" className="mt-2 text-xs text-[#756a5e]">一勺好味，百种可能。</p></div><nav aria-label="Footer navigation" className="flex flex-wrap gap-5 font-serif text-sm"><Link href="/shop">Shop</Link><Link href="/craft">Our Craft</Link><Link href="/recipes">Recipes</Link><Link href="/story">Our Story</Link><a href="mailto:sansanfoods33@gmail.com">Contact</a></nav><nav aria-label="Social media" className="flex gap-3">{socialLinks.map(({ name,icon,href }) => <a key={icon} href={href} aria-label={`${name} (opens in a new tab)`} title={name} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center hover:opacity-60"><Image src={`/social/${icon}.svg`} alt="" width={22} height={22} /></a>)}</nav></div><div className="mx-auto flex max-w-7xl justify-between px-6 pb-5 text-[10px] text-[#756a5e] sm:px-12"><span>Rooted in tradition. Made for everyday life.</span><Link href="/admin/login">Staff login</Link></div></footer>;
}
