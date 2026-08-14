(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const m of s.addedNodes)
          m.tagName === "LINK" && m.rel === "modulepreload" && n(m);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = r(i);
    fetch(i.href, s);
  }
})();
const Le = [
  {
    id: 1,
    name: "Hydra-Glow Serum",
    price: 2800,
    tag: "Best Seller",
    href: "product.html?id=1",
  },
  {
    id: 2,
    name: "Velvet Moisture Cream",
    price: 3200,
    tag: "New",
    href: "product.html?id=2",
  },
  {
    id: 3,
    name: "Brightening Vitamin C Serum",
    price: 3500,
    tag: "Popular",
    href: "product.html?id=3",
  },
  {
    id: 4,
    name: "Gentle Foaming Cleanser",
    price: 1800,
    tag: "",
    href: "product.html?id=4",
  },
  {
    id: 5,
    name: "Retinol Night Repair Cream",
    price: 4200,
    tag: "Best Seller",
    href: "product.html?id=5",
  },
  {
    id: 6,
    name: "SPF 50 Mineral Sunscreen",
    price: 2200,
    tag: "Essential",
    href: "product.html?id=6",
  },
  {
    id: 7,
    name: "Hyaluronic Acid Toner",
    price: 1600,
    tag: "",
    href: "product.html?id=7",
  },
  {
    id: 8,
    name: "Niacinamide Pore Serum",
    price: 2600,
    tag: "New",
    href: "product.html?id=8",
  },
  { id: 9, name: "Eye Cream", price: 3800, tag: "", href: "product.html?id=9" },
  {
    id: 10,
    name: "AHA/BHA Exfoliating Toner",
    price: 2400,
    tag: "Popular",
    href: "product.html?id=10",
  },
];
function Ae() {
  const e = document.getElementById("searchInput"),
    t = document.getElementById("searchDropdown");
  if (!e || !t || e.dataset.searchWired) return;
  e.dataset.searchWired = "true";
  function r(n) {
    if (((n = n.trim().toLowerCase()), !n)) {
      t.style.display = "none";
      return;
    }
    const i = Le.filter((s) => s.name.toLowerCase().includes(n)).slice(0, 6);
    if (!i.length) {
      ((t.innerHTML = `<div style="padding:12px 16px;font-size:13px;color:var(--dark-light);">No products found for "<strong>${n}</strong>"</div>`),
        (t.style.display = "block"));
      return;
    }
    ((t.innerHTML = i
      .map(
        (s) => `
      <a href="${s.href}" style="
        display:flex;align-items:center;justify-content:space-between;
        padding:10px 16px;text-decoration:none;color:var(--dark);
        border-bottom:1px solid var(--border);font-size:13px;
        transition:background 0.15s;
      " onmouseover="this.style.background='var(--light-gray)'"
         onmouseout="this.style.background=''"
      >
        <span>${s.name}${s.tag ? ` <span style="font-size:11px;color:var(--primary);margin-left:6px;">${s.tag}</span>` : ""}</span>
        <span style="font-weight:600;color:var(--primary);">৳${s.price.toLocaleString("en-IN")}</span>
      </a>
    `,
      )
      .join("")),
      (t.innerHTML += `
      <a href="shop.html?search=${encodeURIComponent(n)}" style="
        display:block;padding:10px 16px;font-size:12px;font-weight:600;
        color:var(--primary);text-decoration:none;text-align:center;
        background:var(--light-gray);
      ">See all results →</a>
    `),
      (t.style.display = "block"));
  }
  (e.addEventListener("input", (n) => r(n.target.value)),
    e.addEventListener("keydown", (n) => {
      if (n.key === "Enter") {
        const i = e.value.trim();
        i &&
          (window.location.href = `shop.html?search=${encodeURIComponent(i)}`);
      }
      n.key === "Escape" && (t.style.display = "none");
    }),
    document.addEventListener("click", (n) => {
      !e.contains(n.target) &&
        !t.contains(n.target) &&
        (t.style.display = "none");
    }));
}
Ae();
function Pe() {
  const e = document.getElementById("mobileSearchInput"),
    t = document.getElementById("mobileSearchDropdown"),
    r = document.getElementById("mobileSearchClear");
  if (!e || !t || e.dataset.searchWired) return;
  e.dataset.searchWired = "true";
  function n(i) {
    if (
      ((i = i.trim().toLowerCase()),
      r && (r.style.display = i ? "flex" : "none"),
      !i)
    ) {
      t.style.display = "none";
      return;
    }
    const s = Le.filter((m) => m.name.toLowerCase().includes(i)).slice(0, 6);
    if (!s.length) {
      ((t.innerHTML = `<div style="padding:14px 16px;font-size:13px;color:var(--dark-light);">No products found for "<strong>${i}</strong>"</div>`),
        (t.style.display = "block"));
      return;
    }
    ((t.innerHTML = s
      .map(
        (m) => `
      <a href="${m.href}" style="
        display:flex;align-items:center;justify-content:space-between;
        padding:12px 16px;text-decoration:none;color:var(--dark);
        border-bottom:1px solid var(--border);font-size:14px;
        transition:background 0.15s;
      " onmouseover="this.style.background='var(--light-gray)'"
         onmouseout="this.style.background=''"
      >
        <span>${m.name}${m.tag ? ` <span style="font-size:11px;color:var(--primary);margin-left:6px;font-weight:500;">${m.tag}</span>` : ""}</span>
        <span style="font-weight:600;color:var(--primary);font-size:13px;">৳${m.price.toLocaleString("en-IN")}</span>
      </a>
    `,
      )
      .join("")),
      (t.innerHTML += `
      <a href="shop.html?search=${encodeURIComponent(i)}" style="
        display:block;padding:12px 16px;font-size:13px;font-weight:600;
        color:var(--primary);text-decoration:none;text-align:center;
        background:var(--light-gray);
      ">See all results →</a>
    `),
      (t.style.display = "block"));
  }
  (e.addEventListener("input", (i) => n(i.target.value)),
    e.addEventListener("keydown", (i) => {
      if (i.key === "Enter") {
        const s = e.value.trim();
        s &&
          (window.location.href = `shop.html?search=${encodeURIComponent(s)}`);
      }
      i.key === "Escape" && ((t.style.display = "none"), e.blur());
    }),
    r &&
      r.addEventListener("click", () => {
        ((e.value = ""),
          (t.style.display = "none"),
          (r.style.display = "none"),
          e.focus());
      }),
    document.addEventListener("click", (i) => {
      const s = document.getElementById("mobileSearchBar");
      s && !s.contains(i.target) && (t.style.display = "none");
    }));
}
Pe();
const w = {
    currency: { symbol: "৳", position: "prefix", decimals: 0 },
    brand: { name: "Velmira" },
    freeShippingOver: 5e3,
    priceFilter: { min: 500, max: 15e3, default: 15e3 },
    toastDuration: 3e3,
  },
  I = [
    "/assets/g3.webp",
    "/assets/g2.webp",
    "/assets/g3.webp",
    "/assets/g4.webp",
    "/assets/g5.webp",
    "/assets/g1.webp",
    "/assets/g2.webp",
    "/assets/g3.webp",
    "/assets/product-ordinary-niacinamide.webp",
    "/assets/product-dr-althea-345.webp",
    "/assets/product-ordinary-hair-serum.webp",
    "/assets/product-combo-4pc.webp",
    "/assets/product-rice-combo.webp",
    "/assets/product-cosrx-cleanser.webp",
    "/assets/product-boj-relief-sun.webp",
    "/assets/product-cosrx-snail92.webp",
    "/assets/product-axisy-darkspot.webp",
  ],
  b = [
    {
      id: 1,
      category: "serum",
      name: "Hydra Luxe Serum",
      price: 2800,
      originalPrice: 3500,
      rating: 4.8,
      badge: "Best Seller",
      skinType: ["dry", "sensitive"],
      concern: ["dry", "aging"],
      description:
        "Ultra-hydrating serum infused with hyaluronic acid and peptides. Perfect for all skin types.",
      ingredients: ["Hyaluronic Acid", "Peptides", "Vitamin E", "Squalane"],
      usage:
        "Apply 2–3 drops to clean skin morning and night. Follow with moisturizer.",
      image: I[0],
    },
    {
      id: 2,
      category: "moisturizer",
      name: "Clarity Control Cream",
      price: 2200,
      originalPrice: 2900,
      rating: 4.6,
      badge: "New",
      skinType: ["oily"],
      concern: ["acne", "oily"],
      description:
        "Lightweight gel cream formulated to balance oil production and minimize pores.",
      ingredients: [
        "Niacinamide",
        "Tea Tree Oil",
        "Salicylic Acid",
        "Green Tea Extract",
      ],
      usage: "Use morning and night on clean skin. Non-comedogenic formula.",
      image: I[1],
    },
    {
      id: 3,
      category: "mask",
      name: "Radiance Night Mask",
      price: 3200,
      originalPrice: null,
      rating: 4.9,
      badge: "Premium",
      skinType: ["all"],
      concern: ["brightening", "aging"],
      description:
        "Overnight restorative mask packed with antioxidants and brightening agents.",
      ingredients: ["Vitamin C", "AHA/BHA", "Retinol", "Rosehip Oil"],
      usage:
        "Apply generously before bed. Leave on overnight or use as weekly mask.",
      image: I[2],
    },
    {
      id: 4,
      category: "sunscreen",
      name: "SPF Silk Shield",
      price: 1800,
      originalPrice: 2500,
      rating: 4.7,
      badge: "UV Protection",
      skinType: ["all"],
      concern: ["protection"],
      description:
        "Silky smooth SPF 50+ daily sunscreen. Weightless, reef-safe formula.",
      ingredients: ["Zinc Oxide", "Titanium Dioxide", "Aloe Vera", "Vitamin E"],
      usage:
        "Apply liberally 15 minutes before sun exposure. Reapply every 2 hours.",
      image: I[3],
    },
    {
      id: 5,
      category: "cleanser",
      name: "Gentle Enzyme Cleanser",
      price: 1500,
      originalPrice: 1900,
      rating: 4.5,
      badge: null,
      skinType: ["dry", "sensitive"],
      concern: ["brightening"],
      description:
        "Creamy enzymatic cleanser that gently exfoliates while maintaining skin barrier.",
      ingredients: ["Papaya Enzyme", "Chamomile", "Aloe Vera", "Coconut Oil"],
      usage: "Massage onto damp skin, rinse thoroughly with lukewarm water.",
      image: I[4],
    },
    {
      id: 6,
      category: "treatment",
      name: "Spot Treatment Elixir",
      price: 1350,
      originalPrice: 1800,
      rating: 4.4,
      badge: "Sale",
      skinType: ["oily"],
      concern: ["acne", "spots"],
      description:
        "Targeted treatment for acne spots and blemishes. Fast-acting formula.",
      ingredients: [
        "Salicylic Acid",
        "Sulfur",
        "Tea Tree Oil",
        "Benzoyl Peroxide",
      ],
      usage:
        "Apply directly to blemishes. Use up to twice daily. May cause dryness.",
      image: I[5],
    },
    {
      id: 7,
      category: "eye-care",
      name: "Luxury Eye Contour",
      price: 2500,
      originalPrice: 3200,
      rating: 4.8,
      badge: "Bestseller",
      skinType: ["sensitive", "dry"],
      concern: ["aging"],
      description:
        "Intensive eye cream targeting fine lines, dark circles, and puffiness.",
      ingredients: ["Peptides", "Retinol", "Caffeine", "Hyaluronic Acid"],
      usage:
        "Gently tap around orbital bone with ring finger. Use morning and night.",
      image: I[6],
    },
    {
      id: 8,
      category: "moisturizer",
      name: "Barrier Repair Balm",
      price: 2700,
      originalPrice: 3500,
      rating: 4.9,
      badge: "Premium",
      skinType: ["dry", "sensitive"],
      concern: ["dry"],
      description:
        "Rich restorative balm with ceramides and natural oils for compromised skin.",
      ingredients: [
        "Ceramides",
        "Centella Asiatica",
        "Jojoba Oil",
        "Shea Butter",
      ],
      usage: "Apply to damp skin as final step. Can be used on body as well.",
      image: I[7],
    },
    {
      id: 9,
      category: "serum",
      name: "Vitamin C Booster",
      price: 3300,
      originalPrice: 4200,
      rating: 4.7,
      badge: "New",
      skinType: ["all"],
      concern: ["brightening", "spots"],
      description:
        "Stabilized Vitamin C powder that brightens and protects skin.",
      ingredients: [
        "L-Ascorbic Acid",
        "Ferulic Acid",
        "Vitamin E",
        "Hyaluronic Acid",
      ],
      usage:
        "Mix with serum or moisturizer. Shelf life after mixing: 24 hours.",
      image: I[0],
    },
    {
      id: 10,
      category: "serum",
      name: "Firming Sleep Serum",
      price: 3500,
      originalPrice: 4500,
      rating: 4.8,
      badge: "Bestseller",
      skinType: ["all"],
      concern: ["aging"],
      description:
        "Overnight firming serum with retinol and collagen-boosting peptides.",
      ingredients: ["Retinol", "Peptides", "Bakuchiol", "Squalane"],
      usage: "Apply before bed. Introduce gradually to minimize irritation.",
      image: I[2],
    },
    {
      id: 11,
      category: "treatment",
      name: "Healing Concentrate",
      price: 2900,
      originalPrice: 3500,
      rating: 4.6,
      badge: null,
      skinType: ["sensitive", "dry"],
      concern: ["sensitive", "dry"],
      description:
        "Calming concentrate for reactive and irritated skin. Soothes redness.",
      ingredients: ["Centella Asiatica", "Cica", "Panthenol", "Allantoin"],
      usage: "Mix into moisturizer or use alone. 1–2 pumps per application.",
      image: I[3],
    },
    {
      id: 12,
      category: "toner",
      name: "Pore Minimizer Toner",
      price: 1700,
      originalPrice: 2200,
      rating: 4.5,
      badge: "Sale",
      skinType: ["oily"],
      concern: ["oily", "acne"],
      description:
        "Lightweight toner that minimizes pores and balances oil production.",
      ingredients: ["Niacinamide", "Witch Hazel", "Salicylic Acid", "Glycerin"],
      usage: "Apply with cotton pad after cleansing. Morning and evening.",
      image: I[5],
    },
    {
      id: 13,
      category: "serum",
      name: "The Ordinary Niacinamide 10% + Zinc 1%",
      price: 1080,
      originalPrice: 1200,
      rating: 4.7,
      badge: "Sale",
      skinType: ["oily", "combination", "all"],
      concern: ["oily", "acne", "pore"],
      description:
        "High-strength vitamin and mineral blemish formula that visibly minimizes the look of congestion and shine while balancing oil production.",
      ingredients: ["Niacinamide 10%", "Zinc PCA", "Vitamin B3"],
      usage:
        "Apply a few drops to the face morning and evening before heavier creams.",
      image: I[8],
    },
    {
      id: 14,
      category: "moisturizer",
      name: "Dr. Althea 345 Relief Cream",
      price: 1850,
      originalPrice: 2000,
      rating: 4.8,
      badge: "Sale",
      skinType: ["all", "sensitive", "dry"],
      concern: ["sensitive", "dry", "acne"],
      description:
        "A calming, blemish-friendly relief cream with ceramide NP, panthenol and centella asiatica that soothes, hydrates and supports barrier repair.",
      ingredients: [
        "Ceramide NP",
        "Panthenol",
        "Centella Asiatica",
        "Madecassoside",
      ],
      usage: "Smooth over face as the last step of your routine, morning and night.",
      image: I[9],
    },
    {
      id: 15,
      category: "hair-care",
      name: "The Ordinary Multi-Peptide Serum for Hair Density",
      price: 2890,
      originalPrice: 3200,
      rating: 4.6,
      badge: "Sale",
      skinType: ["all"],
      concern: ["hair"],
      description:
        "A concentrated leave-in serum with multi-peptides and redensifying actives for hair that looks denser, fuller and healthier over time.",
      ingredients: ["Multi-Peptide Complex", "Biotinoyl Tripeptide", "Redensyl"],
      usage: "Apply to towel-dried scalp daily. Do not rinse out.",
      image: I[10],
    },
    {
      id: 16,
      category: "combo",
      name: "Velmira Korean Skincare Combo Set (4-Piece)",
      price: 5280,
      originalPrice: null,
      rating: 4.7,
      badge: "Combo",
      skinType: ["all"],
      concern: ["acne", "oily", "sensitive", "dry", "brightening"],
      description:
        "A curated 4-piece bundle featuring Dr. Althea 345 Relief Cream, COSRX Salicylic Acid Daily Gentle Cleanser, The Ordinary Niacinamide 10% + Zinc 1%, and a bonus treatment — a complete routine at a bundled price.",
      ingredients: [
        "Niacinamide",
        "Salicylic Acid",
        "Ceramide NP",
        "Centella Asiatica",
      ],
      usage:
        "Follow the included routine card: cleanse, treat, then moisturize morning and night.",
      image: I[11],
    },
    {
      id: 17,
      category: "combo",
      name: "Rice Water Bright Combo (Cleanser + Cream)",
      price: 2100,
      originalPrice: 2500,
      rating: 4.6,
      badge: "Combo",
      skinType: ["all"],
      concern: ["brightening", "dry"],
      description:
        "A gentle rice-powered duo — Rice Water Bright Foaming Cleanser and Rice Ceramide Moisturizing Cream — that cleanses and nourishes for a naturally brighter, softer complexion.",
      ingredients: ["Rice Extract", "Rice Bran Water", "Ceramides"],
      usage:
        "Cleanse morning and night, then follow with the cream as your final moisturizing step.",
      image: I[12],
    },
    {
      id: 18,
      category: "cleanser",
      name: "COSRX Salicylic Acid Daily Gentle Cleanser",
      price: 1080,
      originalPrice: 1200,
      rating: 4.7,
      badge: "Sale",
      skinType: ["oily", "combination"],
      concern: ["acne", "oily"],
      description:
        "A gentle daily foaming cleanser with 0.5% salicylic acid and botanical extracts that whisks away excess sebum and impurities without stripping the skin.",
      ingredients: [
        "Salicylic Acid 0.5%",
        "Betaine Salicylate",
        "Tea Tree Leaf Water",
      ],
      usage: "Massage onto damp skin morning and night, then rinse thoroughly.",
      image: I[13],
    },
    {
      id: 19,
      category: "sunscreen",
      name: "Beauty of Joseon Relief Sun SPF50+ PA++++",
      price: 1480,
      originalPrice: 1600,
      rating: 4.8,
      badge: "Sale",
      skinType: ["all"],
      concern: ["protection"],
      description:
        "A lightweight, glow-giving daily sunscreen with rice extract and probiotics that protects against UVA/UVB rays while leaving a dewy, hydrated finish.",
      ingredients: ["Rice Extract", "Probiotics", "Niacinamide"],
      usage:
        "Apply generously as the last step of your morning routine. Reapply every 2 hours of sun exposure.",
      image: I[14],
    },
    {
      id: 20,
      category: "moisturizer",
      name: "COSRX Advanced Snail 92 All-In-One Cream",
      price: 1580,
      originalPrice: 1700,
      rating: 4.8,
      badge: "Sale",
      skinType: ["dry", "sensitive", "all"],
      concern: ["dry", "brightening", "aging"],
      description:
        "A multi-tasking cream formulated with 92% snail secretion filtrate that deeply hydrates, repairs, and helps skin achieve a healthy, appealing glow.",
      ingredients: [
        "Snail Secretion Filtrate 92%",
        "Betaine",
        "Sodium Hyaluronate",
      ],
      usage: "Apply as the last step of your routine, morning and night.",
      image: I[15],
    },
    {
      id: 21,
      category: "serum",
      name: "AXIS-Y Dark Spot Correcting Glow Serum",
      price: 1120,
      originalPrice: null,
      rating: 4.6,
      badge: "Sale",
      skinType: ["all"],
      concern: ["spots", "brightening"],
      description:
        "An activated niacinamide and squalane serum that targets the appearance of dark spots and uneven tone while locking in moisture for an all-day glow.",
      ingredients: [
        "Niacinamide 5%",
        "Squalane",
        "Hippophae Rhamnoides Fruit Extract",
      ],
      usage: "Apply 2–3 drops to clean skin morning and night before moisturizer.",
      image: I[16],
    },
  ];
