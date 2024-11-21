
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
var locais = document.getElementById('locais').innerText
var cordenadas = locais.split('/')

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
	cordenadas.forEach(pontos =>{
		dados = pontos.split(',')
		var marker = L.circleMarker([dados[0], dados[1]]).addTo(map);
		marker.bindPopup(lugar).openPopup()
	})
	
	console.log(locais)
}

