
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

    var locOfMe = {lat: 47.390, lng: 8.516};
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(locOfMe);//If the location of the device is hard to detect we can use this hard-code
        //infoWindow.setPosition(pos);
        infoWindow.setContent('You are here');
        infoWindow.open(map);
        map.setCenter(locOfMe);//If the location of the device is hard to detect we can use this hard-code
        //map.setCenter(pos);
          var marker1 = new google.maps.Marker({
              position: new google.maps.LatLng(47.3901, 8.5162),
              icon: {url:'images/banana.jpg',scaledSize: new google.maps.Size(50, 50)},
              map: map
          });
          var marker1 = new google.maps.Marker({
              position: new google.maps.LatLng(47.3904, 8.5159),
              icon: {url:'images/banana.jpg',scaledSize: new google.maps.Size(50, 50)},
              map: map
          });
          var marker1 = new google.maps.Marker({
              position: new google.maps.LatLng(47.3895, 8.5164),
              icon: {url:'images/can.png',scaledSize: new google.maps.Size(50, 50)},
              map: map
          });
          var marker2 = new google.maps.Marker({
              position: new google.maps.LatLng(47.3898, 8.5161),
              icon: {url:'images/can.png',scaledSize: new google.maps.Size(50, 50)},
              map: map
          });
          var marker3 = new google.maps.Marker({
              position: new google.maps.LatLng(47.3892, 8.517),
              icon: {url:'images/water.png',scaledSize: new google.maps.Size(50, 50)},
              map: map
          });

      }, function() {
        alert("Please enable the access to your location.");
      });
    } else {
            // Browser doesn't support Geolocation
		    //handleLocationError(false, infoWindow, map.getCenter());
        alert("Sorry, this app can not work with  version of browser");
      }


      var marker = new google.maps.Marker({
       position: locOfMe,
       map: map,
       title: 'Hello World!'
     },function() {
      alert("Please enable the access to your location.");
    });

    //----custom markers----


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