window.products = b;
(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyC4iYs-YUnvPTzd0Ut8Gc6yaoeopOzuxUQ",
    authDomain: "velmira-6bed5.firebaseapp.com",
    projectId: "velmira-6bed5",
    storageBucket: "velmira-6bed5.firebasestorage.app",
    messagingSenderId: "929543908982",
    appId: "1:929543908982:web:2a374ce24fd53815bbf957",
  };
  async function loadLiveProducts() {
    try {
      const [{ initializeApp }, fs] = await Promise.all([
        import("https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js"),
        import(
          "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js"
        ),
      ]);
      const app = initializeApp(firebaseConfig);
      const db = fs.getFirestore(app);
      const snap = await fs.getDocs(fs.collection(db, "products"));
      if (snap.empty) return;
      const live = snap.docs
        .map((d) => {
          const data = d.data();
          const numId = Number(d.id);
          return { ...data, id: Number.isFinite(numId) ? numId : data.id };
        })
        .filter((p) => p && p.name)
        .sort((a, c) => (a.id > c.id ? 1 : -1));
      if (!live.length) return;
      b.length = 0;
      b.push(...live);
      window.products = b;
      if (typeof W === "function") W();
      if (typeof ze === "function") ze();
      window.dispatchEvent(new CustomEvent("velmira:products-updated"));
      console.log("[Velmira] Loaded", live.length, "products from Firestore");
    } catch (err) {
      console.warn(
        "[Velmira] Firestore unavailable, using built-in catalog:",
        err,
      );
    }
  }
  loadLiveProducts();
})();
let o = {
  cart: JSON.parse(localStorage.getItem("velmira_cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("velmira_wishlist") || "[]"),
  filters: {
    category: [],
    skinType: [],
    concern: [],
    special: null,
    maxPrice: w.priceFilter.default,
    sortBy: "featured",
  },
  darkMode: localStorage.getItem("darkMode") === "true",
  currentProduct: null,
};
function R() {
  localStorage.setItem("velmira_cart", JSON.stringify(o.cart));
}
function $e() {
  localStorage.setItem("velmira_wishlist", JSON.stringify(o.wishlist));
}
function k(e) {
  const { symbol: t } = w.currency;
  return `${t}${e.toLocaleString("en-IN")}`;
}
function L(e, t = "info") {
  const r = document.getElementById("toastContainer");
  if (!r) return;
  const n = document.createElement("div");
  ((n.className = `toast ${t}`),
    (n.textContent = e),
    r.appendChild(n),
    setTimeout(() => {
      ((n.style.opacity = "0"),
        (n.style.transform = "translateX(20px)"),
        (n.style.transition = "all 0.3s ease"),
        setTimeout(() => n.remove(), 300));
    }, w.toastDuration));
}
function q() {
  document.querySelectorAll("#cartCount").forEach((e) => {
    e.textContent = o.cart.reduce((t, r) => t + r.quantity, 0);
  });
}
function Ie() {
  document.querySelectorAll("#wishlistCount").forEach((e) => {
    e.textContent = o.wishlist.length;
  });
}
function Se() {
  let e = [...b];
  switch (
    (o.filters.category.length &&
      (e = e.filter((t) => o.filters.category.includes(t.category))),
    o.filters.skinType.length &&
      (e = e.filter((t) =>
        o.filters.skinType.some(
          (r) => t.skinType.includes(r) || t.skinType.includes("all"),
        ),
      )),
    o.filters.concern.length &&
      (e = e.filter((t) =>
        o.filters.concern.some((r) => t.concern.includes(r)),
      )),
    o.filters.special === "bestseller" &&
      (e = e.filter(
        (t) =>
          t.bestSeller === true ||
          t.badge === "Best Seller" ||
          t.badge === "Bestseller",
      )),
    o.filters.special === "new" &&
      (e = e.filter((t) => t.badge === "New")),
    (e = e.filter((t) => t.price <= o.filters.maxPrice)),
    o.filters.sortBy)
  ) {
    case "price-low":
      e.sort((t, r) => t.price - r.price);
      break;
    case "price-high":
      e.sort((t, r) => r.price - t.price);
      break;
    case "rating":
      e.sort((t, r) => r.rating - t.rating);
      break;
    case "newest":
      e.reverse();
      break;
  }
  return e;
}
function D(e) {
  const t = o.wishlist.some((n) => n.id === e.id),
    r = e.originalPrice
      ? Math.round(((e.originalPrice - e.price) / e.originalPrice) * 100)
      : 0,
    a = e.inStock !== !1;
  return `
    <div class="product-card${a ? "" : " out-of-stock"}">
      <div class="product-image">
        <img src="${e.image}" alt="${e.name}" class="product-img" loading="lazy">
        ${e.badge ? `<span class="product-badge">${e.badge}</span>` : ""}
        ${r > 0 ? `<span class="product-badge discount-badge">-${r}%</span>` : ""}
        ${a ? "" : `<span class="product-badge stock-badge">Out of Stock</span>`}
        <button class="product-wishlist ${t ? "wishlisted" : ""}" data-product-id="${e.id}" title="Wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${t ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="product-info">
        <div class="product-name">${e.name}</div>
        <div class="product-rating"><span class="stars">${"★".repeat(Math.round(e.rating))}${"☆".repeat(5 - Math.round(e.rating))}</span></div>
        <div class="product-price">
          ${k(e.price)}
          ${e.originalPrice ? `<span class="original-price">${k(e.originalPrice)}</span>` : ""}
        </div>
        <div class="product-actions">
          <button class="btn btn-primary add-cart-btn" data-product-id="${e.id}"${a ? "" : ' disabled aria-disabled="true"'}>${a ? "Add to Cart" : "Out of Stock"}</button>
          <button class="btn btn-secondary view-product-btn" data-product-id="${e.id}">View</button>
        </div>
      </div>
    </div>`;
}
function V() {
  (document
    .querySelectorAll(".add-cart-btn:not(:disabled)")
    .forEach((e) =>
      e.addEventListener("click", () => J(Number(e.dataset.productId))),
    ),
    document
      .querySelectorAll(".view-product-btn")
      .forEach((e) =>
        e.addEventListener(
          "click",
          () =>
            (window.location.href = `product.html?id=${e.dataset.productId}`),
        ),
      ),
    document
      .querySelectorAll(".product-wishlist")
      .forEach((e) =>
        e.addEventListener("click", () => G(Number(e.dataset.productId))),
      ));
}
const C = document.getElementById("menuToggle"),
  T = document.getElementById("navMenu"),
  U = document.getElementById("navbar");
C == null ||
  C.addEventListener("click", () => {
    (C.classList.toggle("active"), T == null || T.classList.toggle("open"));
  });
document.querySelectorAll(".nav-link").forEach((e) => {
  e.addEventListener("click", () => {
    (C == null || C.classList.remove("active"),
      T == null || T.classList.remove("open"));
  });
});
window.addEventListener("scroll", () =>
  U == null ? void 0 : U.classList.toggle("scrolled", window.scrollY > 20),
);
const N = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-link").forEach((e) => {
  const t = e.getAttribute("href");
  ((t === N || (N === "" && t === "index.html")) && e.classList.add("active"),
    t === "index.html" &&
      (N === "" || N === "index.html") &&
      e.classList.add("active"));
});
function Be() {
  document.body.classList.toggle("dark-mode", o.darkMode);
}
var ne;
(ne = document.getElementById("darkModeToggle")) == null ||
  ne.addEventListener("click", () => {
    ((o.darkMode = !o.darkMode),
      localStorage.setItem("darkMode", String(o.darkMode)),
      Be(),
      L(o.darkMode ? "Dark mode on" : "Light mode on"));
  });
