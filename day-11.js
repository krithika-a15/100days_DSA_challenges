function findUniqueTriplets(arr){
  arr.sort((a,b) => a - b);
  let triplets = [];
  for (let i = 0; i<arr.length-2; i++) {
    // Skip duplicates for i
    if (i>0 && arr[i] === arr[i-1]) continue;
    let left = i+1;
    let right = arr.length-1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        triplets.push([arr[i], arr[left], arr[right]]);

        // Skip duplicates for left and right
        while (left<right && arr[left] === arr[left+1]) left++;
        while (left<right && arr[right] === arr[right-1]) right--;

        left++;
        right--;
      } else if(sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
}

let arr = [-1, 0, 1, 2, -1, -4];
console.log(findUniqueTriplets(arr)); 

// Output: [[-1, -1, 2], [-1, 0, 1]]


//SUMMARY

// The code is to find 3 Numbers that Add Up to Zero

// 1. Sorts the numbers.
// 2. Looks for 3 numbers that add up to zero.
// 3. Finds unique combinations.


// - It goes through the numbers one by one.
// - For each number, it uses two pointers (left and right) to find a pair that adds up to the negative of the 
//  current number.
// - If the sum is zero, it adds the combination to the result and moves the pointers.
// - If the sum is not zero, it adjusts the pointers accordingly.

// In the result-->

// The code returns all unique combinations of 3 numbers that add up to zero.
// In this case, the output is [[-1, -1, 2], [-1, 0, 1]].

