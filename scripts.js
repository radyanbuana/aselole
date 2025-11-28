// Membuat peta pada div #map
var map = L.map('map').setView([-2.5, 118], 5);

// Menambahkan tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

// Contoh marker
L.marker([-6.2, 106.8]).addTo(map)
    .bindPopup("Jakarta")
    .openPopup();
