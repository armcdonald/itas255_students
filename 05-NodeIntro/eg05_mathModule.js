const newMath = require('./modules/math.js');

let result = newMath.sum(5, 3);
console.log(`The sum is ${result}`);

let result2 = newMath.diff(15, result);
console.log(`Result 2 is ${result2}`);

console.log(`The product is: ${newMath.product(result, result2)}`);

