	var user = localStorage["Access"];
	if(user != null){
		BeckhamUser = JSON.parse(user);
		var name = BeckhamUser.username;
		
	}
	
//forum main java scripts
//runs on load	
function loadup(){
	var ForumStorage = localStorage["ForumStorage"];
	if(ForumStorage != null){
		ForumStorage = JSON.parse(ForumStorage);

		var ArticleNumber = [];
			
		for(i=0; i<ForumStorage.length; i++){
			console.log(ForumStorage.length);
			var publisher = ForumStorage[i].username;
			var subject = ForumStorage[i].subject;
			var post = ForumStorage[i].post;
			var date = ForumStorage[i].date;
			console.log(i);
			
			
			
//need edit here
			if(publisher != null && subject !=""){
				console.log("There is a post");
				var hr = document.createElement("hr");
				var br = document.createElement("br");
				
				var forRecord = publisher+i;
				var usernameh5 = forRecord+"h5";
				var heading = forRecord+"heading";
				var note = subject+" -By "+publisher;
				var collapse = heading+publisher;
				var replyid = collapse+forRecord;
				var replyspan = forRecord+"span";
				var replyarea = forRecord+"area";
				var replyp = forRecord+"p";
				var spacer = publisher+"space"
				console.log(forRecord);
				console.log(usernameh5);
				console.log(heading);
				console.log(note);
				console.log(collapse);
				console.log(replyid);
				console.log(replyspan);
				
				
				
				var numbering = {"postedBy":forRecord, "post":post};
				ArticleNumber.push(numbering);
				localStorage["ArticleNumber"] = JSON.stringify(ArticleNumber);
				
				//div1
				var div = document.createElement("div");
				div.className = "card";
				div.id = forRecord;
				document.getElementById("accordion").appendChild(div);
				//div2
				var div = document.createElement("div");
				div.className = "card-header";
				div.role = "tab";
				div.id = heading;
				document.getElementById(forRecord).appendChild(div);
				//h5
				var h5 = document.createElement("h5");
				h5.className = "mb-0";
				h5.id = usernameh5;
				document.getElementById(heading).appendChild(h5);
				//a
				var a = document.createElement("a");
					a.setAttribute("data-toggle", "collapse");
					a.setAttribute("data-parent", "#accordion");
					a.href = "#"+collapse;
					a.setAttribute("arial-expanded", "true");
					a.setAttribute("arial-controls", collapse);
				
				var textA = document.createTextNode(note);
					a.appendChild(textA);
					document.getElementById(usernameh5).appendChild(a);
				//div3
				var div = document.createElement("div");
					div.id = collapse;
					div.className = "collapse";
					div.role = "tabpanel";
					div.setAttribute("aria-labelledby", heading);
					document.getElementById("accordion").appendChild(div);
				//div4
				var div = document.createElement("div");
					div.className = "card-block";
					div.id = replyid;
					//var textDiv = document.createTextNode(post);
					//div.appendChild(textDiv);
					document.getElementById(collapse).appendChild(div);
				//h3
				var h3 = document.createElement("h3");
					var h3Text = document.createTextNode(subject);
					h3.appendChild(h3Text);
					document.getElementById(replyid).appendChild(h3);
				//span tag to contain the by 
				var span = document.createElement("span");
					span.id = replyspan;
					var textSpan = document.createTextNode("By: "+publisher+" ");
					span.appendChild(textSpan);
					document.getElementById(replyid).appendChild(span);
				//span tag
				var span = document.createElement("span");
					span.className = "fa fa-clock-o";
					span.setAttribute("aria-hidden","true");
					var textSpan = document.createTextNode(date);
					span.appendChild(textSpan);
					document.getElementById(replyspan).appendChild(span);
				//spacer
				var div = document.createElement("div");
					div.id = spacer;
					document.getElementById(replyid).appendChild(div);
					document.getElementById(spacer).style.padding = "1%";
					
				//div tag to contain post
				var div = document.createElement("div");
					div.id = replyp;
					var textDiv = document.createTextNode(post);
					div.appendChild(textDiv);
					document.getElementById(replyid).appendChild(div);
					document.getElementById(replyp).style.border = "1px solid black";
					document.getElementById(replyp).style.paddingLeft = "5%";
					document.getElementById(replyp).style.paddingRight = "5%";
					document.getElementById(replyp).style.paddingTop = "1%";
					document.getElementById(replyp).style.paddingBottom = "1.2%";
					document.getElementById(replyp).style.color = "blue";
					document.getElementById(replyp).style.marginTop = "1%";
				
				//break
				document.getElementById(replyid).appendChild(br);
				document.getElementById(replyid).appendChild(hr);
				
					
				//need to edit
				
			}
		}
	}
	else{
		var h2 = document.createElement("h2");
		var h2text = document.createTextNode("We've got no articles here yet.");
		h2.appendChild(h2text);
		h2.style.padding = "1%";
		document.getElementById("accordion").appendChild(h2);
		console.log("There is no topics to load");
	}
}
function storedata() {
	var subjectData = document.getElementById("subject").value;
	var questionData = document.getElementById("question").value;
	var day = new Date();
	var date = day.toUTCString()
	console.log(date);
	var ForumStorage = localStorage["ForumStorage"];
	
	if(ForumStorage == null){
		ForumStorage = [];
		console.log("donthave");
	}
	else{
		ForumStorage = JSON.parse(ForumStorage);
		console.log("have");
	}		
		console.log(ForumStorage.length);
		var info = {"username":name, "subject":subjectData, "post":questionData, "date":date};
		ForumStorage.push(info);
		localStorage["ForumStorage"] = JSON.stringify(ForumStorage);
		
		
	
		alert("Sucessfully submitted post!");
		
		window.location = "ArticlesRavamped.html";
	
	
}
function nextup(){
	var retrieveAccessKey = localStorage["Access"];
		if(retrieveAccessKey != null){
			retrieveAccessKey = JSON.parse(retrieveAccessKey);
			var userWithAccess = retrieveAccessKey.username;
			
			if(userWithAccess != null){
				document.querySelector("#containerOftheForumSubs").style.display = "block";
				document.querySelector("#ask-question").style.display = "block";
			}
			else{
				document.querySelector("#containerOftheForumSubs").style.display = "none";
				document.querySelector("#ask-question").style.display = "none";
				document.querySelector(".logout-container").style.display = "none";
			}
		}
		else{
			document.querySelector("#containerOftheForumSubs").style.display = "none";
			document.querySelector("#ask-question").style.display = "none";
			document.querySelector(".logout-container").style.display = "none";
		}
}

loadup();
nextup();