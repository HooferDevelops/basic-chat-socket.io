var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

http.listen(process.env.PORT || 3000);

io.on('connection', (socket) => {
    console.log("User Connected");
    io.emit('message', {name: 'ADMIN', 'text': 'a user has joined the chat!'})
    
    socket.on('message', (data)=>{
        console.log(data);
        io.emit('message', data)
    })  

    socket.on('disconnect', ()=>{
        console.log("User Disconnected");
        io.emit('message', {name: 'ADMIN', 'text': 'a user has left the chat.'})
    })
});
