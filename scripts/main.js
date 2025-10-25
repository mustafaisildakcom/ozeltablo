const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const yearEl = document.getElementById("year");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.getAttribute("data-open") === "true";
        navLinks.setAttribute("data-open", (!isOpen).toString());
        navToggle.setAttribute("aria-expanded", (!isOpen).toString());
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.setAttribute("data-open", "false");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-in");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll(".gallery-card, .process-list li, .testimonial-card, .cta-card, .contact-form").forEach((el) => {
    el.classList.add("will-animate");
    observer.observe(el);
});
