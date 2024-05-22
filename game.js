import displayGame from './modules/gameDisplay.js';

const difficulty = sessionStorage.getItem('challenge');
const category = sessionStorage.getItem('currentCategory');
const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`;

const triviaTitle = document.querySelector('.prepDisplay');
const triviaContainer = document.querySelector('.gameSection');

window.addEventListener('load', async () => {
 const response = await fetch(url);
 const data = await response.json();
 displayGame(data, triviaTitle, triviaContainer);
});