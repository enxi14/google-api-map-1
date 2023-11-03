let map;

async function initMap() {
  const { Map, LatLngBounds } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 35.6683179, lng: -80.4721204 },
    // No zoom property to let it auto-adjust
  });

  // Create an array of marker positions (latitude and longitude)
  const markerPositions = [
    { lat: 35.6683179, lng: -80.4721204 }, // Example marker 1
    { lat: 35.7, lng: -80.5 }, // Example marker 2
    // Add more markers as needed
  ];

  // Create an empty bounds object
  const bounds = new LatLngBounds();

  // Loop through marker positions and add markers to the map
  markerPositions.forEach((position) => {
    new google.maps.Marker({
      position: position,
      map: map,
      title: 'Marker Title'
    });

    // Extend the bounds to include the marker
    bounds.extend(position);
  });

  // Automatically adjust the map's zoom level to fit all markers
  map.fitBounds(bounds);
}

initMap();

