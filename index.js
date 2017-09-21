// creating an express app, and a nodejs
// THIS IS THE BACK-END OF THE SERVER
var express = require('express'); //look for the express file and store in var
var socket = require('socket.io');//look for the socket.io file and store in var
// App setup
var app = express(); //invoke the function stored in the var
var profanityFilter = require('simple-profanity-filter');
// swear words list
var clients =[];//HOLDS CONNECTED USERS, links socket.id(jibberish) to the username and links them in an object
//listen on localHost port 4000
// when it starts listening to this number, fire a callback function to let us
//know it is listening on this port number.
var server = app.listen(5000, function(){
  console.log('Listening to requests on port 5000 ');
});

//Static files
// look for a static file in the public folder, and if you find it
//serve the file to the user
app.use(express.static('public'));

// Socket io setup.
//invoking the socket.io FUNCTION, YES IT IS A FUNCTION.
// So now, we're setting socket.io in the server we previously created.
var io = socket(server); //socket.io will sit on the server, waiting for a client to make a connection, and set up a eb socket between the two.
var collector ="";
//listen for the connection to the server
// on a connection, fire a callback function which then passes through the socket
// between the client that's making the connction, and the server
io.on('connection', function(socket){
// lock socket.id to the username for private msging
  socket.on('privateid',function(data){
  /*  socket.id = data;
    console.log("socketid should be username of "+data);
    console.log(socket.id);*/
    io.sockets.emit('connect');
  });

  //PMING people
  socket.on('private message',function(data){
    console.log(data.from +' sent a PM ');
    console.log('it should reach '+ data.userToPM);
    /* temp for */
    for( var i=0, len=clients.length; i<len; ++i ){
        var c = clients[i];

        if(data.userToPM ==c.customId){
          var located = c.clientId;
          console.log(located);

          data.msg = profanityFilter.filter(data.msg);
        /*  var sendtofilter = sanitize(data.msg);

          function sanitize(sanitize){

          for (i=0; i<sanitize.length; i++){
            console.log("length of msg is "+ sanitize.length +"running for" + [i]);

            if(sanitize[i]== '<'){
              console.log("Censored a < ");
              var fix = sanitize[i];
              fix = '&lt;';
              collector += fix;
            }
            else if (sanitize[i]== ">"){
              console.log("Censored a >");
              var fix = sanitize[i];
              fix = '&gt;';
              collector += fix;
           }
             else{
               collector += sanitize[i];
             }
          }
          return collector;
        }
        collector = "";
        data.msg = sendtofilter;*/


            socket.broadcast.to(located).emit('pmevent',data);
        }
    }

//{ from:data.from, msg:data.msg } //io.sockets.emit(data.userToPM)
  });
/* TEMP */
  socket.on('storeClientInfo', function (data) {

             var clientInfo = new Object();
             clientInfo.customId         = data.customId;
             clientInfo.clientId     = socket.id;
             clients.push(clientInfo);
             console.log(clients);
         });

        /* socket.on('disconnect', function (data) {

             for( var i=0, len=clients.length; i<len; ++i ){
                 var c = clients[i];

                 if(c.clientId == socket.id){
                     clients.splice(i,1);
                     break;
                 }
             }
             console.log(clients);
         });*/
//temp
// NO LONGER TEMP, WORKS AS OF 2/8/17 - MARCUS

  console.log('A new user connected : ', socket.id); // socket.id gives each connected user a unique id
  socket.broadcast.emit('newuser'); // If someone connects, tell everyone else theres a new guy in chat.
  socket.emit('ClientWelcome'); // Welcome message to a new user (only the specific user recieves it)
  socket.emit('welcomemsg')
  console.log(clients);
socket.on('disconnect',function(socket){
  console.log('a user has disconnected');// when a user disconnects, log it in the console
  io.sockets.emit('userhasleft');
});
socket.on('username',function(data){
  io.sockets.emit('welcomedM',data);
});
// how the server handles the data from 1 client's chat
// listening on all sockets, when i hear the 'chat' message i will call the callback function
  socket.on('chatmsg', function(data){
//profanityFilter
    console.log('chatmsg' + ' Unfiltered message sent : ',data);
    console.log('chat msg from socket of '+socket.id);
    data.message = profanityFilter.filter(data.message);
    var sendtofilter = sanitize(data.message);

    function sanitize(sanitize){

    for (i=0; i<sanitize.length; i++){
      console.log("length of msg is "+ sanitize.length +"running for" + [i]);

      if(sanitize[i]== '<'){
        console.log("Censored a < ");
        var fix = sanitize[i];
        fix = '&lt;';
        collector += fix;
      }
      else if (sanitize[i]== ">"){
        console.log("Censored a >");
        var fix = sanitize[i];
        fix = '&gt;';
        collector += fix;
     }
       else{
         collector += sanitize[i];
       }
    }
    return collector;
  }
  collector = "";
  data.message = sendtofilter;
    io.sockets.emit('chatmsg',data);// getting all sockets and then sending the chat message to all sockets
    console.log('chatmsg' + ' Message filtered to :', data); // message logging in console
    socket.emit('clearSentMsg');// send this back to client who sent message !IMPORTANT
  });
// on connection, find out who is typing and send the data to everyone else except the orignal one
  socket.on('typing', function(data){
    socket.broadcast.emit('typing', data);
  });
});
// web socket connection made. time to start transferring data!

// SWEAR WORDS LIST, MANUALLY EDIT IT
profanityFilter.replaceWords(["fuck","fu ck","f uck","fuc k","fuuck", "fuc","shit", "cunt","whore","nigger","nigga","cb","stfu","bitch","slut","nudes","f.u.c.k","pussy"]);























//space
