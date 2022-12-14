const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});


var num1 = 4;
var num2 = 6;
theSum = num1 + num2;
console.log(theSum);

const A = "R";
const B = 1;
const C = 4;
const D = "D";

let sumExercise15 = A + B * 2 + D + C / 2;
console.log(sumExercise15)




const a = 2;

// strict equal operator
console.log( 2 < 1  < 3); // true
console.log(null == "null"); // false


function exercise7(num7) {
  let answer7;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------

  switch (num7) {
    case 1:
      answer7 = "You won!";
      break;
    case 7:
      answer7 = "You are lucky!";
      break;
    case 101:
      answer7 = "Welcome to coding 101!";
      break;
    case 1000000:
      answer7 = "You are one in a million!";
      break;
    default:
      answer7 = "Thanks for that!";
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer7;
}
console.log(exercise7(7));
console.log(exercise7(88));
