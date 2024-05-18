// Add event listeners to each navigation button and store their data id in the session storage
const addButtonListener = (navLinks) => {
 navLinks.forEach((btn) => {
  btn.addEventListener("click", (e) => {
   sessionStorage.setItem('currentCategory', e.currentTarget.dataset.id);
  });
 });
}

export default addButtonListener;