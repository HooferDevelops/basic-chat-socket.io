var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
http.listen(process.env.PORT || 3000);

io.on('connection', (socket) => {
    io.emit('message', {'name': 'ADMIN', 'text': 'a user has joined the chat!'})
    
    socket.on('message', (data)=>{
        io.emit('message', data)
    })  

    socket.on('disconnect', ()=>{
        io.emit('message', {name: 'ADMIN', 'text': 'a user has left the chat.'})
    })
});
