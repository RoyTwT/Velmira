import"./script-CbRYxaYZ.js";/* empty css              */window.__imgFail=function(a){a.onerror=null,a.src="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f1f5f9"/><circle cx="100" cy="88" r="30" fill="#cbd5e1"/><path d="M44 168 Q100 128 156 168" stroke="#cbd5e1" stroke-width="22" fill="none" stroke-linecap="round"/></svg>'),a.style.opacity="0.55",a.alt="Image unavailable"};function h(a){try{const{symbol:s,decimals:r}=window.CONFIG.currency;return s+Number(a).toFixed(r).replace(/\B(?=(\d{3})+(?!\d))/g,",")}catch{return"৳"+Number(a).toLocaleString("en-BD")}}function E(a){const s=Math.round(a);return"★".repeat(s)+"☆".repeat(5-s)}const P={"hyaluronic acid":{icon:"💧",benefit:"Deep Hydration",desc:"A powerful humectant that holds up to 1,000× its weight in water, plumping fine lines and delivering long-lasting hydration."},niacinamide:{icon:"✨",benefit:"Brightening & Pore-Minimizing",desc:"Vitamin B3 that visibly minimises pores, evens skin tone, reduces redness, and strengthens the skin barrier."},retinol:{icon:"⏪",benefit:"Anti-Aging",desc:"Proven Vitamin A derivative that accelerates cell turnover, stimulates collagen, and fades hyperpigmentation. Use at night."},"vitamin c":{icon:"🍊",benefit:"Brightening & Antioxidant",desc:"Neutralises free radicals, inhibits melanin synthesis for a brighter complexion, and boosts collagen production."},peptides:{icon:"🧬",benefit:"Firming & Lifting",desc:"Short amino acid chains that signal skin to produce more collagen and elastin — firmer, smoother skin over time."},ceramides:{icon:"🛡️",benefit:"Barrier Repair",desc:"Lipid molecules making up ~50% of the skin's outer layer. Lock in moisture and restore a compromised skin barrier."},"vitamin e":{icon:"🌾",benefit:"Antioxidant & Healing",desc:"Fat-soluble antioxidant that protects cell membranes from oxidative stress and works synergistically with Vitamin C."},squalane:{icon:"🌿",benefit:"Lightweight Moisture",desc:"Plant-derived lipid that mimics skin's own sebum — non-comedogenic moisture without greasiness for all skin types."},"salicylic acid":{icon:"💊",benefit:"Acne Control",desc:"BHA that penetrates pores, dissolving excess sebum and dead cell debris. Reduces blackheads and breakouts."},"centella asiatica":{icon:"🌱",benefit:"Soothing & Healing",desc:"Rich in triterpenoids that calm redness, accelerate healing, and strengthen the barrier — ideal for reactive skin."},"rosehip oil":{icon:"🌹",benefit:"Brightening & Regeneration",desc:"Rich in essential fatty acids and natural retinoids. Fades scars, evens tone, and supports cell renewal."},"aloe vera":{icon:"🌵",benefit:"Soothing & Cooling",desc:"Polysaccharides and vitamins that calm inflammation, reduce sunburn, and deliver lightweight hydration."},"green tea extract":{icon:"🍵",benefit:"Antioxidant Protection",desc:"Rich in catechins (EGCG) that neutralise free radicals and have mild antibacterial properties for acne-prone skin."},"ferulic acid":{icon:"🌻",benefit:"Antioxidant Booster",desc:"Doubles the photoprotective effect of Vitamins C and E when combined, and stabilises Vitamin C formulas."},bakuchiol:{icon:"🌿",benefit:"Natural Retinol Alternative",desc:"Plant-derived retinol mimic without photosensitivity — safe for daytime use with similar anti-aging results."},caffeine:{icon:"☕",benefit:"De-Puffing",desc:"Constricts blood vessels and reduces fluid accumulation — visibly reduces puffiness and dark circles around eyes."},"shea butter":{icon:"🧈",benefit:"Rich Moisture",desc:"Emollient packed with fatty acids and vitamins that deeply nourishes, softens, and protects dry or damaged skin."},"jojoba oil":{icon:"🫒",benefit:"Balancing Moisture",desc:"A liquid wax that closely resembles skin's natural sebum — moisturises without clogging pores, for all skin types."},"zinc oxide":{icon:"🔆",benefit:"UV Protection",desc:"Broad-spectrum mineral UV filter that physically reflects UV rays. Gentle enough for sensitive and children's skin."},"titanium dioxide":{icon:"🛡️",benefit:"Broad-Spectrum SPF",desc:"Mineral sunscreen agent reflecting UVA and UVB rays. Non-irritating and ideal for sensitive or reactive skin."},"papaya enzyme":{icon:"🍈",benefit:"Gentle Exfoliation",desc:"Papain enzyme gently dissolves dead skin cells without physical scrubbing, leaving skin smoother and brighter."},chamomile:{icon:"🌼",benefit:"Anti-Inflammatory",desc:"Flavonoids in chamomile calm redness, reduce irritation, and have mild antioxidant properties."},"coconut oil":{icon:"🥥",benefit:"Deep Nourishment",desc:"Rich in lauric acid for antimicrobial and deeply moisturising properties. Best suited for dry or normal skin."},"benzoyl peroxide":{icon:"⚗️",benefit:"Antibacterial",desc:"Kills acne-causing bacteria on contact and helps unclog pores. Effective for inflammatory acne — introduce slowly."},sulfur:{icon:"🔬",benefit:"Acne & Oil Control",desc:"Reduces excess oil production and has mild antibacterial properties. Used in targeted spot treatments."},"tea tree oil":{icon:"🌲",benefit:"Antibacterial & Soothing",desc:"Natural antimicrobial that fights acne-causing bacteria while calming redness and inflammation."},panthenol:{icon:"💊",benefit:"Hydration & Repair",desc:"Pro-vitamin B5 that deeply hydrates, improves elasticity, and supports the skin's natural repair processes."},allantoin:{icon:"🌸",benefit:"Soothing & Protective",desc:"Ultra-gentle ingredient that promotes cell regeneration, soothes irritation, and softens the skin."},"l-ascorbic acid":{icon:"🍊",benefit:"Vitamin C — Brightening",desc:"The most potent and well-researched form of Vitamin C, delivering maximum brightening and antioxidant benefit."}};const CATL={cleanser:"Cleanser",moisturizer:"Moisturizer",serum:"Serum",sunscreen:"Sunscreen","eye-care":"Eye Care",mask:"Mask",toner:"Toner",treatment:"Treatment","hair-care":"Hair Care",combo:"Combo & Set"};function CATLABEL(a){return CATL[a]||(a?a.charAt(0).toUpperCase()+a.slice(1):"")}function L(a){const s=a.toLowerCase().trim();for(const[r,t]of Object.entries(P))if(s.includes(r)||r.includes(s))return{name:a,...t};return{name:a,icon:"🧪",benefit:"Active Ingredient",desc:"A carefully selected active that contributes to this formula's performance in synergy with the other ingredients."}}function q(a){const s=a?a.split(/\.\s+/).filter(t=>t.trim().length>4):[],r=["Cleanse First","Apply Gently","Pat to Absorb","Layer as Needed","Seal with Moisturiser","Finish with SPF"];return s.length?s.map((t,o)=>({title:r[o]||`Step ${o+1}`,desc:t.trim().replace(/\.$/,"")+"."})):[{title:"Cleanse",desc:"Start with a gentle cleanser to remove impurities and prepare skin to fully absorb the product."},{title:"Tone (Optional)",desc:"Apply toner to balance skin pH before layering treatment products."},{title:"Apply",desc:"Dispense a small amount and apply evenly across the face and neck, avoiding the eye area."},{title:"Massage In",desc:"Use light upward strokes to massage until fully absorbed."},{title:"Moisturise",desc:"Lock in the active ingredients with your preferred moisturiser."},{title:"SPF in the Morning",desc:"Always finish your morning routine with broad-spectrum SPF 30+ to protect your results."}]}const g={acne:["Patch test before full application.","Don't over-apply — more doesn't mean faster results.","Avoid mixing with other strong actives until your skin adjusts."],dry:["Apply to damp skin to seal in extra moisture.","Follow with a richer moisturiser at night.","Use morning and evening for best results."],brightening:["Allow 4–6 weeks of daily use to see visible brightening.","Always pair with SPF during the day.","Can be layered under moisturiser for enhanced efficacy."],aging:["Apply to clean, dry skin before heavier products.","Start 2–3 nights per week and increase over time.","Most visible improvement appears after 8–12 weeks."],oily:["A lightweight moisturiser is still essential even for oily skin.","Use sparingly — a pea-sized amount covers the face.","Blot rather than wipe if skin feels oily."],sensitive:["Patch test 24 hours before first use.","Avoid combining with fragranced products.","Introduce slowly — once every other day to start."],default:["Store in a cool, dry place away from direct sunlight.","Perform a patch test if you have reactive skin.","Allow 4–8 weeks of consistent use to see results."]};function F(a){if(!a||!a.length)return g.default;for(const s of a)if(g[s])return g[s];return g.default}function N(a,s,r){return s.filter(t=>t.id!==a.id).map(t=>{let o=0;return(a.skinType||[]).forEach(c=>{(t.skinType||[]).includes(c)&&(o+=2)}),(a.concern||[]).forEach(c=>{(t.concern||[]).includes(c)&&(o+=3)}),{product:t,score:o}}).sort((t,o)=>o.score-t.score).slice(0,r).map(t=>t.product)}function $(){const a=new URLSearchParams(window.location.search),s=parseInt(a.get("id"),10),r=document.getElementById("pdpRoot");if(!window.products){requestAnimationFrame($);return}if(isNaN(s)){r.innerHTML=A(),p();return}const t=window.products.find(e=>e.id===s);if(!t){r.innerHTML=A(),p();return}document.title=t.name+" — Velmira Premium Skincare";const o=document.querySelector('meta[name="description"]');o&&(o.content=t.description||"");const c=(t.ingredients||[]).map(L),S=q(t.usage),I=F(t.concern),v=t.originalPrice?Math.round((1-t.price/t.originalPrice)*100):0,b=N(t,window.products,3),C=[t.image,t.image],y=t.reviews||Math.round(t.rating*17+12);const _=t.inStock!==!1;r.innerHTML=`
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span class="breadcrumb-sep" aria-hidden="true">›</span>
            <a href="shop.html">Shop</a>
            <span class="breadcrumb-sep" aria-hidden="true">›</span>
            <span aria-current="page">${t.name}</span>
          </nav>

          <section class="product-detail-section${_?"":" out-of-stock"}" aria-label="Product details">
            <div class="product-detail-grid">

              <!-- Images -->
              <div class="product-detail-images">
                <div class="product-main-image" id="mainImgWrap">
                  <img id="mainImg" src="${t.image}" alt="${t.name}" onerror="window.__imgFail&&window.__imgFail(this)" />
                  ${t.badge?`<span class="product-badge-pdp">${t.badge}</span>`:""}
                  ${_?"":`<span class="product-badge-pdp stock-badge-pdp">Out of Stock</span>`}
                </div>
                <div class="product-thumbnails" id="thumbRow" role="list">
                  ${C.map((e,i)=>`
                    <div class="product-thumb ${i===0?"active":""}" data-img="${e}"
                      role="listitem" tabindex="0" aria-label="View ${i===0?"main":"alternate"} image">
                      <img src="${e}" alt="${t.name} view ${i+1}" onerror="window.__imgFail&&window.__imgFail(this)" />
                    </div>
                  `).join("")}
                </div>
              </div>

              <!-- Info -->
              <div class="product-detail-info">
                <div class="product-detail-category">
                  ${t.category?CATLABEL(t.category):(t.concern||[]).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" · ")}
                </div>
                <h1 class="product-detail-name">${t.name}</h1>
                <div class="product-detail-rating">
                  <span class="rating-stars" aria-hidden="true">${E(t.rating||0)}</span>
                  <span class="rating-count" aria-label="${t.rating} out of 5 — ${y} reviews">
                    ${t.rating?t.rating.toFixed(1):""} (${y} reviews)
                  </span>
                </div>
                <div class="product-detail-price">
                  <span class="pdp-price">${h(t.price)}</span>
                  ${t.originalPrice?`<span class="pdp-original-price" aria-label="Original price">${h(t.originalPrice)}</span>`:""}
                  ${v>0?`<span class="pdp-discount-badge">${v}% off</span>`:""}
                </div>
                <p class="product-detail-desc">${t.description||""}</p>

                <div class="skin-type-tags" aria-label="Suitable for">
                  ${(t.skinType||[]).map(e=>`<span class="skin-tag">${e==="all"?"All Skin Types":e+" skin"}</span>`).join("")}
                </div>

                <div class="pdp-qty-row">
                  <span class="pdp-qty-label" id="qtyLabel">Quantity</span>
                  <div class="qty-control" role="group" aria-labelledby="qtyLabel">
                    <button class="qty-btn" id="qtyMinus" aria-label="Decrease quantity"${_?"":" disabled"}>−</button>
                    <span class="qty-value" id="qtyVal" aria-live="polite" aria-label="Quantity">1</span>
                    <button class="qty-btn" id="qtyPlus" aria-label="Increase quantity"${_?"":" disabled"}>+</button>
                  </div>
                </div>

                <div class="pdp-actions">
                  <button class="pdp-add-cart" id="pdpAddCart" aria-label="${_?"Add "+t.name+" to cart":"Out of stock"}"${_?"":" disabled"}>${_?"Add to Cart":"Out of Stock"}</button>
                  <button class="pdp-wishlist-btn" id="pdpWishlist" aria-label="Add to wishlist" aria-pressed="false">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </button>
                </div>

                <div class="pdp-trust-row" aria-label="Product guarantees">
                  <div class="pdp-trust-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    Dermatologist Tested
                  </div>
                  <div class="pdp-trust-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    Cruelty-Free
                  </div>
                  <div class="pdp-trust-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    Free Shipping over ৳5,000
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- TABBED CONTENT -->
          <section class="product-content-section">
            <div class="content-tabs" role="tablist" aria-label="Product information">
              <button class="content-tab active" data-tab="ingredients" role="tab" aria-selected="true" aria-controls="tab-ingredients" id="tab-btn-ingredients">Ingredients</button>
              <button class="content-tab" data-tab="how-to-use" role="tab" aria-selected="false" aria-controls="tab-how-to-use" id="tab-btn-how-to-use">How to Use</button>
            </div>

            <div class="tab-panel active" id="tab-ingredients" role="tabpanel" aria-labelledby="tab-btn-ingredients">
              <p class="ingredients-intro">
                Every ingredient in this formula is chosen for a specific purpose. Here's what each active brings to your skin.
              </p>
              <div class="ingredients-grid">
                ${c.map(e=>`
                  <div class="ingredient-card reveal">
                    <div class="ingredient-icon" aria-hidden="true">${e.icon}</div>
                    <div class="ingredient-name">${e.name}</div>
                    <div class="ingredient-benefit">${e.benefit}</div>
                    <p class="ingredient-desc">${e.desc}</p>
                  </div>
                `).join("")}
              </div>
              <div class="full-inci">
                <h4>Full Ingredient List (INCI)</h4>
                <p>${(t.ingredients||[]).join(", ")}, Aqua, Glycerin, Butylene Glycol, Phenoxyethanol, Ethylhexylglycerin, Carbomer, Sodium Hydroxide, Citric Acid.</p>
              </div>
            </div>

            <div class="tab-panel" id="tab-how-to-use" role="tabpanel" aria-labelledby="tab-btn-how-to-use">
              <p class="usage-intro">
                Consistency is key — most active ingredients take 4–8 weeks to show their full effect.
              </p>
              <div class="usage-steps">
                ${S.map((e,i)=>`
                  <div class="usage-step reveal">
                    <div class="step-number" aria-hidden="true">${i+1}</div>
                    <div class="step-content">
                      <div class="step-title">${e.title}</div>
                      <div class="step-desc">${e.desc}</div>
                    </div>
                  </div>
                `).join("")}
              </div>
              <div class="usage-tips">
                <h4>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  Pro Tips
                </h4>
                <ul>${I.map(e=>`<li>${e}</li>`).join("")}</ul>
              </div>
            </div>
          </section>

          ${b.length>0?`
          <section class="fbt-section" aria-label="Frequently bought together">
            <div class="fbt-header">
              <div class="section-eyebrow">Pairs Well With</div>
              <h2 class="section-title" style="font-family:var(--font-serif);font-size:clamp(24px,3vw,36px);font-weight:300;">Frequently Bought <em>Together</em></h2>
            </div>
            <div class="fbt-grid">
              ${b.map(e=>`
                <a class="fbt-card reveal${e.inStock===!1?" out-of-stock":""}" href="product.html?id=${e.id}" aria-label="${e.name}, ${h(e.price)}">
                  <div class="fbt-img-wrap">
                    <img src="${e.image}" alt="${e.name}" loading="lazy" decoding="async" onerror="window.__imgFail&&window.__imgFail(this)" />
                    ${e.badge?`<span class="fbt-badge">${e.badge}</span>`:""}
                    ${e.inStock===!1?`<span class="fbt-badge stock-badge-pdp">Out of Stock</span>`:""}
                  </div>
                  <div class="fbt-info">
                    <div class="fbt-name">${e.name}</div>
                    <div class="fbt-desc">${e.description||""}</div>
                    <div class="fbt-price-row">
                      <div>
                        <span class="fbt-price">${h(e.price)}</span>
                        ${e.originalPrice?`<span class="fbt-original">${h(e.originalPrice)}</span>`:""}
                      </div>
                      <button class="fbt-add-btn" data-product-id="${e.id}" aria-label="Add ${e.name} to cart" onclick="event.preventDefault();"${e.inStock===!1?" disabled":""}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      </button>
                    </div>
                  </div>
                </a>
              `).join("")}
            </div>
          </section>
          `:""}
        `,document.querySelectorAll(".product-thumb").forEach(e=>{const i=()=>{document.querySelectorAll(".product-thumb").forEach(n=>n.classList.remove("active")),e.classList.add("active"),document.getElementById("mainImg").src=e.dataset.img};e.addEventListener("click",i),e.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),i())})});let l=1;const w=document.getElementById("qtyVal");_&&(document.getElementById("qtyPlus").addEventListener("click",()=>{l=Math.min(l+1,99),w.textContent=l}),document.getElementById("qtyMinus").addEventListener("click",()=>{l=Math.max(l-1,1),w.textContent=l}),document.getElementById("pdpAddCart").addEventListener("click",()=>{const e=document.getElementById("pdpAddCart");if(typeof window.addToCart=="function")window.addToCart(t.id,l);else{const i=JSON.parse(localStorage.getItem("velmira_cart")||"[]"),n=i.find(d=>d.id===t.id);n?n.quantity+=l:i.push({...t,quantity:l}),localStorage.setItem("velmira_cart",JSON.stringify(i)),p()}e.textContent="✓ Added!",e.style.background="#16a34a",e.disabled=!0,setTimeout(()=>{e.textContent="Add to Cart",e.style.background="",e.disabled=!1},2e3)}));const u=document.getElementById("pdpWishlist");try{JSON.parse(localStorage.getItem("velmira_wishlist")||"[]").some(n=>n.id===t.id)&&(u.classList.add("wishlisted"),u.setAttribute("aria-pressed","true"),u.setAttribute("aria-label","Remove from wishlist"))}catch{}u.addEventListener("click",()=>{if(typeof window.toggleWishlist=="function")window.toggleWishlist(t.id);else{const i=JSON.parse(localStorage.getItem("velmira_wishlist")||"[]"),n=i.findIndex(d=>d.id===t.id);n>-1?i.splice(n,1):i.push(t),localStorage.setItem("velmira_wishlist",JSON.stringify(i)),p()}const e=u.classList.toggle("wishlisted");u.setAttribute("aria-pressed",String(e)),u.setAttribute("aria-label",e?"Remove from wishlist":"Add to wishlist")}),document.querySelectorAll(".fbt-add-btn:not(:disabled)").forEach(e=>{e.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation();const n=parseInt(e.dataset.productId,10);if(typeof window.addToCart=="function")window.addToCart(n,1);else{const f=JSON.parse(localStorage.getItem("velmira_cart")||"[]"),x=f.find(m=>m.id===n);if(x)x.quantity+=1;else{const m=window.products.find(B=>B.id===n);m&&f.push({...m,quantity:1})}localStorage.setItem("velmira_cart",JSON.stringify(f)),p()}const d=e.innerHTML;e.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',e.style.background="#16a34a",setTimeout(()=>{e.innerHTML=d,e.style.background=""},1800)})}),document.querySelectorAll(".content-tab").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".content-tab").forEach(n=>{n.classList.remove("active"),n.setAttribute("aria-selected","false")}),document.querySelectorAll(".tab-panel").forEach(n=>n.classList.remove("active")),e.classList.add("active"),e.setAttribute("aria-selected","true");const i=document.getElementById("tab-"+e.dataset.tab);i&&i.classList.add("active")}),e.addEventListener("keydown",i=>{const n=[...document.querySelectorAll(".content-tab")],d=n.indexOf(e);i.key==="ArrowRight"&&(i.preventDefault(),n[(d+1)%n.length].focus()),i.key==="ArrowLeft"&&(i.preventDefault(),n[(d-1+n.length)%n.length].focus())})});const k=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting&&(i.target.classList.add("revealed","visible"),k.unobserve(i.target))})},{threshold:.1});document.querySelectorAll(".reveal").forEach(e=>k.observe(e)),p()}function p(){try{const a=JSON.parse(localStorage.getItem("velmira_cart")||"[]"),s=document.getElementById("cartCount");s&&(s.textContent=a.reduce((o,c)=>o+(c.quantity||1),0));const r=JSON.parse(localStorage.getItem("velmira_wishlist")||"[]"),t=document.getElementById("wishlistCount");t&&(t.textContent=r.length)}catch{}}function A(){return`
          <div class="product-not-found">
            <div style="font-size:56px;margin-bottom:16px;" aria-hidden="true">🔍</div>
            <h1>Product Not Found</h1>
            <p>We couldn't find a product at this URL. It may have been removed or the link may be incorrect.</p>
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
              <a href="shop.html" class="btn btn-primary">Browse All Products</a>
              <a href="index.html" class="btn btn-secondary">Back to Home</a>
            </div>
          </div>
        `}$();window.addEventListener("storage",a=>{(a.key==="velmira_cart"||a.key==="velmira_wishlist")&&p()});window.addEventListener("velmira:products-updated",()=>{try{$()}catch(e){}});
