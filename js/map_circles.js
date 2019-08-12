// This example creates circles on the map, representing populations in North
// America.

// First, create an object containing LatLng and population for each city.
var citymap = {
  melbourne: {
    center: {lat: -37.774249, lng: 144.944207},
    population: 10
  }
};

function initMap() {

  alert("Yes");

  // Create the map.
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: -37.774249, lng: 144.944207},
    mapTypeId: 'terrain'
  });

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (var city in citymap) {
    // Add the circle for this city to the map.
    var cityCircle = new google.maps.Circle({
      strokeColor: '#00657b',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#00657b',
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100
    });
  }
}

google.maps.event.addDomListener(window, "load", initMap);