Be();
function J(e, t = 1) {
  const r = b.find((i) => i.id === e);
  if (!r) return;
  if (r.inStock === !1) {
    L("This item is currently out of stock", "warning");
    return;
  }
  const n = o.cart.find((i) => i.id === e);
  (n ? (n.quantity += t) : o.cart.push({ ...r, quantity: t }),
    R(),
    q(),
    M(),
    L(`${r.name} added to cart`, "success"));
}
function qe(e) {
  ((o.cart = o.cart.filter((t) => t.id !== e)),
    R(),
    q(),
    M(),
    L("Item removed from cart"));
}
function Me(e, t) {
  const r = o.cart.find((n) => n.id === e);
  r && ((r.quantity = Math.max(1, t)), R(), M(), q());
}
function M() {
  const e = document.getElementById("cartItems");
  if (!e) return;
  if (o.cart.length === 0) {
    ((e.innerHTML = '<p class="empty-msg">Your cart is empty</p>'),
      ["subtotal", "total"].forEach((n) => {
        const i = document.getElementById(n);
        i && (i.textContent = k(0));
      }));
    return;
  }
  ((e.innerHTML = o.cart
    .map(
      (n) => `
    <div class="cart-item">
      <img src="${n.image}" alt="${n.name}" class="cart-item-img" loading="lazy">
      <div class="cart-item-info">
        <div class="cart-item-name">${n.name}</div>
        <div class="cart-item-price">${k(n.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" data-id="${n.id}" data-dir="-1">−</button>
          <span>${n.quantity}</span>
          <button class="qty-btn" data-id="${n.id}" data-dir="1">+</button>
        </div>
      </div>
      <button class="remove-cart-btn" data-id="${n.id}">✕</button>
    </div>`,
    )
    .join("")),
    e
      .querySelectorAll(".remove-cart-btn")
      .forEach((n) =>
        n.addEventListener("click", () => qe(Number(n.dataset.id))),
      ),
    e.querySelectorAll(".qty-btn").forEach((n) =>
      n.addEventListener("click", () => {
        const i = Number(n.dataset.id),
          s = o.cart.find((m) => m.id === i);
        s && Me(i, s.quantity + Number(n.dataset.dir));
      }),
    ));
  const t = o.cart.reduce((n, i) => n + i.price * i.quantity, 0);
  ["subtotal", "total"].forEach((n) => {
    const i = document.getElementById(n);
    i && (i.textContent = k(t));
  });
  const r = document.getElementById("shipping");
  r && (r.textContent = t >= w.freeShippingOver ? "Free" : k(100));
}
function G(e) {
  const t = b.find((n) => n.id === e);
  if (!t) return;
  const r = o.wishlist.findIndex((n) => n.id === e);
  (r > -1
    ? (o.wishlist.splice(r, 1), L(`${t.name} removed from wishlist`))
    : (o.wishlist.push(t), L(`${t.name} added to wishlist`, "success")),
    $e(),
    Ie(),
    xe(),
    W(),
    ze());
}
function xe() {
  const e = document.getElementById("wishlistItems");
  if (e) {
    if (o.wishlist.length === 0) {
      e.innerHTML = '<p class="empty-msg">Your wishlist is empty</p>';
      return;
    }
    ((e.innerHTML = o.wishlist
      .map(
        (t) => `
    <div class="wishlist-item">
      <img src="${t.image}" alt="${t.name}" class="wishlist-item-img" loading="lazy">
      <div class="wishlist-item-info">
        <div class="wishlist-item-name">${t.name}</div>
        <div class="wishlist-item-price">${k(t.price)}</div>
      </div>
      <div class="wish-item-actions">
        <button class="wish-add-cart-btn btn btn-primary" data-id="${t.id}">Add to Cart</button>
        <button class="remove-wish-btn" data-id="${t.id}">✕</button>
      </div>
    </div>`,
      )
      .join("")),
      e
        .querySelectorAll(".remove-wish-btn")
        .forEach((t) =>
          t.addEventListener("click", () => G(Number(t.dataset.id))),
        ),
      e
        .querySelectorAll(".wish-add-cart-btn")
        .forEach((t) =>
          t.addEventListener("click", () => { J(Number(t.dataset.id)); Ce(H); }),
        ));
  }
}
const v = document.getElementById("overlay"),
  H = document.getElementById("cartSidebar"),
  F = document.getElementById("wishlistSidebar");
