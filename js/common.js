
function initMap() {
	// The location of Uluru
	var uluru = {lat: 56.866558, lng: 53.209415};
	// The map, centered at Uluru
	var map = new google.maps.Map(
		document.getElementById('map'), {zoom: 4, center: uluru});
	// The marker, positioned at Uluru
	var marker = new google.maps.Marker({position: uluru, map: map});
  }