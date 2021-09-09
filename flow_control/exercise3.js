function evenOrOdd(num) {
    if (Number.isInteger(num)) {
        if (num % 2 === 0) {
            console.log('even');
        } else {
            console.log('odd');
        }
    } else {
        console.log('Number should be an integer.');
        return;
    }
}

console.log(evenOrOdd(4));
console.log(evenOrOdd(3));
console.log(evenOrOdd(4.2));
console.log(evenOrOdd('boop'));