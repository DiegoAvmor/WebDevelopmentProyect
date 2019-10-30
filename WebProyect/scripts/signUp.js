formulario.onsubmit = function(){
    if(!ValidateEmail(formulario.email.value)){
        formulario.email.focus();
        return false;
    }

    if(!ValidatePasswords(formulario.password.value, formulario.repeatPass.value)){
        formulario.password.focus();
        return false;
    }
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