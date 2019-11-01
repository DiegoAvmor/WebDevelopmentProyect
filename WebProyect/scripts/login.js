const containerMessage = document.getElementById("left");
const username = loginForm.username;
const password = loginForm.passwd;

//En el evento de submit hacemos una peticion POST para validar al usuario
loginForm.onsubmit = function(){
    event.preventDefault();//Evita que se haga el envio del formulario
    let stringBuilder = username.name+"="+username.value +"&"+ password.name+"="+password.value;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           handleResponse(this.responseText);
        }
    }
    xmlhttp.open("post", "../scripts/login.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(stringBuilder);
}

//Funcion que manejara las acciones correspondientes a la respuesta del servidor
function handleResponse(response){
    let parsedResponse = null;
    try{
        parsedResponse = JSON.parse(response);
        if(parsedResponse.ok){
            //Exito, entonces se carga la pagina principal
            document.location = parsedResponse.mensaje;
        }else{
            generatePopUpMessage(parsedResponse.mensaje);
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