import "./script-CbRYxaYZ.js";
/* empty css              */ const h = new MutationObserver(() => {
    const u = document.getElementById("productsGrid"),
      i = document.getElementById("resultCount");
    if (u && i) {
      const d = u.querySelectorAll(".product-card").length;
      i.textContent = `${d} product${d !== 1 ? "s" : ""}`;
    }
  }),
  p = document.getElementById("productsGrid");
p && h.observe(p, { childList: !0 });
(function () {
  ((document.documentElement.style.overflowX = "hidden"),
    (document.body.style.overflowX = "hidden"),
    (window.__imgFail = function (n) {
      ((n.onerror = null),
        (n.src =
          "data:image/svg+xml," +
          encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f1f5f9"/><circle cx="100" cy="88" r="30" fill="#cbd5e1"/><path d="M44 168 Q100 128 156 168" stroke="#cbd5e1" stroke-width="22" fill="none" stroke-linecap="round"/></svg>',
          )),
        (n.style.opacity = "0.55"),
        (n.alt = "Image unavailable"));
    }),
    document.querySelectorAll("img:not([data-fb-wired])").forEach(function (n) {
      ((n.dataset.fbWired = "1"),
        n.addEventListener("error", function () {
          window.__imgFail && window.__imgFail(n);
        }));
    }),
    new MutationObserver(function (n) {
      n.forEach(function (o) {
        o.addedNodes.forEach(function (r) {
          if (r.nodeType === 1) {
            var e = r.tagName === "IMG" ? [r] : [...r.querySelectorAll("img")];
            e.forEach(function (t) {
              t.dataset.fbWired ||
                ((t.dataset.fbWired = "1"),
                t.addEventListener("error", function () {
                  window.__imgFail && window.__imgFail(t);
                }));
            });
          }
        });
      });
    }).observe(document.body, { childList: !0, subtree: !0 }));
  function u() {
    try {
      var n = JSON.parse(localStorage.getItem("velmira_cart") || "[]"),
        o = n.reduce(function (a, c) {
          return a + (c.quantity || 1);
        }, 0),
        r = document.getElementById("cartCount");
      r && (r.textContent = o);
      var e = JSON.parse(localStorage.getItem("velmira_wishlist") || "[]"),
        t = document.getElementById("wishlistCount");
      t && (t.textContent = e.length);
    } catch {}
  }
  (u(), window.addEventListener("storage", u));
  var i = document.querySelector(".checkout-btn");
  i &&
    !i.dataset.wired &&
    ((i.dataset.wired = "1"),
    i.addEventListener("click", function (n) {
      (n.preventDefault(), n.stopImmediatePropagation());
      try {
        var o = JSON.parse(localStorage.getItem("velmira_cart") || "[]");
        if (o.length) {
          i.disabled = !0;
          var t = i.textContent;
          ((i.textContent = "Loading..."),
            setTimeout(function () {
              window.location.href = "checkout.html";
            }, 300));
        } else {
          var r = document.getElementById("toastContainer");
          if (r) {
            var e = document.createElement("div");
            ((e.style.cssText =
              "background:#fef3c7;color:#92400e;border:1px solid #fde68a;padding:12px 18px;border-radius:8px;font-size:13px;font-weight:500;box-shadow:0 4px 12px rgba(0,0,0,.12);margin-top:8px;"),
              (e.textContent =
                "Your cart is empty. Add a product before checking out."),
              r.appendChild(e),
              setTimeout(function () {
                e.remove();
              }, 3500));
          }
        }
      } catch {
        window.location.href = "checkout.html";
      }
    }));
  var d = document.getElementById("menuToggle"),
    s = document.getElementById("navMenu"),
    l = document.getElementById("overlay");
  (d &&
    !d.dataset.scrollWired &&
    ((d.dataset.scrollWired = "1"),
    d.addEventListener("click", function () {
      setTimeout(function () {
        document.body.style.overflow =
          s && s.classList.contains("active") ? "hidden" : "";
      }, 0);
    })),
    l &&
      !l.dataset.scrollWired &&
      ((l.dataset.scrollWired = "1"),
      l.addEventListener("click", function () {
        document.body.style.overflow = "";
      })),
    (function () {
      var n = document.getElementById("searchInput"),
        o = document.getElementById("searchDropdown");
      if (!n || !o) return;
      function r() {
        o.style.display = "none";
      }
      (new MutationObserver(function () {
        o.querySelectorAll(".search-result-item:not([tabindex])").forEach(
          function (e) {
            (e.setAttribute("tabindex", "0"),
              e.setAttribute("role", "option"),
              e.addEventListener("keydown", function (t) {
                (t.key === "Enter" || t.key === " ") &&
                  (t.preventDefault(), e.click());
              }));
          },
        );
      }).observe(o, { childList: !0, subtree: !0 }),
        n.addEventListener("keydown", function (e) {
          if (e.key === "Escape") {
            (r(), n.blur());
            return;
          }
          if (e.key === "ArrowDown") {
            e.preventDefault();
            var t = o.querySelector('[role="option"],.search-result-item');
            t && t.focus();
          }
        }),
        o.addEventListener("keydown", function (e) {
          var c;
          var t = [
              ...o.querySelectorAll('[role="option"],.search-result-item'),
            ],
            a = t.indexOf(document.activeElement);
          e.key === "ArrowDown"
            ? (e.preventDefault(), (c = t[a + 1] || t[0]) == null || c.focus())
            : e.key === "ArrowUp"
              ? (e.preventDefault(), a > 0 ? t[a - 1].focus() : n.focus())
              : e.key === "Escape" && (r(), n.focus());
        }),
        document.addEventListener(
          "click",
          function (e) {
            var t = n.closest(".search-wrapper");
            t && !t.contains(e.target) && r();
          },
          !0,
        ),
        window.addEventListener("scroll", r, { passive: !0 }));
    })(),
    (function () {
      var n = document.getElementById("shopSearch");
      if (!n || n.dataset.fuzzyWired) return;
      n.dataset.fuzzyWired = "1";
      function o(e) {
        return e.toLowerCase().replace(/[\s\-_]/g, "");
      }
      setTimeout(function () {
        n.addEventListener("input", function () {
          var e = o(n.value.trim()),
            t = [...document.querySelectorAll("#productsGrid .product-card")];
          if (!e) {
            (t.forEach(function (c) {
              c.style.display = "";
            }),
              r(t.length));
            return;
          }
          var a = 0;
          (t.forEach(function (c) {
            var y = o(c.textContent || ""),
              f = c.querySelector('[class*="name"],[class*="title"]'),
              m = o(f ? f.textContent : ""),
              v =
                y.includes(e) ||
                m.includes(e) ||
                (e.length >= 3 && m.startsWith(e.substring(0, 3)));
            ((c.style.display = v ? "" : "none"), v && a++);
          }),
            r(a));
        });
      }, 600);
      function r(e) {
        var t = document.getElementById("resultCount");
        t && (t.textContent = e + " product" + (e !== 1 ? "s" : ""));
      }
    })());
})();
