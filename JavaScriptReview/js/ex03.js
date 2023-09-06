let myArr = ["HELLO", "hello", "hEllo", "réservé", "RESERVE", "Reserve", "rezerve"];

let myArr2 = [2, 5, 4, 100, 13, 6, 201, 51];

// myArr2.sort();

mySort = function(a, b) {
    return a - b;
}

// myArr2.sort(function (a, b) {
//     return a - b;
// });

myArr2.sort((a, b) => b - a);

console.log(myArr2);

// myArr.sort();

myArr.sort((a, b) => a.localeCompare(b, 'en', {sensitivity: "base"}));

console.log(myArr);

