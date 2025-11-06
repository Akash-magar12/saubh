// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

// Close menu when a link is clicked
const mobileMenu = document.getElementById("mobileMenu");
if (mobileMenu) {
  const links = mobileMenu.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.style.display = "none";
    });
  });
}

// Add smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact form handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    // Create mailto link
    const mailtoLink = `mailto:hello@saubhagya.com?subject=Project Inquiry from ${name}&body=Name: ${name}%0DPhone: ${phone}%0DService: ${service}%0D%0DMessage:%0D${message}`;

    window.location.href = mailtoLink;
    contactForm.reset();
  });
}

const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav a, .mobile-menu a");

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
