let number = 4936;
console.log(`The number is: ${number}.`)

let ones = number % 10;
number = (number - ones) / 10;

let tens = number % 10;
number = (number - tens) / 10;

let hundreds = number % 10;
number = (number - hundreds) / 10;

let thousands = number

console.log(`Ones: ${ones}, Tens: ${tens}, Hundreds: ${hundreds}, Thousands: ${thousands}.`)