function Ce(e) {
  (e == null || e.classList.add("open"), v == null || v.classList.add("open"));
}
function $() {
  var e;
  (H == null || H.classList.remove("open"),
    F == null || F.classList.remove("open"),
    v == null || v.classList.remove("open"),
    (e = document.getElementById("filtersSidebar")) == null ||
      e.classList.remove("open"));
}
var ie;
(ie = document.getElementById("cartBtn")) == null ||
  ie.addEventListener("click", () => Ce(H));
var re;
(re = document.getElementById("closeCart")) == null ||
  re.addEventListener("click", $);
var se;
(se = document.getElementById("continueShopping")) == null ||
  se.addEventListener("click", $);
var oe;
(oe = document.getElementById("wishlistBtn")) == null ||
  oe.addEventListener("click", () => { xe(); Ce(F); });
var ae;
(ae = document.getElementById("closeWishlist")) == null ||
  ae.addEventListener("click", $);
v == null || v.addEventListener("click", $);
const A = document.getElementById("productModal");
function Q(e) {
  const t = b.find((n) => n.id === e);
  if (!t) return;
  ((o.currentProduct = t),
    (document.getElementById("modalTitle").textContent = t.name),
    (document.getElementById("modalImg").src = t.image),
    (document.getElementById("modalPrice").textContent = k(t.price)));
  const r = document.getElementById("modalOriginalPrice");
  (r && (r.textContent = t.originalPrice ? k(t.originalPrice) : ""),
    (document.getElementById("modalDescription").textContent = t.description),
    (document.getElementById("modalUsage").textContent = t.usage),
    (document.getElementById("modalIngredients").innerHTML = t.ingredients
      .map((n) => `<li>${n}</li>`)
      .join("")),
    (document.getElementById("quantity").value = 1),
    A == null || A.classList.add("open"),
    v == null || v.classList.add("open"));
}
function j() {
  (A == null || A.classList.remove("open"),
    v == null || v.classList.remove("open"));
}
var ce;
(ce = document.getElementById("modalClose")) == null ||
  ce.addEventListener("click", j);
