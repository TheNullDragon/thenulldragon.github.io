document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("nav-toggle");
  const header = document.getElementById("site-header");
  const backToTop = document.querySelector(".back-to-top");

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      header.classList.toggle("nav-open");
    });
  }

  if (backToTop) {
    backToTop.addEventListener("click", function (event) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
