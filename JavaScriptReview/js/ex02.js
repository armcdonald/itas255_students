let array1 = [1, 30, 39, 29, 20, 13];
let everyArr = [1, 2, 3, 4, 10, 21]
let array2 = [1, 2, 3, 4, 5];
const numbers = [65, 44, 12, 4];

function isBelowThreshold(currentValue) {
    return currentValue < 25;
}

console.log(array1.every(isBelowThreshold));
console.log(everyArr.every(isBelowThreshold));

console.log(array1.every(_ => _ < 25));

let even = function(currentValue) {
    return currentValue % 2 === 0;
}

console.log(array2.some(even));
console.log(array2.some(_ => _ % 2 === 0));

//filter function
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present','fries'];

let wordLong = function(word) {
    return word.length > 5;
}

let resultArr = words.filter(wordLong);
console.log(resultArr);

let resultArr2 = words.filter(_ => _.length > 5);
console.log(resultArr2);

//map function
let array3 = [1, 4, 9, 16];

function myFunc(currentValue) {
    return currentValue * 2;
}

let map1 = array3.map(myFunc);
console.log(map1);

let map2 = array3.map(_ => _ * 2);
console.log(map2);

let map3 = array3.map(function(number) { return number * 2;});
console.log(map3);