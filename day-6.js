//1. Add Product to Cart

let cart = [101, 102, 103, 104];
cart.push(105);
console.log(cart); // [101, 102, 103, 104, 105]


//2. Remove Sold Out Item

let cart1 = [101, 102, 103, 104];
cart = cart1.filter(item => item !== 103);
console.log(cart1); // [101, 102, 104]

// you can also use indexOf() with splice():

// let cart = [101, 102, 103, 104];
// const index = cart.indexOf(103);
// if (index !== -1) {
//   cart2.splice(index, 1);
// }
// console.log(cart); // [101, 102, 104]


//3. Insert at Specific Position

let fruits = ["apple", "orange", "grapes"];
fruits.splice(2, 0, "banana");
console.log(fruits); // ["apple", "orange", "banana", "grapes"]


//4. Print All Students

let students = ["Ali", "Zara", "John"];
students.forEach(student => {
  console.log(`Hello, ${student}!`);
});
// Hello, Ali!
// Hello, Zara!
// Hello, John!

//you can also use a for loop:

// let students = ["Ali", "Zara", "John"];
// for (let i = 0; i < students.length; i++) {
//   console.log(`Hello, ${students[i]}!`);
// }


//5. Delete First Item from Queue

let orders = ["order1", "order2", "order3"];
orders.shift();
console.log(orders); // ["order2", "order3"]
