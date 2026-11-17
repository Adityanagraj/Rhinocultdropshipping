# llm.md — Rhinocult Dropshipping brief

Self-contained context for any LLM that continues, rebuilds or ports this website (for example to
Next.js, Webflow, Framer, WordPress or a Shopify theme). Repo-level coding rules are in `AGENTS.md`.

## 1. Business

- **Name:** Rhinocult Dropshipping (a Rhino Cult venture). Parent brand: https://rhinocult.com
- **Offer:** Custom clothing manufacturing + fulfilment for people who want their own clothing brand.
  Products are made under the client's label and shipped to the client's customers, so the client
  holds no inventory.
- **Products (all customisable):** Oversized T-shirts, Essential T-shirts, Hoodies, Embroidered
  Hoodies, Sweatshirts, Baby Tees (women), Tank Tops (men), Cut & Sew (fully custom pattern/fabric/fit).
- **Decoration:** DTG print, embroidery, puff print, acid wash; custom neck labels, tags, packaging.
- **Market:** India. Audience: new and growing streetwear/creator/anime/merch brands.
- **Primary actions:** WhatsApp chat and Book a Call. No ecommerce on this site.

## 2. Contact and links (from rhinocult.com)

| Item | Value |
| --- | --- |
| WhatsApp | +91 63629 90365 → `https://wa.me/916362990365` |
| Instagram | https://www.instagram.com/rhinocultindia/ |
| X / Twitter | https://x.com/Rhinocultindia |
| Facebook | https://m.facebook.com/61553896797858/ |
| Policies | https://rhinocult.com/policies/{privacy-policy, refund-policy, shipping-policy, terms-of-service} |

## 3. Voice and key copy

Bold, short, confident. Sentence-case body, display font for headings. Copy is original: borrow
unitee.in's layout and energy, never its wording.

- Eyebrow: "Private label | Made in India"
- Hero H1: "Your label. Our factory floor."
- Hero sub: "Send us your designs. We stitch, print, pack and ship every order in your name, with zero
  stock piling up at home."
- Feature 1 "Launch without the risk": start with a single piece; customer pays first, then we
  produce; orders go from store to door without you touching a box.
- Feature 2 "Built like a real label": heavyweight fabrics we trust for Rhinocult; print, embroidery
  or puff with big placements; logo on neck labels, hang tags and mailers; one dedicated team contact.
- Feature 3 "Logistics? Ours to sweat.": quick packing and dispatch; returns and exchanges handled;
  plugs into Shopify; fast COD remittance.
- Feature buttons: "Talk to us" (go to `book-a-call.html`).
- Steps: 01 Book a call → 02 Send your designs → 03 Approve your sample → 04 Sell. We ship.
- Closing CTA: "Got a design? Let's make it real." / "One message is all it takes to start your first drop."

Claims in features/FAQ (no MOQ, Shopify, COD, labels, returns) must be confirmed by the owner (see `AGENTS.md`).

## 4. Page structure

`index.html`
1. Sticky dark header: white Rhinocult logo + "DROPSHIPPING" tag, nav (Products, How it works,
   Why us, FAQ), WhatsApp (outline pill) + Book a Call (solid pill), hamburger under 860px.
2. Hero: copy left; right a circular white→black radial "spotlight" with two cut-out models.
   Intro motion (CSS only): copy rises in with a stagger, spotlight scales in, models roll in from
   opposite sides then float, and a ring of brand text rotates around the spotlight. All motion is
   disabled under `prefers-reduced-motion`.
3. Scrolling marquee of product/technique keywords.
4. Products grid (4 → 3 → 2 columns); every card opens WhatsApp with a product-specific message.
5. Three alternating image + green check-list rows (Unitee pattern), image edges faded into black.
6. How it works: 4 numbered cards.
7. Full-width street photo banner (image already contains "WEAR THE ATTITUDE" text).
8. Lookbook: 6 photos, 3 columns (2 on mobile).
9. FAQ accordion (`<details>`).
10. CTA band, 3-column footer (policies / contact / socials), floating green WhatsApp button.

`book-a-call.html`: intro + checklist + photo on the left; form on the right (name, brand, phone,
product chips, date ≥ today, time slot, notes). Submit opens WhatsApp with all details prefilled.

## 5. Design tokens

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

## 6. Assets (`assets/img/`, all from rhinocult.com, converted to WebP)

| File | Content | Used in |
| --- | --- | --- |
| `logo-white.webp`, `logo-black.webp` | RHINOCULT wordmark | header/footer (white) |
| `logo-banner.webp` | Rhino head logo on black | og:image |
| `favicon.png` | Rhino head icon | favicon |
| `cat-*.webp` (oversized, essential, hoodie, embroidery, sweatshirt, babytee, tank) | Transparent full-body cut-outs, 700×1400, figure spans full height | hero, product cards |

New product-card images must match the `cat-*` framing: transparent background, one full-body model,
700×1400 canvas, figure from top to bottom edge. `cat-essential.webp` was made from a Rhino Cult
product photo with the background removed (macOS Vision subject lifting).

Lookbook and photo backgrounds should be light studio grey (about `#ecebf2`). `portrait-men.webp`
and `portrait-women.webp` were originally warm beige; their backgrounds were regraded to that grey
while keeping the people, stone blocks and shadows.
| `hoodie-white.webp`, `tee-oversized.webp`, `sweatshirt.webp` | Couple product shots | feature rows |
| `hoodie-embroidered*.webp`, `tee-essential.webp`, `babytee.webp`, `tank.webp`, `portrait-*.webp` | Product/model shots | lookbook, cut & sew card, booking page |
| `street-group.webp` | Night street group shot with "WEAR THE ATTITUDE" text | street banner |

Original CDN base for higher resolution: `https://rhinocult.com/cdn/shop/files/<file>?width=<px>`.

## 7. Porting notes

- Keep WhatsApp number in one config value and build `wa.me` links with `encodeURIComponent` messages.
- If moving to a framework, map sections 1–10 to components and the tokens above to theme variables.
- Keep the site fast: no heavy libraries, lazy-load images, WebP.
- Do not add cart/checkout unless asked; the funnel is WhatsApp + call.
