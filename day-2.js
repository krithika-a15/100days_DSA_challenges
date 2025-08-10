//1. Generate Invoice Report

//To generate the invoice report, we can use the map method to calculate the total for each item.

let items = [
  { name: "Pen", qty: 3, price: 10 },
  { name: "Notebook", qty: 2, price: 50 },
  { name: "Bag", qty: 1, price: 400 }
];

let invoiceReport = items.map(item => ({
  name: item.name,
  total: item.qty * item.price
}));

console.log(invoiceReport);
// Output: [
//   { name: "Pen", total: 30 },
//   { name: "Notebook", total: 100 },
//   { name: "Bag", total: 400 }
// ]


//2. Find Most Sold Product

//To find the most sold product, we can use the reduce method to create a frequency map, and then extract the product with the maximum quantity.


let orders = [
  { product: 'Pen', qty: 10 },
  { product: 'Notebook', qty: 5 },
  { product: 'Pen', qty: 15 },
  { product: 'Bag', qty: 1 },
  { product: 'Notebook', qty: 10 }
];

let frequencyMap = orders.reduce((map, order) => {
  if (map[order.product]) {
    map[order.product] += order.qty;
  } else {
    map[order.product] = order.qty;
  }
  return map;
}, {});

let maxProduct = Object.keys(frequencyMap).reduce((a, b) => frequencyMap[a] > frequencyMap[b] ? a : b);

console.log(maxProduct);
// Output: 'Pen'


//3. Detect Duplicate Entries

//To detect duplicate entries, we can use the filter method and compare the indexOf and lastIndexOf of each element.


let users = ['Ali', 'Sara', 'Zoya', 'Ali', 'Zara', 'Sara'];

let duplicateUsers = users.filter((user, index) => users.indexOf(user) !== users.lastIndexOf(user));

console.log([...new Set(duplicateUsers)]);
// Output: ['Ali', 'Sara']



