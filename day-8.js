//1: Count Pairs with Given Sum
function pairSum(arr,target){
    let left = 0;
    let right = arr.length - 1
    let count = 0;
    while(left < right){
         const sum = arr[left] + arr[right];
         if(sum == target){
             count++;
             left++;
             right--;
         }else if(sum < target){
            left++
         }else{
            right--;
         }
    }
    return count;
}
console.log(pairSum([1, 2, 3, 4, 5, 6, 7],8))

// This code finds pairs in a sorted array that add up to a target sum.

// - It uses two pointers, one at the start and one at the end.
// - If the pair's sum is:
//     - Equal to the target: Count the pair and move both pointers.
//     - Less than the target: Move the left pointer to increase the sum.
//     - Greater than the target: Move the right pointer to decrease the sum.


//2: Move Zeroes to End
function zeroesEnd(arr){
    let left = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
       let temp = arr[left];
       arr[left] = arr[i];
       arr[i] = temp;
       left++;
        }
    } 
    return arr;
}
console.log(zeroesEnd([0, 1, 0, 3, 12]));

// This code moves all zeros to the end of an array, keeping non-zero elements in their original order.

// - It uses two pointers: one to find non-zero elements, and another to place them at the correct position.
// - When a non-zero element is found, it's swapped with the element at the tracked position, and the position is moved forward.


// Both codes uses time complexity of O(n) where n is the length of the array.
