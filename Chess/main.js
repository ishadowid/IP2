// king
function King(color, x, y) {
    this.NotMoved = true;
    this.color = color;
    this.image = "king_" + color + ".png";
    this.X = x != null || x != undefined ? x : 0;
    this.Y = y != null || y != undefined ? y : 0;
    return this;
}
King.prototype.toString = function () {
    return "King";
}
King.prototype.Move = function (table, newX, newY) {
    if (!(newX == this.X && newY == this.Y)) {
        table[newX][newY] = table[this.X][this.Y];
        table[this.X][this.Y] = null;
        this.X = newX;
        this.Y = newY;
        this.NotMoved = false;
    }
}
King.prototype.TryMove = function (table, newX, newY)
{   // проверить условие что ниже описано
    if ((Math.abs(this.Y - newY) == 2 && this.X == newX ) || Math.abs(this.X - newX) <= 1 && Math.abs(this.Y - newY) <= 1 && (table[newX][newY] == null || (table[newX][newY] != null && table[newX][newY].color != this.color)))
        return true;
    return false;
}

// queen
function Queen(color, x, y) {
    this.color = color;
    this.image = "queen_" + color + ".png";
    this.X = x != null || x != undefined ? x : 0;
    this.Y = y != null || y != undefined ? y : 0;
    return this;
}
Queen.prototype.toString = function () {
    return "Queen";
}
Queen.prototype.Move = function (table, newX, newY) {
    if (!(newX == this.X && newY == this.Y)) {
        table[newX][newY] = table[this.X][this.Y];
        table[this.X][this.Y] = null;
        this.X = newX;
        this.Y = newY;
    }
}
Queen.prototype.TryMove = function (table, newX, newY)
{
    if (table[newX][newY] != null && table[newX][newY].color == this.color)
        return false;
    if (Math.abs(this.X - newX) > 0 && this.Y == newY)
    {
        for (var i = newX > this.X ? this.X + 1 : this.X - 1; i != newX; )
        {
            if (table[i][this.Y] != null)
                return false;
            i = newX > this.X ? i + 1 : i - 1;
        }
        return true;
    }
    if (Math.abs(this.Y - newY) > 0 && this.X == newX) 
    {
        for (var i = newY > this.Y ? this.Y + 1 : this.Y - 1; i != newY; )
        {
            if (table[this.X][i] != null)
                return false;
            i = newY > this.Y ? i + 1 : i - 1;
        }
        return true;
    }
    if (Math.abs(this.Y - newY) == Math.abs(this.X - newX))
    {
        for (var i = newX > this.X ? this.X + 1 : this.X - 1, j = newY > this.Y ? this.Y + 1 : this.Y - 1; i != newX; ) {
            if (table[i][j] != null)
                return false;
            i = newX > this.X ? i + 1 : i - 1;
            j = newY > this.Y ? j + 1 : j - 1;
        }
        return true;
    }    
    return false;
}

// rook
function Rook(color, x, y) {
    this.NotMoved = true;
    this.color = color;
    this.image = "rook_" + color + ".png";
    this.X = x != null || x != undefined ? x : 0;
    this.Y = y != null || y != undefined ? y : 0;
    return this;
}
Rook.prototype.toString = function () {
    return "Rook";
}
Rook.prototype.Move = function (table, newX, newY) {
    if (!(newX == this.X && newY == this.Y)) {
        table[newX][newY] = table[this.X][this.Y];
        table[this.X][this.Y] = null;
        this.X = newX;
        this.Y = newY;
        this.NotMoved = false;
    }
}
Rook.prototype.TryMove = function (table, newX, newY)
{
    if (table[newX][newY] != null && table[newX][newY].color == this.color)
        return false;
    if (Math.abs(this.X - newX) > 0 && this.Y == newY) {
        for (var i = newX > this.X ? this.X + 1 : this.X - 1; i != newX; ) {
            if (table[i][this.Y] != null)
                return false;
            i = newX > this.X ? i + 1 : i - 1;
        }
        return true;
    }
    if (Math.abs(this.Y - newY) > 0 && this.X == newX) {
        for (var i = newY > this.Y ? this.Y + 1 : this.Y - 1; i != newY; ) {
            if (table[this.X][i] != null)
                return false;
            i = newY > this.Y ? i + 1 : i - 1;
        }
        return true;
    }
    return false;
}

