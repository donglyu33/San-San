export const HOMEPAGE_SERVING_IDEAS = [
  {
    id: "fish",
    name: "Fish",
    image: "/serving/green-pepper-fish.png",
    description: "Spoon Smoky Green Chili Oil over cooked fish for a bright, savory finish.",
  },
  {
    id: "beef",
    name: "Beef",
    image: "/serving/green-pepper-beef.png",
    description: "Finish sliced beef with Smoky Green Chili Oil for roasted chili flavor and a little extra richness.",
  },
  {
    id: "eggs-toast",
    name: "Eggs & toast",
    image: "/serving/eggs-and-toast.webp",
    description: "A spoonful over soft eggs and toast adds savory depth and a gentle kick.",
  },
  {
    id: "roasted-squash",
    name: "Roasted squash",
    image: "/serving/roasted-squash.webp",
    description: "Spoon over roasted squash just before serving for a warm, savory finish.",
  },
  {
    id: "noodles",
    name: "Noodles",
    image: "/serving/sauce-noodles.webp",
    description: "Finish noodles or pasta with San San for warmth, richness, and texture.",
  },
] as const;

export const SERVING_IDEAS = [
  ...HOMEPAGE_SERVING_IDEAS,
  {
    id: "rice",
    name: "Rice",
    image: null,
    description: "Add a little Savory Beef Chili to a warm bowl of rice and let the sauce take the lead.",
  },
] as const;
