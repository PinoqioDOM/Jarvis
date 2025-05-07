const firstPlayerInp = document.getElementById('playerFirst')
const secondPlayerInp = document.getElementById('playerSecond')
const submitPlayersInfoBtn = document.getElementById('submitPlayersInfo')
const allGameBoxes = document.querySelectorAll('.game-box')
const playerFirstIndicatorBtn = document.getElementById('playerFirstIndicator')
const playerSecondIndicatorBtn = document.getElementById('playerSecondIndicator')
const resetGameBtn = document.getElementById('resetGame')

let playerFirstTurn = true
let playGame = false
let playerFirst
let playerSecond

const winnerCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]

const addErrorBorder = (input) => {
    input.classList.add('error-border')
}

const removeErrorBorder = (input) => {
    input.classList.remove('error-border')
}

const validateInputs = () => {
    if (firstPlayerInp.value === undefined || firstPlayerInp.value.length === 0) {
        addErrorBorder(firstPlayerInp)
        return false
    } else if (secondPlayerInp.value === undefined || secondPlayerInp.value.length === 0) {
        addErrorBorder(secondPlayerInp)
        removeErrorBorder(firstPlayerInp)
        return false
    }
    removeErrorBorder(secondPlayerInp)

    return true
}

const getPlayerObj = (playerName, playerInd) => {
    return {
        playerIndicator: playerInd,
        playerName: playerName,
        playerScore: 0
    }
}

const changeIndicators = () => {
    playerFirstIndicatorBtn.textContent = `${playerFirst.playerName}: ${playerFirst.playerScore}`
    playerSecondIndicatorBtn.textContent = `${playerSecond.playerName}: ${playerSecond.playerScore}`
}

submitPlayersInfoBtn.addEventListener('click', () => {
    if (validateInputs()) {
        playGame = true
        playerFirst = getPlayerObj(firstPlayerInp.value, 'player 1')
        playerFirst = getPlayerObj(firstPlayerInp.value, 'player 1')
        playerSecond = getPlayerObj(secondPlayerInp.value, 'player 2')
        changeIndicators()
    }
})

const getIconForGameBox = () => {
    return playerFirstTurn ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-0"></i>'
}

const logPlayerAction = (boxIndex) => {
    winnerCases.forEach((winnerCaseItem, index) => {
        const boxItemIndex = winnerCaseItem.indexOf(boxIndex)
        if (boxItemIndex >= 0) {
            winnerCases[index][boxItemIndex] = playerFirstTurn ? 'x' : 'o'
        }
    })
}

const changePlayerIndicator = () => {
    playerFirstIndicatorBtn.classList.toggle('btn-success')
    playerFirstIndicatorBtn.classList.toggle('btn-danger')
    playerSecondIndicatorBtn.classList.toggle('btn-success')
    playerSecondIndicatorBtn.classList.toggle('btn-danger')
}

const checkForWinner = () => {
    const winning = {
        firstPlayerIsWinner: false,
        secondPlayerIsWinner: false,
        draw: false
    }

    for (let i = 0; i < winnerCases.length; i++) {
        winning.firstPlayerIsWinner = winnerCases[i].every(item => item === 'x')
        winning.secondPlayerIsWinner = winnerCases[i].every(item => item === 'o')
        if (winning.firstPlayerIsWinner || winning.secondPlayerIsWinner) {
            break
        }
    }

    winning.draw = winnerCases.every(winnerCaseItem => winnerCaseItem.every(item => (item === 'x' || item === 'o')))

    return winning
}

allGameBoxes.forEach((box, index) => {
    box.id = index
    box.addEventListener('click', () => {
        if (playGame && box.innerHTML.length === 0) {
            box.innerHTML = getIconForGameBox()
            logPlayerAction(Number(box.id))
            playerFirstTurn = !playerFirstTurn
            changePlayerIndicator()
            const weHaveWinner = checkForWinner()
            console.log(weHaveWinner);
            console.log(winnerCases);
            if (weHaveWinner.firstPlayerIsWinner) {
                Swal.fire('winner is ', playerFirst.playerName);
                playerFirst.playerScore += 1
                changeIndicators()
                playGame = false
            } else if (weHaveWinner.secondPlayerIsWinner) {
                Swal.fire('winner is ', playerSecond.playerName);
                playerSecond.playerScore += 1
                changeIndicators()
                playGame = false
            } else if (weHaveWinner.draw) {
                Swal.fire('Game Over!')
                playGame = false
            }
        }
    })
})

