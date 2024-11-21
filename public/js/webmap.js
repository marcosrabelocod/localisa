
/*este aquivo é usado para auterar as configurações do mapa porem ele não autera as configurações diretamente
o verdadeiro encontra na pasta public/js/webmap.js porem é recomendavel que para auteralo façamos as modificações
neste ultilize o comando
browserify webmap.js -o public/js/webmap.js
no terminal, aplicando as auterações no arquivo real
*/

// Import the leaflet package

//variaveis de inpotadas sobre a localidade
var lon = document.getElementById('lon').innerText
var lat = document.getElementById('lat').innerText
var lugar = document.getElementById('lugar').innerText
var mylon = document.getElementById('mylon')
var mylat = document.getElementById('mylat')

var pin = L.icon({
	iconUrl:'https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png',
	iconSize:     [38, 55], // size of the icon
    iconAnchor:   [22, 54]

})
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
	var marker = L.marker([lon, lat], {icon: pin}).addTo(map);
	marker.bindPopup('<h3>'+lugar+'</h3>').openPopup();
}
