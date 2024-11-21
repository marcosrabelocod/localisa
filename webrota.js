
/*este aquivo é usado para auterar as configurações do mapa porem ele não autera as configurações diretamente
o verdadeiro encontra na pasta public/js/webmap.js porem é recomendavel que para auteralo façamos as modificações
neste ultilize o comando
browserify webrota.js -o public/js/webrota.js
no terminal, aplicando as auterações no arquivo real
*/

// Import the leaflet package
var L = require('leaflet');

//variaveis de inpotadas sobre a localidade
var lon = document.getElementById('lon').innerText
var lat = document.getElementById('lat').innerText
var lugar = document.getElementById('lugar').innerText
var mylon = document.getElementById('mylon').innerText
var mylat = document.getElementById('mylat').innerText
var myname = document.getElementById('myname').innerText

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
	L.Routing.control({
		waypoints: [
			L.latLng(-1.44, -47.555),
			L.latLng(-1.475359, -48.456962)
		]
	  }).addTo(map);
