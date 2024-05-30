const container = document.querySelector('.scoreSection');

const currentCat = sessionStorage.getItem('title');

let easyDiff = localStorage.getItem(`${currentCat}.easy.score`);
let mediumDiff = localStorage.getItem(`${currentCat}.medium.score`);
let hardDiff = localStorage.getItem(`${currentCat}.hard.score`);

// Check if a score is not recorded
// If a score is not recorded then set the value to be displayed as unspecified
if (!easyDiff) {
 easyDiff = 'N/A'
} else {
 easyDiff = `${easyDiff}/10`
}
if (!mediumDiff) {
 mediumDiff = 'N/A'
} else {
 mediumDiff = `${mediumDiff}/10`
}
if (!hardDiff) {
 hardDiff = 'N/A'
} else {
 hardDiff = `${hardDiff}/10`
}

// console.log(easyDiff, mediumDiff, hardDiff);

// Display top scores for all difficulties
container.innerHTML = `<h3 class="score">Easy: ${easyDiff}</h3>
      <h3 class="score">Medium: ${mediumDiff}</h3>
      <h3 class="score">Hard: ${hardDiff}</h3>

      <a href="quiz.html" class="back scoreBack">Back</a>`;