const displayEndScreen = (score, container) => {
 const categoryNum = sessionStorage.getItem('currentCategory');

 // Display the player's score for their trivia session and the navigation buttons for playing again or going back to the main menu
 container.innerHTML = `<h3 class="endingTitle">You Scored: ${score}/10!</h3><div class="endScreenContainer"><a href="quiz.html" class="endScreenPlayBtn" data-id="${categoryNum}">Play Again</a><a href="index.html" class="endScreenMenuBtn">Menu</a></div>`;

}

export default displayEndScreen;