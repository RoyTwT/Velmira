import"./script-CbRYxaYZ.js";/* empty css              */function n(e){try{if(typeof CONFIG<"u"&&CONFIG.currency){const{symbol:a,position:t,decimals:r}=CONFIG.currency,i=Number(e).toFixed(r);return t==="suffix"?i+a:a+i}}catch{}return"৳"+Number(e).toLocaleString("en-BD")}function c(e){try{return new Date(e).toLocaleDateString("en-BD",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}let s=null;try{const e=localStorage.getItem("velmira_last_order");e&&(s=JSON.parse(e))}catch{}const o=document.getElementById("confirmRoot");if(!s)o.innerHTML=`
    <div class="order-not-found">
      <div style="font-size:56px;margin-bottom:16px;">📦</div>
      <h2>No Order Found</h2>
      <p style="color:var(--dark-light);margin-bottom:28px;">We couldn't find a recent order. If you just placed one, try refreshing the page.</p>
      <a href="shop.html" class="btn btn-primary">Browse Products</a>
    </div>
  `;else{const e=s.customer||{},a=s.items||[],t={cod:"Cash on Delivery",card:"Card Payment"},r=a.map(i=>`
    <div class="confirm-item">
      <img class="confirm-item-img" src="${i.image||""}" alt="${i.name||""}" onerror="this.style.opacity='0.3'" loading="lazy">
      <div class="confirm-item-info">
        <div class="confirm-item-name">${i.name||"Product"}</div>
        <div class="confirm-item-qty">Qty: ${i.quantity||1}</div>
      </div>
      <div class="confirm-item-price">${n((i.price||0)*(i.quantity||1))}</div>
    </div>
  `).join("");o.innerHTML=`
    <!-- SUCCESS HERO -->
    <div class="confirm-hero">
      <div class="confirm-icon">✓</div>
      <h1>Order Confirmed!</h1>
      <p>Thank you, <strong>${e.name||"valued customer"}</strong>! Your order has been placed successfully.</p>
      <p style="font-size:13px;">A confirmation will be sent to <strong>${e.email||""}</strong></p>
      <div class="order-id-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Order ${s.orderId||"VEL-XXXXXX"}
      </div>
    </div>

    <div class="confirm-page">
      <div class="confirm-grid">

        <!-- LEFT COLUMN -->
        <div>

          <!-- Next steps -->
          <div class="next-steps">
            <h4>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              What happens next
            </h4>
            <ul>
              <li>Our team will confirm your order within <strong>1 business day</strong> via SMS or call.</li>
              <li>Your order will be packed and dispatched within <strong>1–2 business days</strong>.</li>
              <li>You'll receive an SMS with your tracking number once shipped.</li>
              ${s.paymentMethod==="cod"?"<li>Please have the exact payment amount ready upon delivery.</li>":""}
            </ul>
          </div>

          <!-- Order items -->
          <div class="order-card">
            <div class="order-card-header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <h3>Items Ordered (${a.reduce((i,l)=>i+(l.quantity||1),0)})</h3>
            </div>
            ${r}
          </div>

          <!-- Delivery details -->
          <div class="order-card">
            <div class="order-card-header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <h3>Delivery Address</h3>
            </div>
            <div class="order-card-body">
              <div class="info-row"><span class="info-label">Name</span><span class="info-value">${e.name||"—"}</span></div>
              <div class="info-row"><span class="info-label">Phone</span><span class="info-value">${e.phone||"—"}</span></div>
              <div class="info-row"><span class="info-label">Address</span><span class="info-value">${[e.address1,e.address2].filter(Boolean).join(", ")}</span></div>
              <div class="info-row"><span class="info-label">City</span><span class="info-value">${e.city||"—"}, ${e.division||"—"} ${e.postal||""}</span></div>
              ${e.notes?`<div class="info-row"><span class="info-label">Notes</span><span class="info-value">${e.notes}</span></div>`:""}
              <div class="info-row"><span class="info-label">Order date</span><span class="info-value">${c(s.date)}</span></div>
            </div>
          </div>

        </div>

        <!-- RIGHT COLUMN: Summary -->
        <div class="summary-card">
          <div class="summary-card-header"><h3>Order Summary</h3></div>
          <div class="summary-totals">
            <div class="sum-row"><span>Subtotal</span><span>${n(s.subtotal||0)}</span></div>
            <div class="sum-row"><span>Shipping</span><span>${s.shipping===0?"Free":n(s.shipping||120)}</span></div>
            <div class="sum-row total"><span>Total</span><span>${n(s.total||0)}</span></div>
          </div>
          <div class="payment-method-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            ${t[s.paymentMethod]||"Cash on Delivery"}
          </div>
          <div class="confirm-ctas">
            <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
            <a href="index.html" class="btn btn-secondary">Back to Home</a>
          </div>
        </div>

      </div>
    </div>
  `}const d=document.getElementById("cartCount");d&&(d.textContent="0");document.documentElement.style.overflowX="hidden";
