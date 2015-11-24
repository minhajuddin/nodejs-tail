var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});

setInterval(function(){
  io.emit("log", "Insane\n");
}, 1000)

http.listen(3000, function(){
  console.log('listening on *:3000');
});
