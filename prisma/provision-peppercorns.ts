import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import { PEPPERCORNS } from "../src/lib/peppercorns";

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

async function main() {
  const maximum = await prisma.menuItem.aggregate({ _max: { sortOrder: true } });
  // Add missing SKUs only. Existing products, prices, orders and admin edits stay intact.
  const result = await prisma.menuItem.createMany({
    data: PEPPERCORNS.map((product, index) => ({
      id: product.id,
      name: product.name,
      description: `${product.description} · ${product.netWeight}`,
      priceCents: product.priceCents,
      category: "Ingredients & Spices",
      imageUrl: product.imageUrl,
      available: true,
      sortOrder: (maximum._max.sortOrder ?? 0) + index + 1,
    })),
    skipDuplicates: true,
  });
  console.log(`Added ${result.count} missing peppercorn products.`);
}

main()
  .catch(error => {
    console.error(error instanceof Error ? error.message : "Product provisioning failed");
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
