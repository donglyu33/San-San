"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatCents } from "@/lib/money";

type Props = {
  id: string;
  name: string;
  description: string;
  priceCents: number;
  imageUrl?: string | null;
  imageFit?: "cover" | "contain";
};

export function MenuItemCard({ id, name, description, priceCents, imageUrl, imageFit = "cover" }: Props) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const images = imageUrl
    ? [imageUrl, ...(name === "Hot Pot Base" ? ["/sauces/hot-pot-base-serving.webp"] : [])]
    : [];


  function handleAdd() {
    addItem({ menuItemId: id, name, priceCents });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  }

  return (
    <div className="group flex flex-col justify-between overflow-hidden border border-brand-light bg-background transition hover:border-foreground/30">
      {images.length > 0 && (
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element -- arbitrary admin-supplied URLs */}
          <img src={images[selectedImage] || images[0]} alt={selectedImage === 0 ? name : `${name} serving suggestion`} className={`w-full ${imageFit === "contain" ? "aspect-square object-contain" : "aspect-[4/3] object-cover"}`} loading="lazy" />
          {images.length > 1 && (
            <div className="flex gap-2 px-4 pt-3" role="group" aria-label={`${name} product photos`}>
              {images.map((src, index) => (
                <button key={src} type="button" onClick={() => setSelectedImage(index)} aria-label={`View ${name} photo ${index + 1}`} aria-pressed={selectedImage === index} className={`min-h-11 w-16 overflow-hidden border-2 focus-visible:outline-2 focus-visible:outline-offset-2 ${selectedImage === index ? "border-foreground" : "border-transparent"}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- product photo thumbnail */}
                  <img src={src} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg text-foreground">{name}</h3>
            <span className="whitespace-nowrap text-accent">{formatCents(priceCents)}</span>
          </div>
          <p className="mt-2 text-sm text-foreground/60">{description}</p>
        </div>
        <button
          onClick={handleAdd}
          className="mt-5 min-h-11 self-start border-b border-foreground/30 pb-0.5 text-xs font-medium uppercase tracking-widest text-foreground transition group-hover:border-foreground"
        >
          {justAdded ? "Added" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
