	
	var contadorVidas = 1
	var larguraPagina = 0
	var alturaPagina = 0
	var tempo = 5
	var cronometro = setInterval(function() {
		tempo --
		if (tempo < 0) {
			clearInterval(cronometro, criaMosquito)
			window.location.href = "vitoria.html"
		}
		document.getElementById('cronometro').innerHTML = tempo
	}, 1000)

	var criaMosquitoTempo = 1500

	var nivel = window.location.search
	nivel = nivel.replace('?',"")

	if (nivel === "facil") {
		//1500
		criaMosquitoTempo = 1500

	} else if (nivel === "medio") {
		//1000
		criaMosquitoTempo = 1000

	} else if (nivel === "dificil") {
		//750
		criaMosquitoTempo = 750

	}

	function ajustaTamanhoPalcoJogo() {

		alturaPagina = window.innerHeight
		larguraPagina = window.innerWidth
		console.log(larguraPagina, alturaPagina)
	}

	ajustaTamanhoPalcoJogo()


	function posicaoRandomica() {

	// REMOVER O MOSQUITO ANTERIOR, CASO EXISTA

		if (document.getElementById('mosquito')){
			document.getElementById('mosquito').remove()

			
			if (contadorVidas > 3){
				window.location.href = "fim_de_jogo.html"
			} else {
				document.getElementById('v' + contadorVidas).src="imagens/coracao_vazio.png"
			contadorVidas ++
			}
		}




		// GERANDO POSIÇÃO ALEATÓRIA
			var posicaoMosquitoEixoX = Math.floor(Math.random() * larguraPagina) - 90
			var posicaoMosquitoEixoY = Math.floor(Math.random() * alturaPagina) - 90

			posicaoMosquitoEixoX = posicaoMosquitoEixoX < 0 ? 0 : posicaoMosquitoEixoX
			posicaoMosquitoEixoY = posicaoMosquitoEixoY < 0 ? 0 : posicaoMosquitoEixoY

			console.log(posicaoMosquitoEixoX, posicaoMosquitoEixoY)
		// CRIANDO O ELEMENTO HTML
			var mosquito = document.createElement('img')
			mosquito.src = "imagens/mosquito.png"
			mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
			mosquito.style.left = posicaoMosquitoEixoX + "px"
			mosquito.style.top = posicaoMosquitoEixoY + "px"
			mosquito.style.position = "absolute"
			mosquito.id = "mosquito"
			mosquito.onclick = function(){
				this.remove()
			}
			document.body.appendChild(mosquito)
	}

	function tamanhoAleatorio() {
		var classe = Math.floor(Math.random() * 3)


		switch (classe) {
			case 0:
				return 'mosquito1'
			case 1:
				return 'mosquito2'
			case 2:
				return 'mosquito3'

		}
	}

	function ladoAleatorio() {
		var classe = Math.floor(Math.random() * 2)

		switch (classe) {
			case 0:
				return 'ladoA'
			case 1:
				return 'ladoB'

		}
	}