var le;
(le = document.getElementById("modalOverlay")) == null ||
  le.addEventListener("click", j);
var de;
(de = document.getElementById("increaseQty")) == null ||
  de.addEventListener("click", () => {
    const e = document.getElementById("quantity");
    e.value = parseInt(e.value) + 1;
  });
var ue;
(ue = document.getElementById("decreaseQty")) == null ||
  ue.addEventListener("click", () => {
    const e = document.getElementById("quantity");
    parseInt(e.value) > 1 && (e.value = parseInt(e.value) - 1);
  });
var me;
(me = document.getElementById("addToCartBtn")) == null ||
  me.addEventListener("click", () => {
    if (!o.currentProduct) return;
    const e = parseInt(document.getElementById("quantity").value) || 1;
    (J(o.currentProduct.id, e), j());
  });
var pe;
(pe = document.getElementById("addToWishlistBtn")) == null ||
  pe.addEventListener("click", () => {
    o.currentProduct && (G(o.currentProduct.id), j());
  });
function W() {
  const e = document.getElementById("productsGrid");
  if (!e) return;
  const t = Se();
  ((e.innerHTML = t.length
    ? t.map((r) => D(r)).join("")
    : '<p class="no-products">No products match your filters.</p>'),
    V());
}
const Y = document.getElementById("filtersSidebar");
var ge;
(ge = document.getElementById("filtersToggle")) == null ||
  ge.addEventListener("click", () => {
    (Y == null || Y.classList.add("open"),
      v == null || v.classList.add("open"));
  });
