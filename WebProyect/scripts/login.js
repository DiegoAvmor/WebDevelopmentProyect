const containerMessage = document.getElementById("left");
const submit = loginForm.submitBtn;
//Estas constantes on de prueba
const user ="Usuario";
const contra ="123";

//En el evento de submit se valida el formulario
/*loginForm.onsubmit = function(){
    ajax("GET","login.php",loginForm.username,loginForm.passwd);
}

function ajax(method,action,param1,para2){
    var stringBuilder = "?" + param1.name+"="+param1.value +"&"+ para2.name+"="+para2.value;
    console.log(stringBuilder);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        var respuesta = this.responseText;
        alert(respuesta);
    };
    xhttp.open(method, action+stringBuilder, true);
    xhttp.send();
}*/

function validateForm(){
    if(checkForm()){
        if(loginForm.username.value !== user){
            generatePopUpMessage("Nombre de Usuario Incorrecto",loginForm.username);
            return false;
        }
        if(loginForm.passwd.value !== contra){
            generatePopUpMessage("Contraseña Incorrecta",loginForm.passwd);
            return false;
        }
        return true;
    }
}

function checkForm(){
    var inputs = loginForm.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                return false;
            }
        }
    }
    return true;
}


function generatePopUpMessage(message, object){
    let messageDiv = document.createElement('div');
    let messageP = document.createElement('p');
    messageP.innerHTML = message;

    messageDiv.appendChild(messageP);
    messageDiv.setAttribute('id','messagePopup');
    containerMessage.appendChild(messageDiv);
    //Se hace focus al objeto
    object.focus();
    //Se elimina despues de cierto tiempo
    setTimeout(destroyPopUp,5000,messageDiv);
}

function destroyPopUp(PopUp){
    PopUp.remove();
}