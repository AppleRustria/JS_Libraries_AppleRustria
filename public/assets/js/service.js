
//anime js

document.addEventListener('DOMContentLoaded', function() {
    anime({
        targets: '#customFurniture',
        translateY: [100, 0], // Slide up effect
        opacity: [0, 1], // Fade in effect
        duration: 2000,
        easing: 'easeInOutQuad'
    });
  });
  