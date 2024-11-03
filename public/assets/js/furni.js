document.addEventListener("DOMContentLoaded", function() {
    const choreographer = new Choreographer({
      animations: [
        {
          range: [-1, window.innerHeight],
          selector: ".hero-title",
          type: "scale",
          style: "transform",
          from: 0.8,
          to: 1.2
        },
        {
          range: [-1, window.innerHeight],
          selector: ".hero-subtitle",
          type: "fade",
          style: "opacity",
          from: 0,
          to: 1
        },
        {
          range: [0, window.innerHeight * 2],
          selector: ".gallery-item",
          type: "custom",
          style: "transform",
          fn: (value) => `translateY(${value / 5}px) scale(1.05)`
        }
      ]
    });
  
    // Attach a scroll event listener to trigger animations
    window.addEventListener("scroll", () => {
      choreographer.runAnimationsAt(window.scrollY);
    });
  });
  