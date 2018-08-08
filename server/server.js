const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public'); //'path.join' help in getting the directory directly without any unneccesary path
// console.log(publicPath);
// console.log(__dirname + '/../public');
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New  user connected');

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});