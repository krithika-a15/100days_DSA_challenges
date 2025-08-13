const visitors = [120, 80, 100, 90, 150, 110, 70];
const k = 3;

function minVisitors(visitors, k) {
  let sum = 0;
  let minSum = Infinity;

  for (let i = 0; i < k; i++) {
    sum += visitors[i];
  }
  minSum = sum;

  for (let i = k; i < visitors.length; i++) {
    sum = sum - visitors[i - k] + visitors[i];
    minSum = Math.min(minSum, sum);
  }

  return minSum;
}


console.log(minVisitors(visitors, k)); // Output: 270


// This code finds the minimum total visitors in a 3-hour window.


// -> Calculate total visitors for first 3 hours.
// -> Move window forward, subtracting old hour and adding new hour.
// -> Keep track of minimum total visitors.
// -> Repeat until all windows are checked.


// Visitors: [120, 80, 100, 90, 150, 110, 70]
// k: 3


// - [120, 80, 100] = 300
// - [80, 100, 90] = 270 (minimum)
// - [100, 90, 150] = 340
// - [90, 150, 110] = 350
// - [150, 110, 70] = 330

// The minimum total visitors is 270, which is the sum of the visitors in the window [80, 100, 90].


