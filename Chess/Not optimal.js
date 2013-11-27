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
	socket.on('readyToPlay', function(data) {		
		if (socket.gameStatus != "connected")
			return;

		if (AloneRoom)
		{
			socket.join(AloneRoom);
			Log("Room #" + AloneRoom + "is full.");
			io.sockets.in(AloneRoom).emit("gameStarted");
			AloneRoom = undefined;
			io.sockets.in(AloneRoom).set("gameStatus", "gameStarted"); //???
		}
		else
		{
			AloneRoom = socket.id;
			socket.join(AloneRoom);
			Log("Room #" + AloneRoom + "has been created.");
			socket.emit("waitingForPlayers");
			socket.gameStatus = "waitingForPlayers";
		}
		
	});
	socket.on("makeMove", function (data) {
		if (socket.gameStatus != "gameStarted")
			return;

		if (data.xfrom && data.yfrom && data.xto && data.yto)
			socket.broadcast.to(AloneRoom).emit("makeMove", data);
		else
		{
			io.sockets.in(AloneRoom).emit("disconnect", false);
			io.sockets.in(AloneRoom).disconnect();
			Log(AloneRoom + "must be leaved.");
			//io.sockets.in(AloneRoom).leave(AloneRoom);
		}
	});
});