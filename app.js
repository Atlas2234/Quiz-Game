import addListener from "./modules/addButtonListener.js";

const nav = document.querySelectorAll('.trivia');

window.addEventListener("load", () => {
 addListener(nav);
})