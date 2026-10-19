import { spiceNotificationHref } from "@/lib/catalog";

type Props = { id: string; name: string; description: string; priceCents: number; imageUrl?: string | null };

export function MenuItemCard({ name, description, imageUrl }: Props) {
  return <article className="flex flex-col overflow-hidden border border-brand-light bg-background">
    {imageUrl && (
      // eslint-disable-next-line @next/next/no-img-element -- existing admin-supplied product imagery
      <img src={imageUrl} alt={name} className="aspect-[4/3] w-full object-cover" loading="lazy" />
    )}
    <div className="flex flex-1 flex-col p-6">
      <p className="text-[10px] uppercase tracking-[.2em] text-brand">Coming Soon</p>
      <h3 className="mt-3 font-display text-xl">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-foreground/65">{description}</p>
      <a href={spiceNotificationHref(name)} aria-label={`Request launch updates by email for ${name}`} className="mt-5 inline-flex min-h-11 items-center self-start border-b border-brand text-xs uppercase tracking-widest text-brand">Notify Me ↗</a>
      <p className="mt-3 text-xs text-foreground/60">Opens your email app to request launch updates.</p>
    </div>
  </article>;
}
