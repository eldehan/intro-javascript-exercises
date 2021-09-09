let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(function(subArray) {
    subArray.forEach(function(value) {
        if (value % 2 === 0) {
            console.log(value);
        }
    })
})

// or

for (let i = 0; i < myArray.length; i += 1) {
    for (let j = 0; j < myArray[i].length; j += 1) {
        if (myArray[i][j] % 2 === 0) {
            console.log(myArray[i][j]);
        }
    }
}