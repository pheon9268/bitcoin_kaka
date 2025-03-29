// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Example of dynamic content loading (optional)
window.addEventListener('load', () => {
  console.log('Website fully loaded!');
  // You can add more dynamic content here if needed
});

// Add hover effect to sections
document.querySelectorAll('section').forEach(section => {
  section.addEventListener('mouseover', () => {
      section.style.transform = 'scale(1.02)';
      section.style.transition = 'transform 0.3s ease';
  });
  section.addEventListener('mouseout', () => {
      section.style.transform = 'scale(1)';
  });
});