var i = 0;
var images = [];
var time = 3000;

images[0] = '../images/mainPage/gif0.gif';
images[1] = '../images/mainPage/gif1.gif';
images[2] = '../images/mainPage/gif2.gif';
images[3] = '../images/mainPage/gif3.gif';
images[4] = '../images/mainPage/gif4.gif';
images[5] = '../images/mainPage/gif5.gif';

window.onload = function(){
    document.getElementById("navTitle").addEventListener('click', function () {
        window.open("../pages/mainPage.html", "Main", "", true);
    });

    document.getElementById('signUp').addEventListener('click',function () {
        window.open("../pages/signUp.html", "SignUp", "", true);
    });
    
    document.getElementById('login').addEventListener('click',function () {
        window.open("../pages/login.html", "Login", "", true);
    });
    
    document.getElementById('catalogueBox').addEventListener('click',function () {
        window.open("../pages/catalogue.html", "Catalogue", "", true);
    });

    changeImg();
}

function changeImg(){
    document.slide.src = images[i];
    if (i < images.length -1 ) {
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImg()", time);
}