//1:Insert New Delivery Order
let array=[
  { orderId: 1, deliveryTime: "12:00" },
  { orderId: 2, deliveryTime: "12:30" }
]
array.splice(1,0,{orderId:3,deliveryTime: "12:15"});
console.log(array);

//2:Remove Inactive Users
 let userName=[
  { username: "ali", isActive: true },
  { username: "sara", isActive: false },
  { username: "john", isActive: true }
]
let newUsers=userName.filter(user =>{
    return user.isActive===true;
    }
)
console.log(newUsers);

//3: Movie Pair watch Time  
function twoPointer(arr,target){
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
    return 'No Time pair found';
}
console.log(twoPointer([18, 65, 95, 10, 980, 650, 105],480))