// bishop
function Bishop(color, x, y) {
    this.color = color;
    this.image = "bishop_" + color + ".png";
    this.X = x != null || x != undefined ? x : 0;
    this.Y = y != null || y != undefined ? y : 0;
    return this;
}
Bishop.prototype.toString = function()
{
    return "Bishop";
}
Bishop.prototype.Move = function (table, newX, newY) {
    if (!(newX == this.X && newY == this.Y)) {
        table[newX][newY] = table[this.X][this.Y];
        table[this.X][this.Y] = null;
        this.X = newX;
        this.Y = newY;
    }
}
Bishop.prototype.TryMove = function (table, newX, newY)
{
    if (table[newX][newY] != null && table[newX][newY].color == this.color)
        return false;
    if (Math.abs(this.Y - newY) == Math.abs(this.X - newX)) {
        for (var i = newX > this.X ? this.X + 1 : this.X - 1, j = newY > this.Y ? this.Y + 1 : this.Y - 1; i != newX; ) {
            if (table[i][j] != null)
                return false;
            i = newX > this.X ? i + 1 : i - 1;
            j = newY > this.Y ? j + 1 : j - 1;
        }
        return true;
    }
    return false;
}

// knight
function Knight(color, x, y) {
    this.color = color;
    this.image = "knight_" + color + ".png";
    this.X = x != null || x != undefined ? x : 0;
    this.Y = y != null || y != undefined ? y : 0;
    return this;
}
Knight.prototype.toString = function () {
    return "Knight";
}
Knight.prototype.Move = function (table, newX, newY) {
    if (!(newX == this.X && newY == this.Y)) {
        table[newX][newY] = table[this.X][this.Y];
        table[this.X][this.Y] = null;
        this.X = newX;
        this.Y = newY;
    }
}
Knight.prototype.TryMove = function (table, newX, newY) {
    if (table[newX][newY] != null && table[newX][newY].color == this.color)
        return false;
    if ((Math.abs(this.Y - newY) == 1 && Math.abs(this.X - newX) == 2) || (Math.abs(this.X - newX) == 1 && Math.abs(this.Y - newY) == 2)) 
        return true;
    return false;
}

// pawn
function Pawn(color, x, y) {
    this.color = color;
    this.image = "pawn_" + color + ".png";
    this.X = x != null || x != undefined ? x : 0;
    this.Y = y != null || y != undefined ? y : 0;
    this.firstMove = false;
    return this;
}
Pawn.prototype.toString = function () {
    return "Pawn";
}
Pawn.prototype.Move = function (table, newX, newY) {
    if (!(newX == this.X && newY == this.Y)) {
        table[newX][newY] = table[this.X][this.Y];
        table[this.X][this.Y] = null;
        this.X = newX;
        this.Y = newY;
    }
}
Pawn.prototype.TryMove = function (table, newX, newY) {
    if (table[newX][newY] != null && table[newX][newY].color == this.color)
        return false;
    switch (this.color) {
        case "black":
            if ((((newX - this.X == 1 && table[newX][this.Y] == null) || (newX == 3 && this.X == 1 && table[2][this.Y] == null)) && newY == this.Y)
                || (newX - this.X == 1 && Math.abs(newY - this.Y) == 1 && (table[newX][newY] != null
                || (table[this.X][newY] != null && table[this.X][newY].toString() == "Pawn" && table[this.X][newY].firstMove == true))))
                return true;
            break;
        case "white":
            if ((((this.X - newX == 1 && table[newX][this.Y] == null) || (newX == 4 && this.X == 6 && table[5][this.Y] == null)) && newY == this.Y) || (this.X - newX == 1 && Math.abs(newY - this.Y) == 1 && (table[newX][newY] != null
                || (table[this.X][newY] != null && table[this.X][newY].toString() == "Pawn" && table[this.X][newY].firstMove == true))))
                return true;
            break; 
    }
    return false;
}

var currentChessSelected,
    currStepChess,
    ChessField,
    WhiteArray,
    BlackArray,
    WhiteKingIndex,
    BlackKingIndex,
    GameOver,
    onGoChess,
    changingFigure,
    connection,
    clientColor;

//$(document).ready(Initialize(document.getElementById('tableDiv'), 8));
function InitializeComponents(obj, size)
{

}

