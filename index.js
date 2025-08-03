// script.js

document.addEventListener("DOMContentLoaded", () => {
  const scrollLinks = document.querySelectorAll("a[href^='#']");

  scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const toggleDark = document.querySelector("#toggle-dark");
  if (toggleDark) {
    toggleDark.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});

function showCertificateDetails(id) {
  const details = document.getElementById(id);
  if (details) {
    details.classList.toggle("active");
  }
}
