const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const sections = document.querySelectorAll("[data-section]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const revealItems = document.querySelectorAll(".reveal");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function setActiveLink(sectionId) {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${sectionId}`);
  });
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  },
  {
    rootMargin: "-42% 0px -52% 0px",
    threshold: 0,
  }
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.12,
  }
);

sections.forEach((section) => sectionObserver.observe(section));
revealItems.forEach((item) => revealObserver.observe(item));

if (year) {
  year.textContent = new Date().getFullYear();
}

updateHeader();
setActiveLink("home");

window.addEventListener("scroll", updateHeader, { passive: true });