var fe;
(fe = document.getElementById("closeFilters")) == null ||
  fe.addEventListener("click", $);
document
  .querySelectorAll('.filter-checkbox[data-filter="category"]')
  .forEach((e) => {
    e.addEventListener("change", (t) => {
      o.filters.category = Array.from(
        document.querySelectorAll(
          '.filter-checkbox[data-filter="category"]:checked',
        ),
      ).map((r) => r.value);
    });
  });
document
  .querySelectorAll('.filter-checkbox[data-filter="skinType"]')
  .forEach((e) => {
    e.addEventListener("change", (t) => {
      if (t.target.value === "all")
        ((o.filters.skinType = []),
          document
            .querySelectorAll('.filter-checkbox[data-filter="skinType"]')
            .forEach((r) => (r.checked = !1)));
      else {
        const r = document.querySelector(
          '.filter-checkbox[data-filter="skinType"][value="all"]',
        );
        (r && (r.checked = !1),
          (o.filters.skinType = Array.from(
            document.querySelectorAll(
              '.filter-checkbox[data-filter="skinType"]:checked',
            ),
          ).map((n) => n.value)));
      }
    });
  });
document
  .querySelectorAll('.filter-checkbox[data-filter="concern"]')
  .forEach((e) => {
    e.addEventListener("change", (t) => {
      o.filters.concern = Array.from(
        document.querySelectorAll(
          '.filter-checkbox[data-filter="concern"]:checked',
        ),
      ).map((r) => r.value);
    });
  });
var ye;
(ye = document.getElementById("priceRange")) == null ||
  ye.addEventListener("input", (e) => {
    o.filters.maxPrice = parseInt(e.target.value);
    const t = document.getElementById("priceValue");
    t && (t.textContent = k(parseInt(e.target.value)));
  });
var he;
(he = document.getElementById("sortSelect")) == null ||
  he.addEventListener("change", (e) => {
    o.filters.sortBy = e.target.value;
  });
var ve;
(ve = document.getElementById("applyFilters")) == null ||
  ve.addEventListener("click", () => {
    (W(), $(), L("Filters applied"));
  });
var Ee;
(Ee = document.getElementById("resetFilters")) == null ||
  Ee.addEventListener("click", () => {
    ((o.filters = {
      category: [],
      skinType: [],
      concern: [],
      special: null,
      maxPrice: w.priceFilter.default,
      sortBy: "featured",
    }),
      document
        .querySelectorAll(".filter-checkbox")
        .forEach((n) => (n.checked = !1)));
    const e = document.getElementById("priceRange");
    e && (e.value = w.priceFilter.default);
    const t = document.getElementById("priceValue");
    t && (t.textContent = k(w.priceFilter.default));
    const r = document.getElementById("sortSelect");
    (r && (r.value = "featured"), W(), L("Filters reset"));
  });
document.querySelectorAll(".concern-card").forEach((e) => {
  e.addEventListener("click", () => {
    const t = e.dataset.concern;
    window.location.href = `shop.html?concern=${t}`;
  });
});
const Te = new URLSearchParams(window.location.search),
  K = Te.get("concern"),
  Z = Te.get("skinType"),
  Qcat = Te.get("category"),
  Qspec = Te.get("special");
K && (o.filters.concern = [K]);
Z && (o.filters.skinType = [Z]);
Qcat &&
  ((o.filters.category = [Qcat]),
    document
      .querySelectorAll(
        `.filter-checkbox[data-filter="category"][value="${Qcat}"]`,
      )
      .forEach((e) => (e.checked = !0)));
