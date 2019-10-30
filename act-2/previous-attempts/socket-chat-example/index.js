var express = require('express');

var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });


app.use(express.static('public'))


io.on('connection', function(socket){

  console.log('a user connected');

  socket.on('disconnect', function(){
  	var disconnectMsg = 'user disconnected';
    console.log(disconnectMsg);
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('random color', function(){
  	color = randomColor();
    console.log('color: ' + color);
    io.emit('random color', color);
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});




    function randomColor() {
        var r = Math.floor(Math.random() * 256)
        var g = Math.floor(Math.random() * 256)
        var b = Math.floor(Math.random() * 256)

        var allTogether = "rgb(" + r +"," + g + "," + b +")"

        return allTogether;
    }




