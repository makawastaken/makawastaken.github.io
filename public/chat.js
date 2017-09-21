// Make connection
// socket for the front-end
// we have access to io because we loaded the libary in the front end (CDN)
var socket = io.connect('http://localhost:5000'); // var socket = io();

//query DOM
var message = document.getElementById('message');
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

    // pm msg
  var  newpm = document.getElementById('new-pm');
    // who to pm
  var  pmto = document.getElementById('pm-to');
    // sendpm button
var  sendpm = document.getElementById('send-pm');



function TimeStamp(){
  var d=new Date();
  var t = d.toLocaleTimeString();
  return t;
}
document.addEventListener('DOMContentLoaded', function(){
  console.log("connected to general chat");



  Sendusername();
  function Sendusername(){

    var key = localStorage["Access"];
    key = JSON.parse(key);
    var usernameString = key.username;
    document.getElementById('handle').value = usernameString; // get input username
    socket.emit('username', usernameString); // emit the username to welcome <dynamic username>
    socket.emit('privateid', usernameString); // for locking socket.id to username.
    console.log("Emitted privateid");
    // generate a randomly number
    var RandomNumber = Math.floor((Math.random() * 9) + 1);
    // colorful whatsapp like UI for usernames
    var randomTip = generateTip(RandomNumber);

    // For first randomly generated line
    function generateTip(RandomNumber){
    	var randomline;
    	switch(RandomNumber){
    		case 1: randomline= "Be polite with others to make friends!"; // is a nation that is smart and innovative
    		break;
    		case 2: randomline= "You can send private messages by clicking the 'private message button'"; // is a nation where the people are smart
    		break;
    		case 3: randomline = "Always be respectful to other users and staff."; //is a nation that makes wise decisions
    		break;
    		case 4: randomline = "Our chat uses filters to provide a user friendly experience."; //is a nation with intelligent and well educated people
    		break;
    		case 5: randomline = "You can also join other channels, check out the channel tab"; //a nation that takes each step carefully with planning
    		break;
    		case 6: randomline ="Let's make this community a great one, be nice to everybody.";
    		break;
    		case 7: randomline ="being mean, swearing isn't cool. Let's be nice to everyone.";
    		break;
        case 8: randomline ="press the power off button on top to go tempoarily offline";
    		break;
        case 9: randomline ="spot a abusive user? report them in the 'report' tab below";
    		break;
    	}
    	return randomline;
    }
    document.getElementById("random-tip-text").innerHTML = randomTip;
/* temp */
    socket.on('connect', function (data) {
      var key = localStorage["Access"];
      key = JSON.parse(key);
      var usernameString = key.username;
            socket.emit('storeClientInfo', { customId: usernameString });
            console.log(usernameString);
        });
  }
});
socket.on('welcomedM',function(data){
  output.innerHTML += '<p style="text-align:center;padding:5px 0px; !important;background-color:white;"> > ' + data + ' Joined, everyone say hi!</p>';
});



// Emit Evnts
// this event listener is listening for the click button on send
// emit a chat message to the server, and send the data below here
//btn.addEventListener('click', function(){
  // emit a message down a socket into the web server
  // on clicking send button, send the message to server
  // emi function tkes 2 para 1st, name of the message so let's call it chat
  // 2nd parameter is what the actual message is or the data were sending to the server so its an object
// send message to server
//socket.emit('chatmsg',{ // chatmsg first initiation
//  message: message.value, // get value of message input field
//  handle: handle.value
//});
//});
// IN THE div#message , pressing enter will emit the chat to all sockets
//oh my god i took an entire week to figure this OUT YAYAYYYYYY MY GOD YESSSSSSSSSS
/*
message.addEventListener("change", function(){
  socket.emit('chatmsg',{ // chatmsg first initiation
    message: message.value, // get value of message input field
    handle: handle.value
  });
});
*/
$(document).ready(function() {
	$(document).keyup(function(e) {
		if(e.keyCode == 13) {
      if(message.value != ""){
			socket.emit('chatmsg',{
				message: message.value,
				handle: handle.value
			});// close chatmsg
    }
    else{
      alert("You're sending an empty message?");
    }
		}//close if
	});//close the inside








}); // close document.ready
// press enter key to send chat msg (NOT WORKING ASK MISS TAY)
btn.addEventListener('click', function(){
  if(message.value != ""){
  socket.emit('chatmsg',{ // chatmsg first initiation
    message: message.value, // get value of message input field
    handle: handle.value
  });
}
else{
  alert("You're sending an empty message?");
}
});




