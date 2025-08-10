//1- Remove Duplicate Emails (Like Gmail cleanup)
function origMails(emails){
let left=0;
for(let i=0;i<emails.length;i++){
    if(emails[i]!==emails[left]){
        left++;
        emails[left]=emails[i];
    }
}
return emails.splice(0,left+1);
}
console.log(origMails(["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"]
));
//output- [ 'ali@gmail.com', 'sara@gmail.com', 'zayn@gmail.com' ]

//This code removes duplicate email addresses from a list. 
// It goes through the list and keeps only the unique email addresses

//2- Playlist Duration Matcher (Music App Feature)
function musicApp(arr,target){
    arr.sort((a,b)=>a-b);
    let left=0;
    let right=arr.length-1;
    while(left<right){
        let sum=arr[left]+arr[right];
        if(sum===target){
            return [arr[left],arr[right]];
        }else if(sum<target){
            left++;
        }else{
            right--;
        }
    }
    return arr;
}
console.log(musicApp( [3, 5, 8, 2, 7, 4],10));
//output- [2,8]

//This code finds two song durations in a list that add up to a target duration. 
// It sorts the list and uses a two-pointer technique to find the matching durations. 
// If it finds a match, it returns the two durations
