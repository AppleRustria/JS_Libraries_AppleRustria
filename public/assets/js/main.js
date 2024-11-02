document.addEventListener("DOMContentLoaded", function() {
    var glide = new Glide('#hero', {
      type: 'carousel',
      perView: 1,           // Single slide view for the hero section
      focusAt: 'center',
      autoplay: 5000,       // Auto-scroll every 5 seconds
      hoverpause: true,
      animationDuration: 800,
      breakpoints: {
        800: {
          perView: 1        // Single slide view at 800px and below for hero
        },
        480: {
          perView: 1        // Single slide view at 480px and below for hero
        }
      }
    });
  
    glide.mount();
  });
  