$(document).ready(function(){
  // pm send
  sendpm.addEventListener('click', function(){
    alert("Private Message Sent to : " + document.getElementById('pm-to').value);

    socket.emit('private message', { from: document.getElementById('handle').value, userToPM:pmto.value, msg:newpm.value });

  });
  /*
  $('#send-pm').click(function(){
    alert("send pm button pressed");
    socket.emit('private message', { from:$('#handle').val(), msg:$('#new-pm').val(), userToPM:$('#pm-to').val() });
    console.log(socket.id + 'has sent a message of ' +$('#handle').val() + msg:$('#new-pm').val() + userToPM:$('#pm-to').val() );
  });
  */
  // pm recieve pmevent
  socket.on('pmevent', function(data){
    alert("private message recieved");
    output.innerHTML+= '<p style="padding:0.5%;color:#cc0033;">Private Message From '+data.from+ ' : '+data.msg+'</p>';
  });

});//close sendpm thing
/*

// pm send
$('#send-pm').click(function(){
  alert("send pm button pressed");
  socket.emit('private message', { from:$('#handle').val(), msg:$('#new-pm').val(), userToPM:$('#pm-to').val() });
  console.log(socket.id + 'has sent a message of ' +$('#handle').val() + msg:$('#new-pm').val() + userToPM:$('#pm-to').val() );
});


// pm recieve pmevent
socket.on('pmevent', function(data){
  output.innerHTML+= '<p>PM FROM : '+data.from+ 'msg is : '+data.msg+'</p>';
});

*/

message.addEventListener('keypress', function(){
  socket.emit('typing', handle.value);//sending the name of who typing (keypress)
});





// Listen for events
// Listen for chat from server, then output the data into the DOM
socket.on('chatmsg', function(data){
  var elemz = document.getElementById("output");
  elemz.scrollTop = elemz.scrollHeight;
  feedback.innerHTML = "";   // stop display " A is typing a message" after msg is sent
  output.innerHTML += '<p style="padding:14px 0px;"><strong style="text-align:right;">' + data.handle + ':</strong> ' + data.message + '<br/><span style="font-size:10px;">' + TimeStamp(); '</span></p>' // padding for space between messages
  //message.value = ""; //a bug has been detected,9/7/17 if a user is half typing and another sends a msg, all other users box will be cleared.
});

socket.on('typing',function(data){
  feedback.innerHTML = "<p><em>" + data + " Is typing a message..." + "</em></p>"; // output the data, which is the username or handle
});
// If someone connects, broadcast it to everyone in chat who were in BEFORE new user.
socket.on('newuser',function(){
  output.innerHTML += '<p style="text-align:center;padding:5px 0px; !important;background-color:white;"> a new user connected</p>'
});
// when a new user connects, welcome message (only the new user sees this)
socket.on('ClientWelcome', function(){
  output.innerHTML += '<h4 style="border-bottom:1px solid orange;padding:1% 2%;background:#282b30;color:white;">Welcome to General chat. Here, any topics about smart nation in general can be discussed and talked about.<br/></h4>';
});
socket.on('welcomemsg', function(){
  /*output.innerHTML += '<p>Welcome to the chat room</p>';*/
});
// Broadcast a user left to all other remainding users
socket.on('userhasleft',function(){
  output.innerHTML += '<p style="text-align:center;padding:5px 0px; !important;background-color:white;"> a user has left the chat </p>'
});
// client who sent message will have message box cleared
socket.on('clearSentMsg', function(){
  message.value= ""; //DO NOT CHANGE
});
