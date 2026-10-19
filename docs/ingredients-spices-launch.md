# Ingredients & Spices addition

This is an additional collection alongside the existing sauce storefront, not a replacement or business pivot.

- Adds `/ingredients-spices`, a homepage entry, navigation and footer links, and shared category navigation.
- Five bilingual preview products are defined in `src/lib/catalog.ts`. Only these new products use Coming Soon and email Notify Me.
- Existing sauce cards, prices, cart, checkout API and payment flow retain their previous behavior. Existing database product queries are unchanged.
- Preview products have no database sale IDs, prices, inventory, packaging sizes, origin or certification claims. They cannot be added to the cart or purchased.
- Notify Me opens a prefilled email to the existing business address; the visitor must send it. No automatic signup or notification backend is implied.
- No confirmed spice photographs were available; the new collection uses typography instead of sauce images or speculative packaging.
- No database schema, product records or seeds were changed. The existing MenuItem model requires a price and defaults available to true, so unconfirmed previews are kept separate.

Before launching the new collection, confirm prices, pack sizes, supply, ingredient/allergen labeling, applicable permissions and product photography. The new line is not represented as exempt from licensing requirements. Confirmed products can later be integrated with explicit per-product approval and category handling in the database and checkout.

Validation: the initial additive page passed TypeScript and a production Webpack build, and was inspected at desktop and 390px widths. After scope correction, TypeScript and diff checks were repeated; the existing sales components and API were verified identical to the main-branch baseline. Production database contents and database-backed homepage/shop rendering were not accessible locally. No production deployment was performed.