function Initialize(obj, size) {
    currentChessSelected = chessSelectedBackgroundColor = null, currStepChess = true, blockChess = GameOver = false, changingFigure = null;
    if (size != "") {
        var str = "<table class=\"tableClass\" id=\"chessTable\">";
        for (var i = 0; i < size; i++) {
            str += "<tr>";
            for (var j = 0; j < size; j++) {
                str += "<td onclick = \" if (clientColor == currStepChess) onChessClick(" + j + ", " + i + ");\" class=\"";
                str += (i + j) % 2 == 0 ? 'tableWhiteCell\">' : ('tableBlackCell\"> ');
                str += "</td>";
            }
            str += "</tr>";
        }
        str += '</table>';
        obj.innerHTML = str;
    }

    
    ChessField = [[], [], [], [], [], [], [], []];
    for (var i = 0; i < 8; i++)
        for (var j = 0; j < 8; j++)
            ChessField[i][j] = null;

    WhiteArray = [];
    BlackArray = [];

    BlackKingIndex = 0;
    WhiteKingIndex = 0;

    BlackArray.push(new King("black", 0, 4));
    WhiteArray.push(new King("white", 7, 4));

    BlackArray.push(new Rook("black", 0, 0));
    BlackArray.push(new Knight("black", 0, 1));
    BlackArray.push(new Bishop("black", 0, 2));
    BlackArray.push(new Queen("black", 0, 3)); 
    BlackArray.push(new Bishop("black", 0, 5));
    BlackArray.push(new Knight("black", 0, 6));
    BlackArray.push(new Rook("black", 0, 7));

    WhiteArray.push(new Rook("white", 7, 7));
    WhiteArray.push(new Knight("white", 7, 6));
    WhiteArray.push(new Bishop("white", 7, 5));
    WhiteArray.push(new Queen("white", 7, 3));
    WhiteArray.push(new Bishop("white", 7, 2));
    WhiteArray.push(new Knight("white", 7, 1));
    WhiteArray.push(new Rook("white", 7, 0));

    for (var i = 0; i < 8; i++) {
        BlackArray.push(new Pawn("black", 1, i));
        WhiteArray.push(new Pawn("white", 6, i));
    }

          

    for (var i = 0; i < BlackArray.length; i++)
        ChessField[BlackArray[i].X][BlackArray[i].Y] = BlackArray[i];

    for (var i = 0; i < WhiteArray.length; i++)
        ChessField[WhiteArray[i].X][WhiteArray[i].Y] = WhiteArray[i];

    connection = io.connect("http://localhost:81");
    connection.on("makeMove", function (msg) {
        console.log(msg);
        if (clientColor != currStepChess) {
            onChessClick(msg.xfrom, msg.yfrom, msg.newfigure);
            onChessClick(msg.xto, msg.yto, msg.newfigure);
        }
    });


    connection.on("gameStarted", function () {
        if (clientColor == undefined)
            clientColor = false;
        paintChess();
    });

    connection.on("waitingForPlayers", function () {
        clientColor = true;
    });

    connection.emit('readyToPlay');
}
function paintChess()
{
    if (ChessField != null)
    {
        var maintable = document.getElementById("chessTable");
        for (var i = 0; i < 8; i++) 
            for (var j = 0; j < 8; j++) {
                if (maintable.rows[i].cells[j].childNodes.length != 0)
                    $(maintable.rows[i].cells[j]).children().remove();
                $(maintable.rows[i].cells[j]).css("background-color", "");
                if (ChessField[i][j] != null) {
                    if (currentChessSelected != null && ChessField[i][j] == currentChessSelected)
                        $(maintable.rows[i].cells[j]).css("background-color", "red"); 
                    var img = document.createElement('img');
                    img.src = ChessField[i][j].image;
                    img.style.height = "50px";
                    img.style.width = "50px";
                    //img.height = "auto";
                    //img.width = "60px";
                    maintable.rows[i].cells[j].appendChild(img);
                }  
            }
    }
}

function checkColor(cell) {
    switch (currStepChess) {
        case true:
            if (cell.color != "white")
                return false;
            break;
        case false:
            if (cell.color != "black")
                return false;
            break;
    }
    return true;
}

