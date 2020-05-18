function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  let number = readlineSync.question(prompt);
  return number;
}

let firstNumber = getNumber('What is your first number? ');
let secondNumber = getNumber('What is your second number? ');
console.log(firstNumber * secondNumber);
