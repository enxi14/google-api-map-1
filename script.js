let map;

async function initMap() {
const { Map } = await google.maps.importLibrary("maps");

map = new Map(document.getElementById("map"), {
    center: { lat: 35.668839, lng: -80.472081 },
    zoom: 8,
});
}

initMap();
