//This file just emulates the functionality of adding a review into de db
const containerMessage = document.getElementById("root");

reviewForm.onsubmit = function(){
    var username = "ElJohan"; //Provisional, el real con cookies o ls o como prefieran
    var date = new Date(); //date.getTime();
    var currentDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    var gameid = "123"; //Provisional
    var titleInput = title.value;
    var reviewArea = review.value;

    
    //Primero verificamos que no hayan campos vacios

    if (isEmpty(titleInput)) {
        title.focus();
        return false;
    }

    if (isEmpty(reviewArea)) {
        review.focus();
        return false;
    }    
    answer.value = titleInput + "\n" + reviewArea;
    
    event.preventDefault();//Evita que se haga el envio del formulario
    var stringBuilder = "username="+username+"&"+ "date="+currentDate+"&"+"gameid="+gameid+"&"+title.name+"="+title.value +"&"+ review.name+"="+review.value+"&"+ rating.name+"="+rating.value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            handleResponse(this.responseText);
        }
    }
    xmlhttp.open("post", "../scripts/reviews.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(stringBuilder);
}

function isEmpty(String) {
    return String == "";
}

//Funcion que manejara las acciones correspondientes a la respuesta del servidor
function handleResponse(response){
    let parsedResponse = null;
    try{
        parsedResponse = JSON.parse(response);
        if(parsedResponse.ok){
            generatePopUpMessage(parsedResponse.message);
        }else{
            generatePopUpMessage(parsedResponse.message);
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
