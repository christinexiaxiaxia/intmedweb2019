// var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/keysmash.html');
// });

// io.on('connection', function(socket){

//   console.log('a user connected');

//   socket.on('make blue', function(msg){
//     console.log('made blue');
//     io.emit('make blue', msg);
//   });

// });

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });

var app = require('express')();
var http = require('http').createServer(app);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});