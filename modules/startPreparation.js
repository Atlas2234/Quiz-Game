import getDisplayGame from "./getDisplayGame.js";
import beginGame from "./beginTrivia.js";
// import displayEndScreen from "./endScreen.js";

const startPrep = (data, title, container) => {
 let count = 3;
 // Countdown from 3
 const timer = setInterval(function() {
  // If the countdown is less than or equal to 0 then stop the interval and display the GO prompt
  if(count < 0) {
   clearInterval(timer);
   // Get the trivia questions and answers
   // Convert to array of HTML structures where each element is a question and their answers
   const gameArr = getDisplayGame(data);
   // Start the main game loop
   beginGame(gameArr, container);
   // displayEndScreen(container);
  } else if (count == 0) {
   title.innerHTML = `<h3>Go!</h3>`;
  } else {
   // Display the number that is counted down
   title.innerHTML = `<h3>${count}</h3>`;
  }
  count -= 1;
 }, 1000);
}


export default startPrep;