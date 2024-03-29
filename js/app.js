(() => {
  "use strict";
  let e = (e, t = 500, s = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = s ? `${s}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !s),
            !s && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !s && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide"),
            document.dispatchEvent(
              new CustomEvent("slideUpDone", { detail: { target: e } })
            );
        }, t));
    },
    t = (t, s = 500) =>
      t.hidden
        ? ((e, t = 500, s = 0) => {
            if (!e.classList.contains("_slide")) {
              e.classList.add("_slide"),
                (e.hidden = !e.hidden && null),
                s && e.style.removeProperty("height");
              let o = e.offsetHeight;
              (e.style.overflow = "hidden"),
                (e.style.height = s ? `${s}px` : "0px"),
                (e.style.paddingTop = 0),
                (e.style.paddingBottom = 0),
                (e.style.marginTop = 0),
                (e.style.marginBottom = 0),
                e.offsetHeight,
                (e.style.transitionProperty = "height, margin, padding"),
                (e.style.transitionDuration = t + "ms"),
                (e.style.height = o + "px"),
                e.style.removeProperty("padding-top"),
                e.style.removeProperty("padding-bottom"),
                e.style.removeProperty("margin-top"),
                e.style.removeProperty("margin-bottom"),
                window.setTimeout(() => {
                  e.style.removeProperty("height"),
                    e.style.removeProperty("overflow"),
                    e.style.removeProperty("transition-duration"),
                    e.style.removeProperty("transition-property"),
                    e.classList.remove("_slide"),
                    document.dispatchEvent(
                      new CustomEvent("slideDownDone", {
                        detail: { target: e },
                      })
                    );
                }, t);
            }
          })(t, s)
        : e(t, s);
  const s = document.querySelectorAll("[data-spollers]");
  if (s.length > 0) {
    const o = Array.from(s).filter(function (e, t, s) {
      return !e.dataset.spollers.split(",")[0];
    });
    function l(e, t = !1) {
      e.forEach((e) => {
        (e = t ? e.item : e),
          t.matches || !t
            ? (e.classList.add("_spoller-init"),
              r(e),
              e.addEventListener("click", i))
            : (e.classList.remove("_spoller-init"),
              r(e, !1),
              e.removeEventListener("click", i));
      });
    }
    function r(e, t = !0) {
      let s = e.querySelectorAll("[data-spoller]");
      s.length &&
        ((s = Array.from(s).filter((t) => t.closest("[data-spollers]") === e)),
        s.forEach((e) => {
          t
            ? (e.removeAttribute("tabindex"),
              e.classList.contains("_spoller-active") ||
                (e.nextElementSibling.hidden = !0))
            : (e.setAttribute("tabindex", "-1"),
              (e.nextElementSibling.hidden = !1));
        }));
    }
    function i(e) {
      const s = e.target;
      if (s.closest("[data-spoller]")) {
        const o = s.closest("[data-spoller]"),
          l = o.closest("[data-spollers]"),
          r = l.hasAttribute("data-one-spoller"),
          i = l.dataset.spollersSpeed ? parseInt(l.dataset.spollersSpeed) : 500;
        l.querySelectorAll("._slide").length ||
          (r && !o.classList.contains("_spoller-active") && n(l),
          o.classList.toggle("_spoller-active"),
          t(o.nextElementSibling, i)),
          e.preventDefault();
      }
    }
    function n(t) {
      const s = t.querySelector("[data-spoller]._spoller-active"),
        o = t.dataset.spollersSpeed ? parseInt(t.dataset.spollersSpeed) : 500;
      s &&
        !t.querySelectorAll("._slide").length &&
        (s.classList.remove("_spoller-active"), e(s.nextElementSibling, o));
    }
    o.length && l(o);
  }
  window.FLS = !0;
})();
