//1. Remove Discontinued Products

//To remove the discontinued products from the array, we can use the splice method.

let products = ['Laptop', 'Mobile', 'Tablet', 'Camera', 'Watch'];
products.splice(2, 2);
console.log(products); // Output: ['Laptop', 'Mobile', 'Watch']

//2. Add New Students in Between

//To add new students to the class list, we can use the splice method again.

let students = ['Ali', 'Sara', 'Zoya'];
students.splice(1, 0, 'Nina', 'Omar');
console.log(students); // Output: ['Ali', 'Nina', 'Omar', 'Sara', 'Zoya']

//3. Extract Top Performers

//To extract the top 3 performing students, we can use the slice method.

let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
let topPerformers = scores.slice(0, 3);
console.log(topPerformers); // Output: ['Zainab', 'Ali', 'Farhan']


//4. Show Last 2 Days’ Sales

//To get the sales of the last 2 days, we can use the slice method with a negative index.

let sales = [220, 300, 280, 150, 400, 390, 310];
let lastTwoDaysSales = sales.slice(-2);
console.log(lastTwoDaysSales); // Output: [390, 310]


//5. Get All Users Who Are Active

//To get the active users, we can use the filter method.

let users = [{name: 'Ahmed', active: true}, 
    {name: 'Mira', active: false}, 
    {name: 'John', active: true}];
let activeUsers = users.filter(user => user.active);
console.log(activeUsers); // Output: [{name: 'Ahmed', active: true}, {name: 'John', active: true}]


//6. Block Short Phone Numbers

//To filter out short phone numbers, we can use the filter method.

let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
let validPhoneNumbers = phoneNumbers.filter(phoneNumber => phoneNumber.length >= 10);
console.log(validPhoneNumbers); // Output: ['1234567890', '9876543210']


//7. Convert Price to With Tax

//To add tax to the prices, we can use the map method.

let prices = [100, 200, 300];
let pricesWithTax = prices.map(price => price * 1.18);
console.log(pricesWithTax); // Output: [118, 236, 354]


//8. Append “.com” to Website Names

//To append ".com" to the website names, we can use the map method.

let sites = ['google', 'amazon', 'microsoft'];
let domains = sites.map(site => site + '.com');
console.log(domains); // Output: ['google.com', 'amazon.com', 'microsoft.com']

//9. Calculate Total Cart Price

//To calculate the total cart price, we can use the reduce method.

let cart = [499, 1299, 299, 799];
let totalPrice = cart.reduce((total, price) => total + price, 0);
console.log(totalPrice); // Output: 2896


//10. Count Frequency of Votes

//To count the frequency of votes, we can use the reduce method.

let votes = ['A', 'B', 'A', 'C', 'B', 'A'];
let voteCounts = votes.reduce((counts, vote) => {
  counts[vote] = (counts[vote] || 0) + 1;
  return counts;
}, {});
console.log(voteCounts); // Output: { A: 3, B: 2, C: 1 }



// summary of the code

// 1. Remove Discontinued Products

// - Problem: Remove certain products from a list of products.
// - Solution: Use the splice method to remove the products starting from index 2, and remove 2 products.
// - Result: The list of products is updated to exclude the discontinued products.

// 2. Add New Students in Between

// - Problem: Add new students to a list of students, inserting them at a specific position.
// - Solution: Use the splice method to insert the new students at index 1, without removing any existing students.
// - Result: The list of students is updated to include the new students at the specified position.

// 3. Extract Top Performers

// - Problem: Get the top 3 performing students from a list of students.
// - Solution: Use the slice method to extract the first 3 students from the list.
// - Result: A new list is created containing the top 3 performing students.

// 4. Show Last 2 Days’ Sales

// - Problem: Get the sales data for the last 2 days from a list of sales data.
// - Solution: Use the slice method with a negative index to extract the last 2 elements from the list.
// - Result: A new list is created containing the sales data for the last 2 days.

// 5. Get All Users Who Are Active

// - Problem: Filter a list of users to show only those who are active.
// - Solution: Use the filter method to create a new list containing only the users who are active.
// - Result: A new list is created containing only the active users.

// 6. Block Short Phone Numbers

// - Problem: Remove phone numbers that are too short from a list of phone numbers.
// - Solution: Use the filter method to create a new list containing only the phone numbers that meet the minimum length requirement.
// - Result: A new list is created containing only the valid phone numbers.

// 7. Convert Price to With Tax

// - Problem: Add tax to a list of prices.
// - Solution: Use the map method to create a new list containing the prices with tax added.
// - Result: A new list is created containing the prices with tax.

// 8. Append “.com” to Website Names

// - Problem: Add ".com" to the end of each website name in a list.
// - Solution: Use the map method to create a new list containing the website names with ".com" appended.
// - Result: A new list is created containing the website names with ".com" appended.

// 9. Calculate Total Cart Price

// - Problem: Calculate the total price of items in a shopping cart.
// - Solution: Use the reduce method to calculate the total price by summing up all the prices in the cart.
// - Result: The total price of the items in the cart is calculated.

// 10. Count Frequency of Votes

// - Problem: Count how many times each option was voted for in an election.
// - Solution: Use the reduce method to create an object that contains the frequency of each vote.
// - Result: An object is created containing the frequency of each vote.
