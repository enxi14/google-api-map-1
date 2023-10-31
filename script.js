function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.668839, lng: -80.472081}, // Replace with your location's coordinates
    zoom: 15 // Adjust the zoom level as needed
});

var marker = new google.maps.Marker({
    position: {lat: 35.668839, lng: -80.472081}, // Replace with your location's coordinates
    map: map,
    title: 'Your Location'
});
}
