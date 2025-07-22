// Toggle Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav ul');

if (mobileMenu && navList) {
  mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('nav-active');
    if (navList.classList.contains('nav-active')) {
      navList.style.display = 'flex';
      navList.style.flexDirection = 'column';
      navList.style.background = '#fff';
      navList.style.position = 'absolute';
      navList.style.top = '60px';
      navList.style.right = '20px';
      navList.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
      navList.style.zIndex = '2000';
    } else {
      navList.style.display = '';
      navList.style.flexDirection = '';
      navList.style.background = '';
      navList.style.position = '';
      navList.style.top = '';
      navList.style.right = '';
      navList.style.boxShadow = '';
      navList.style.zIndex = '';
    }
  });

  // Keyboard accessibility for mobile menu toggle
  mobileMenu.addEventListener('keydown', (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      mobileMenu.click();
    }
  });
}

// Smooth Scrolling (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetID = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      e.preventDefault();
      window.scrollTo({
        top: targetElement.offsetTop - 70, // adjust if header height changes
        behavior: 'smooth'
      });
    }
  });
});

// Contact form feedback (fake, for demo)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
if (form && status) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    status.textContent = "Thank you for your message! (This is a demo form.)";
    form.reset();
    setTimeout(() => { status.textContent = ""; }, 5000);
  });
}