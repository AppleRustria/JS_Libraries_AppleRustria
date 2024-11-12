// validation

document.addEventListener('DOMContentLoaded', function() {
    var form = $('#contact-form').parsley();
    form.on('form:submit', function() {
      // This is a correct place to handle form submission if valid.
      return true; // return false to prevent form submission
    });
  });
  


//map

// leaf

var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Add the search control
var searchControl = new L.Control.Search({
    url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}',
    jsonpParam: 'json_callback',
    propertyName: 'display_name',
    propertyLoc: ['lat', 'lon'],
    marker: L.circleMarker([0,0], {radius:30}),
    autoCollapse: true,
    autoType: false,
    minLength: 2
});

map.addControl(searchControl);
