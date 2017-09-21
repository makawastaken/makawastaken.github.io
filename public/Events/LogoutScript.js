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
		alert("You will be logged out shortly!")
	}
	console.log(key.username);
	
}