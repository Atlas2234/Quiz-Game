const random = (max, arr, correctAns) => {
 let answer = ``;
 let counter = 0;
 let previousNums = [];

 correctAns = correctAns.replaceAll('&#039;',"\'");

 while(counter < arr.length) {
  let rand = Math.floor(Math.random() * max);
  let ars = arr[rand].replaceAll('&#039;', "\'");

  // console.log(rand, answer, ars, correctAns);

  if(!previousNums.includes(rand) && ars != correctAns) {
   answer = `${answer}<button class="wrongAnswerBtn">${ars}</button>`;
   previousNums.push(rand);
   counter += 1;
  } else if (!previousNums.includes(rand) && ars == correctAns) {
   answer = `${answer}<button class="rightAnswerBtn">${ars}</button>`;
   previousNums.push(rand);
   counter += 1;
  } 
  //  else if(!previousNums.includes(rand)) {
  //  previousNums.push(rand);
  //  counter += 1;
  // }
 }

 return answer;
}

export default random;