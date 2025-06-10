const Gameboard = (() => {
    let board;
    
    function makeBoard() {
        board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    function addSymbol(symbol, place) {
        place = place - 1
        board[place] = symbol
    }

    function logBoard(){
        console.log(board)
    }

    return{
        makeBoard, addSymbol, logBoard
    }
})()







// Gameboard.makeBoard()
// Gameboard.addSymbol("x", 5)
// Gameboard.logBoard()