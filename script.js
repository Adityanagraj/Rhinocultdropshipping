// Site-wide settings. Change the WhatsApp number here only (country code, digits only).
const CONFIG = {
  whatsappNumber: "916362990365",
};

const waLink = (message) =>
  `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

// Every element with data-wa="message" becomes a WhatsApp link with that prefilled message.
document.querySelectorAll("[data-wa]").forEach((el) => {
  el.setAttribute("href", waLink(el.dataset.wa));
});

// Product cards: colour swatches swap the image and rewrite the "Customize now" WhatsApp message.
document.querySelectorAll(".product-card[data-specs]").forEach((card) => {
  const img = card.querySelector(".product-img");
  const colourName = card.querySelector("[data-colour-name]");
  const cta = card.querySelector(".product-cta");
  const swatches = card.querySelectorAll(".swatch");
  const { product, specs } = card.dataset;

  const select = (swatch) => {
    const colour = swatch.dataset.colour;
    swatches.forEach((s) => s.setAttribute("aria-checked", String(s === swatch)));
    img.src = swatch.dataset.img;
    img.alt = `${product} in ${colour}`;
    colourName.textContent = colour;
    cta.href = waLink([
      `Hi Rhinocult, I want to customise ${product}s for my brand.`,
      "",
      `Product: ${product}`,
      `Colour: ${colour}`,
      `Specs: ${specs}`,
      "",
      "Please share print options, pricing and next steps.",
    ].join("\n"));
  };

  swatches.forEach((swatch) => swatch.addEventListener("click", () => select(swatch)));
  select(card.querySelector('.swatch[aria-checked="true"]') || swatches[0]);
});

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
}

// Book a call form: builds a WhatsApp message from the form and opens it.
const form = document.getElementById("booking-form");
if (form) {
  const dateInput = form.querySelector("#date");
  const errorBox = document.getElementById("form-error");
  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  dateInput.min = today.toISOString().slice(0, 10);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(":invalid");
      const label = form.querySelector(`label[for="${firstInvalid.id}"]`);
      errorBox.textContent = `Please check: ${label ? label.textContent : "required fields"}.`;
      errorBox.hidden = false;
      firstInvalid.focus();
      return;
    }
    errorBox.hidden = true;

    const data = new FormData(form);
    const products = data.getAll("products");
    const lines = [
      "Hi Rhinocult, I want to book a call.",
      "",
      `Name: ${data.get("name").trim()}`,
      `Brand: ${data.get("brand").trim() || "Just starting"}`,
      `Phone: ${data.get("phone").trim()}`,
      `Products: ${products.length ? products.join(", ") : "Not sure yet"}`,
      `Preferred slot: ${data.get("date")}, ${data.get("slot")}`,
    ];
    const notes = data.get("notes").trim();
    if (notes) lines.push(`Notes: ${notes}`);

    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  });
}
