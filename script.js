const images = document.querySelectorAll('.fadeImage');

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.opacity = 0.5;
  });

  image.addEventListener('mouseout', () => {
    image.style.opacity = 1;
  });
});

const testimonials = document.querySelectorAll('.testimonial');

testimonials.forEach(testimonial => {
  testimonial.addEventListener('mouseover', () => {
    // Add your hover effect here
    testimonial.style.backgroundColor = '#333';
    testimonial.style.color = '#fff'; // Example: Change background color
  });

  testimonial.addEventListener('mouseout', () => {
    // Remove hover effect
    testimonial.style.backgroundColor = ''; // Reset background color
    testimonial.style.color = '';
  });
});