var i = 0;
var time = 3000;
let imageFolderSize = 6


let navBar = document.getElementById("navBar");
//Funcion para cambiar la opacidad de la barra de navegacion al hacer scroll
window.onscroll = function() {
    if(this.scrollY > 200) {
        navBar.style.backgroundColor = "#3c3c42";
    } else {
         navBar.style.backgroundColor = "transparent";
    }
};
   
//Se agrega los eventos 'click'
document.getElementById("navTitle").addEventListener('click', function () {
    window.open("../pages/mainPage.html", "Main", "", true);
});

document.getElementById('signUp').addEventListener('click',function () {
    window.open("../pages/signUp.html", "SignUp", "", true);
});
    
document.getElementById('login').addEventListener('click',function () {
    window.open("../pages/login.html", "Login", "", true);
});

//Se inicia la funcion que cambia las imagenes
changeImg();

function changeImg(){
    source = "../images/mainPage/gif"+i+".gif";
    document.slide.src = source;
    if (i < imageFolderSize -1 ) {
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImg()", time);
}