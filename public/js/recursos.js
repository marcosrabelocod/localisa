//functions alto localização 
	function myLocal(){
		//condição caso o navegador não suporte geolocalização
		if (!navigator.geolocation){
			output.innerHTML = "mostrenos de qual local do campus você esta mais proximo"
		}
		function success(position){
			var longitude = position.coords.longitude;
			var latitude = position.coords.latitude;
			window.location.href = "/myposition/" + latitude + "/" + longitude	
		}

		function error(){
			window.alert("veja o nome de um local proximo para saber aonde esta")
			window.location.href = "/proximo"
		}
		navigator.geolocation.getCurrentPosition(success, error)
	}

	//sidebar

	function fechar(id){
		var janela = document.getElementById(id)
		janela.style.display = 'none';
	}

	function abrir(id){
		var janela = document.getElementById(id)
		janela.style.display = 'inline';
	}
	function rota(id){
		if (!navigator.geolocation){
			output.innerHTML = "<p>localização não suportada</p>"
		}
		function success(position){
			var longitude = position.coords.longitude;
			var latitude = position.coords.latitude;
			window.location.href = "/myposition/" + latitude + "/" + longitude	+ "/" + id
		}

		function error(){
			window.alert("veja o nome de um local proximo para saber aonde esta")
			window.location.href = "/proximo/" + id
		}
		navigator.geolocation.getCurrentPosition(success, error)
	}

	function close(){
		window.alert("fechar")
	}
	function openPopup(referencia){
		const popup = document.getElementById(referencia)
		popup.show()
	}
	function closePopup(referencia){
		const popup = document.getElementById(referencia)
		popup.close()
	}


