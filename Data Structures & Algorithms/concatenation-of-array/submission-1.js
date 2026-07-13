// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {number[]}
//      */
//     getConcatenation(nums) {
//         return
//         nums.concat(nums)
//     }
// }
// let sol=new Solution();
// console.log(sol.getConcatenation([1,4,1,2]));
class Solution{
    getConcatenation(nums){
        let ans=[];
        for(let i=0;i<nums.length;i++){
            ans.push(nums[i]);
        }
        for(let i=0;i<nums.length;i++){
            ans.push(nums[i]);
        }
       
        return ans;
    }
}
