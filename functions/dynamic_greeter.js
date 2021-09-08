let rlSync = require('readline-sync');

function askName(prompt) {
    let inputName = rlSync.question(prompt);
    return inputName
}

let firstName = askName('What is your first name? \n');
let lastName = askName('What is your last name? \n');

console.log(`Hello, ${firstName} ${lastName}.`)