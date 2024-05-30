import startPrep from "./startPreparation.js";

const gameDisplay = (data, title, container) => {
 // Stop load display
 container.classList.remove('loading');
 // Start the countdown to begin the trivia
 startPrep(data, title, container);
}

export default gameDisplay;