function checkKingMoves(king)
{
    var cX = king.X, cY = king.Y;
    if (king.X + 1 >= 0 && king.X + 1 < 8 && king.TryMove(ChessField, king.X + 1, king.Y) && (checkShah(king, king.X + 1, king.Y) == 0))
        return true;
    if (king.Y + 1 >= 0 && king.Y + 1 < 8 && king.TryMove(ChessField, king.X, king.Y + 1) && (checkShah(king, king.X, king.Y + 1) == 0))
        return true;
    if (king.X - 1 >= 0 && king.X - 1 < 8 && king.TryMove(ChessField, king.X - 1, king.Y) && (checkShah(king, king.X - 1, king.Y) == 0))
        return true;
    if (king.Y - 1 >= 0 && king.Y - 1 < 8 && king.TryMove(ChessField, king.X, king.Y - 1) && (checkShah(king, king.X, king.Y - 1) == 0))
        return true;
    if (king.X + 1 >= 0 && king.X + 1 < 8 && king.Y + 1 >= 0 && king.Y + 1 < 8 && king.TryMove(ChessField, king.X + 1, king.Y + 1) && (checkShah(king, king.X + 1, king.Y + 1) == 0))
        return true;
    if (king.X + 1 >= 0 && king.X + 1 < 8 && king.Y - 1 >= 0 && king.Y - 1 < 8 && king.TryMove(ChessField, king.X + 1, king.Y - 1) && (checkShah(king, king.X + 1, king.Y - 1) == 0))
        return true;
    if (king.X - 1 >= 0 && king.X - 1 < 8 && king.Y - 1 >= 0 && king.Y - 1 < 8 && king.TryMove(ChessField, king.X - 1, king.Y - 1) && (checkShah(king, king.X - 1, king.Y - 1) == 0))
        return true;
    if (king.X - 1 >= 0 && king.X - 1 < 8 && king.Y + 1 >= 0 && king.Y + 1 < 8 && king.TryMove(ChessField, king.X - 1, king.Y + 1) && (checkShah(king, king.X - 1, king.Y + 1) == 0))
        return true;
    return false;
}

function checkShah(currChess, row, column)
{
    var lastX = currChess.X, lastY = currChess.Y, lastChessState = ChessField[row][column], isShah = 0;
    switch (currChess.color) {
        case "black":
            var cId = BlackArray.indexOf(currChess);
            if (lastChessState != null && lastChessState != currChess) {
                var lId = WhiteArray.indexOf(lastChessState);
                delete WhiteArray[lId];
                WhiteArray.splice(lId, 1)
            }
            currChess.Move(ChessField, row, column);
            BlackArray[cId] = currChess;
            for (var i = 0; i < WhiteArray.length; i++) {
                if (WhiteArray[i].TryMove(ChessField, BlackArray[BlackKingIndex].X, BlackArray[BlackKingIndex].Y)) { 
                    isShah++;
                }
            }
            if (lastChessState != null && lastChessState != currChess)
                WhiteArray.push(lastChessState);
            currChess.Move(ChessField, lastX, lastY);
            BlackArray[cId] = currChess;
            ChessField[row][column] = lastChessState;
            break;
        case "white":
            var cId = WhiteArray.indexOf(currChess);
            if (lastChessState != null && lastChessState != currChess) {
                var lId = BlackArray.indexOf(lastChessState);
                delete BlackArray[lId];
                BlackArray.splice(lId, 1)
            }
            currChess.Move(ChessField, row, column);
            WhiteArray[cId] = currChess;
            for (var i = 0; i < BlackArray.length; i++) {
                if (BlackArray[i].TryMove(ChessField, WhiteArray[WhiteKingIndex].X, WhiteArray[WhiteKingIndex].Y)) {
                    isShah++;
                }  
            }
            if (lastChessState != null && lastChessState != currChess)
                BlackArray.push(lastChessState);
            currChess.Move(ChessField, lastX, lastY);
            WhiteArray[cId] = currChess;
            ChessField[row][column] = lastChessState;
            break;
    }
    return isShah;
}

