
document.addEventListener("DOMContentLoaded", function() {
  const glide = new Glide('#hero', {
    type: 'carousel',
    perView: 1,
    focusAt: 'center',
    autoplay: 4000,            // Change slides every 4 seconds
    hoverpause: true,          // Pause autoplay on hover
    animationDuration: 800,    // Set slide transition duration to 800ms
    animationTimingFunc: 'ease-in-out', // Smooth easing for transitions
    gap: 0                     // Remove gap between slides
  });

  glide.mount();

  // Ensure each slide is 100vh
  const setSlideHeight = () => {
    document.querySelectorAll('.glide__slide').forEach(slide => {
      slide.style.height = `${window.innerHeight}px`;
    });
  };

  setSlideHeight();
  window.addEventListener('resize', setSlideHeight);
});



// validation

document.addEventListener('DOMContentLoaded', function() {
  var form = $('#contact-form').parsley();
  form.on('form:submit', function() {
    // This is a correct place to handle form submission if valid.
    return true; // return false to prevent form submission
  });
});


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


//map


    document.addEventListener('DOMContentLoaded', function() {
        var map = L.map('map').setView([51.505, -0.09], 13); // Replace with your coordinates

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Adding a marker
        var marker = L.marker([51.505, -0.09]).addTo(map); // Replace with your coordinates
        marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
    });

