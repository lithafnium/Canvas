// var blobs = []; 

// function Blob(id, x, y, r){
// 	this.id = id; 
// 	this.x = x; 
// 	this.y = y; 
// 	this.r = r; 
// }

var express = require('express'); // imports the module

var app = express(); //makes an express application 

var server = app.listen(3000); 

app.use(express.static('public')); 
	// static means hosting static files, non-dynamic, not changing, in public directory

console.log("My socket server is running");

var socket = require('socket.io'); // imports the module socket.io 

var io = socket(server); 

io.sockets.on('connection', newConnection); 
var arr = []; 
function newConnection(socket){
	console.log("new connection:" + socket.id); 

	socket.emit("data", arr); 



	socket.on('mouse', mouseMsg); 

	function mouseMsg(data){
		arr.push(data); 



		socket.broadcast.emit('mouse', data); 
		//io.sockets.emit('mouse', data); // includes the client to send the message, EVERYBODY
		// console.log(data); 
	}

}
