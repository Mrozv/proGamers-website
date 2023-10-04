document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".navbar");
  const navButton = document.querySelector(".navbar-toggler");
  const navLink = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  function addShadow() {
    const aria = document
      .querySelector(".navbar-toggler")
      .getAttribute("aria-expanded");

    if (window.scrollY >= 1) {
      nav.classList.add("shadow-bg");
    } else if (aria === "true" && window.scrollY === 0) {
      nav.classList.add("shadow-bg");
    } else {
      nav.classList.remove("shadow-bg");
    }
  }

  function addShadowMenu() {
    const aria = document
      .querySelector(".navbar-toggler")
      .getAttribute("aria-expanded");

    if (aria === "true") {
      nav.classList.add("shadow-bg");
    } else if (window.scrollY >= 1) {
      nav.classList.add("shadow-bg");
    } else {
      nav.classList.remove("shadow-bg");
    }
  }

  function hideMenu() {
    navbarCollapse.classList.remove("show");
  }

  window.addEventListener("scroll", addShadow);
  navButton.addEventListener("click", addShadowMenu);
  navLink.forEach((element) => {
    element.addEventListener("click", hideMenu);
  });
});
