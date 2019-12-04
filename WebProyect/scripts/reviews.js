//This file just emulates the functionality of adding a review into de db
//why
const containerMessage = document.getElementById("root");
//Estas son variables que se obtienen ya de la interaccion con la gui
var gameid = "12345"; //Provisional
var titleInput = title.value;
var reviewArea = review.value;
var gameJson = null;

reviewForm.agregar.onclick = function(){
  event.preventDefault();
  var reviewin = document.getElementById("review").value;
  var ratingin = document.getElementById("rating").value;
  if (reviewin == "" || reviewin.length == 0 || reviewin == null)
  {
      alert("Please write a review before submitting.")
  } else if (ratingin == "" || ratingin.length == 0 || ratingin == null){
      alert("Please give a rating before submitting.")
  } else{
    addReview();
    document.getElementById("blackBG2").style.display="none";
    document.getElementById("reviewEditor").style.display="none";
  }
}

function showCommentDisp(id){
	document.getElementById("blackBG2").style.display="block";
	document.getElementById("commentDisplay").style.display="block";
	const revewbuttons = document.getElementById("reviewButLoc");
	revewbuttons.innerHTML = ("<button id='reviewButton' onclick='writeReview()'>Write a Review</button>");
	document.getElementById("id").value=id;
  fetchReview();
}

function reviewCircle(list){
  for(var i = 0; Object.keys(list).length; i++){
    console.log(list[i].username);
    generateReviewList(list[i].username,list[i].descripcion,list[i].calificacion,list[i].fecha);
  }
}

function generateReviewList(uname,review,score,date){
  display = document.getElementById("reviewDisplay");
  const reviewBox= document.createElement('div');
  reviewBox.setAttribute('class','reviewBox');
	const username = document.createElement('div');
	username.setAttribute('class','unameShow');
  username.textContent = uname;
	const reviewSC = document.createElement('div');
	reviewSC.setAttribute('class','reviewShow');
  reviewSC.textContent = review;
  const foot= document.createElement('div');
  foot.setAttribute('class','reviewFoot');
	const scoreSC = document.createElement('div');
	scoreSC.setAttribute('class','scoreShow');
  scoreSC.textContent = "Score: "+score+"/5";
  const dateSC = document.createElement('div');
	dateSC.setAttribute('class','dateShow');
  dateSC.textContent = date;

	reviewBox.appendChild(username);
	reviewBox.appendChild(reviewSC);
  foot.appendChild(scoreSC);
  foot.appendChild(dateSC); 
  reviewBox.appendChild(foot);
  display.appendChild(reviewBox);
 
}

document.getElementById("update").onclick = function(){
  event.preventDefault();
  updateReview();
  document.getElementById("alreadyReviewed").style.display = "none";
}

document.getElementById("delete").onclick = function(){
  event.preventDefault();
  deleteReview();
  document.getElementById("alreadyReviewed").style.display = "none";
}

document.getElementById("cancel").onclick = function(){
  document.getElementById("alreadyReviewed").style.display = "none";
}

function addReview(){
    gameid = reviewForm.id.value;
    var stringBuilder = "gameid="+gameid+"&"+title.name+"="+title.value +"&"+ review.name+"="+review.value+"&"+ rating.name+"="+rating.value+"&option=0";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            handleResponse(this.responseText,"4");
        }
    }
    xmlhttp.open("POST", "../scripts/userInformation.php?action=game_review&option=0", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(stringBuilder);
}

function deleteReview(){
    gameid = reviewForm.id.value;
    var stringBuilder = "gameid="+gameid+"&"+title.name+"="+title.value +"&"+ review.name+"="+review.value+"&"+ rating.name+"="+rating.value+"&option=1";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            handleResponse(this.responseText,"3");
        }
    }
    xmlhttp.open("POST", "../scripts/userInformation.php?action=game_review", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(stringBuilder);
}

function updateReview(){
    gameid = reviewForm.id.value;
    var stringBuilder = "gameid="+gameid+"&"+title.name+"="+title.value +"&"+ review.name+"="+review.value+"&"+ rating.name+"="+rating.value+"&option=2";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            handleResponse(this.responseText,"2");
        }
    }
    xmlhttp.open("POST", "../scripts/userInformation.php?action=game_review", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(stringBuilder);
}

function fetchReview(){
    gameid = reviewForm.id.value;
    var stringBuilder = "gameid="+gameid;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            handleResponse(this.responseText,"1");
        }
    }
    xmlhttp.open("GET", "../scripts/userInformation.php?action=game_review&" + stringBuilder, true);
    xmlhttp.send(stringBuilder);
}

//Funcion que manejara las acciones correspondientes a la respuesta del servidor
function handleResponse(response,check){
    let parsedResponse = null;
    try{
        parsedResponse = JSON.parse(response);
        if(parsedResponse.ok){
            console.log(parsedResponse.mensaje);
              if (parsedResponse.mensaje == "Already reviewed"){
                document.getElementById("alreadyReviewed").style.display = "block";
            } else if(check == "1"){
                reviewCircle(parsedResponse.mensaje);
            } else{
              generatePopUpMessage(parsedResponse.mensaje);
            }

        }else{
            console.log(parsedResponse.mensaje);
        }
    } catch{
        console.log("No se pudo convertir a objeto");
    }
}

function generatePopUpMessage(message){
    let messageDiv = document.createElement('div');
    let messageP = document.createElement('p');
    messageP.innerHTML = message;

    messageDiv.appendChild(messageP);
    messageDiv.setAttribute('id','messagePopup');
    containerMessage.appendChild(messageDiv);
    //Se elimina despues de cierto tiempo
    setTimeout(destroyPopUp,5000,messageDiv);
}

function destroyPopUp(PopUp){
    PopUp.remove();
}
