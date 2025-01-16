// Select DOM elements
const boxes = document.querySelectorAll('.box');
const restartBtn = document.getElementById('restartBtn');
const playerText = document.getElementById('playertext');

// Variables to track game state
let currentPlayer = 'X'; // Player X starts
let gameActive = true; // Controls if the game is ongoing
const gameState = Array(9).fill(''); // Tracks moves for each box

// Winning combinations
const winningConditions = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left
    [2, 4, 6]  // Diagonal from top-right
];

// Function to handle player clicks
function handleBoxClick(event) {
    const box = event.target;
    const boxIndex = parseInt(box.id);

    // Ensure the box is not already taken and the game is active
    if (gameState[boxIndex] !== '' || !gameActive) return;

    // Update game state and UI
    gameState[boxIndex] = currentPlayer;
    box.textContent = currentPlayer;
    box.classList.add('taken');

    // Check for a winner or a draw
    if (checkWinner()) {
        playerText.textContent = `Player ${currentPlayer} Wins! 🎉`;
        gameActive = false;
        return;
    } else if (gameState.every(cell => cell !== '')) {
        playerText.textContent = "It's a Draw! 🤝";
        gameActive = false;
        return;
    }

    // Switch to the next player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerText.textContent = `Player ${currentPlayer}'s Turn`;
}

// Function to check for a winner
function checkWinner() {
    return winningConditions.some(condition => {
        const [a, b, c] = condition;
        return (
            gameState[a] !== '' &&
            gameState[a] === gameState[b] &&
            gameState[b] === gameState[c]
        );
    });
}

// Function to restart the game
function restartGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState.fill('');
    boxes.forEach(box => {
        box.textContent = '';
        box.classList.remove('taken');
    });
    playerText.textContent = `Player ${currentPlayer}'s Turn`;
}

// Add event listeners to boxes and restart button
boxes.forEach(box => box.addEventListener('click', handleBoxClick));
restartBtn.addEventListener('click', restartGame);
