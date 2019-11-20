const app = document.getElementById("gameContainer");
const loadIcon = document.getElementById("loadingIcon");
validateUser();//Validamos antes si es un usuario valido
fetchUserData();
fetchUserGames();
//TODO: Create Objects "games"
function fetchUserData(){
	let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
		   let json = JSON.parse(this.responseText);
		   console.log(json);
		   let jsonM = JSON.parse(json.mensaje);
		   console.log(jsonM.username);
		   console.log(jsonM.email);
		   console.log(jsonM.passwd);
        }
    }
    xmlhttp.open("GET", "../scripts/userInformation.php?action=user_data", true);
    xmlhttp.send();
}

function fetchUserGames(){
	let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
			let json = JSON.parse(this.responseText);
			console.log(json);
			if(json.ok){
				let jsonM = JSON.parse(json.mensaje);
				jsonM.forEach(games => {
					console.log(games.gameid);
				});
			}else{
				console.log(json.mensaje);
			}
        }
    }
    xmlhttp.open("GET", "../scripts/userInformation.php?action=user_fav", true);
    xmlhttp.send();
}

//Recibe una lista de todos los juegos que salieron en Octubre
function fetchGameList(){
	fetch("https://rawg-video-games-database.p.rapidapi.com/games?dates=2019-10-01,2019-10-30", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		"x-rapidapi-key": "ba56e18dfbmsha0533de8919d27bp10d3dcjsn5229ce979bb3"
	}
	})
	.then((resp) => resp.json())
	.then(function (response) {
			var jsonGameList = response;
			//Envia el ID de cada uno de los juegos en la primera página
			for(var i = 0; i < 19; i++){
				fetchGameInfo(jsonGameList.results[i].id);
			}
	})
	.catch(function (err) {
			console.log("No se puedo obtener el recurso", err);
	});
}

//Recibe el ID de un juego y extrae la información relevante
function fetchGameInfo(gameID){
	fetch(("https://rawg-video-games-database.p.rapidapi.com/games/" + gameID), {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		"x-rapidapi-key": "ba56e18dfbmsha0533de8919d27bp10d3dcjsn5229ce979bb3"
	}
	})
	.then((resp) => resp.json())
	.then(function (response) {
			var jsonGame = response;
			generateGame(jsonGame.background_image,jsonGame.name,jsonGame.released,jsonGame.developers[0].name,jsonGame.genres[0].name,jsonGame.description);
	})
	.catch(function (err) {
			console.log("No se puedo obtener el recurso", err);
	});
}

//Genera un contenedor con toda la información del juego
function generateGame(image,name,date,developer,genre,description){
	const gameInfo = document.createElement('div');
	gameInfo.setAttribute('class','gameInfo');
	const gameImage = document.createElement('div');
	gameImage.setAttribute('class','gameImage');
	const cover = document.createElement('img');
	cover.src = image;
	const gameText = document.createElement('div');
	gameText.setAttribute('class','gameText');
	const gameTitle = document.createElement('div');
	gameTitle.setAttribute('class','gameTitle');
	gameTitle.textContent = name;
	const gameData = document.createElement('div');
	gameData.setAttribute('class','gameData');
	gameData.innerHTML = ("Released: " + date + "<br> Developer: " + developer
	+ "<br> Genre: " + genre);
	
	const commBut= document.createElement('div');
	commBut.setAttribute('class','commentButt');
	commBut.innerHTML=("<button class='commentB' onClick='showCommentDisp()'>Comments(0)</button>"); //Buscar como contar numero de comentarios y cambiar el 0 por eso.

	const gameDescription = document.createElement('div');
	gameDescription.setAttribute('class','gameDescription');
	gameDescription.innerHTML = (description);


	//const gameFav
	app.appendChild(gameInfo);
	gameInfo.appendChild(gameImage);
	gameImage.appendChild(gameTitle);
	gameImage.appendChild(cover);
	gameInfo.appendChild(gameText);
	//gameText.appendChild(gameTitle);
	gameText.appendChild(gameData);
	gameText.appendChild(gameDescription);
	gameText.appendChild(commBut);
}

