var io = require('socket.io').listen(81);
var fs = require('fs');
var AloneRoom;

function Log(data)
{
	fs.appendFile('message.txt', data, function (err) {
	  if (err) throw err;
	});
}

io.sockets.on('connection', function (socket) {
	socket.emit("connected");
	socket.gameStatus = "connected";
	Log(socket.id + " connected.\r\n");

	socket.on('readyToPlay', function(data) {		
		if (socket.gameStatus != "connected")
			return;

		if (AloneRoom)
		{
			socket.join(AloneRoom);
			Log("Room #" + AloneRoom + " is full.\r\n");
			io.sockets.in(AloneRoom).emit("gameStarted");
			AloneRoom = undefined;
		    //io.sockets.in(AloneRoom).set("gameStatus", "gameStarted"); //???

			for (var socketId in io.sockets.clients(AloneRoom)) {
			    io.sockets.sockets[socketId].set('gameStatus', 'gameStarted');
			    Log(socketId + " game started.\r\n");
			}
		}
		else
		{
			AloneRoom = socket.id;
			socket.join(AloneRoom);
			Log("Room #" + AloneRoom + " has been created.\r\n");
			socket.emit("waitingForPlayers");
			socket.gameStatus = "waitingForPlayers";
		}
		
	});
	socket.on("makeMove", function (data) {
		if (socket.gameStatus != "gameStarted")
			return;

		if (data.xfrom && data.yfrom && data.xto && data.yto) {
			socket.broadcast.to(AloneRoom).emit("makeMove", data);
			Log(socket.id + " maked move from " + data.xfrom + " " + data.yfrom + " to " + data.xto + " " + data.yto + "\r\n");
		}
		else {
			io.sockets.in(AloneRoom).emit("disconnect", false);
			io.sockets.in(AloneRoom).disconnect();
			Log(AloneRoom + " must be leaved.\r\n");
			//io.sockets.in(AloneRoom).leave(AloneRoom);
		}
	});
	socket.on("gameOver", function (data) {
		
	});
	socket.on("disconnect", function (data) {

	});
});