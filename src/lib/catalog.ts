// Preview products deliberately have no price, stock, or purchasable database ID.
// Keep launch approval separate from MenuItem.available and free-text categories.
export const CATEGORIES = {
  sauces: { label: "Our Sauces", href: "/shop", databaseCategory: "Sauces" },
  spices: { label: "Ingredients & Spices", href: "/ingredients-spices" },
} as const;

export const SPICE_PREVIEWS = [
  { slug: "sichuan-green-peppercorn", name: "Sichuan Green Peppercorn", chinese: "青花椒", type: "Peppercorns" },
  { slug: "da-hong-pao-sichuan-peppercorn", name: "Da Hong Pao Sichuan Peppercorn", chinese: "大红袍花椒", type: "Peppercorns" },
  { slug: "er-jing-tiao-dried-chili", name: "Er Jing Tiao Dried Chili", chinese: "二荆条干辣椒", type: "Dried chilies" },
  { slug: "zi-dan-tou-dried-chili", name: "Zi Dan Tou Dried Chili", chinese: "子弹头干辣椒", type: "Dried chilies" },
  { slug: "chinese-dry-dipping-seasoning", name: "Chinese Dry Dipping Seasoning", chinese: "干蘸料", type: "Seasonings" },
] as const;

export function spiceNotificationHref(name: string) {
  return `mailto:sansanfoods33@gmail.com?subject=${encodeURIComponent(`Notify me: ${name}`)}&body=${encodeURIComponent(`Hello San San,\n\nPlease email me when ${name} is available.\n\nThank you!`)}`;
}
