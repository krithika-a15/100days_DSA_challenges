//1. Detect and Merge Duplicate Product Entries

//To solve this problem, we can use a combination of filter and a Set to keep track of the product names we've
//  seen so far. We'll convert the product names to lowercase to ensure case-insensitive matching.


let inventory = [
  { id: 101, name: 'Laptop' },
  { id: 102, name: 'Mobile' },
  { id: 103, name: 'laptop' },
  { id: 104, name: 'Tablet' },
  { id: 105, name: 'MOBILE' },
  { id: 106, name: 'Camera' }
];

let see = new Set();
let result = inventory.filter(item => {
  let name = item.name.toLowerCase();
  if (!see.has(name)) {
    see.add(name);
    return true;
  }
  return false;
});

console.log(result);
// Output: [
//   { id: 101, name: 'Laptop' },
//   { id: 102, name: 'Mobile' },
//   { id: 104, name: 'Tablet' },
//   { id: 106, name: 'Camera' }
// ]


//2. Group Transactions by Category and Sum Amounts

//To solve this problem, we can use the reduce method to create a grouped object where the keys are the 
// categories and the values are the total amounts.


let transactions = [
  { category: 'Food', amount: 120 },
  { category: 'Transport', amount: 50 },
  { category: 'Food', amount: 80 },
  { category: 'Shopping', amount: 300 },
  { category: 'Transport', amount: 70 },
];

let results = transactions.reduce((acc, current) => {
  if (acc[current.category]) {
    acc[current.category] += current.amount;
  } else {
    acc[current.category] = current.amount;
  }
  return acc;
}, {});

console.log(results);
// Output: { Food: 200, Transport: 120, Shopping: 300 }



//SUMMARY
// 1. Remove duplicates from inventory list: Use filter and a Set to remove duplicate products based on
//  case-insensitive matching of product names.

// 2. Group transactions by category and sum amounts: Use reduce to create a grouped object where keys 
// are categories and values are total amounts spent.

// Both solutions use array methods to efficiently process data and produce desired results.
