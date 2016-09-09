var mymap = L.map('mapid').setView([51.58588, -2.93208], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGliZXJ0eWNodXJjaCIsImEiOiJjaXNxYXhyZzkwMDI5MnRwYnBmaDUzNGN6In0.R6oafRKVQ80MReHLLhEvIg', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(mymap);


L.marker([51.58588, -2.93208]).addTo(mymap)
	.bindPopup("<b>Liberty Church</b><br />Llanwern Highschool, Newport").openPopup();

var popup = L.popup();
