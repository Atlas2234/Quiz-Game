const searchRead = (temp, all, container, currElement) => {
 let arr = [];

 // If the search input does not have any input
 if(currElement.value.length === 0) {
  // Display all categories
  for (let i = 0; i < all.length; i++) {
   const title = all[i].textContent;
   const id = all[i].dataset.id;
   arr.push(`<a href="quiz.html" class="trivia" data-id="${id}"
          ><p>${title}</p></a
        >`);
  }
 } else {
  // Display the categories that contain the substring of the inputted search text
  for (let i = 0; i < temp.length; i++) {
   if(temp[i].textContent.toLowerCase().includes(currElement.value.toLowerCase())) {
    const title = temp[i].textContent;
    const id = temp[i].dataset.id;
    arr.push(`<a href="quiz.html" class="trivia" data-id="${id}"
           ><p>${title}</p></a
         >`);
   }
  }
 }
 // Check search values
 // If no categories matched the search text
 if(arr.length == 0) {
  // Display an error prompt
  container.innerHTML = `<h5 class="errorPrompt">Sorry, no categories match your search</h5>`;
 } else {
  // Display the matched categories to the user
  container.innerHTML = arr.join('');
 }
}

export default searchRead;
