var lon = document.getElementById('lon').innerText
var lat = document.getElementById('lat').innerText
var lugar = document.getElementById('lugar').innerText
var mylon = document.getElementById('mylon').innerText
var mylat = document.getElementById('mylat').innerText
var myname = document.getElementById('myname').innerText
var map = L.map('map').setView([-1.470637, -48.452195], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '© OpenStreetMap'
}).addTo(map);
L.Routing.control({
	waypoints: [
		L.latLng(lon, lat),
		L.latLng(mylon, mylat)]
}).addTo(map);

