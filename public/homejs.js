
/*
	The purpose of this is to
	- Dynamic Text for home page
	- Newsletter JavaScript?
*/
// To randommize the text

var line2 = document.querySelector("#randommsgtwo"); // span randomsgtwo
var line3 = document.querySelector("#randommsgthree");// span randomsgthree


// generate a randomly number
var RandomNumber = Math.floor((Math.random() * 7) + 1);
// "Smart Nation"
var randomline2 = generateLine1(RandomNumber); // store text for line 2
var randomline3 = generateLine2(RandomNumber); // store text for line 3

// For first randomly generated line
function generateLine1(RandomNumber){
	var randomline;
	switch(RandomNumber){
		case 1: randomline= "is a nation that is"; // is a nation that is smart and innovative
		break;
		case 2: randomline= "is a nation where"; // is a nation where the people are smart
		break;
		case 3: randomline = "is a nation that"; //is a nation that makes wise decisions
		break;
		case 4: randomline = "is a nation with intelligent"; //is a nation with intelligent and well educated people
		break;
		case 5: randomline = "is a nation taking each"; //a nation that takes each step carefully with planning
		break;
		case 6: randomline ="is a nation always up to";
		break;
		case 7: randomline ="is a nation that";
		break;
	}
	return randomline;
}
// For second randomly generated line
function generateLine2(RandomNumber){
	var randomline;
	switch(RandomNumber){
		case 1: randomline= "smart and innovative";// is a nation that is smart and innovative
		break;
		case 2: randomline= "the people are smart"; // is a nation where the people are smart
		break;
		case 3: randomline = "makes wise decisions "; //is a nation that makes wise decisions
		break;
		case 4: randomline = "and well educated people"; //is a nation with intelligent and well educated people
		break;
		case 5: randomline = "step with careful planning"; //a nation that takes each step carefully with planning
		break;
		case 6: randomline = "date with technology";
		break;
		case 7: randomline = "are fully automated";
		break;
	}
	return randomline;
}

// append the randomly generated text to webpage spans
line2.innerText = randomline2;
line3.innerText = randomline3;



/*
// For second randomly generated line
switch(RandomNumber){
	case 1: randomline = "Smart and Innovative";
	break;
	case 2: randomline = "The people are smart";
	break;
}*/
//to make logout invisible

		var retrieveAccessKey = localStorage["Access"];
		if(retrieveAccessKey != null){
			retrieveAccessKey = JSON.parse(retrieveAccessKey);
			var userWithAccess = retrieveAccessKey.username;
				document.getElementById("logout").style.display = "block";
			
			if(userWithAccess == null){
				
				document.getElementById("logout").style.display = "none";
			}
			
		}
		




// For third ranomly generated line
// Dope text 1
/*
	"Smart Nation"
	is a nation that is
	smart and innovative
*/

// Dope text 2
/*
	"Smart Nation"
	is a nation that
	makes wise decisions
*/

// Dope text 3
/*
	"Smart Nation"
	is a nation with intelligent
	and well educated people
*/

// Dope text 4
/*
	"Smart Nation"
	a nation that takes each
	step carefully with planning
*/

//Dope text 5
/*
	"Smart Nation"
	is a country always up to Date
	with technology
*/

//Dope text 6
/*
	"Smart Nation"
	is a nation that
	is fully automated
*/

//Dope text 7
/*
	"Smart Nation"
	Is a nation where people are
	only interested in mobile devices
*/

//Dope text 8
/*
	"Smart Nation"
*/

//Dope text 9
/*
	"Smart Nation"
*/

//Dope text 10
/*
	"Smart Nation"
*/
