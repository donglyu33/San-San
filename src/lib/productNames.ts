// User-locked product names, finalized 2026-10-21. Do not rename.
export const PRODUCTS = {
  beef: {
    name: "Slow-Simmered Beef Chili",
    description: "Finely minced beef in chili oil — spoon it on everything.",
  },
  green: {
    name: "Smoky Green Chili",
    shortDescription: "Chopped Roasted Green Chilies with Garlic & green Sichuan peppercorns",
    description: "Made with chopped green chili, garlic, ginger, and green Sichuan peppercorns. Smoky, aromatic, and full of texture, with a distinctive Sichuan peppercorn tingle.",
  },
  flakes: { name: "Toasted Chili Flakes" },
  oil: { name: "Soul Chili Oil" },
} as const;

const aliases: Record<string, string> = {
  "Savory Beef Chili": PRODUCTS.beef.name,
  "Signature Beef Chili": PRODUCTS.beef.name,
  "Slow-Simmered Beef Chili": PRODUCTS.beef.name,
  "Smoky Green Chili Oil": PRODUCTS.green.name,
  "Smoky Green Chili": PRODUCTS.green.name,
  "Fire-Roasted Pepper Sauce": PRODUCTS.green.name,
  "Chongqing Chill oil": PRODUCTS.oil.name,
  "Chongqing Chili Oil": PRODUCTS.oil.name,
  "Soul Chili Oil": PRODUCTS.oil.name,
  "Chili Flakes": PRODUCTS.flakes.name,
  "Toasted Chili Flakes": PRODUCTS.flakes.name,
};

export function canonicalProductName(name: string) {
  return aliases[name] ?? name;
}
