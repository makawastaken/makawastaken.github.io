	
	function collectInput(){
			var username = document.getElementById("usernameIn").value;
			var pass = document.getElementById("passIn").value;
			/* Marcus's MD5 hashing encryption */
			var wildhash = CryptoJS.MD5(pass);
			var neathash = CryptoJS.MD5(wildhash).toString();
			pass = neathash;
		
			
			var capsName = username.toUpperCase();
			var retrieveUsername = localStorage[capsName];
			
			if (retrieveUsername != null) {
				retrieveUsername = JSON.parse(retrieveUsername);
	
				var usernameJSON = retrieveUsername.username;
				var passwordJSON = retrieveUsername.password; 
				var banJSON = retrieveUsername.ban;
			
				if (passwordJSON == pass) {
					console.log("The passwords match");
					if(banJSON == "no"){

						var tempLoginObject = {"username":usernameJSON};

						localStorage["Access"] = JSON.stringify(tempLoginObject);
					  
						window.location = "../Login-successful/loginSuccessful.html";
					
					}
					else if(banJSON == "yes"){
						// give the reason why they were banned -Marcus
						var banlist = localStorage.getItem("banlist");
						banlist = JSON.parse(banlist);
						//search array of banlist
						for (i=0; i<banlist.length; i++){
							var c = banlist[i];
							
							if(c.username==document.getElementById("usernameIn").value){
								console.log("The Banhammer has spoken, "+c.username);
								var whyUbanned = c.reason;
							}
							
						}
						// retrieve reason from banlist and print in alert box
						alert("This account has been Banned! Reason : "+whyUbanned);
						window.location = "../login page/loginpage.html";
					}
				}
					
				else {
					console.log("Password from LocalStorage == Input Password = false");
					
					userPassIncorrect = "The username or password entered is invalid";
					document.getElementById("errMsg").innerHTML = userPassIncorrect;
					
					}
				
			}
	  else {
		console.log("Username from LocalStorage = null ");
		
		userPassIncorrect = "The username or password entered is invalid";
		document.getElementById("errMsg").innerHTML = userPassIncorrect;
		
	  }
	}
	function whileTyping(){
		console.log("function triggered");
		document.getElementById("errMsg").innerHTML ="";
	}