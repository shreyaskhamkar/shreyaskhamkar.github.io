// ═══════════════════════════════════════════════════════════
// CUSTOM CURSOR
// ═══════════════════════════════════════════════════════════
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let cx = 0, cy = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  cx = e.clientX;
  cy = e.clientY;
  cursor.style.left = cx + 'px';
  cursor.style.top = cy + 'px';
});

(function loop() {
  rx += (cx - rx) * 0.12;
  ry += (cy - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(loop);
})();

// ═══════════════════════════════════════════════════════════
// HEADER SCROLL EFFECT
// ═══════════════════════════════════════════════════════════
const headerBg = document.getElementById('headerBg');
window.addEventListener('scroll', () => {
  headerBg.classList.toggle('visible', scrollY > 60);
});

// ═══════════════════════════════════════════════════════════
// INTERSECTION OBSERVER - REVEAL ANIMATIONS
// ═══════════════════════════════════════════════════════════
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(element => {
  revealObserver.observe(element);
});

// ═══════════════════════════════════════════════════════════
// MOBILE MENU TOGGLE
// ═══════════════════════════════════════════════════════════
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', nav.classList.contains('open'));
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ═══════════════════════════════════════════════════════════
// CONTACT FORM VALIDATION & SUBMISSION
// ═══════════════════════════════════════════════════════════
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
    // Validation
    if (!name || !email || !message) {
      showFormStatus('Please fill in all fields.', 'error');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormStatus('Please enter a valid email address.', 'error');
      return;
    }
    
    // Name validation
    if (name.length < 2) {
      showFormStatus('Please enter a valid name.', 'error');
      return;
    }
    
    // Success
    showFormStatus('Thank you — I\'ll be in touch soon!', 'success');
    contactForm.reset();
    nameInput.focus();
  });
}

function showFormStatus(message, type) {
  formStatus.textContent = message;
  formStatus.className = `visible ${type}`;
  
  // Auto-clear after 5 seconds
  setTimeout(() => {
    formStatus.classList.remove('visible');
  }, 5000);
}

// ═══════════════════════════════════════════════════════════
// PROJECT IMAGE PREVIEW
// ═══════════════════════════════════════════════════════════
const preview = document.getElementById('imgPreview');
const previewImg = document.getElementById('previewImg');

if (preview && previewImg) {
  const projectEntries = document.querySelectorAll('.project-entry[data-img]');
  
  projectEntries.forEach(entry => {
    entry.addEventListener('mouseenter', () => {
      const src = entry.getAttribute('data-img');
      if (src) {
        previewImg.src = src;
        const projectTitle = entry.querySelector('h3');
        previewImg.alt = projectTitle ? projectTitle.textContent : 'Project preview';
        preview.classList.add('active');
      }
    });
    
    entry.addEventListener('mouseleave', () => {
      preview.classList.remove('active');
    });
  });
  
  document.addEventListener('mousemove', (e) => {
    preview.style.left = (e.clientX + 30) + 'px';
    preview.style.top = (e.clientY - 100) + 'px';
  });
}