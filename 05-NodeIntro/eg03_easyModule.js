const myModule = require('./modules/mod1.js');
const myAdd = require('./modules/mod2.js');

console.log(myModule.myText);
console.log(myModule.myOtherText);

let z = myAdd.addNum();
console.log(z);

console.log(myAdd.addNum2(6, 12));