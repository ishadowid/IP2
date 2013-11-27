var io = require('socket.io').listen(81);
io.sockets.on("connection", function(socket){
	console.log("Socket { id: " + socket.id + " } joined");
	socket.on("message", function(data)
	{
		//console.log("Message from socket{ id: " + socket.id + " } : " + data.msg);
		if (data.room != 'undefined')
			socket.broadcast.to(data.room).emit("message", socket.id + ":" + data.msg);
		else
			socket.broadcast.emit("message", socket.id + ":" + data.msg);
	});
	socket.on("select_room", function(data){
			console.log("Socket { id: " + socket.id + " } going to room " + data);
			socket.join(data);
			console.log(io.sockets.in('room1'));
	});
	socket.on("leave_room", function(data){
			console.log("Socket { id: " + socket.id + " } going to room " + data);
			socket.leave(data);
	});
});