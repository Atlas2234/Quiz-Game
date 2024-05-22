import random from './randomGen.js';

// Creates the HTML structure of each trivia question

const getDisplayGame = (data) => {
 let qNum = 0;
 let displayarr = [];
 let currHTML = ``;

 while (qNum < 10) {
  // Retrieve questions
  let questionProper = data.results[qNum].question.replaceAll('&quot;',"\"");

  // Determine whether or not the question is MCQ or T/F
  // If the question is multiple choice
  if(data.results[qNum].type == 'multiple') {
   // Gather the possible answers
   const correctAns = data.results[qNum].correct_answer
   const [firstWrong, secondWrong, thirdWrong] = data.results[qNum].incorrect_answers

   const ans = [correctAns, firstWrong, secondWrong, thirdWrong];
   
   // Rearrange the answer display randomly
   const answerButtons = random(4, ans, correctAns);

   // Create the HTML structure for the display of a multiple choice question
   currHTML = `<header class="gameDisplay">
   <h3>${questionProper}</h3>
   </header>
   <div class="timer"></div>
   <div class="choice">
   ${answerButtons}
   </div>`;
  // If the question is true / false 
  } else if (data.results[qNum].type == 'boolean') {
   // Gather the right and wrong answer
   let correctAns = data.results[qNum].correct_answer;
   let [wrongAns] = data.results[qNum].incorrect_answers;
   
   const ans = [correctAns, wrongAns];
   
   // Rearrange the answers in a random way
   const answerButtons = random(2, ans, correctAns);

   // Structure the question using HTML
   currHTML = `<header class="gameDisplay">
   <h3>${questionProper}</h3>
   </header>
   <div class="timer"></div>
   <div class="choice">
   ${answerButtons}
   </div>`;
  }
 
 displayarr.push(currHTML);
 qNum += 1;
  
 }
 return displayarr;
}

export default getDisplayGame;