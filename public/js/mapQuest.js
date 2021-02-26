function initMap() {
	// add your code here
	L.mapquest.key = 'yrz9X61xz4zsQfX3Foa94JBrWixd0Q29';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
    center: [37.7749, -122.4194],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
});

	// Add marker to the map
	L.marker([32.87852,-117.2446408]).addTo(map);
}