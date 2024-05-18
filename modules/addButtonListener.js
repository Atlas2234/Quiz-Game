const addButtonListener = (navLinks) => {
 navLinks.forEach((btn) => {
  btn.addEventListener("click", (e) => {
   sessionStorage.setItem('currentCategory', e.currentTarget.dataset.id);
  })
 })
}

export default addButtonListener;