Qspec && (o.filters.special = Qspec);
function ze() {
  const e = document.getElementById("featuredGrid");
  if (!e) return;
  const t = b
    .filter((r) => r.badge === "Best Seller" || r.badge === "Bestseller")
    .slice(0, 4);
  ((e.innerHTML = t.map((r) => D(r)).join("")), V());
}
ze();
(function () {
  function e(p) {
    return p.length
      ? p
          .map(
            (u) => `
      <div class="search-result-item" data-id="${u.id}" tabindex="0" role="option">
        <img src="${u.image}" alt="${u.name}" class="search-result-img" loading="lazy">
        <div class="search-result-info">
          <div class="search-result-name">${u.name}</div>
          <div class="search-result-price">${k(u.price)}</div>
        </div>
      </div>`,
          )
          .join("")
      : '<div class="search-no-results">No products found</div>';
  }
  function t(p) {
    if (!p || p.length < 1) return [];
    const u = p.toLowerCase();
    return b
      .filter(
        (c) =>
          c.name.toLowerCase().includes(u) ||
          c.description.toLowerCase().includes(u) ||
          (c.concern || []).join(" ").includes(u) ||
          (c.skinType || []).join(" ").includes(u),
      )
      .slice(0, 6);
  }
  function r(p, u) {
    p.querySelectorAll(".search-result-item").forEach((c) => {
      const h = () => {
        u(Number(c.dataset.id));
      };
      (c.addEventListener("click", h),
        c.addEventListener("keydown", (B) => {
          (B.key === "Enter" || B.key === " ") && (B.preventDefault(), h());
        }));
    });
  }
  const n = document.getElementById("searchInput"),
    i = document.getElementById("searchDropdown");
  if (n && i) {
    let p = function (c) {
        const h = t(c);
        if (!c) {
          u();
          return;
        }
        ((i.innerHTML = e(h)),
          i.classList.add("active"),
          r(i, (B) => {
            (Q(B), u(), (n.value = ""));
          }));
      },
      u = function () {
        i.classList.remove("active");
      };
    var S = p,
      l = u;
    (n.addEventListener("input", (c) => p(c.target.value.trim())),
      n.addEventListener("keydown", (c) => {
        if ((c.key === "Escape" && (u(), n.blur()), c.key === "ArrowDown")) {
          c.preventDefault();
          const h = i.querySelector(".search-result-item");
          h && h.focus();
        }
      }),
      i.addEventListener("keydown", (c) => {
        var z;
        const h = [...i.querySelectorAll(".search-result-item")],
          B = h.indexOf(document.activeElement);
        c.key === "ArrowDown"
          ? (c.preventDefault(), (z = h[B + 1] || h[0]) == null || z.focus())
          : c.key === "ArrowUp"
            ? (c.preventDefault(), B > 0 ? h[B - 1].focus() : n.focus())
            : c.key === "Escape" && (u(), n.focus());
      }),
      document.addEventListener(
        "click",
        (c) => {
          n.closest(".search-wrapper").contains(c.target) || u();
        },
        !0,
      ),
      window.addEventListener("scroll", u, { passive: !0 }));
  }
  const s = document.getElementById("mobileSearchBtn"),
    m = document.getElementById("mobileSearchOverlay"),
    E = document.getElementById("mobileSearchClose"),
    y = document.getElementById("mobileSearchInput"),
    d = document.getElementById("mobileSearchResults");
  if (s && m && y && d) {
    let p = function () {
        (m.classList.add("open"),
          d.classList.remove("open"),
          (d.innerHTML = ""),
          (y.value = ""),
          setTimeout(() => y.focus(), 50),
          (document.body.style.overflow = "hidden"));
      },
      u = function () {
        (m.classList.remove("open"),
          d.classList.remove("open"),
          (d.innerHTML = ""),
          (y.value = ""),
          (document.body.style.overflow = ""));
      },
      c = function (h) {
        if (!h) {
          (d.classList.remove("open"), (d.innerHTML = ""));
          return;
        }
        const B = t(h);
        ((d.innerHTML = e(B)),
          d.classList.add("open"),
          r(d, (z) => {
            (u(), Q(z));
          }));
      };
    var g = p,
      a = u,
      f = c;
    (s.addEventListener("click", p),
      E.addEventListener("click", u),
      y.addEventListener("input", (h) => c(h.target.value.trim())),
      y.addEventListener("keydown", (h) => {
        h.key === "Escape" && u();
      }),
      document.addEventListener("keydown", (h) => {
        h.key === "Escape" && m.classList.contains("open") && u();
      }));
  }
})();
const _ = document.getElementById("shopSearch");
_ == null ||
  _.addEventListener("input", (e) => {
    const t = e.target.value.toLowerCase().trim(),
      r = document.getElementById("productsGrid");
    if (!r) return;
    const n = t
      ? b.filter(
          (i) =>
            i.name.toLowerCase().includes(t) ||
            i.description.toLowerCase().includes(t),
        )
      : Se();
    ((r.innerHTML = n.length
      ? n.map((i) => D(i)).join("")
      : '<p class="no-products">No products found.</p>'),
      V());
  });
var ke;
(ke = document.getElementById("newsletterForm")) == null ||
  ke.addEventListener("submit", (e) => {
    e.preventDefault();
    const t = e.target.querySelector('input[type="email"]').value;
    (L(`Thanks for subscribing, ${t}!`, "success"), e.target.reset());
  });
const P = document.getElementById("backToTop");
window.addEventListener("scroll", () =>
  P == null ? void 0 : P.classList.toggle("show", window.scrollY > 300),
);
P == null ||
  P.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
