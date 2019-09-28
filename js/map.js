
styles = [
{
 featureType: "poi",
 stylers: [
 { visibility: "off" }
 ]   
}
];

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 18,
  center: new google.maps.LatLng(47.36, -70.268),
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  gestureHandling: 'none',
  mapTypeControlOptions: {
    mapTypeIds: [google.maps.MapTypeId.ROADMAP],
    rotateControl: false
  },
  styles
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

// --------polygon---------
	// Define the LatLng coordinates for the polygon's path.
  var triangleCoords = [
  {lat: 25.774, lng: -80.190},
  {lat: 18.466, lng: -66.118},
  {lat: 32.321, lng: -64.757},
  {lat: 25.774, lng: -80.190}
  ];

        // Construct the polygon.
        var bermudaTriangle = new google.maps.Polygon({
          paths: triangleCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });
        bermudaTriangle.setMap(map);

		// Try HTML5 geolocation.
		infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        alert("Please enable the access to your location.");
      });
    } else {
            // Browser doesn't support Geolocation
		    //handleLocationError(false, infoWindow, map.getCenter());
        alert("Sorry, this app can not work with  version of browser");
      }

      var locOfMe = {lat: 47.36, lng: -70.268};
      var marker = new google.maps.Marker({
       position: locOfMe,
       map: map,
       title: 'Hello World!'
     },function() {
      alert("Please enable the access to your location.");
    });

		// To add the marker to the map, call setMap();
		marker.setMap(map);

/*
function autoUpdate() {
  navigator.geolocation.getCurrentPosition(function(position) {  
    var newPoint = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    if (marker) {
      // Marker already created - Move it
      marker.setPosition(newPoint);
    }
    else {
      // Marker does not exist - Create it
      marker = new google.maps.Marker({
        position: newPoint,
        map: map,
        title: 'Hello World!'
      },function() {
        alert("Please enable the access to your location.");
      });
    }

    // Center the map on the new position
    map.setCenter(newPoint);
  }); 

  // Call the autoUpdate() function every 5 seconds
  setTimeout(autoUpdate, 5000);
}

autoUpdate();
*/




//	drawingManager.setMap(map);

