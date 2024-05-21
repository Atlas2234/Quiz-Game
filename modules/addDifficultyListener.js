const addDifficultyListener = (diffButtonList, element, dropdown) => {
 diffButtonList.forEach((diff) => {
  diff.addEventListener('click', (e) => {
   // Display the selected button's difficulty and saves the data id value associated with that difficulty
   const diffDisplay = e.currentTarget.textContent;
   const diffVal = e.currentTarget.dataset.id;
   element.dataset.id = `${diffVal}`;
   element.innerHTML = `<p>${diffDisplay}</p>`;
   // Selecting a difficulty toggles the display of the display menu so it will be hidden again
   dropdown.classList.toggle('show_drop_down');
  });
 });
}

export default addDifficultyListener;