const body = document.querySelector("body")
let winnerCreate = document.createElement("p")
winnerCreate.classList.add("winner")
body.appendChild(winnerCreate)

function Game(p1, p2) {
    let currentPlayer = p1
    let board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let gameover = false

    const boxes = document.querySelectorAll(".box")
    function resetBoard() {
        boxes.forEach((box) => {
            box.textContent = ""
            box.setAttribute("data-value", box.id.slice(3))
        })
        board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        gameover = false
        let winner = document.querySelector(".winner")
        winner.innerHTML = ""
    }

    const restartButton = document.querySelector(".restart")
    restartButton.addEventListener("click", resetBoard)
    
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
                    if (gameover) {
                        return
                    }
                    let pickedBox = Number(box.getAttribute("data-value")) - 1
                    if (Number.isInteger(board[pickedBox])) {
                        box.setAttribute("data-value", currentPlayer.symbol)
                        box.textContent = currentPlayer.symbol
                        board[pickedBox] = currentPlayer.symbol

                        if (winnerFound()) {
                            let winner = document.querySelector(".winner")
                            winner.innerHTML = `${currentPlayer.symbol} WON`
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
const game = Game(Player1, Player2)
game.setupBoard()