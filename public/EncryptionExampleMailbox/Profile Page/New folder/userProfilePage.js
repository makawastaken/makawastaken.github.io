//This is the code that loads on start up
	var key = localStorage["Access"];
	
	key = JSON.parse(key);
	
	var daUsername = key.username;
	document.getElementById("usernameHere").innerHTML = daUsername;
	
	var capsdaUsername = daUsername.toUpperCase();
	
	var mainkey = localStorage[capsdaUsername];
		
	mainkey = JSON.parse(mainkey);

	var daRealname = mainkey.FirstName;
	document.getElementById("realnameHere").innerHTML = daRealname;
	
//end of start up code
	
	
//code to change password
function passwordChange(){
	var oldPassword = document.getElementById("currentPassword").value;
	
	/* Marcus's MD5 hashing encryption */
	var wildhash = CryptoJS.MD5(oldPassword);
	var neathash = CryptoJS.MD5(wildhash).toString();
	oldPassword = neathash;
	
	/* Marcus's MD5 hashing encryption */
	var newPassword = document.getElementById("brandnewPassword").value;
	var wildhash1 = CryptoJS.MD5(newPassword);
	var neathash1 = CryptoJS.MD5(wildhash1).toString();
	newPassword = neathash1;
	
	var storedpassword = mainkey.password;
	if(oldPassword == storedpassword){
		
		if(newPassword.length>7) {
			console.log("allow change");
			var username = mainkey.username;
			var gender = mainkey.gender;
			var email = mainkey.email;
			var capital = mainkey.capital;
			var ban = mainkey.ban;
			
			var passwordChange = {"username":username, "FirstName":daRealname, "password":newPassword, "email":email, "gender":gender, "capital":capital, "ban":ban};
			localStorage[capital] = JSON.stringify(passwordChange);
			alert("Your password has been changed sucessfully!");
		} 
		else{
			alert("Your password needs to be at least 8 characters long!");
		}
	}
	else{
		console.log("the input old password is wrong");
		alert("The old password you input is wrong");
	}
	window.location = "userProfilePage.html";
}
function usernameChange(){
	var oldUsername = mainkey.username;
	var getNewusername = document.getElementById("daNewUsername").value;
	
	if (getNewusername != ""){
		console.log("allow change");
			var newcaps = getNewusername.toUpperCase();
			var oldcaps = mainkey.capital;
			if(newcaps != oldcaps){
			//var username = mainkey.username;
			//var daRealname = mainkey.FirstName;
			var gender = mainkey.gender;
			var email = mainkey.email;
			var password = mainkey.password;
			var ban = mainkey.ban;
			var usernameChange = {"username":getNewusername, "FirstName":daRealname, "password":password, "email":email, "gender":gender, "capital":newcaps, "ban":ban};
			localStorage[newcaps] = JSON.stringify(usernameChange);
			
			
			var rekey = localStorage["Access"];
			rekey = JSON.parse(rekey);
			var finding = rekey.username;
			var oldkey = finding.toUpperCase();
			
			delete localStorage[oldkey];
			//resetting the access key
			var accessgiving = {"username":getNewusername};
			
			localStorage["Access"] = JSON.stringify(accessgiving);

			alert("Username reset sucessfully!");
			}
			else{
				alert("your username is the same as the old one!");
			}
	}
	else{
		alert("No username entered!");
	}
	window.location = "userProfilePage.html";
}


function storeBio(){
	var Access = JSON.parse(localStorage["Access"]);
	var username = Access.username;
	var bio = document.getElementById("exampleTextarea").value;
	
	var kunbio = username+"bio";
	var storeBio = { "username":username, "Bio":bio};
	localStorage[kunbio] = JSON.stringify(storeBio);
	
}

function checkBio(){
	var Access = JSON.parse(localStorage["Access"]);
	var username = Access.username;
	var checkForBio = username+"bio";
	
	var lookbio = localStorage[checkForBio];
	if(lookbio != null){
		lookbio = JSON.parse(lookbio);
		var appendingBio = lookbio.Bio;
			document.getElementById("exampleTextarea").value = appendingBio;
	}
	else{
		console.log("no bio");
	}
}
checkBio();

function emailChange(){
	var oldEmail = document.getElementById("currentEmail").value;
	var newEmail = document.getElementById("newEmail").value;
	var storedEmail = mainkey.email;
	if(oldEmail == storedEmail){
			
			console.log("allow change");
			var Access = JSON.parse(localStorage["Access"]);
			var newKey = Access.username.toUpperCase();
			var username = mainkey.username;
			var gender = mainkey.gender;
			var password = mainkey.password;
			var capital = mainkey.capital;
			var ban = mainkey.ban;
			
			var emailChange = {"username":username, "FirstName":daRealname, "password":password, "email":newEmail, "gender":gender, "capital":capital, "ban":ban};
			localStorage[newKey] = JSON.stringify(emailChange);
			
			
			
			alert("Your email has been changed sucessfully!");
		
	}
	else{
		console.log("the input old email is wrong");
		alert("The old email you input is wrong");
	}
	window.location = "userProfilePage.html";
	
		
}

