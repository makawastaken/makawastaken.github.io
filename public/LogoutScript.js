
//logout for localhost:5000/generalchat.html

function onLogout(){
	console.log(localStorage["Access"]);
	var checking;
	var key = localStorage["Access"];
	if(key !=null){
		key = JSON.parse(key);
		delete key.username;
		localStorage["Access"] = JSON.stringify(key);
		checking = true;
		
		var goally = localStorage["Today's goals"];
		if(goally != null){
			goally = JSON.parse(goally);
			delete goally.goal;
			localStorage["Today's goals"] = JSON.stringify(goally);
			
		}
	}
	if (checking==true){	
		alert("You will be returned to the home page shortly!");
	}
	console.log(key.username);
	
}