import displayDropDown from './modules/toggleDropdown.js';
import addDifficultyListener from './modules/addDifficultyListener.js';

const mainTitle = document.querySelector('.trivia_title');
const dropMenu = document.querySelector('.first-diff');
const dropDownMenu = document.querySelector('.drop-down');
const difficulty = document.querySelectorAll('.diff-btn');

window.addEventListener('load', () => {
 // Adding Audio For Menu
 let beat = new Audio('./music/submenu music.mp3');
 beat.loop = true;
 beat.play();

 // Get the title and category from the session storage
 const categoryStorage = sessionStorage.getItem('currentCategory');
 const titleStorage = sessionStorage.getItem('title');
 // Disaply the category as the title of the page
 mainTitle.innerHTML = `<h1 class="title">${titleStorage} Trivia</h1>`
 sessionStorage.setItem('challenge', dropMenu.dataset.id);
 addDifficultyListener(difficulty, dropMenu, dropDownMenu);
});

// Toggle the dropdown menu when the difficulty text is pressed
dropMenu.addEventListener("click", (e) => {
 e.stopPropagation(); // stops the bubbling of the event
 displayDropDown(dropDownMenu);
});

// Closes the drop down menu when the user clicks outside the element
window.addEventListener("click", () => {
 // This works because the event bubbling is disabled when the difficulty is selected, thus making this event listener untriggerable when clicking on the actual difficulty text.
 if(dropDownMenu.classList.contains('show_drop_down')) {
  dropDownMenu.classList.remove('show_drop_down');
 }
});
