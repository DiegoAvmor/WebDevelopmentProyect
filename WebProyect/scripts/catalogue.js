const app = document.getElementById("gameContainer");
const loadIcon = document.getElementById("loadingIcon");
validateUser();//Validamos antes si es un usuario valido
fetchUserData();

//TODO: Create Objects "games"

function fetchUserData(){
	let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
		   let json = JSON.parse(this.responseText);
			document.getElementById("userName").innerHTML = json.mensaje.username;
			document.getElementById("emailAddress").innerHTML = "<p>" + json.mensaje.email + "</p>";
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
			if(json.ok){
				json.mensaje.forEach(games => {
					fetchFavGame(games.gameid);
				});
			}
        }
    }
    xmlhttp.open("GET", "../scripts/userInformation.php?action=user_fav", true);
    xmlhttp.send();
}

function addFavorite(id){
	gameid = id;
	var stringBuilder = "gameID="+gameid;
	let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
					
        }
    }
    xmlhttp.open("POST", "../scripts/userInformation.php?action=user_fav", true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(stringBuilder);
}

function fetchFavGame(gameID){
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
			displayFavGames(jsonGame.id, jsonGame.name, jsonGame.background_image);
	})
	.catch(function (err) {
			console.log("No se puedo obtener el recurso", err);
	});
}

//Recibe una lista de todos los juegos que salieron en Octubre
function fetchGameList(){
	fetch("https://rawg-video-games-database.p.rapidapi.com/games?page=1", {
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
			generateGame(jsonGame.id,jsonGame.background_image,jsonGame.name,jsonGame.released,jsonGame.developers[0].name,jsonGame.genres[0].name,jsonGame.description);
	})
	.catch(function (err) {
			console.log("No se puedo obtener el recurso", err);
	});
}

function displayFavGames(id,name,image){
	const gameInfo = document.createElement('div');
	gameInfo.setAttribute('id','favInfo');
	const gameImage = document.createElement('div');
	gameImage.setAttribute('class','gameImage');
	const cover = document.createElement('img');
	cover.src = image;
	const gameText = document.createElement('div');
	gameText.setAttribute('id','favButton');
	const gameTitle = document.createElement('div');
	gameTitle.setAttribute('class','gameTitle');
	gameTitle.textContent = name;
	const gameData = document.createElement('div');
	gameData.setAttribute('class','gameData');

	const commBut= document.createElement('div');
	commBut.setAttribute('class','commentButt');
	commBut.innerHTML=("<button class='commentB' onClick='addFavorite(" + id + ")'>Favorite</button>");


	//const gameFav
	app.appendChild(gameInfo);
	gameInfo.appendChild(gameImage);
	gameImage.appendChild(gameTitle);
	gameImage.appendChild(cover);
	gameInfo.appendChild(gameText);
	gameText.appendChild(gameData);
	gameText.appendChild(commBut);
}

//Genera un contenedor con toda la información del juego
function generateGame(id,image,name,date,developer,genre,description){
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
	commBut.innerHTML=("<button class='commentB' onClick='showCommentDisp(" + id + ")'>Reviews</button><button class='commentB' onClick='addFavorite(" + id + ")'>Favorite</button>");

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
	document.getElementById("navTitle").onclick= musicPlay;
	//inactivityTime();

}
function musicPlay(){
	 document.getElementById('audioplayer').muted = false;
	var lastSong = null;
    var selection = null;
    var playlist = ["../music/Best Friend.mp3", "../music/City of Chances.mp3","../music/Emerald Dreams.mp3","../music/Feelings.mp3","../music/Home.mp3","../music/Loneliness.mp3","../music/Nostalgic Sunrise Beats.mp3","../music/Stunning Night.mp3","../music/Waiting You.mp3",]; // List of Songs
    var player = document.getElementById("audioplayer");

    player.autoplay=true;
    player.addEventListener("ended", selectRandom);

    function selectRandom(){
        while(selection == lastSong){
            selection = Math.floor(Math.random() * playlist.length);
        }
        lastSong = selection;
        player.src = playlist[selection];

    }

    selectRandom();
    player.play();
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

document.getElementById("userImage").onclick= function(){
		window.stop();
		document.getElementById("gameContainer").innerHTML = "";
		document.getElementById("gameContainer").style.gridTemplateColumns = "50%";
		document.getElementById("userPanel").style.display = 'block';

	document.getElementById("searchBar").onclick= function(){
		document.getElementById("userPanel").style.display = 'none';
		document.getElementById("blackBG").style.display = 'none';
		document.getElementById("userEdit").style.display = 'none';

	}
	document.getElementById("userInfo").onmouseover= function(){
		document.getElementById("userInfo").style.backgroundColor= '#61616b';
	}
	document.getElementById("userInfo").onmouseout= function(){
		document.getElementById("userInfo").style.backgroundColor= '#3c3c42';
	}
	document.getElementById("exitButt").onclick= function(){
		logout();
	}
	document.getElementById("searchButt").onclick= function(){
		reLoadGames(document.getElementById("searchB").value);
	}
	document.getElementById("editButt").onclick=function(){
		document.getElementById("userPanel").style.display='none';
		document.getElementById("userEdit").style.display="block";
		document.getElementById("blackBG").style.display = 'block';

	}
	fetchUserGames();

}
	function reLoadGames(searchTerm){
		document.getElementById("gameContainer").innerHTML = "";
		fetch(("https://rawg-video-games-database.p.rapidapi.com/games?search=" + searchTerm), {
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

function exitCommentDisp(){
		document.getElementById("blackBG2").style.display="none";
		document.getElementById("reviewDisplay").innerHTML="";
	document.getElementById("commentDisplay").style.display="none";
}

function writeReview(){
	exitCommentDisp();
	document.getElementById("blackBG2").style.display="block";
	document.getElementById("reviewEditor").style.display="block";
}

function exitReviewDisp(){
	document.getElementById("blackBG2").style.display="none";
	document.getElementById("reviewEditor").style.display="none";
	document.getElementById("reviewDisplay").innerHTML = "";
}

function exitUserPane(){
	document.getElementById("gameContainer").style.gridTemplateColumns = "50% 50%";
	reLoadGames("");
	document.getElementById("blackBG").style.display = 'none';
	document.getElementById("userPanel").style.display = 'none';
	document.getElementById("userEdit").style.display = 'none';
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
	window.location.href = '../scripts/logout.php';
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