function checkMat(king)
{
    switch (checkShah(king, king.X, king.Y))
    {
        case 0:
            return false;
        case 1:
            if (!checkKingMoves(king)) {
                switch(king.color)
                {
                    case "white":
                        for (var arri = 0; arri < BlackArray.length; arri++)
                            if (BlackArray[arri].TryMove(ChessField, king.X, king.Y))
                            {
                                if (Math.abs(BlackArray[arri].X - king.X) > 0 && BlackArray[arri].Y == king.Y) {
                                    if (Math.abs(BlackArray[wi].X - king.X) == 1)
                                        return true;
                                    for (var i = king.X > BlackArray[arri].X ? BlackArray[arri].X + 1 : BlackArray[arri].X - 1; i != king.X;) {
                                        for (var id = 0; id < WhiteArray.length; id++)
                                            if (id != WhiteKingIndex && WhiteArray[id].TryMove(ChessField, i, king.Y))
                                                return false;
                                        i = king.X > BlackArray[id].X ? i + 1 : i - 1;
                                    }
                                    return true;
                                }
                                if (Math.abs(BlackArray[arri].Y - king.Y) > 0 && BlackArray[arri].X == king.X) {
                                    if (Math.abs(BlackArray[wi].Y - king.Y) == 1 )
                                        return true;
                                    for (var i = king.Y > BlackArray[arri].Y ? BlackArray[arri].Y + 1 : BlackArray[arri].Y - 1; i != king.Y;) {
                                        for (var id = 0; id < WhiteArray.length; id++)
                                            if (id != WhiteKingIndex && WhiteArray[id].TryMove(ChessField, king.X, i))
                                                return false;
                                        i = king.Y > BlackArray[i].Y ? i + 1 : i - 1;
                                    }
                                    return true;
                                }
                                if (Math.abs(BlackArray[arri].Y - king.Y) == Math.abs(BlackArray[arri].X - king.X)) {
                                    if (Math.abs(BlackArray[wi].Y - king.Y) == 1 && Math.abs(BlackArray[wi].X - king.X) == 1)
                                        return true;
                                    for (var i = king.X > BlackArray[arri].X ? BlackArray[arri].X + 1 : BlackArray[arri].X - 1, j = king.Y > BlackArray[arri].Y ? BlackArray[arri].Y + 1 : BlackArray[arri].Y - 1; i != king.X;) {
                                        for (var id = 0; id < WhiteArray.length; id++)
                                            if (id != WhiteKingIndex && WhiteArray[id].TryMove(ChessField, i, j))
                                                return false;
                                        i = king.X > BlackArray[i].X ? i + 1 : i - 1;
                                        j = king.Y > BlackArray[i].Y ? j + 1 : j - 1;
                                    }
                                    return true;
                                }
                            }
                            break;
                    case "black":
                        for (var wi = 0; wi < WhiteArray.length; wi++)
                            if (WhiteArray[wi].TryMove(ChessField, king.X, king.Y))
                            {
                                if (Math.abs(WhiteArray[wi].X - king.X) > 0 && WhiteArray[wi].Y == king.Y) {
                                    if (Math.abs(WhiteArray[wi].X - king.X) == 1)
                                        return true;
                                    for (var i = king.X > WhiteArray[wi].X ? WhiteArray[wi].X + 1 : WhiteArray[wi].X - 1; i != king.X;) {
                                        for (var id = 0; id < BlackArray.length; id++)
                                            if (id != BlackKingIndex && BlackArray[i].TryMove(ChessField, i, king.Y))
                                                return false;
                                        i = king.X > WhiteArray[wi].X ? i + 1 : i - 1;
                                    }
                                    return true;
                                }
                                if (Math.abs(WhiteArray[wi].Y - king.Y) > 0 && WhiteArray[wi].X == king.X) {
                                    if (Math.abs(WhiteArray[wi].Y - king.Y) == 1)
                                        return true;
                                    for (var i = king.Y > WhiteArray[wi].Y ? WhiteArray[wi].Y + 1 : WhiteArray[wi].Y - 1; i != king.Y;) {
                                        for (var id = 0; id < BlackArray.length; id++)
                                            if (id != BlackKingIndex && BlackArray[id].TryMove(ChessField, king.X, i))
                                                return false;
                                        i = king.Y > WhiteArray[wi].Y ? i + 1 : i - 1;
                                    }
                                    return true;
                                }
                                if (Math.abs(WhiteArray[wi].Y - king.Y) == Math.abs(WhiteArray[wi].X - king.X)) {
                                    if (Math.abs(WhiteArray[wi].Y - king.Y) == 1 && Math.abs(WhiteArray[wi].X - king.X) == 1)
                                        return true;
                                    for (var i = WhiteArray[wi].X > king.X ? king.X + 1 : king.X - 1, j = king.Y > WhiteArray[wi].Y ? WhiteArray[wi].Y + 1 : WhiteArray[wi].Y - 1; i != WhiteArray[wi].X;) {
                                        for (var id = 0; id < BlackArray.length; id++)
                                            if (id != BlackKingIndex && BlackArray[id].TryMove(ChessField, i, j))
                                                return false;
                                        i = king.X > WhiteArray[wi].X ? i + 1 : i - 1;
                                        j = king.Y > WhiteArray[wi].Y ? j + 1 : j - 1;
                                    }
                                    return true;
                                }
                            }
                            break;
                }
                return true;
            }
            return false;
        default:
            if (!checkKingMoves(king))
                return true;
            return false;
    }
}

