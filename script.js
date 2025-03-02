// Toggle Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav ul');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('nav-active');
});

// Smooth Scrolling (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // adjust if header height changes
        behavior: 'smooth'
      });
    }
  });
});

// Slider Functionality
document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  
  function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 5000); // Change slide every 5 seconds (adjust as needed)
  }
  
  showSlides();
});
