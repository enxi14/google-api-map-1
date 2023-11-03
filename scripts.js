import React, { useEffect } from 'react';

const Map = () => {
let map;

const initMap = async () => {
    const { Map, LatLngBounds } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
    center: { lat: 35.668289441226435, lng: -80.47211686172302 },
    zoom: 8,
      zoomControl: true, // Enable zoom controls
    });

    // Create an array of marker positions (latitude and longitude)
    const markerPositions = [
      { lat: 35.668289441226435, lng: -80.47211686172302 }, // Example marker 1
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
};

useEffect(() => {
    initMap();
}, []);

return (
    <div id="map" style={{ width: "100%", height: "400px" }}></div>
);
};

export default Map;
