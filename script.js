const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

year.textContent = new Date().getFullYear();
updateHeader();

window.addEventListener("scroll", updateHeader, { passive: true });
