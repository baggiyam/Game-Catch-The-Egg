//Timer 
let timerInterval;
let remainingTime = 60;  
const timerElement = document.getElementById('time-text');
const gameOverPopup = document.getElementById('gameOverPopup');
const continueButton = document.getElementById('continueButton');
const goBackButton = document.getElementById('goBackButton');
function startTimer() {
    timerInterval = setInterval(function () {
        // Calculate minutes and seconds
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        // Format time to show as MM:SS
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        timerElement.textContent = formattedTime;

        // Reduce remaining time by 1 second
        remainingTime--;

        // When time reaches 0, stop the timer and show the game over popup
        if (remainingTime < 0) {
            clearInterval(timerInterval);
            showGameOverPopup();
        }
    }, 1000);
}

// Function to show the "Game Over" popup
function showGameOverPopup() {
    gameOverPopup.style.display = 'block';  // Display the popup
}

// Button events for handling actions after game over
continueButton.addEventListener('click', () => {
    // Logic to continue the game, for example, restart the timer or reset the game state
    gameOverPopup.style.display = 'none';
    resetGame();  // Reset game logic (this can be customized)
    startTimer();  // Restart the timer
});

goBackButton.addEventListener('click', () => {
    // Logic to go back to the previous page or home page
    window.location.href = 'index.html';  // Change this to your actual "Go Back" action
});

// Start the game and timer when page loads
window.onload = function () {
    startTimer();
};

// Function to reset the game (optional)
function resetGame() {
    // Reset game state (e.g., score, basket, eggs, etc.)
    score = 0;  // Reset score
    updateScoreDisplay();  // Reset score display
    // Reset other game-related elements here
}
