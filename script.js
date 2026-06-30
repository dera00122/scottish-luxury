// ---- OVERLAY MENU ----
function openMenu() {
  document.getElementById('overlayMenu').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.getElementById('overlayMenu').classList.remove('active');
  document.body.style.overflow = '';
}

// ---- NAVBAR SCROLL EFFECT ----
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ---- SCROLL REVEAL ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

// ---- LIGHTBOX ----
function openLightbox(card) {
  const img = card.querySelector('img').src;
  const title = card.querySelector('h3') ? card.querySelector('h3').innerText : '';
  document.getElementById('lightboxImg').src = img;
  document.getElementById('lightboxTitle').innerText = title;
  document.getElementById('lightbox').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.body.style.overflow = '';
}

// Close lightbox on background click
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

// Close overlay menu on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
    closeLightbox();
  }
});