window.onload= function(){
	loadIcon.removeAttribute('hidden');//Hacemos visible el icono de carga
	fetchGameList();
	loadIcon.setAttribute("hidden","");//Lo volvemos invisible el icono de carga
	userPaneSetup();
	//inactivityTime();

}
	//test function
	function imageChange(){
		var newimg="";
		var imgs = ["../images/test/splatTim1.jpg", "../images/test/splatTim2.jpg", "../images/test/splatTim3.jpg","../images/test/splatTim4.jpg"];
		for (var i = 0; i < imgs.length; i++) {
			console.log(document.getElementById("commentGameInfoImage").getAttribute('src'));
			if((document.getElementById("commentGameInfoImage").getAttribute('src'))==imgs[i]){
				if(i!=imgs.length-1){
					newimg=imgs[i+1];
				}else{
					newimg=imgs[0];
				}
			}
		}

		document.getElementById("commentGameInfoImage").src=newimg;
	}

//Lazy loading
document.addEventListener("DOMContentLoaded", function() {
	var games = [].slice.call(document.querySelectorAll(".gameInfo"));
  
	if ("IntersectionObserver" in window) {
	  let lazygameObserver = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
		  if (entry.isIntersecting) {
			entry.target.classList.add("visible");
			lazygameObserver.unobserve(entry.target);
		  }
		});
	  });
  
	  games.forEach(function(game) {
		lazygameObserver.observe(game);
	  });
	}
  });

function userPaneSetup(){
	document.getElementById("userImage").onclick= function(){
		document.getElementById("blackBG").style.display = 'block';
		document.getElementById("userPanel").style.display = 'block';
	}
	document.getElementById("gameContainer").onclick= function(){
		document.getElementById("blackBG").style.display = 'none';
		document.getElementById("userPanel").style.display = 'none';
	}
	document.getElementById("searchBar").onclick= function(){
		document.getElementById("userPanel").style.display = 'none';
		document.getElementById("blackBG").style.display = 'none';

	}
	document.getElementById("userInfo").onmouseover= function(){
		document.getElementById("userInfo").style.backgroundColor= '#61616b';
	}
	document.getElementById("userInfo").onmouseout= function(){
		document.getElementById("userInfo").style.backgroundColor= '#3c3c42';
	}
	document.getElementById("exitButt").onclick= function(){
		//----------------Poner termino de sesión aquí-------------------!
		document.location.href = "login.html";
	}
	document.getElementById("searchButt").onclick= function(){
		reLoadGames(document.getElementById("searchB").value);
	}
	document.getElementById("editButt").onclick=function(){
		document.getElementById("userPanel").style.display='none';
		document.getElementById("userEdit").style.display="block";
		document.getElementById("blackBG").style.display = 'block';

	}
	document.getElementById("editExitButt").onclick=function(){

		document.getElementById("userEdit").style.display="none";
		document.getElementById("blackBG").style.display = 'none';
		return getData();
	}

}
	function reLoadGames(searchTerm){
		//Recargar gameContainer con los juegos que encuentre
	}


function showCommentDisp(){
	document.getElementById("blackBG2").style.display="block";
	document.getElementById("commentDisplay").style.display="block";
}
function exitCommentDisp(){
		document.getElementById("blackBG2").style.display="none";
	document.getElementById("commentDisplay").style.display="none";
}
function validateUser(){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
			try{
				jsonresponse = JSON.parse(this.responseText);
				if(!jsonresponse.ok){//Si no tiene acceso lo redirigimos al login
					document.location = jsonresponse.mensaje;
				}else{
					//Podemos hacer que muestre un pop up con el mensaje
					//de bienvenida que nosotros regresamos o cargamos la info del usuario aqui
					console.log(jsonresponse.mensaje);
				}
			} catch{
				console.log(this.responseText);
			}
        }
	}
	let url = new URLSearchParams(window.location.search);
	let urlValue = "../scripts/validateUser.php";
	if(url.has('id')){
		urlValue +="?id="+ url.get('id');
	}
    xmlhttp.open("get", urlValue, true);
    xmlhttp.send();
}


function logout() {
	document.location = '../pages/login.html';
	//Hacer la parte de cierre de session
}

//Inactividad del usuario
var inactivityTime = function () {
    var time;
    window.onload = resetTimer;
    // DOM Events
    document.onmousemove = resetTimer;
	document.onkeypress = resetTimer;
	document.onclick = resetTimer;
	window.addEventListener('scroll', resetTimer, true);

    function resetTimer() {
        clearTimeout(time);
		time = setTimeout(logout, 60000);
		//60,0000  = 1 minuto
    }
};