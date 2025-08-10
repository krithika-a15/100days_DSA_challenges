//1: Two Pointers Real-World Edition 
function twoPointers(userA,userB){
let i=0;
let j=0;
let merged=[];
let mergedResult=[];
while(i<userA.length && j<userB.length){
if(userA[i][0]<userB[j][0]){
    merged.push(userA[i])
    i++;
}else{
    merged.push(userB[j])
    j++;
}
}
//merge remaining intervals
while(i < userA.length){
    merged.push(userA[i]);
    i++;
}
while(j<userB.length){
    merged.push(userB[j]);
    j++;
}
let lastMerged=merged[0];
merged.forEach(current =>{
    if(current[0] <= lastMerged[1]){
        lastMerged[1]=Math.max(lastMerged[1] , current[1]);
    }else{
        mergedResult.push(lastMerged);
        lastMerged=current;
    }
})
mergedResult.push(lastMerged);
return mergedResult;
}
console.log(twoPointers([[9, 11], [13, 15], [18, 20]] ,[[10, 12], [14, 16], [17, 18]]
));

//Output:[[9, 12], [13, 16], [17, 20]]

//This code merges two lists of time intervals (e.g., meeting schedules) into one list. It:

//1. Combines the two lists into one, sorting the intervals by their start times.
// 2. Merges overlapping intervals into a single interval.

// For example, if one list has an interval from 9-11 and another list has an interval from 10-12,
//  the code will merge them into a single interval from 9-12.

// The output is a new list of merged intervals with no overlaps.