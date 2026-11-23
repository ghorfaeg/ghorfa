/* ============ GHORFA — EDIT THIS FILE ONLY ============
   1) SITE: contact links, trust points, FAQ.
   2) PRODUCTS: one block per product. To add a product, copy a block.
   PHOTOS: drop files into the /images folder, then list their names in "images".
   The first image is the main one. Missing photos show a drawing placeholder.
   price: 0 shows "Ask for price". */

const SITE = {
  whatsapp: "20XXXXXXXXXX",                       // country code + number, no + or spaces
  instagram: "https://www.instagram.com/YOUR_PAGE",
  facebook: "https://www.facebook.com/YOUR_PAGE",
  currency: "EGP",
  trust: [
    ["Made to order", "Every piece is built after you confirm."],
    ["Delivery", "Delivered to your door across Egypt."],
    ["Assembly", "Arrives ready to place in your room."],
    ["Warranty", "Edit this line with your warranty terms."]
  ],
  faq: [
    ["How long does an order take?", "Edit: e.g. 7–10 working days after confirmation."],
    ["Can I get a custom size or colour?", "Yes. Use the custom size form above and we'll quote you."],
    ["How do I pay?", "Edit: e.g. 50% deposit, balance on delivery."]
  ]
};

const PRODUCTS = [
  { id: "desk-120", name: "Desk 120", category: "Desks", w: 120, d: 60, h: 75, price: 0,
    material: "Edit: e.g. MDF with oak veneer",
    finishes: ["Natural oak", "Walnut", "Black"],
    fits: "Laptop and a notebook. Compact spaces.",
    images: ["desk-120-1.jpg", "desk-120-2.jpg"],
    details: ["Top thickness: edit", "Max load: edit", "Cable hole: edit"] },

  { id: "desk-150", name: "Desk 150", category: "Desks", w: 150, d: 70, h: 75, price: 0,
    material: "Edit: e.g. MDF with oak veneer",
    finishes: ["Natural oak", "Walnut", "Black"],
    fits: "One monitor, a laptop, and a lamp.",
    images: ["desk-150-1.jpg"],
    details: ["Top thickness: edit", "Max load: edit", "Cable hole: edit"] },

  { id: "desk-180", name: "Desk 180", category: "Desks", w: 180, d: 80, h: 75, price: 0,
    material: "Edit: e.g. MDF with oak veneer",
    finishes: ["Natural oak", "Walnut", "Black"],
    fits: "Dual monitors with room to spread out.",
    images: ["desk-180-1.jpg"],
    details: ["Top thickness: edit", "Max load: edit", "Cable hole: edit"] },

  { id: "desk-200", name: "Desk 200", category: "Desks", w: 200, d: 80, h: 75, price: 0,
    material: "Edit: e.g. MDF with oak veneer",
    finishes: ["Natural oak", "Walnut", "Black"],
    fits: "Two people, or a full studio setup.",
    images: ["desk-200-1.jpg"],
    details: ["Top thickness: edit", "Max load: edit", "Cable hole: edit"] }
];
