class Solution{
    search(nums,target){
    let left=0;
    let right=nums.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(nums[mid]===target){
            return mid
        }
        else if(nums[mid]<target){
            left=mid+1;
        }
        else
            right=mid-1;
        
    }
    return -1
}
}
let sol=new Solution
let nums=[-1,0,2,4,6,4,8]
let target=4
console.log(sol.search(nums,target));

