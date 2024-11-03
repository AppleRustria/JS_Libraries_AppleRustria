
  var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'left-right', // or 'top-bottom', 'radial', etc.
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 500,
    states : {
      "default-state": {
        gradients: [
          ['#834D9B', '#D04ED6'],
          ['#1CD8D2', '#93EDC7']
        ],
        transitionSpeed: 2500
      }
    }
  });


