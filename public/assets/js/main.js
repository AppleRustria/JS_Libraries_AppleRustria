// main.js

// Ensure that the DOM is fully loaded before running the Glide initialization
document.addEventListener("DOMContentLoaded", function() {
    new Glide('.glide', {
      type: 'carousel',
      autoplay: 5000, // Auto-scroll every 5 seconds
      hoverpause: true,
      animationDuration: 800,
      perView: 1
    }).mount();
  });