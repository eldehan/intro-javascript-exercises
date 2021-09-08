let rlSync = require('readline-sync');

function getNums(prompt) {
    return parseFloat(rlSync.question(prompt));
}


function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

let firstNum = getNums('Enter the first number: ');
let secondNum = getNums('Enter the second number: ');

console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}.`);