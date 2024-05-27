import displayEndScreen from "./endScreen.js";

// Delay the for loop so the display of the result can be read
const sleep = async () => {
  return new Promise(resolve => {
    setTimeout(() => {resolve('')}, 3000);
  });
}

const pauser = (stats) => {
  
  const right = document.querySelector('.rightAnswerBtn');
  
  const wrongs = document.querySelectorAll('.wrongAnswerBtn');

  return new Promise(resolve => {
  // Timer for a question
  // Each question has max 30 seconds before the player has to answer
  let count = 30;
  // Countdown from 30
  const timer = setInterval(function() {
    // If the countdown is less than or equal to 0 then stop the interval
    if(count <= 0) {
      clearInterval(timer);
      stats = 0;
      // Return a resolve value of noTime
      resolve("noTime");
    } else {
      // Display the number that is counted down
      // Select the timer div
      const headerTimer = document.querySelector('.timer');
      // Add countdown progress bar
      headerTimer.style.width = `${count * 1.5}vw`;
    
    }
    count -= 1;
  }, 1000);

  // If the right answer is clicked
  right.addEventListener('click', () => {
    // Stop the countdown and unpause the for loop
    stats = 0;
    clearInterval(timer);
    // Return a resolve value of correct
    resolve("correct");
  });

  wrongs.forEach((btn) => {
    btn.addEventListener('click', () => {
      stats = 0;
      clearInterval(timer);
      resolve("incorrect");
    })
  })

  });
}

const beginTrivia = async (gameList, gameContainer) => {
 let score = 0;
  // Loop through the questions
 for (let i = 0; i < 10; i++) {
  // Display one question
  gameContainer.innerHTML = gameList[i];
  // Pause the loop when a question starts
  let stats = 1;
  if (stats == 1) {
    const prom = await pauser(stats);
    // If the selected answer is correct
    if(prom == 'correct') {
      score += 1;
      // Display the notification that the player was correct
      gameContainer.innerHTML = `<h3 class='displayCorrect'>Correct!</h3>`;
      // Delay the loop to display the message
      await sleep();
    // If the selected answer is wrong
    } else if (prom == 'incorrect') {
        // Display the notification that the player was wrong
        // Show the player the right answer
        const right = document.querySelector('.rightAnswerBtn');
        gameContainer.innerHTML = `<h3 class='displayCorrect'>Incorrect</h3> <p class="additionalInfo">The correct answer is: ${right.textContent}</p>`;
        // Delay the loop to display the message
        await sleep();
    // If the countdown reached 0
    } else if (prom == 'noTime') {
        // Display the notification that the time to answer was too long
        // Show the player the right answer
        const right = document.querySelector('.rightAnswerBtn');
        gameContainer.innerHTML = `<h3 class='displayCorrect'>Time's Up</h3> <p class="additionalInfo">The correct answer was: ${right.textContent}</p>`;
        // Delay the loop to display the message
        await sleep();
    }
  }
 }

//  Score keeping
 const categoryTitle = sessionStorage.getItem('title');
 const currentDiff = sessionStorage.getItem('challenge');

 const currentScore = localStorage.getItem(`${categoryTitle}.${currentDiff}.score`);

 if(currentScore && currentScore < score) {
  localStorage.setItem(`${categoryTitle}.${currentDiff}.score`, score);
 } else if (!currentScore){
  localStorage.setItem(`${categoryTitle}.${currentDiff}.score`, score);
 }
 
//  Display the results screen
 displayEndScreen(score, gameContainer);

}

export default beginTrivia;