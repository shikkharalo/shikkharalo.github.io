var google;

function init() {
  var myLatlng = new google.maps.LatLng(23.9999, 90.4203); // Gazipur, Dhaka

  var mapOptions = {
    zoom: 10,
    center: myLatlng,
    scrollwheel: false,
    styles: [
      {
        featureType: "administrative.country",
        elementType: "geometry",
        stylers: [{ visibility: "simplified" }, { hue: "#ff0000" }],
      },
    ],
  };

  var mapElement = document.getElementById("map");
  var map = new google.maps.Map(mapElement, mapOptions);

  // Add a marker directly without using Geocoding API
  new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: "images/loc.png", // Use default marker or your own icon
  });
}

google.maps.event.addDomListener(window, "load", init);
