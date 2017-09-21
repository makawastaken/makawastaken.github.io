	//global variables
	var username, email, passcode, userpass, errText;
	
	//to skip typing getElementById
	function _(x){
		return document.getElementById(x);
	}
	
	//code generator
	function randomisedCode() {
	  var randomCode;
	  var code;

	  randomCode = Math.floor((Math.random() * 5) + 1);

	  switch(randomCode) {
		case 1: code = "37292";
		break;
		case 2: code = "98821";
		break;
		case 3: code = "72038";
		break;
		case 4: code = "82013";
		break;
		case 5: code = "89236";
		break;
		default: code = "";
	  }

	  return code;
	}
	
	//processes
	function processPhase1(){
		username = _("getUsername").value;
		email = _("getEmail").value;
		
		var capsName = username.toUpperCase();
		var retrieveUsername = localStorage[capsName];
		
		if(retrieveUsername != null){
			retrieveUsername = JSON.parse(retrieveUsername);
			var emailJSON = retrieveUsername.email; 
			
			if(email == emailJSON){
			_("beckham-phase1").style.display = "none";
			_("beckham-phase2").style.display = "block";
			passcode = randomisedCode();
			alert("An email has been sent to you! Check for the passcode and enter it!");
			console.log(passcode);
			_("progressBar").value = 33;
			_("status").innerHTML = "Phase 2 of 3";
			}
			else{
			errText = "Your username and/or email is invalid";
			_("wrongIn").innerHTML = errText;
			}
		}
		else{
			errText = "Your username and/or email is invalid";
			_("wrongIn").innerHTML = errText;
		}
	}
	function errMsgClearer1(){
		errText = "";
		_("wrongIn").innerHTML = errText;
	}
	function processPhase2(){
		userpass=_("passCode").value;
		var code1 = "37292";
		var code2 = "98821";
		var code3 = "72038";
		var code4 = "82013";
		var code5 = "89236";
		if(userpass == code1 || userpass == code2 || userpass == code3 || userpass == code4 || userpass == code5){
		_("beckham-phase2").style.display = "none";
		_("beckham-phase3").style.display = "block";
		_("progressBar").value = 66;
		_("status").innerHTML = "Phase 3 of 3";
		
		}
		else{
			errText = "The passcode you have entered is incorrect!";
			_("passErr").innerHTML = errText;
		}
		
	}
	function errMsgClearer2(){
		errText = "";
		_("passErr").innerHTML = errText;
	}
	function processPhase3(){
		var username = _("getUsername").value;
		var capsName = username.toUpperCase();
		var retrieveUsername = localStorage[capsName];
		var newpass =_("newpassword").value;
		/* Marcus's MD5 hashing encryption */
		var wildhash = CryptoJS.MD5(newpass);
		var neathash = CryptoJS.MD5(wildhash).toString();
		hashnewpass = neathash;
		
		if (newpass !=""){
			if(newpass.length > 7){
				var numbers = false;
				var chars = false;
				for(i = 0; i<newpass.length; i++){
					var capsb = newpass.toLowerCase();
					console.log("capsb"+capsb);
					var each =  newpass.charAt(i);
					console.log("each :"+each);
						//check for numbers
						if(each == "1" || each == "2" || each == "3" || 
							each == "4" || each == "5" || each == "6" || 
							each == "7" || each == "8" || each == "9"){
								console.log("contains number");
								var numbers = true;
							}
						
						if(each == '!' || each == '@' || each == '#' || 
							each == '$' || each == '%' || each == '&' || 
							each == '*' || each == '^' || each == '?' || 
							each == '('	|| each == ')'){
								console.log("contains the special characters");
								var chars = true;
								}
					}
					if(chars == true && numbers == true){
						if(retrieveUsername != null){
							retrieveUsername = JSON.parse(retrieveUsername);
							username = retrieveUsername.username;
							var FirstName = retrieveUsername.FirstName;
							var gender = retrieveUsername.gender;
							var email = retrieveUsername.email;
							var capital = retrieveUsername.capital;
							var ban = retrieveUsername.ban;
							
							var passwordReset = {"username":username, "FirstName":FirstName, "password":hashnewpass, "email":email, "gender":gender, "capital":capital, "ban":ban};
							

							localStorage[capital] = JSON.stringify(passwordReset);
									
						_("beckham-phase3").style.display = "none";
						_("beckham-phase4").style.display = "block";
						_("progressBar").value = 100;
						_("status").innerHTML = "Complete!";
						}
					}
					else if(chars == false || numbers == false){
						alert("Your password doesnot meet the requirements! It should have at least 1 number and 1 special character.");
					}
			}
			else{
				errText = "Your password must be at least 8 characters long!";
				_("reErr").innerHTML = errText;
			}
		}
		else{
			errText = "Please enter a new password!";
			_("reErr").innerHTML = errText;
		}
	}
	function errMsgClearer3(){
		errText = "";
		_("reErr").innerHTML = errText;
	}
	function processPhase4(){
		window.location = "../login page/loginpage.html";
	}