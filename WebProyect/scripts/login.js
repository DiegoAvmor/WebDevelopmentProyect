const containerMessage = document.getElementById("left");
let username = loginForm.username;
let password = loginForm.passwd;
const checkbtn = document.getElementById("rememberbox");

//Cargamos la informacion en los campos si este tiene
loadInput();



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
            saveInput(checkbtn);
            document.location = parsedResponse.mensaje;
        }else{
            generatePopUpMessage(parsedResponse.mensaje);
        }
    } catch{
        console.log(response);
    }
}

//Funcion que almacena la informacion usando local storage, hace la funcion de 'Remember Me'
function saveInput(checkbox){
    if(checkbox.checked){//Esta seleccionada, guardamos la informacion
        localStorage.setItem("userN",username.value);
        localStorage.setItem("userP",password.value);
    }else{//No esta seleccionada, eliminamos la informacion
        localStorage.removeItem("userN");
        localStorage.removeItem("userP");
    }
}

//Funcion que llena los campos con lo almacenado en el local storage
function loadInput(){
    if(localStorage.hasOwnProperty("userN") && localStorage.hasOwnProperty("userP")){
        username.value = localStorage.getItem("userN");
        password.value = localStorage.getItem("userP");
        checkbtn.checked = true;
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
