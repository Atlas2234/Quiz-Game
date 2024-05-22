import getDisplayGame from "./getDisplayGame.js";
import beginGame from "./beginTrivia.js";

const startPrep = (data, title, container) => {
 let count = 3;
 // Countdown from 3
 const timer = setInterval(function() {
  // If the countdown is less than or equal to 0 then stop the interval and display the GO prompt
  if(count < 0) {
   clearInterval(timer);
   const gameArr = getDisplayGame(data);
   beginGame(gameArr, container);
   console.log(gameArr);
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