function checkCastlingCondition(color, column)
{
    var wArr, wIndex;
    switch (color)
    {
        case "black":
            wArr = BlackArray;
            wIndex = BlackKingIndex;
            break;
        case "white":
            wArr = WhiteArray;
            wIndex = WhiteKingIndex;
            break;
    }
    if (wArr[wIndex].Y - column == 2) {
        if (wArr[wIndex].NotMoved == true)
            if (ChessField[wArr[wIndex].X][0] != null && ChessField[wArr[wIndex].X][0].toString() == "Rook"
                && ChessField[wArr[wIndex].X][0].color == wArr[wIndex].color
                && ChessField[wArr[wIndex].X][0].NotMoved == true) {
                for (var i = 1; i < wArr[wIndex].Y; i++) {
                    if (ChessField[wArr[wIndex].X][i] != null)
                        return false;
                }
                return true;
            }
    }
    if (wArr[wIndex].Y - column == -2) {
        if (wArr[wIndex].NotMoved == true)
            if (ChessField[wArr[wIndex].X][7] != null && ChessField[wArr[wIndex].X][7].toString() == "Rook"
                && ChessField[wArr[wIndex].X][7].color == wArr[wIndex].color
                && ChessField[wArr[wIndex].X][7].NotMoved == true) {
                for (var i = wArr[wIndex].Y + 1; i < 7; i++) {
                    if (ChessField[wArr[wIndex].X][i] != null)
                        return false;
                }
                return true;
            }
    }
    return false;
}
function doCastling(color, column) {
    var wArr, wIndex;
    switch (color) {
        case "black":
            wArr = BlackArray;
            wIndex = BlackKingIndex;
            break;
        case "white":
            wArr = WhiteArray;
            wIndex = WhiteKingIndex;
            break;
    }
    if (wArr[wIndex].Y - column == 2) {
        ChessField[wArr[wIndex].X][0].Move(ChessField, wArr[wIndex].X, wArr[wIndex].Y - 1);
    }
    if (wArr[wIndex].Y - column == -2) {
        ChessField[wArr[wIndex].X][7].Move(ChessField, wArr[wIndex].X, wArr[wIndex].Y + 1);
    }
    return color + ": from " + wArr[wIndex].X + ", 0 to " + wArr[wIndex].X + "," + wArr[wIndex].Y - 1;
}
function undoCastling(color, column)
{
    var wArr, wIndex;
    switch (color) {
        case "black":
            wArr = BlackArray;
            wIndex = BlackKingIndex;
            break;
        case "white":
            wArr = WhiteArray;
            wIndex = WhiteKingIndex;
            break;
    }
    if (wArr[wIndex].Y - column == 2) {
        ChessField[wArr[wIndex].X][wArr[wIndex].Y - 1].Move(wArr[wIndex].X, 0);
    }
    if (wArr[wIndex].Y - column == -2) {
        ChessField[wArr[wIndex].X][wArr[wIndex].Y + 1].Move(wArr[wIndex].X, 7);
    }
}
function checkFieldFinish(color, row)
{
    return row == 7 || row == 0;
}

