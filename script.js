const header = document.getElementById('header');
const navbar = document.getElementById('navbar');
let scrolled = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        if (!scrolled) {
            header.style.transition = '0.3s ease';
            header.style.height = '60px';
            header.style.fontSize = '20px';
            scrolled = true;

            // Hide navbar with animation
            navbar.style.transition = '0.3s ease';
            navbar.style.opacity = '0';
        }
    } else {
        if (scrolled) {
            header.style.transition = '0.3s ease';
            header.style.height = '100px';
            header.style.fontSize = '24px';
            scrolled = false;

            // Show navbar with animation
            navbar.style.transition = '0.3s ease';
            navbar.style.opacity = '1';
        }
    }
});

// Existing code remains unchanged

function scrollToTop() {
  // Scroll to the top of the page with a smooth animation
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

// Show/hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
  const scrollToTopButton = document.getElementById('scroll-to-top');

  if (window.scrollY > 50) {
      scrollToTopButton.style.display = 'block';
  } else {
      scrollToTopButton.style.display = 'none';
  }
});





