// script.js

// Select elements
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const resetButton = document.getElementById("reset-button");
const sessionLengthInput = document.getElementById("session-length");
const progressBar = document.getElementById("progress-bar");

// Variables
let timerInterval = null;
let totalTime = 25 * 60; // Default 25 minutes in seconds
let remainingTime = totalTime;

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");

    // Update progress bar
    const progressPercentage = ((totalTime - remainingTime) / totalTime) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

// Start the timer
function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (remainingTime > 0) {
                remainingTime--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                alert("Time's up!");
            }
        }, 1000);
    }
}

// Pause the timer
function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// Reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    remainingTime = totalTime;
    updateTimerDisplay();
}

// Update session length
function updateSessionLength() {
    const newLength = parseInt(sessionLengthInput.value);
    if (newLength > 0) {
        totalTime = newLength * 60;
        remainingTime = totalTime;
        updateTimerDisplay();
    }
}

// Event listeners
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
sessionLengthInput.addEventListener("change", updateSessionLength);

// Initialize display
updateTimerDisplay();
