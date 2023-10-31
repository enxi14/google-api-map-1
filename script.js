let map;
let parkCircle; // This will store the circle overlay

async function initMap() {
const { Map, Circle } = await google.maps.importLibrary("maps");

map = new Map(document.getElementById("map"), {
    center: { lat: 35.6683179, lng: -80.4721204 },
    zoom: 8,
});

  // Define the circle properties
parkCircle = new Circle({
    center: { lat: 35.6683179, lng: -80.4721204 }, // Replace with the park's coordinates
    radius: 5000, // Radius in meters (adjust as needed)
    strokeColor: "#FF0000", // Color of the circle border
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000", // Color of the circle fill
    fillOpacity: 0.35,
});

  parkCircle.setMap(map); // Add the circle to the map
}

function zoomIn() {
if (map) {
    const currentZoom = map.getZoom();
    map.setZoom(currentZoom + 1);
}
}

function zoomOut() {
if (map) {
    const currentZoom = map.getZoom();
    map.setZoom(currentZoom - 1);
}
}


