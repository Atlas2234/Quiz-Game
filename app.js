import addListener from "./modules/addButtonListener.js";
import searchRead from "./modules/search.js";


const nav = document.querySelectorAll('.trivia');
const search = document.querySelector('.search_bar');
const triviaContainer = document.querySelector('.categories');

let tempNav = nav;

window.addEventListener("load", () => {
 // Add listeners to the trivia categories
 addListener(nav);
})

const input = document.querySelector('[name="game"]');

search.addEventListener("keyup", (e) => {
 e.preventDefault();
 // Search for the categories containing the input text
 searchRead(tempNav, nav, triviaContainer, input);
 // Re-select the newly created category elements
 let newNav = document.querySelectorAll('.trivia');
 // If at least one of the category elements are still present
 if(newNav.length != 0) {
  // Change the temporary nodelist to a nodelist of the selected existing elements
  tempNav = newNav;
  // Re-add the listeners to these categories
  addListener(tempNav);
 }
});

