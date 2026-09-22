export function Footer() {
  return (
    <footer className="bg-[#171615] text-[#f3eee5]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 sm:px-8">
        <div>
          <p className="font-display text-3xl tracking-[.18em]">SAN SAN</p>
          <p className="mt-3 max-w-sm font-display text-xl italic text-white/70">A more delicious life, one spoonful at a time.</p>
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
