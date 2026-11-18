# llm.md — Rhinocult Dropshipping brief

Self-contained context for any LLM that continues, rebuilds or ports this website (for example to
Next.js, Webflow, Framer, WordPress or a Shopify theme). Repo-level coding rules are in `AGENTS.md`.
Product facts come from the **RhinoCult Catalogue 2027** (owner-supplied PDF).

## 1. Business

- **Name:** Rhinocult Dropshipping (a Rhino Cult venture). Parent brand: https://rhinocult.com
  (Indian streetwear label, founded 2023 by four friends; tagline "BE BOLD. BE YOU.", #OwnYourStyle).
- **Offer:** Custom clothing manufacturing + fulfilment for people who want their own clothing brand.
  Products are made under the client's label and shipped to the client's customers.
- **Market:** India (ships PAN India). Audience: new and growing streetwear, creator and merch brands.
- **Primary actions:** WhatsApp chat and Book a Call. No ecommerce on this site.

## 2. Product catalogue (2027) — source of truth for the collection section

5 product families, 35 colours. All fits unisex. Hex values are digital approximations.

| Product | Fabric | Fit & sizes | Colours |
| --- | --- | --- | --- |
| Oversized T-Shirts | 240 GSM polycotton terry | Oversize fit · XS–XL | 14 |
| Sweatshirts | 330 GSM polycotton fleece | Regular fit · S–XXL | 4 |
| Hoodies (essential, graphic, embroidered) | 330 GSM polycotton fleece | Regular fit · S–XXL | 7 |
| Tank Tops | 240 GSM cotton terry | Muscle-tee cut, regular fit | 7 (3 acid wash + 4 solid) |
| Baby Tops | 240 GSM cotton terry | Cropped | 3 (all acid wash) |
| Cut & Sew | Client's choice | Client's pattern | — (fully custom) |

Colours (name `hex`):

- **Oversized T-Shirts:** Black `#1B1B1E`, White `#F6F6F2`, Coffee `#6F4E37`, Lavender `#C5BBE3`,
  Light Skin `#EBC7A3`, Medium Pink `#E58EAE`, Navy Blue `#232C5B`, Grey `#8E9196`, Red `#BE2830`,
  Orange `#E86A1C`, Half White `#F0EAD9`, Wine Red `#742F38`, CGY `#4B4B52`, Dark Pink `#C93A6E`
- **Sweatshirts:** Black `#1B1B1E`, White `#F6F6F2`, Brown `#7A5230`, Lavender `#C5BBE3`
- **Hoodies:** Black `#1B1B1E`, White `#F6F6F2`, Lavender `#C5BBE3`, Grey `#8E9196`,
  Light Blue `#AACBE8`, Brown `#7A5230`, Bottle Green `#0F5C46`
- **Tank Tops:** Acid-Black `#2A2A2E`, Acid-Grey `#9A9CA0`, Acid-White `#EFEFE8`, Black `#1B1B1E`,
  White `#F6F6F2`, Grey `#8E9196`, Navy Blue `#232C5B`
- **Baby Tops:** Acid-Black `#2A2A2E`, Acid-White `#EFEFE8`, Acid-Grey `#9A9CA0`

Each colour has a flat garment image at `assets/img/catalog/<product>-<colour-slug>.webp`
(products: `oversized`, `sweatshirt`, `hoodie`, `tank`, `babytop`; e.g. `hoodie-bottle-green.webp`).

## 3. Manufacturing facts (from the catalogue)

- Everything in-house at one unit: No. 2500, Ground Floor, Opp. Jayadeva Hostel, Market Road,
  Nelamangala, Bengaluru 562123.
- Chain: fabric sourcing → cutting → stitching → print/embroidery → QC & packing → warehouse → dispatch.
- 3,000 pieces produced per day; 2,000+ pieces' worth of fabric stocked per colour (consistent shades).
- 6 print & branding methods in-house: screen print, puff print, DTF, DTG, sublimation, embroidery.
- 100% packaging in-house. 500+ brands trust us · 500+ corporate orders PAN India · 5,000+ products delivered.
- Also: Rhinocult Corporate (corporate.rhinocult.com) for gifting and event printing; marketplaces
  Amazon, Myntra, AJIO, Nykaa, Flipkart, JioMart, Pop, Xenia.

## 4. Contact and links

| Item | Value |
| --- | --- |
| WhatsApp / helpdesk | +91 63629 90365 → `https://wa.me/916362990365` |
| Email | rhinocult2023@gmail.com |
| Instagram | https://www.instagram.com/rhinocultindia/ |
| X / Twitter | https://x.com/Rhinocultindia |
| Facebook | https://m.facebook.com/61553896797858/ |
| Policies | https://rhinocult.com/policies/{privacy-policy, refund-policy, shipping-policy, terms-of-service} |

## 5. Voice and key copy

Bold, short, confident. Sentence-case body, display font for headings. Copy is original: borrow
unitee.in's layout and energy, never its wording.

- Eyebrow: "Private label | Made in Bengaluru"
- Hero H1: "Your label. Our factory floor."
- Hero sub: "Send us your designs. We stitch, print, pack and ship every order in your name, with zero
  stock piling up at home."
- Collection head: "35 colours. 5 fits. Your label."
- Feature 1 "Launch without the risk": start with a single piece; customer pays first, then we
  produce; orders go from store to door without you touching a box.
- Feature 2 "Built like a real label": 240 GSM terry tees and 330 GSM fleece; screen, puff, DTF, DTG,
  sublimation and embroidery in-house; logo on neck labels, hang tags and packaging; one team contact.
- Feature 3 "Logistics? Ours to sweat.": dispatched from our Bengaluru unit PAN India; returns and
  exchanges handled; plugs into Shopify; fast COD remittance.
- Stats strip: 3,000 pieces/day · 35 colours across 5 fits · 6 print methods in-house · 500+ brands.
- Steps: 01 Book a call → 02 Send your designs → 03 Approve your sample → 04 Sell. We ship.
- Closing CTA: "Got a design? Let's make it real." / "One message is all it takes to start your first drop."

Dropshipping-specific claims (no MOQ, pay when you sell, Shopify, COD, returns, white-label shipping)
are not in the catalogue and must be confirmed by the owner (see `AGENTS.md`).

## 6. Page structure

`index.html`
1. Sticky dark header: white Rhinocult logo + "DROPSHIPPING" tag, nav (Products, How it works,
   Why us, FAQ), WhatsApp (outline pill) + Book a Call (solid pill), hamburger under 860px.
2. Hero: copy left; right a circular white→black radial "spotlight" with a man (`cat-oversized`)
   and a woman (`cat-essential`) cut-out, both front-facing, side by side and centred in the circle.
   Intro motion (CSS only): copy rises in with a stagger, spotlight scales in, models roll in from
   opposite sides then float, and a ring of brand text rotates around the spotlight. All motion is
   disabled under `prefers-reduced-motion`.
3. Scrolling marquee: the 5 products, Cut & Sew and the 6 print methods.
4. Collection: 6 cards (3 → 2 → 1 columns). Each product card shows the flat garment image, specs,
   colour swatches and a **Customize now** button. Choosing a swatch swaps the image and colour name
   and rewrites the WhatsApp message:
   ```
   Hi Rhinocult, I want to customise Hoodies for my brand.

   Product: Hoodie
   Colour: Bottle Green
   Specs: 330 GSM polycotton fleece · Regular fit, unisex · S–XXL

   Please share print options, pricing and next steps.
   ```
   The sixth card is Cut & Sew (photo, print-method chips, "Start a custom design").
5. Three alternating image + green check-list rows, image edges faded into black.
6. Stats strip (4 numbers).
7. How it works: 4 numbered cards.
8. Full-width street photo banner (image already contains "WEAR THE ATTITUDE" text).
9. Lookbook: 6 photos, 3 columns (2 on mobile).
10. FAQ accordion (`<details>`): stock, customisation, fabrics & sizes, print methods, where it's
    made, white label, Shopify, COD, getting started.
11. CTA band, 3-column footer (policies / contact incl. email and address / socials), floating
    green WhatsApp button.

`book-a-call.html`: intro + checklist + photo on the left; form on the right (name, brand, phone,
product chips for the 5 families + Cut & Sew, date ≥ today, time slot, notes). Submit opens WhatsApp
with all details prefilled.

## 7. Design tokens

| Token | Value |
| --- | --- |
| Background | `#000000` |
| Surface / surface-2 | `#0c0c0c` / `#151515` |
| Border | `#262626` |
| Text / muted | `#ffffff` / `#a3a3a3` |
| Check icon | `#22c55e` |
| WhatsApp | `#25d366` |
| Display font | Unbounded 500/700/800 (free stand-in for Unitee's Monument Extended) |
| Body font | Inter 400–700 (Rhino Cult's font) |
| Buttons | Pill, 2px white border; solid = white bg/black text, outline = transparent |
| Radius | 8px inputs/media, 16px cards |
| Container | 1200px, 20px side gutters |
| Swatches | 26px circles (30px on mobile), selected = white ring; acid-wash swatches get a mottled overlay |

## 8. Assets

| File | Content | Used in |
| --- | --- | --- |
| `catalog/*.webp` | 35 transparent ghost-mannequin garment photos, 720×855, one per product colour | collection cards |
| `feature-launch.webp`, `feature-label.webp`, `feature-logistics.webp` | Founder getting an order on his phone; custom neck label + hang tag; packing desk with courier mailers (AI-generated, 768×1024) | feature rows |
| `logo-white.webp`, `logo-black.webp` | RHINOCULT wordmark | header/footer (white) |
| `logo-banner.webp` | Rhino head logo on black | og:image |
| `favicon.png` | Rhino head icon | favicon |
| `cat-oversized.webp`, `cat-essential.webp` (+ other `cat-*`) | Transparent full-body model cut-outs, 700×1400 | hero |
| `hoodie-embroidered*.webp`, `tee-essential.webp`, `babytee.webp`, `tank.webp`, `portrait-*.webp` | Product/model shots | lookbook, Cut & Sew card, booking page |
| `street-group.webp` | Night street group shot with "WEAR THE ATTITUDE" text | street banner |

Catalogue garment photos were made from one AI-generated light-grey blank per product (plus an
acid-wash blank for tank and baby top), cut out, then recoloured in Lab space to each catalogue hex,
so every colour of a product has the identical silhouette. New colours must follow the same recipe.
Feature-row images must illustrate the row's copy, not just show product.

Model cut-outs must keep the `cat-*` framing (transparent, full body, 700×1400, figure spans full
height). `cat-essential.webp` was made from a Rhino Cult product photo with the background removed
(macOS Vision subject lifting). Lookbook photo backgrounds should be light studio grey (about
`#ecebf2`); `portrait-*.webp` were regraded from warm beige to match.

Original CDN base for higher-resolution photos: `https://rhinocult.com/cdn/shop/files/<file>?width=<px>`.

## 9. Porting notes

- Keep WhatsApp number in one config value and build `wa.me` links with `encodeURIComponent` messages.
- Model the collection as data (product, specs, colours[{name, hex, image}]) and render cards from it.
- If moving to a framework, map the sections above to components and the tokens to theme variables.
- Keep the site fast: no heavy libraries, lazy-load images, WebP.
- Do not add cart/checkout unless asked; the funnel is WhatsApp + call.
