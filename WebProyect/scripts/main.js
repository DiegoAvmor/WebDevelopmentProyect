window.onload= function(){
	userPaneSetup();
}

function userPaneSetup(){
	document.getElementById("userImage").onclick= function(){
		document.getElementById("blackBG").style.display = 'block';
	document.getElementById("userPanel").style.display = 'block';
	}
	document.getElementById("gameContainer").onclick= function(){
	document.getElementById("blackBG").style.display = 'none';
	document.getElementById("userPanel").style.display = 'none';
	}
	document.getElementById("searchBar").onclick= function(){
	document.getElementById("userPanel").style.display = 'none';
	document.getElementById("blackBG").style.display = 'none';
	}
	document.getElementById("userInfo").onmouseover= function(){
		document.getElementById("userInfo").style.backgroundColor= '#61616b'; 
	}
	document.getElementById("userInfo").onmouseout= function(){
		document.getElementById("userInfo").style.backgroundColor= '#3c3c42'; 
	}
}