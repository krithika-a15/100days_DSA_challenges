const nums = [4, 2, 1, 7, 8, 1, 2, 8, 1];
const k = 8;

function longestSubarray(nums, k) {
  let maxLength = 0;
  let windowSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    while (windowSum > k && left <= right) {
      windowSum -= nums[left];
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}


console.log(longestSubarray(nums, k)); //output - 3


// This code finds the longest part of an array that adds up to a certain number (k) or less.


// 1. It uses two pointers, left and right, to look at a part of the array (called a "window").
// 2. It keeps adding numbers to the window as it moves the right pointer.
// 3. If the sum of the numbers in the window gets too big (more than k), it starts removing numbers from the left side of the window.
// 4. It keeps track of the longest window it finds that still adds up to k or less.
// 5. Finally, it tells you the length of the longest window it found.

//This approach has a time complexity of O(n) because each element is visited at most twice (once by right and once by left).

