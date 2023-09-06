let fruits = ["Banana", "Orange", "Apple", "Mango", "Star Fruit", "Pear", "Peach"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

fruits.forEach(el => console.log(el));

fruits.forEach((el, index) => console.log(`${index}. ${el}`));