let map;

async function initMap() {
const { Map } = await google.maps.importLibrary("maps");

map = new Map(document.getElementById("map"), {
    center: { lat: 35.6683179, lng: -80.4721204 },
    zoom: 8,
});
}

initMap();
