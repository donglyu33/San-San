export function Footer() {
  return (
    <footer className="bg-[#171615] text-[#f3eee5]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 sm:px-8">
        <div>
          <p className="font-display text-3xl tracking-[.18em]">SAN SAN</p>
          <p className="mt-3 max-w-sm font-display text-xl italic text-white/70">One Spoon, Endless Ways.</p>
          <nav aria-label="San San social media" className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a className="inline-flex min-h-11 items-center underline-offset-4 hover:underline focus-visible:outline" href="https://www.instagram.com/sansan.sauce/" target="_blank" rel="noopener noreferrer">Instagram<span className="sr-only"> (opens in a new tab)</span></a>
            <a className="inline-flex min-h-11 items-center underline-offset-4 hover:underline focus-visible:outline" href="https://facebook.com/profile.php?id=100013677274054" target="_blank" rel="noopener noreferrer">Facebook<span className="sr-only"> (opens in a new tab)</span></a>
            <a className="inline-flex min-h-11 items-center underline-offset-4 hover:underline focus-visible:outline" href="https://xhslink.cn/m/Ax1Q7D5cXai" target="_blank" rel="noopener noreferrer">RedNote<span className="sr-only"> (opens in a new tab)</span></a>
          </nav>
          <a href="mailto:sansanfoods33@gmail.com" className="mt-2 inline-flex min-h-11 items-center text-sm underline-offset-4 hover:underline focus-visible:outline">sansanfoods33@gmail.com</a>
        </div>
        <div className="sm:text-right">
          <p className="text-[10px] uppercase tracking-[.25em] text-white/45">Rooted in Chongqing · Handcrafted in small batches</p>
          <p className="mt-5 text-sm text-white/65">Chinese flavors, thoughtfully crafted for everyday tables.</p>
          <a href="/admin/login" className="mt-8 inline-block text-[9px] uppercase tracking-[.2em] text-white/30 hover:text-white">Staff login</a>
        </div>
      </div>
    </footer>
  );
}