//function ReplaceFigure(changingFigureColor, indexOfchangingFigure, changingFigureType, changingFigureX, changingFigureY)
//{
//    switch (changingFigurecolor) {
//        case "black":
//            BlackArray[BlackArray.indexOf(changingFigure)] = changingFigure;
//        case "white":
//            WhiteArray[WhiteArray.indexOf(changingFigure)] = changingFigure;
//    }
//    ChessField[changingFigureX][changingFigureY] = changingFigure;//switch by type
//    changingFigure = null; 
//    paintChess(); 
//}
function onChessClick(column, row, newFigureType) { //к шаху своему, к мату чужому
    if (!GameOver) {
        
        if (currentChessSelected != null) {
            if (currentChessSelected == ChessField[row][column]) {
                currentChessSelected = null;
                paintChess();
                return;
            }
            if (currentChessSelected.TryMove(ChessField, row, column)) {
                var castlingString = null, onGoChessBackup = null, backupX = currentChessSelected.X, backupY = currentChessSelected.Y, newFigure = undefined;
                if (currentChessSelected.toString() == "King" && Math.abs(currentChessSelected.Y - column) == 2)
                    if (!checkCastlingCondition(currentChessSelected.color, column))
                        return;
                    else
                        castlingString = doCastling(currentChessSelected.color, column);
                if (currentChessSelected.toString() == "Pawn") {
                    if (ChessField[currentChessSelected.X][column] != null && ChessField[currentChessSelected.X][column].color != currentChessSelected.color
                        && ChessField[currentChessSelected.X][column].firstMove == true)
                        if (Math.abs(currentChessSelected.X - row) == 1 && Math.abs(currentChessSelected.Y - column) == 1)
                        {
                            onGoChessBackup = ChessField[currentChessSelected.X][column];
                            ChessField[currentChessSelected.X][column] = null;
                            switch (onGoChessBackup.color)
                            {
                                case "black":
                                    var ind = BlackArray.indexOf(onGoChessBackup);
                                    if (ind != -1) {
                                        delete BlackArray[ind];
                                        BlackArray.splice(ind, 1);
                                    }
                                    break;
                                case "white":
                                    var ind = WhiteArray.indexOf(onGoChessBackup);
                                    if (ind != -1) {
                                        delete WhiteArray[ind];
                                        WhiteArray.splice(ind, 1);
                                    }
                                    break;
                            }
                        }
                        else
                            ChessField[currentChessSelected.X][column].firstMove = false;
                }
                if (checkShah(currentChessSelected, row, column) == 0) {
                    if (onGoChess != null && ChessField[onGoChess.X][onGoChess.Y] != null) {
                        ChessField[onGoChess.X][onGoChess.Y].firstMove = false;
                        onGoChess = null;
                    }
                    if (currentChessSelected.toString() == "Pawn" && Math.abs(currentChessSelected.X - row) == 2) {
                        ChessField[currentChessSelected.X][currentChessSelected.Y].firstMove = true;
                        onGoChess = ChessField[currentChessSelected.X][currentChessSelected.Y];
                    }
                    console.log(currentChessSelected.color + ": from " + currentChessSelected.X + "," + currentChessSelected.Y + " to " + row + "," + column);
                    if (ChessField[row][column] != null)
                    {
                        switch (ChessField[row][column].color)
                        {
                            case "black":
                                var idInArr = BlackArray.indexOf(ChessField[row][column]);
                                if (idInArr != -1) {
                                    delete BlackArray[idInArr];
                                    BlackArray.splice(idInArr, 1);
                                }
                                break;
                            case "white":
                                var idInArr = WhiteArray.indexOf(ChessField[row][column]);
                                if (idInArr != -1) {
                                    delete WhiteArray[idInArr];
                                    WhiteArray.splice(idInArr, 1);
                                }
                                break;
                        }
                    }
                    currentChessSelected.Move(ChessField, row, column);
                    
                    if (currentChessSelected.toString() == "Pawn" && checkFieldFinish(currentChessSelected.color, row))
                    {
                        changingFigure = currentChessSelected;
                        
                        //var d = document.createElement('table');
                        //var getTdImgStr = function (figure, changingFigure)
			            //{
                        //    var str = '<td><img src ="' + figure.image + '" onclick = "ReplaceFigure(); $(\'#menu\').dialog(\'close\');"></td>'; //$(this).dialog(\'destroy\').remove();
				        //    return str;
			            //}
                        //$(d).addClass('menu')
			            //.html('<tr>'
                        //+ getTdImgStr(new Rook(changingFigure.color, changingFigure.X, changingFigure.Y))
                        //+ getTdImgStr(new Queen(changingFigure.color, changingFigure.X, changingFigure.Y))
                        //+ getTdImgStr(new Bishop(changingFigure.color, changingFigure.X, changingFigure.Y))
                        //+ getTdImgStr(new Knight(changingFigure.color, changingFigure.X, changingFigure.Y))
                        //+ '</tr>');

			            //$(d).dialog({
			            //    dialogClass: "no-close",
			            //    resizable: false,
			            //    height: 140,
			            //    width: $(d).width,
			            //    modal: true
			            //});
                        if (newFigureType != undefined)
                            ChessChange(newFigureType, changingFigure);
                        else
                        {
                            newFigure = "undefined";
                            $("#chooseDialogDiv").dialog(
                            {
                                dialogClass: "no-close",
                                height: 140,
                                modal: true,
                                buttons: [
                                    {
                                        text: "Rook",
                                        'class': "RookButtonClass",
                                        click: function () {
                                            newFigure = "rook";
                                            ChessChange(newFigure, changingFigure);
                                            changingFigure = null;
                                            paintChess();
                                            connection.emit("makeMove", { xfrom: backupY, yfrom: backupX, xto: column, yto: row, newfigure: newFigure });
                                            $(this).dialog("close");
                                        }
                                    },
                                    {
                                        text: "Queen",
                                        'class': "QueenButtonClass",
                                        click: function () {
                                            newFigure = "queen";
                                            ChessChange(newFigure, changingFigure);
                                            changingFigure = null;
                                            paintChess();
                                            connection.emit("makeMove", { xfrom: backupY, yfrom: backupX, xto: column, yto: row, newfigure: newFigure });
                                            $(this).dialog("close");
                                        }
                                    },
                                    {
                                        text: "Bishop",
                                        'class': "BishopButtonClass",
                                        click: function () {
                                            newFigure = "bishop";
                                            ChessChange(newFigure, changingFigure);
                                            changingFigure = null;
                                            paintChess();
                                            connection.emit("makeMove", { xfrom: backupY, yfrom: backupX, xto: column, yto: row, newfigure: newFigure });
                                            $(this).dialog("close");
                                        }
                                    },
                                    {
                                        text: "Knight",
                                        'class': "KnightButtonClass",
                                        click: function () {
                                            newFigure = "knight";
                                            ChessChange(newFigure, changingFigure);
                                            changingFigure = null;
                                            paintChess();
                                            connection.emit("makeMove", { xfrom: backupY, yfrom: backupX, xto: column, yto: row, newfigure: newFigure });
                                            $(this).dialog("close");
                                        }
                                    }
                                ]
                            });
                        }
                    }

                    if (castlingString != null)
                        console.log(castlingString);
                    if (currentChessSelected.color == "black") {
                        if (GameOver = checkMat(WhiteArray[WhiteKingIndex]))
                            connection.emit("gameOver");
                            alert("Мат белому королю");
                    }
                    else {
                        if (GameOver = checkMat(BlackArray[BlackKingIndex]))
                            connection.emit("gameOver");
                            alert("Мат черному королю");
                    }
                    if (newFigure == undefined && clientColor == currStepChess)
                        connection.emit("makeMove", { xfrom: backupY, yfrom: backupX, xto: column, yto: row });
                    currentChessSelected = null;
                    currStepChess = !currStepChess;
                }
                else  if (currentChessSelected.toString() == "King")
                    undoCastling(currentChessSelected.color, column)
                else
                    if (currentChessSelected.toString() == "Pawn" && onGoChessBackup != null) {
                        ChessField[onGoChess.X][onGoChess.Y] = onGoChessBackup;
                        switch (onGoChessBackup.color) {
                            case "black":
                                BlackArray.push(onGoChessBackup);
                                break;
                            case "white":
                                WhiteArray.push(onGoChessBackup);
                                break;
                        }
                    }
                
            }

        }
        else {
            if (ChessField[row][column] != null) {
                if (!checkColor(ChessField[row][column])) {
                    paintChess();
                    return;
                }
                currentChessSelected = ChessField[row][column];
            }
        }
        paintChess();
    }
}

