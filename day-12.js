const visits = [10, 20, 30, 40, 50, 60, 70];
const k = 3;

function maxSumCon(visits, k) {
  let maxSum = 0;
  for (let i = 0; i <= visits.length - k; i++) {
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += visits[j];
    }
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}


console.log(maxSumCon(visits, k)); // Output: 180


//SUMMARY

// This code finds the maximum sum of a certain number of consecutive elements in an array.

// How it works:

// 1. It checks every possible group of consecutive elements.
// 2. It calculates the sum of each group.
// 3. It keeps track of the maximum sum found.
// 4. It returns the maximum sum.

// Example: If the array is [10, 20, 30, 40, 50, 60, 70] and we want to find the maximum sum of 3 consecutive elements, 
// the code will return 180 (which is 50 + 60 + 70).