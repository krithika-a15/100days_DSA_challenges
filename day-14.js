const visitors = [120, 80, 100, 90, 150, 110, 70];
const k = 3;

function minSumCon(visitors, k) {
  let minSum = Infinity;
  for (let i = 0; i <= visitors.length - k; i++) {
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += visitors[j];
    }
    minSum = Math.min(minSum, currentSum);
  }
  return minSum;
}


console.log(minSumCon(visitors, k)); // Output: 270


