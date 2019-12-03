const updateBtn = userForm.updateBtn;
const deletBtn = userForm.deleteBtn;



updateBtn.onclick = function(){
    event.preventDefault();
    updateUserInfo();
}

deletBtn.onclick = function(){
    event.preventDefault();
    deleteUser();
}

function updateUserInfo(){
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', '../scripts/userInformation.php?action=user_data');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (this.status === 200 && this.readyState == 4) {
            console.log(this.responseText);
        }
    };
    let stringBuilder = "username="+userForm.userName.value +"&mail="+userForm.mail.value;
    console.log(stringBuilder);
    xhr.send(stringBuilder);
    document.getElementById("userEdit").style.display="none";
  	document.getElementById("blackBG").style.display = 'none';
}

function deleteUser(){
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', '../scripts/userInformation.php?action=user_data');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.status === 200) {
            console.log(this.responseText);
        }
    };
    xhr.send();
    document.location.href = "login.html";
}
