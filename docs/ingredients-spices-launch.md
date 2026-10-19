# Ingredients & Spices launch notes

## Current behavior

- `/ingredients-spices` is a static, database-independent preview of five products, defined in `src/lib/catalog.ts`. It has no prices, inventory, pack sizes, sale IDs, origin, testing or certification claims.
- Shared category definitions drive the category links. Home and shop queries restrict legacy `MenuItem` records to the existing `Sauces` category instead of displaying every available menu item as a sauce. Confirm production category values before launch; unknown categories are intentionally excluded.
- New previews are not inserted into `MenuItem`: that model requires `priceCents` and defaults `available` to true. No schema migration, seed, database write or destructive reset was performed. Neither seed script should be run to add this collection.
- All storefront ordering is paused, including existing sauces, until launch readiness is confirmed. Cards hide existing database prices and offer email interest links. Cart and checkout show a launch notice. The checkout API rejects requests with 409 before querying products, writing orders or calling Stripe, including previously saved carts.
- Notify Me is a prefilled mailto link to the existing business email. The visitor must send the email; there is no automatic subscription or notification service.
- No confirmed spice photos were present. Typography is used instead of unrelated sauce images or speculative packaging.

## Decisions before accepting orders

Confirm which products can launch, including whether any sauces can resume sales; confirm pricing, inventory, packaging sizes, supplier/origin details, ingredient and allergen labeling, photographs, and applicable production/sales requirements. This collection does not imply an exemption from permits or licensing.

When enabling sales, implement explicit per-product launch approval and category association in the database and admin UI, rather than relying only on free-text categories or `available`. Support missing prices for draft products and validate approval, positive confirmed prices, and availability on the server. Replace the preview card with a purchase-enabled component only for approved products. The global pause in `STOREFRONT_ORDERS_ENABLED` alone is not a complete launch implementation.

## Verification

- TypeScript check passed.
- Production application build passed using `next build --webpack`, with placeholder local database/Stripe configuration and no database mutation. Default Turbopack encountered an environment subprocess failure; restricted-network build also could not fetch existing Google Fonts.
- Changed-file ESLint: no errors; one pre-existing homepage image optimization warning.
- Browser inspected new category at desktop and 390px widths; all five products and email links present, no purchase buttons. Direct checkout displays pause notice.
- HTTP checkout POST returned 409 with the pause message using an old-product ID; no database or Stripe connection was required.
- Live database contents were not accessible in this workspace. Database-backed homepage/shop rendering and production deployment require verification in the deployment environment.

The existing `build` package script runs `prisma db push --accept-data-loss`. Validation deliberately used the Next.js build command directly to avoid changing a database. Review that deployment script separately before a production rollout.
