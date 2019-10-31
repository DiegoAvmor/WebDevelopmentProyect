const containerMessage = document.getElementById("left");
const submit = loginForm.submitBtn;
//Estas constantes on de prueba
const user ="Usuario";
const contra ="123";

//En el evento de submit se valida el formulario
submit.onclick = validateForm;

function validateForm(){
    if(checkForm()){
        if(loginForm.username.value !== user){
            generatePopUpMessage("Nombre de Usuario Incorrecto",loginForm.username);
            return false;
        }
        if(loginForm.password.value !== contra){
            generatePopUpMessage("Contraseña Incorrecta",loginForm.password);
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