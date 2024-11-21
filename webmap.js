
// Import the leaflet package
var L = require('leaflet');

//variaveis de inpotadas sobre a localidade
var lon = document.getElementById('lon').innerText
var lat = document.getElementById('lat').innerText
var lugar = document.getElementById('lugar').innerText
var mylon = document.getElementById('mylon')
var mylat = document.getElementById('mylat')

//iniciando o mapa com as codenadas iniciais importadas do documento
var map = L.map('map').setView([lon, lat], 17);
// configurando o tipo de mapa 
// Additional providers are available at: https://leaflet-extras.github.io/leaflet-providers/preview/
//
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
    	attribution: '© OpenStreetMap'
	}).addTo(map);

//caso um lugar especifico seja solicitado, então adicionamos um marcador
if(lugar != 0){
	var marker = L.marker([lon, lat]).addTo(map);
	marker.bindPopup(lugar).openPopup();
}
