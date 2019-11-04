const containerMessage = document.getElementById("root");

//Este evento sirve para prevenir al navegador de no recargar la pagina al momento de enviar la informacion
formulario.addEventListener("submit", function (event) {
    event.preventDefault(); 
});

formulario.onsubmit = function(){

    if(!ValidateEmail(formulario.email.value)){
        formulario.email.focus();
        generatePopUpMessage("Invalid Email- try again");
        return false;
    }

    if(!ValidatePasswords(formulario.pass.value, formulario.repeatPass.value)){
        formulario.pass.focus();
        generatePopUpMessage("Invalid Passwords- try again");
        return false;
    }

    Ajax();

} 

function Ajax(){
    var ajax = new XMLHttpRequest();
    var method = "POST";
    var url = "../scripts/signUp.php?id=1";
    var asynchronous = true;
    let stringBuilder = formulario.userName.name+"="+formulario.userName.value +"&"+ formulario.email.name+"="+formulario.email.value+"&"+formulario.pass.name+"="+formulario.pass.value+"&"+formulario.repeatPass.name+"="+formulario.repeatPass.value;

    ajax.open(method, url, asynchronous);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send(stringBuilder);

    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            handleResponse(this.responseText);
        }
    }
}

//Funcion que manejara las acciones correspondientes a la respuesta del servidor
function handleResponse(response){
    let parsedResponse = null;
    try{
        parsedResponse = JSON.parse(response);
        if(parsedResponse.ok){
            //Exito, entonces se carga el login
            document.location = parsedResponse.message;
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

function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }
    return false;
}

function ValidatePasswords(password, repeatPass){
    if(password === repeatPass && password.length > 8 && repeatPass.length > 8){
        return true;
    }
    return false;
}