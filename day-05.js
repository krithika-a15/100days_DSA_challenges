//1: Separate Phone Numbers

//To separate the phone numbers into Indian and US numbers, we can use the filter method and check the string 
// patterns using startsWith.

const phoneNumbers = [
  "+919876543210",
  "+14085551234",
  "+918888777666",
  "+12345678901",
  "+917654321098"
];
  
let numbers = {
  indianNumbers: phoneNumbers.filter(number => number.startsWith("+91")),
  usNumbers: phoneNumbers.filter(number => number.startsWith("+1"))
};

console.log(numbers);
// Output: {
//   indianNumbers: ["+919876543210", "+918888777666", "+917654321098"],
//   usNumbers: ["+14085551234", "+12345678901"]
// }


//2: Insert Product in Cart

//To insert a new product at the second position (index 1) in the cart, we can use the splice method.


let cart = [101, 102, 104];
let newProduct = 103;

cart.splice(1, 0, newProduct);

console.log(cart);
// Output: [101, 103, 102, 104]


//3: Insert Student in Waiting List

//To add a new student at the end of the waiting list, we can use the push method.

let waitingList = ["Ali", "John", "Sara"];
let newStudent = "Aarav";

waitingList.push(newStudent);

console.log(waitingList);
// Output: ["Ali", "John", "Sara", "Aarav"]
