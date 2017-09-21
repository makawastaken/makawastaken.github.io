	//code for creating the info
	function removePrevious(){//removes the error message
		var elements = document.querySelectorAll("h4");
		for (var n=0; n < elements.length; n++){
		var element = elements[n];
		element.parentNode.removeChild(element);
		}	
	}
	function whySignUp(){
		
		removePrevious();
		
		var  h4 = document.createElement("H4");
		h4.setAttribute("id","whyNot");
		var h4Text = document.createTextNode("By signing up, you will be able to register for our monthly news letter,and at the same time, be able to chat with other users in real time regarding any attention requiring questions. You will be able to personalise your own profile too!"); 
		h4.appendChild(h4Text);
		document.getElementById("infoWhy").appendChild(h4);
	}
	//end of the info creation
	
	// Error message creations
	function errUsername(){//displays the error message for username
		var p = document.createElement("P");
		p.setAttribute("id","noi");
		var pText = document.createTextNode("*please enter your username!"); 
		p.appendChild(pText);
		document.getElementById("UNE").appendChild(p);
		styler(noi);
	}
	function errUsed(){//displays the error message for if username is existing
		var p = document.createElement("P");
		p.setAttribute("id","usr");
		var pText = document.createTextNode("*The username you have created is taken!!"); 
		p.appendChild(pText);
		document.getElementById("UNE").appendChild(p);
		styler(usr);
	}
	function errName(){//displays the error message for name
		var p = document.createElement("P");
		p.setAttribute("id","nais");
		var pText = document.createTextNode("*please enter your First Name!"); 
		p.appendChild(pText);
		document.getElementById("FNE").appendChild(p);
		styler(nais);
	}
	function errEmail(){//creates error message if no input in Email (working)
		var p = document.createElement("P");
		p.setAttribute("id","bad");
		var pText = document.createTextNode("*please enter your email"); 
		p.appendChild(pText);
		document.getElementById("EE").appendChild(p);
		styler(bad);
	}
	function errGender(){//displays the error message for empty gender(not workng)
		var p = document.createElement("P");
		p.setAttribute("id","hars");
		var pText = document.createTextNode("*please select your gender!"); 
		p.appendChild(pText);
		document.getElementById("GE").appendChild(p);
		styler(hars);
	}
	function errPassword(){//creates error message for the password (working)
		var p = document.createElement("P");
		p.setAttribute("id","nice");
		var pText = document.createTextNode("*these password does not match"); 
		p.appendChild(pText);
		document.getElementById("RPE").appendChild(p);
		styler(nice);
	}
	function errNoPassword(){
		var p = document.createElement("P");
		p.setAttribute("id","wow");
		var pText = document.createTextNode("*please create a password"); 
		p.appendChild(pText);
		document.getElementById("PE").appendChild(p);
		styler(wow);
	}
	function errPasswordNoSpecial(){
		var p = document.createElement("P");
		p.setAttribute("id","speci");
		var pText = document.createTextNode("*Your password must have at least 1 number & 1 special character (!,@,#,$,%)"); 
		p.appendChild(pText);
		document.getElementById("PE").appendChild(p);
		styler(speci);
	}
	function errShortPassword(){
		var p = document.createElement("P");
		p.setAttribute("id","lon");
		var pText = document.createTextNode("*password entered is not at least 8 characters long"); 
		p.appendChild(pText);
		document.getElementById("PE").appendChild(p);
		styler(lon);
	}
	//End of error message creating

	//This is the script for displaying err msgs when conditions are met

	function checkUsername(){//if username is empty, display error message
		var u= document.getElementById("username").value;
		if(u==""){
			removeErr();
			errUsername();
			return false;
		}
		else{
			return getUsername(u);
		}
	}
	function getUsername(Usn){
		console.log("There is Username "+Usn);
			var capsUsn = Usn.toUpperCase();
		if (localStorage[capsUsn]){
			removeErr();
			errUsed();
			console.log("The user name is taken");
			return false;
		}
		else{
			console.log("username not taken");
			return true;
		}
	}
		//need to continue editing
		
		//compares the user input with any existing storage data
	function checkFirst(){//if first name is empty, display error message
		var f= document.getElementById("firstName").value;
		if(f==""){
			removeErr();
			errName();
			return false;
		}
		else{
			console.log("Nice Name");
			return true;
		}
	}
	function checkEmail(){//if Email is empty, display error message
		var e = document.getElementById("email").value;
		//need edit 
		if(e==""){
			removeErr();
			errEmail();
			return false;
		}
		else{
			removeErr();
			console.log("Email registered");
			return true;
		}
		
	}
	function checkGen(){//if no gender is selected, display error message(not yet tested)
		var g= document.getElementById("gender").value;
		//var gotten = g.options[g.selectedIndex].value
		if(g=="male"){
			console.log("Gender is male");
			return true;
		}
		else if(g=="female"){
			console.log("Gender is female");
			return true;
		}
		else if(g=="null"){
			 removeErr();
			 errGender();
			 return false;
		}
	}
	function checkPass(){
		var b= document.getElementById("newPass").value;
		if(b.length>7){
			console.log("password recieved"+b.length);
			var numbers = false;
			var chars = false;
			for(i = 0; i<b.length; i++){
				var capsb = b.toLowerCase();
				console.log("capsb"+capsb);
				var each = b.charAt(i);
				console.log("each :"+each);
					//check for numbers
					if(each == "1" || each == "2" || each == "3" || 
						each == "4" || each == "5" || each == "6" || 
						each == "7" || each == "8" || each == "9"){
							console.log("contains number");
							var numbers = true;
							if(numbers == true){
								if(each == '!' || each == '@' || each == '#' || 
								each == '$' || each == '%' || each == '&' || 
								each == '*' || each == '^' || each == '?' || 
								each == '('	|| each == ')'){
									console.log("contains the special characters");
									var chars = true;
									
								}
								else{
									console.log("special characters dont have");
									removeErr();
									errPasswordNoSpecial();
								}
							}
					}
					else if(each == '!' || each == '@' || each == '#' || 
						each == '$' || each == '%' || each == '&' || 
						each == '*' || each == '^' || each == '?' || 
						each == '('	|| each == ')'){
							console.log("contains the special characters");
							var chars = true;
							if(chars == true){
								if(each == "1" || each == "2" || each == "3" || 
									each == "4" || each == "5" || each == "6" || 
									each == "7" || each == "8" || each == "9"){
										console.log("contains number");
										var numbers = true;
								}
								else{
									console.log("special characters dont have");
									removeErr();
									errPasswordNoSpecial();
								}
							}
						}
					else{
						console.log(chars);
						console.log(numbers);
						if(numbers != true){
							console.log("numbers dont have");	
							removeErr();
							errPasswordNoSpecial();	
						}
						else if(chars != true){
							console.log("characters dont have");	
							removeErr();
							errPasswordNoSpecial();	
						}
					}
				}
			}
		
	
		else if(b==""){
			removeErr();
			console.log("no password");
			errNoPassword();
			return false;
		}
		else{
			removeErr();
			console.log("password not long enough");
			errShortPassword();
			return false;
		}
		if(chars == false || numbers == false){
			return false;
		}
		if(chars == true && numbers ==true){
			removeErr();
			return true;
			
		}
	}
	
	//compiled functions to call
	function clickTypeName(){
		checkUsername();
		checkFirst();
	}
	function clickTypeEmail(){
		checkUsername();
		checkFirst();
		checkEmail();
	}
	function clickTypeGender(){
		checkUsername();
		checkFirst();
		checkEmail();
		checkGen();
	}
	function clickTypePassword(){
		checkUsername();
		checkFirst();
		checkEmail();
		checkGen();
		checkPass();
	}
	function clickTypeRePass(){
		checkUsername();
		checkFirst();
		checkEmail();
		checkGen();
		checkPass();
		comparePass();
	}
	//end of compiled functions
	
	//The misalaneous functions
	//main error message style setter
	function styler(id){
		id.style.fontSize="10px";
		id.style.color="red";
		id.style.fontFamily="Times New Roman, sans-serif";
	}//removes the error message
	function removeErr(){
		var elements = document.querySelectorAll("p");
		for (var n=0; n < elements.length; n++){
		 var element = elements[n];
		element.parentNode.removeChild(element);
		}	
	}//removes the error message
	function removePrevious(){
		var elements = document.querySelectorAll("h4");
		for (var n=0; n < elements.length; n++){
		 var element = elements[n];
		element.parentNode.removeChild(element);
		}	
	}
	
	//get values
	function comparePass(){//function to get the password entered and compare it with the retyped one
		var x= document.getElementById("newPass").value;
		var y= document.getElementById("conPass").value;
		checkPass();
		if(x==y){//if password typed in is the same, print console.log all clear else, display error message
			console.log("all clear");
			return true;
		}
		else{
			removeErr();
			errPassword();
			return false; 
		}
	}
	function onSubmission(){
		var getUsername = document.getElementById("username").value;
		var capitalUser = getUsername.toUpperCase();
		var getFirstName = document.getElementById("firstName").value;
		var getEmail = document.getElementById("email").value;
		var getGender = document.getElementById("gender").value;
		var getPass = document.getElementById("newPass").value;
			/* Marcus's MD5 hashing encryption */
		var wildhash = CryptoJS.MD5(getPass); 
		var neathash = CryptoJS.MD5(wildhash).toString();
		getPass = neathash;
		var ban = "no";
		
	if (checkUsername() && comparePass() && checkEmail() && checkPass() && checkFirst() && checkGen() == true) {
		 var storeInfo = {"username":getUsername, "FirstName":getFirstName, "password":getPass, "email":getEmail, "gender":getGender, "capital":capitalUser, "ban":ban};
		
		localStorage[capitalUser] = JSON.stringify(storeInfo);
		alert("Sign Up Sucessful! You will be redirected to the login page shortly!");
		
			window.location = "../login page/loginpage.html";
			
		
    }
	else{
		console.log(checkUsername());
		console.log(comparePass());
		console.log(checkEmail());
		console.log(checkFirst());
		console.log(checkGen());
		if(checkUsername()==false){
			alert("Oh no! The Username you have inputted has been taken!");
			
		}
		if(checkPass() == false){
			alert("Your password does not meet the requirement!");
		}
	}
 }