
document.addEventListener("DOMContentLoaded", function() {
  const glide = new Glide('#hero', {
    type: 'carousel',
    perView: 1,
    focusAt: 'center',
    autoplay: 5000,            // Change slides every 5 seconds
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
