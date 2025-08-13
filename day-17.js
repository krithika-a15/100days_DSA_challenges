const nums = [2, 1, 5, 1, 3, 2];
const k = 8;


function longestSubArray(nums, k) {
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum <= k) {
        maxLength = Math.max(maxLength, j-i+1);
      }
    }
  }

  return maxLength;
}


console.log(longestSubArray(nums, k)); // Output: 4

// This code finds the longest part of an array that adds up to a certain number (k) or less.


// -> It checks every part of the array.
// -> If the part's sum is less than or equal to k, it checks if it's the longest part so far.
// -> If it is, it remembers it.
// -> Finally, it tells you the length of the longest part that meets the condition.

// It looks at all possible parts and finds the longest one that adds up to k or less.