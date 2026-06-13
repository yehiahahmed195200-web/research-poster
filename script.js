// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(
  '.section-header, .story-hero, .stat-item, .cta-content, .why-quit-inner'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.classList.add('reveal');
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
);

revealElements.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id], header[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.style.color = item.getAttribute('href') === `#${current}`
      ? 'var(--color-red)'
      : '';
  });
});