function ChessChange(type, changingFigure)
{
    switch (type)
    {
        case "rook":
            var nf = new Rook(changingFigure.color, changingFigure.X, changingFigure.Y);
            switch (changingFigure.color) {
                case "black":
                    BlackArray[BlackArray.indexOf(changingFigure)] = nf;
                case "white":
                    WhiteArray[WhiteArray.indexOf(changingFigure)] = nf;
            }
            ChessField[nf.X][nf.Y] = nf;
            break;
        case "queen":
            var nf = new Queen(changingFigure.color, changingFigure.X, changingFigure.Y);
            switch (changingFigure.color) {
                case "black":
                    BlackArray[BlackArray.indexOf(changingFigure)] = nf;
                case "white":
                    WhiteArray[WhiteArray.indexOf(changingFigure)] = nf;
            }
            ChessField[nf.X][nf.Y] = nf;
            break;
        case "bishop":
            var nf = new Bishop(changingFigure.color, changingFigure.X, changingFigure.Y);
            switch (changingFigure.color) {
                case "black":
                    BlackArray[BlackArray.indexOf(changingFigure)] = nf;
                case "white":
                    WhiteArray[WhiteArray.indexOf(changingFigure)] = nf;
            }
            ChessField[nf.X][nf.Y] = nf;
            break;
        case "knight":
            var nf = new Knight(changingFigure.color, changingFigure.X, changingFigure.Y);
            switch (changingFigure.color) {
                case "black":
                    BlackArray[BlackArray.indexOf(changingFigure)] = nf;
                case "white":
                    WhiteArray[WhiteArray.indexOf(changingFigure)] = nf;
            }
            ChessField[nf.X][nf.Y] = nf;
            break;

    }
   
}