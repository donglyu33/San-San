export const PEPPERCORNS = [
  {
    id: "san-san-green-sichuan-peppercorns",
    sku: "SS-SPICE-GREEN",
    name: "Green Sichuan Peppercorns",
    description: "Bright citrus aroma with a lively, tingling finish.",
    imageUrl: "/spices/green-sichuan-peppercorns.webp",
    priceCents: null,
  },
  {
    id: "san-san-red-sichuan-peppercorns",
    sku: "SS-SPICE-RED",
    name: "Red Sichuan Peppercorns",
    description: "Warm floral aroma with a lingering, tingling finish.",
    imageUrl: "/spices/red-sichuan-peppercorns.webp",
    priceCents: null,
  },
] as const;

export function isSpiceCategory(category: string) {
  return /ingredients?|spices?/i.test(category);
}
