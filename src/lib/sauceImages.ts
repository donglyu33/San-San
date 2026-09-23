const sauceImages: Record<string, string> = {
  "Hot Pot Base": "/sauces/hot-pot-base.webp",
  "Fire-Roasted Pepper Sauce": "/sauces/fire-roasted-pepper.webp",
  "Braise & Stew Sauce": "/sauces/braise-stew.webp",
  "Pickled Chili Sauce": "/sauces/pickled-chili.webp",
  "Signature Beef Chili": "/sauces/signature-beef-chili.webp",
  "Garlic Scallion Sauce": "/sauces/garlic-chili.webp",
  "Chongqing Chill oil": "/sauces/chongqing-chili-oil.webp",
  "Savory Shiitake Beef": "/sauces/shiitake-beef.webp",
  "Seasoned Minced Pork": "/sauces/seasoned-minced-pork.webp",
};

export function imageForSauce(name: string, customImageUrl: string | null) {
  return customImageUrl || sauceImages[name] || null;
}
