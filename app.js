const { createSocket } = require('dgram');

var app = require('express')();
var http = require('http').Server(app);

const io = require('socket.io')(http);

app.get('/', function(req, res){
   res.sendFile(__dirname +'/index.html');
});

io.on('connection', function(socket){
    console.log("backend connected");

    socket.on('sendMsg',(msg)=>{
        console.log('here mfs',msg);

    })

    setTimeout(function(){
        socket.send('Sent a message 4seconds after connection!');
     }, 4000);

    socket.on('disconnect', function(){
        console.log("user disconnected");
    });
});

http.listen(5000, function(){
   console.log('listening on *:5000');
});