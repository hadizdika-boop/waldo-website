const navItems = [
  ["home", "Home", "index.html"],
  ["services", "Services", "services.html"],
  ["membership", "Membership", "membership.html"],
  ["experiences", "Experiences", "experiences.html"],
  ["about", "About", "about.html"],
  ["contact", "Contact", "contact.html"],
];

const page = document.body.dataset.page || "home";

function createHeader() {
  const navLinks = navItems
    .map(
      ([key, label, href]) =>
        `<a href="${href}" class="${page === key ? "is-active" : ""}">${label}</a>`,
    )
    .join("");

  return `
    <header class="site-header" id="site-header-inner">
      <a class="brand" href="index.html" aria-label="Waldo Concierge home">
        <img src="assets/waldo-logo.png" alt="Waldo Concierge" />
      </a>
      <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span>
      </button>
      <nav class="primary-nav" aria-label="Primary navigation">
        ${navLinks}
      </nav>
      <a class="header-cta" href="apply.html">Apply for Membership <span aria-hidden="true">◆</span></a>
    </header>
  `;
}

function createFooter() {
  const footerLinks = navItems
    .map(([, label, href]) => `<a href="${href}">${label}</a>`)
    .join("");

  return `
    <footer class="site-footer" data-reveal>
      <div class="footer-contact-bar" aria-label="Waldo Concierge contact details">
        <a href="contact.html" class="footer-contact-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <span>Dubai, United Arab Emirates</span>
        </a>
        <a href="tel:+971501234567" class="footer-contact-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
          </svg>
          <span>+971 50 123 4567</span>
        </a>
        <a href="mailto:membership@waldoconcierge.com" class="footer-contact-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 7 9-7" />
          </svg>
          <span>membership@waldoconcierge.com</span>
        </a>
        <div class="footer-social" aria-label="Social links">
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" />
            </svg>
          </a>
          <a href="https://wa.me/971501234567" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.5 11.7a8.5 8.5 0 0 1-12.4 7.5L4 20.4l1.3-4A8.5 8.5 0 1 1 20.5 11.7Z" />
              <path d="M9.6 8.1c-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.4 5.2 4.5 2.6.9 3.1.7 3.7.7.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.7-.4l-2.1-1c-.3-.1-.6-.2-.8.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.4-.2-1.5-.6-2.8-1.7-1-1-1.7-2.1-1.9-2.5-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6l-1-2.2Z" />
            </svg>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 9h4v12H5z" />
              <path d="M7 3a2.2 2.2 0 1 1 0 4.4A2.2 2.2 0 0 1 7 3Z" />
              <path d="M13 9h3.8v1.7c.6-1.1 1.8-2 3.6-2 3.3 0 4.6 2.1 4.6 5.8V21h-4v-5.8c0-1.8-.5-3-2-3s-2 1.1-2 3V21h-4V9Z" />
            </svg>
          </a>
        </div>
      </div>
      <div class="footer-lower">
        <a class="footer-brand" href="index.html" aria-label="Waldo Concierge home">
          <img src="assets/waldo-logo.png" alt="Waldo Concierge" />
        </a>
        <nav class="footer-nav" aria-label="Footer navigation">
          ${footerLinks}
        </nav>
        <p>© 2026 Waldo Concierge. All rights reserved.</p>
      </div>
    </footer>
  `;
}

document.getElementById("site-header").innerHTML = createHeader();
document.getElementById("site-footer").innerHTML = createFooter();

const header = document.getElementById("site-header-inner");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".primary-nav");

function syncHeader() {
  header.classList.toggle("site-header-scrolled", window.scrollY > 24);
}

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("nav-open", open);
});

document.querySelectorAll("a[href]").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || link.target) {
    return;
  }

  link.addEventListener("click", (event) => {
    const destination = new URL(href, window.location.href);
    if (destination.origin !== window.location.origin) return;
    event.preventDefault();
    document.body.classList.add("page-exit");
    setTimeout(() => {
      window.location.href = destination.href;
    }, 260);
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
);

document.querySelectorAll("[data-reveal]").forEach((element, index) => {
  element.style.setProperty("--reveal-delay", `${Math.min(index * 55, 220)}ms`);
  revealObserver.observe(element);
});

if (document.body.dataset.intro === "true") {
  const intro = document.createElement("div");
  intro.className = "brand-intro";
  intro.setAttribute("aria-hidden", "true");
  intro.innerHTML = `
    <div class="intro-diamond"></div>
    <div class="intro-word">
      <span class="intro-w">W</span><span class="intro-aldo">ALDO</span>
    </div>
    <div class="intro-concierge">CONCIERGE</div>
  `;
  document.body.appendChild(intro);
  setTimeout(() => intro.classList.add("intro-complete"), 2200);
  setTimeout(() => intro.remove(), 3050);
}

const form = document.getElementById("application-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const success = document.getElementById("form-success");
    success.hidden = false;
    success.classList.add("is-visible");
    form.reset();
  });
}

window.addEventListener("load", () => {
  document.body.classList.add("page-ready");
});
