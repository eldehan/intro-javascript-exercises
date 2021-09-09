function oddLengths (array) {
    let mappedArray = array.map((element) => element.length);
    return mappedArray.filter((element) => element % 2 !== 0);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]