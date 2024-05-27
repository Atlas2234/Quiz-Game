const displayEndScreen = (score, container) => {
 const categoryNum = sessionStorage.getItem('currentCategory');

 // Display the player's score for their trivia session and the navigation buttons for playing again or going back to the main menu
 container.innerHTML = `<h3>You Scored: ${score}/10!</h3><div><a href="quiz.html" class="start-btn" data-id="${categoryNum}">Play Again</a><a href="index.html" class="back">Menu</a></div>`;

}

export default displayEndScreen;