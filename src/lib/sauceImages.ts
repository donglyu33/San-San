import { PRODUCTS, canonicalProductName } from "./productNames";

const sauceImages: Record<string, string> = {
  "Soul Chili Oil": "/sauces/chongqing-chili-oil.webp",
  "Smoky Green Chili": "/sauces/fire-roasted-pepper.webp",
  "Slow-Simmered Beef Chili": "/sauces/signature-beef-chili.webp",
  "Hot Pot Base": "/sauces/hot-pot-base.webp",
  "Fire-Roasted Pepper Sauce": "/sauces/fire-roasted-pepper.webp",
  "Braise & Stew Sauce": "/sauces/braise-stew.webp",
  "Pickled Chili Sauce": "/sauces/pickled-chili.webp",
  "Signature Beef Chili": "/sauces/signature-beef-chili.webp",
  "Garlic Scallion Sauce": "/sauces/garlic-chili.webp",
  "Garlic Chili Sauce": "/sauces/garlic-chili.webp",
  "Chongqing Chill oil": "/sauces/chongqing-chili-oil.webp",
  "Chongqing Chili Oil": "/sauces/chongqing-chili-oil.webp",
  "Savory Shiitake Beef": "/sauces/shiitake-beef.webp",
  "Seasoned Minced Pork": "/sauces/seasoned-minced-pork.webp",
};

export function imageForSauce(name: string, customImageUrl: string | null) {
  return sauceImages[canonicalProductName(name)] || sauceImages[name] || customImageUrl || null;
}

// Keep customer-facing copy in sync with the approved garlic chili recipe until the admin record is renamed.
export function displaySauce(name: string, description: string) {
  if (name === "Garlic Scallion Sauce") {
    return {
      name: "Garlic Chili Sauce",
      description: "Minced garlic and sliced red chilies in savory oil. A flavorful topping for grilled seafood, dumplings, and noodles.",
    };
  }
  const canonical = canonicalProductName(name);
  if (canonical === PRODUCTS.beef.name) return { name: canonical, description: PRODUCTS.beef.description };
  if (canonical === PRODUCTS.green.name) return { name: canonical, description: PRODUCTS.green.description };
  return { name: canonical, description };
}
