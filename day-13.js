const days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0];
const k = 2;

function longestStreak(days, k) {
  let maxStreak = 0;
  for (let i = 0; i < days.length; i++) {
    let zeros = 0;
    for (let j = i; j < days.length; j++) {
      if (days[j] === 0) {
        zeros++;
      }
      if (zeros > k) {
        break;
      }
      maxStreak = Math.max(maxStreak, j - i + 1);
    }
  }
  return maxStreak;
}


console.log(longestStreak(days, k)); // Output: 7


// This code finds the longest streak of productive days by flipping up to k unproductive days.

// it checks all possible day ranges and counts how many days can be flipped and finds the longest streak.

// Example: Given days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0] and k = 2, the code returns 7.