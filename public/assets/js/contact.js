// validation

document.addEventListener('DOMContentLoaded', function() {
    var form = $('#contact-form').parsley();
    form.on('form:submit', function() {
      // This is a correct place to handle form submission if valid.
      return true; // return false to prevent form submission
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
