document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("nav-toggle");
  const header = document.getElementById("site-header");
  const nav = document.getElementById("main-nav");
  const backToTop = document.querySelector(".back-to-top");

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      const open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  if (nav) {
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        header?.classList.remove("nav-open");
        toggle?.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (backToTop) {
    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
