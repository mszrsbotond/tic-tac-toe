const Gameboard = () => {
    let board = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    function addSymbol(symbol) {
        while (true) {
            let place = Number(prompt("Place: "))
            place = place - 1
            if (Number.isInteger(board[place])) {
                board[place] = symbol
                break
            }
            else {
                alert("Place is taken!")
            }
        }
    }

    function showBoard() {
        let boardInRows = [board.slice(0, 3), board.slice(3, 6), board.slice(6, 9)]
        for (row of boardInRows) {
            console.log(row)
        }
    }

    function getBoard() {
        return board;
    }

    return {
        addSymbol, showBoard, getBoard
    }
}

const Player = () => {
    function makePlayer(name, symbol) {
        return {
            name: name,
            symbol: symbol
        }
    }

    return {
        makePlayer
    }
}

const Game = (() => {
    function checkWin(board) {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern
            if (board[a] == board[b] && board[b] == board[c]) {
                console.log(`${board[a]} wins!`)
                over = true
            }
        }
    }
    function checkDraw(board) {
        let fullBoard = false
        for (value of board) {
            if (Number.isInteger(value)) {
                fullBoard = false
                break
            }
            else {
                fullBoard = true
            }
        }

        if (fullBoard == true) {
            console.log("DRAW")
            over = true
        }
    }



    let gameboard = Gameboard()

    let p1 = Player().makePlayer("bob", "x")
    let p2 = Player().makePlayer("doni", "o")

    let currentp = p1
    let over = false
    gameboard.showBoard()

    while (!over) {
        console.log("-------------------")
        gameboard.addSymbol(currentp.symbol)
        gameboard.showBoard()
        checkWin(gameboard.getBoard())
        checkDraw(gameboard.getBoard())
        if (over) {
            break
        }
        if (currentp == p1) {
            currentp = p2
        }
        else {
            currentp = p1
        }
    }
})()
