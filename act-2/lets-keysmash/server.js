var express = require('express');

var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);



app.use(express.static('public'))


io.on('connection', function(socket){

  console.log('a user connected');

  socket.on('disconnect', function(){
  	var disconnectMsg = 'user disconnected';
    console.log(disconnectMsg);
  });

  // socket.on('random color', function(){
  // 	color = randomColor();
  //   console.log('color: ' + color);
  //   io.emit('random color', color);
  // });

  socket.on('start', function(){
  	black = makeBlack();
    console.log('Background black, music playing');
    io.emit('start', black);
  });

  // socket.on('make transparent', function(){
  // 	opacity = makeTransparent();
  //   console.log('Keydown, hide instructions');
  //   io.emit('make transparent', opacity);
  // });

  // socket.on('make white', function(){
  // 	white = makeWhite();
  //   console.log('A key pressed');
  //   io.emit('make white', white);
  // });

});

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });

http.listen(11116, function(){
  console.log('listening on *:11116');
});




    function randomColor() {
        var r = Math.floor(Math.random() * 256)
        var g = Math.floor(Math.random() * 256)
        var b = Math.floor(Math.random() * 256)

        var allTogether = "rgb(" + r +"," + g + "," + b +")"

        return allTogether;
    }

    function makeTransparent() {
    	var opacity = "0";

    	return opacity;
    }

    function makeWhite() {
        var whiteColor = "white"

        return whiteColor;
    }

    function makeBlack() {
        var blackColor = "black"

        return blackColor;
    }

    function playAudio() {

    }

    function muteAudio() {

    }

    function unmuteAudio() {

    }






