function GameBoard(p1, p2) {
    let currentPlayer = p1
    let board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let gameover = false

    const boxes = document.querySelectorAll(".box")
    function resetBoard() {
        boxes.forEach((box) => {
            box.textContent = ""
            box.setAttribute("data-value",box.id.slice(3))
        })
        board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
    const restartButton = document.querySelector(".restart")
    restartButton.addEventListener("click", () => {
        resetBoard()
    })

    function breakGame() {
        gameover = true
    }

    function winnerFound() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern
            if (board[a] == board[b] && board[b] == board[c]) {
                return true
            }
        }
        return false
    }

    return {
        setupBoard: function () {
            boxes.forEach((box) => {
                box.addEventListener("click", () => {
                    if (gameover) return
                    let pickedBox = Number(box.getAttribute("data-value")) - 1
                    if (Number.isInteger(board[pickedBox])) {
                        box.setAttribute("data-value", currentPlayer.symbol)
                        box.textContent = currentPlayer.symbol
                        board[pickedBox] = currentPlayer.symbol

                        if (winnerFound()) {
                            console.log(`${currentPlayer.symbol} WON`)
                            breakGame()
                        }
                        if (currentPlayer == p1) {
                            currentPlayer = p2
                        }
                        else {
                            currentPlayer = p1
                        }
                    }
                    else {
                        alert("pick another one")
                    }
                })
            })
        },
    }
}

function Player(name, symbol) {
    return {
        name: name,
        symbol: symbol
    }
}

const Player1 = Player("Bob", "X")
const Player2 = Player("John", "O")
const myBoard = GameBoard(Player1, Player2)
myBoard.setupBoard()











//     function addSymbol(symbol, place) {
//         place = place - 1
//         if (Number.isInteger(board[place])) {
//             board[place] = symbol
//         }
//         else {
//             alert("place is taken")
//         }
//     }

//     function getNumber(symbol) {
//         const boxes = document.querySelectorAll(".box")
//         boxes.forEach((box) => {
//             box.addEventListener("click", () => {
//                 addSymbol(symbol, box.getAttribute("data-value"))
//             })
//         })
//     }



//     function showBoard() {
//         let boardInRows = [board.slice(0, 3), board.slice(3, 6), board.slice(6, 9)]
//         for (row of boardInRows) {
//             console.log(row)
//         }
//     }

//     function getBoard() {
//         return board;
//     }

//     return {
//         getNumber, showBoard, getBoard
//     }
// }

// const Player = () => {
//     function makePlayer(name, symbol) {
//         return {
//             name: name,
//             symbol: symbol
//         }
//     }

//     return {
//         makePlayer
//     }
// }

// const Game = (() => {
//     function checkWin(board) {
//         const winPatterns = [
//             [0, 1, 2], [3, 4, 5], [6, 7, 8],
//             [0, 3, 6], [1, 4, 7], [2, 5, 8],
//             [0, 4, 8], [2, 4, 6]
//         ]
//         for (const pattern of winPatterns) {
//             const [a, b, c] = pattern
//             if (board[a] == board[b] && board[b] == board[c]) {
//                 console.log(`${board[a]} wins!`)
//                 over = true
//             }
//         }
//     }
//     function checkDraw(board) {
//         let fullBoard = false
//         for (value of board) {
//             if (Number.isInteger(value)) {
//                 fullBoard = false
//                 break
//             }
//             else {
//                 fullBoard = true
//             }
//         }

//         if (fullBoard == true) {
//             console.log("DRAW")
//             over = true
//         }
//     }



//     let gameboard = Gameboard()

//     let p1 = Player().makePlayer("bob", "x")
//     let p2 = Player().makePlayer("doni", "o")

//     let currentp = p1
//     let over = false
//     gameboard.showBoard()

//     while (!over) {
//         console.log("-------------------")
//         gameboard.getNumber(currentp.symbol)
//         gameboard.showBoard()
//         checkWin(gameboard.getBoard())
//         checkDraw(gameboard.getBoard())
//         if (over) {
//             break
//         }
//         if (currentp == p1) {
//             currentp = p2
//         }
//         else {
//             currentp = p1
//         }
//     }
// })()
