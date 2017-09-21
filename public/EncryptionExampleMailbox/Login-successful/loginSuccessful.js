	var key = localStorage["Access"];
	key = JSON.parse(key);
	var daUsername = key.username;
	document.getElementById("welcomeUsr").innerHTML = daUsername;
	
	document.getElementById("wheretogo").innerHTML = daUsername;

function storeGoals(){
		var goal = document.getElementById("todayGoal").value;
		
		var storeGoal = {"goal":goal};
		
		localStorage["Today's goals"] = JSON.stringify(storeGoal);
		document.getElementById("todayGoal").value = goal;
		alert("Your new goal has been set sucessfully! Your goal will be cleared once you logout!");
		window.location = "loginSuccessful.html";
}

	
function checkGoal(){
	var goally = localStorage["Today's goals"];
	if(goally != null){
		goally = JSON.parse(goally);
		var todayGoal = goally.goal;
		if(todayGoal != null){
			document.getElementById("todayGoal").value = todayGoal;
		}
	}
}
checkGoal();