const Ne = new IntersectionObserver(
  (e) => {
    e.forEach((t) => {
      t.isIntersecting && t.target.classList.add("visible");
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);
document.querySelectorAll(".reveal").forEach((e) => Ne.observe(e));
/* checkout-btn removed */
q();
Ie();
M();
xe();
W();
const O = document.getElementById("priceRange");
O &&
  ((O.min = w.priceFilter.min),
  (O.max = w.priceFilter.max),
  (O.value = w.priceFilter.default));
const ee = document.getElementById("priceValue");
ee && (ee.textContent = k(w.priceFilter.default));
const te = document.getElementById("priceMin");
te && (te.textContent = k(w.priceFilter.min));
(function () {
  var l, g;
  const e = document.getElementById("heroCarouselTrack"),
    t = document.getElementById("heroDots");
  if (!e) return;
  const r = e.querySelectorAll(".carousel-slide");
  let n = 0,
    i = null;
  const s = r.length;
  const fill = document.getElementById("heroProgressFill");
  const numCur = document.getElementById("heroSlideNumCur");
  const numTotal = document.getElementById("heroSlideNumTotal");
  if (numTotal) numTotal.textContent = String(s).padStart(2, "0");

  function m(a) {
    n = ((a % s) + s) % s;
    e.style.transform = `translateX(-${n * 100}%)`;
    // active class on slides (drives CSS entrance animations)
    r.forEach((slide, idx) => slide.classList.toggle("active", idx === n));
    // dots
    document
      .querySelectorAll(".carousel-dot")
      .forEach((f, p) => f.classList.toggle("active", p === n));
    // counter
    if (numCur) numCur.textContent = String(n + 1).padStart(2, "0");
    // progress bar
    if (fill) {
      fill.classList.remove("animating");
      fill.style.width = "0%";
      void fill.offsetWidth;
      fill.classList.add("animating");
    }
  }
  function E() {
    y();
    i = setInterval(() => m(n + 1), 5e3);
  }
  function y() {
    clearInterval(i);
    if (fill) {
      fill.classList.remove("animating");
      fill.style.width = "0%";
    }
  }
  if (
    ((l = document.getElementById("heroPrev")) == null ||
      l.addEventListener("click", () => {
        y();
        m(n - 1);
        E();
      }),
    (g = document.getElementById("heroNext")) == null ||
      g.addEventListener("click", () => {
        y();
        m(n + 1);
        E();
      }),
    t)
  )
    for (let a = 0; a < s; a++) {
      const f = document.createElement("button");
      f.className = `carousel-dot ${a === 0 ? "active" : ""}`;
      f.setAttribute("aria-label", "Go to slide " + (a + 1));
      f.addEventListener("click", () => {
        y();
        m(a);
        E();
      });
      t.appendChild(f);
    }
  const d = document.querySelector(".hero-carousel");
  d == null || d.addEventListener("mouseenter", y);
  d == null || d.addEventListener("mouseleave", E);
  let S = 0;
  d == null ||
    d.addEventListener(
      "touchstart",
      (a) => {
        S = a.touches[0].clientX;
      },
      { passive: true },
    );
  d == null ||
    d.addEventListener(
      "touchend",
      (a) => {
        const f = S - a.changedTouches[0].clientX;
        Math.abs(f) > 40 && (y(), m(n + (f > 0 ? 1 : -1)), E());
      },
      { passive: true },
    );
  // init — mark first slide active then start
  r[0] && r[0].classList.add("active");
  E();
})();
(function () {
  var g, a;
  const e = document.getElementById("brandTrack");
  if (!e) return;
  const t = e.querySelectorAll(".slide"),
    r = document.querySelectorAll("#brandDots .cdot"),
    n = t.length;
  let i = 0,
    s = null;
  function m() {
    const f = parseInt(getComputedStyle(e).gap) || 0;
    return t[0].getBoundingClientRect().width + f;
  }
  function E(f) {
    ((i = ((f % n) + n) % n),
      (e.style.transform = `translateX(-${i * m()}px)`),
      r.forEach((p, u) => p.classList.toggle("active", u === i)));
  }
  function y() {
    (d(), (s = setInterval(() => E(i + 1), 5e3)));
  }
  function d() {
    clearInterval(s);
  }
  ((g = document.getElementById("brandPrev")) == null ||
    g.addEventListener("click", () => {
      (d(), E(i - 1), y());
    }),
    (a = document.getElementById("brandNext")) == null ||
      a.addEventListener("click", () => {
        (d(), E(i + 1), y());
      }),
    r.forEach((f) =>
      f.addEventListener("click", () => {
        (d(), E(+f.dataset.idx), y());
      }),
    ));
  const S = e.parentElement;
  (S.addEventListener("mouseenter", d), S.addEventListener("mouseleave", y));
  let l = 0;
  (S.addEventListener(
    "touchstart",
    (f) => {
      l = f.touches[0].clientX;
    },
    { passive: !0 },
  ),
    S.addEventListener(
      "touchend",
      (f) => {
        const p = l - f.changedTouches[0].clientX;
        Math.abs(p) > 40 && (d(), E(i + (p > 0 ? 1 : -1)), y());
      },
      { passive: !0 },
    ),
    window.addEventListener("resize", () => E(i)),
    y());
})();
(function () {
  var S;
  const e = document.querySelectorAll(".quiz-step");
  if (!e.length) return;
  const t = document.querySelectorAll(".quiz-progress-step"),
    r = document.getElementById("quizResults");
  let n = 0;
  const i = {};
  function s(l) {
    (e.forEach((g, a) => g.classList.toggle("active", a === l)),
      t.forEach((g, a) => {
        (g.classList.toggle("active", a === l),
          g.classList.toggle("done", a < l));
      }),
      (n = l));
  }
  (document.querySelectorAll(".quiz-option").forEach((l) => {
    l.addEventListener("click", () => {
      const g = l.closest(".quiz-step");
      (g
        .querySelectorAll(".quiz-option")
        .forEach((a) => a.classList.remove("selected")),
        l.classList.add("selected"),
        (i[g.dataset.step] = l.dataset.value));
    });
  }),
    document.querySelectorAll(".quiz-next").forEach((l) => {
      l.addEventListener("click", () => {
        if (!e[n].querySelector(".quiz-option.selected")) {
          L("Please select an option", "error");
          return;
        }
        n < e.length - 1 ? s(n + 1) : m();
      });
    }),
    document.querySelectorAll(".quiz-prev").forEach((l) => {
      l.addEventListener("click", () => {
        n > 0 && s(n - 1);
      });
    }));
  function m() {
    (e.forEach((c) => c.classList.remove("active")),
      t.forEach((c) => {
        (c.classList.remove("active"), c.classList.add("done"));
      }),
      r && r.classList.add("active"));
    const l = E(),
      g = y(l),
      a = d(l),
      f = document.getElementById("quizSkinType"),
      p = document.getElementById("quizDescription"),
      u = document.getElementById("quizProductsGrid");
    (f && (f.textContent = l + " Skin"),
      p && (p.textContent = g),
      u && ((u.innerHTML = a.map((c) => D(c)).join("")), V()));
  }
  function E() {
    const l = i[2] || "",
      g = i[3] || "";
    return l === "oily"
      ? "Oily"
      : l === "tzone"
        ? "Combination"
        : l === "tight"
          ? "Dry"
          : g === "frequently"
            ? "Oily"
            : (i[4] || "") === "always"
              ? "Sensitive"
              : "Normal";
  }
  function y(l) {
    const g = {
      Oily: "Your skin tends to produce excess sebum, leading to shine and enlarged pores. Focus on lightweight, non-comedogenic formulas with balancing ingredients like niacinamide.",
      Dry: "Your skin lacks moisture and may feel tight or flaky. Rich, hydrating formulas with ceramides and hyaluronic acid will help restore and maintain your skin barrier.",
      Combination:
        "You have an oily T-zone with normal or dry cheeks. Balance is key — use gentle products that hydrate dry areas without over-stimulating oily zones.",
      Sensitive:
        "Your skin reacts easily to new products. Stick to fragrance-free, gentle formulas with calming ingredients like centella asiatica and aloe vera.",
      Normal:
        "Your skin is well-balanced. You have flexibility to use a wide range of products — focus on prevention and maintaining your healthy skin barrier.",
    };
    return g[l] || g.Normal;
  }
  function d(l) {
    return (
      {
        Oily: b
          .filter(
            (a) => a.skinType.includes("oily") || a.concern.includes("oily"),
          )
          .slice(0, 3),
        Dry: b
          .filter(
            (a) => a.skinType.includes("dry") || a.concern.includes("dry"),
          )
          .slice(0, 3),
        Combination: b
          .filter(
            (a) => a.skinType.includes("all") || a.skinType.includes("oily"),
          )
          .slice(0, 3),
        Sensitive: b
          .filter((a) => a.skinType.includes("sensitive"))
          .slice(0, 3),
        Normal: b.filter((a) => a.skinType.includes("all")).slice(0, 3),
      }[l] || b.slice(0, 3)
    );
  }
  ((S = document.getElementById("quizRestart")) == null ||
    S.addEventListener("click", () => {
      ((i.length = 0),
        document
          .querySelectorAll(".quiz-option")
          .forEach((l) => l.classList.remove("selected")),
        r && r.classList.remove("active"),
        s(0));
    }),
    s(0));
})();
window.addToCart = J;
window.toggleWishlist = G;
window.showToast = L;
window.state = o;
window.CONFIG = w;
document.addEventListener("click", (e) => {
  if (!e.target.closest(".checkout-btn")) return;
  if (!JSON.parse(localStorage.getItem("velmira_cart") || "[]").length) {
    typeof window.showToast == "function"
      ? window.showToast("Your cart is empty", "warning")
      : alert("Your cart is empty. Add some products first!");
    return;
  }
  window.location.href = "/checkout.html";
});
const X = document.getElementById("checkoutBtn"),
  x = document.getElementById("checkoutModal");
X == null ||
  X.addEventListener("click", () => {
    if (o.cart.length === 0) {
      L("Your cart is empty");
      return;
    }
    const e = o.cart.reduce((t, r) => t + r.price * r.quantity, 0);
    ((document.getElementById("checkoutTotal").textContent = k(e)),
      x == null || x.classList.add("open"));
  });
var be;
(be = document.getElementById("closeCheckout")) == null ||
  be.addEventListener("click", () => {
    x == null || x.classList.remove("open");
  });
var we;
(we = document.getElementById("placeOrderBtn")) == null ||
  we.addEventListener("click", () => {
    // Only handle modal-based checkout (not the full checkout page)
    if (x && x.classList.contains("open")) {
      (L("Order placed successfully!", "success"),
        (o.cart = []),
        R(),
        q(),
        M(),
        x.classList.remove("open"));
    }
  });
window.__submitLock = !1;
