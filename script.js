const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const restartButton = document.getElementById('restart-button');
const modeSelection = document.getElementById('mode-selection');
const gameBoard = document.getElementById('game-board');
const scoreXDisplay = document.getElementById('scoreX');
const scoreODisplay = document.getElementById('scoreO');
const scoreDrawDisplay = document.getElementById('scoreDraw');

document.getElementById("play-with-ai").addEventListener("click", function () {
    window.location.href = "/PRODIGY_WD_03-main/tic_tac_toe_withai/src/index.html"; 
});

let currentPlayer = 'X';
let gameActive = true;
let gameState = [];
let isAI = false;
let scoreX = 0;
let scoreO = 0;
let scoreDraw = 0;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

document.getElementById('two-player').addEventListener('click', () => {
    isAI = false;
    startGame();
});

document.getElementById('play-with-computer').addEventListener('click', () => {
    isAI = true;
    startGame();
});

function startGame() {
    gameActive = true;
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    statusDisplay.textContent = `It's ${currentPlayer}'s turn`;
    modeSelection.style.display = 'none';
    gameBoard.style.display = 'grid';
    restartButton.style.display = 'block';
    cells.forEach(cell => {
        cell.textContent = '';
        cell.addEventListener('click', handleCellClick);
    });
}

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add('cell-animation');

    checkResult();

    if (gameActive && isAI && currentPlayer === 'X') {
        currentPlayer = 'O'; // Switch to AI
        aiMove();
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch players
    }
}

function aiMove() {
    const emptyCells = gameState.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);
    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    gameState[randomIndex] = currentPlayer;
    cells[randomIndex].textContent = currentPlayer;
    checkResult();
    currentPlayer = 'X'; // Switch back to player
}

function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameState[a] === '' || gameState[b] === '' || gameState[c] === '') {
            continue;
        }
        if (gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            roundWon = true;
            highlightWinningCells(a, b, c);
            break;
        }
    }

    if (roundWon) {
        statusDisplay.textContent = `Player ${currentPlayer} wins!`;
        updateScore(currentPlayer);
        gameActive = false;
        return;
    }

    if (!gameState.includes('')) {
        statusDisplay.textContent = 'It\'s a draw!';
        scoreDraw++;
        scoreDrawDisplay.textContent = scoreDraw;
        gameActive = false;
        return;
    }

    statusDisplay.textContent = `It's ${currentPlayer}'s turn`;
}

function highlightWinningCells(a, b, c) {
    const winningLine = document.createElement('div');
    winningLine.classList.add('winning-line', 'winning-animation');
    document.body.appendChild(winningLine);
    const linePosition = calculateWinningLinePosition(a, b, c);
    winningLine.style.transform = linePosition;
}

function calculateWinningLinePosition(a, b, c) {
    // Logic to calculate the position of the winning line based on the winning cells
    // This is a placeholder; you would need to implement the actual positioning logic
    return `translate(0, 0)`;
}

function updateScore(winner) {
    if (winner === 'X') {
        scoreX++;
        scoreXDisplay.textContent = scoreX;
    } else {
        scoreO++;
        scoreODisplay.textContent = scoreO;
    }
}

function restartGame() {
    gameActive = true;
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    statusDisplay.textContent = `It's ${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = '');
}

restartButton.addEventListener('click', restartGame);