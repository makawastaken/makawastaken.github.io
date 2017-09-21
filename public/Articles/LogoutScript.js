function onLogout(){
	console.log(localStorage["Access"]);
	var checking;
	var key = localStorage["Access"];
	if(key !=null){
		key = JSON.parse(key);
		delete key.username;
		localStorage["Access"] = JSON.stringify(key);
		checking = true;
		
		}
	
	if (checking==true){	
		alert("Successfully logged out. Login to post any articles!")
	}
	console.log(key.username);
	
}