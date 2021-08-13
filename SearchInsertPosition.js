/**----------------------
 * ?        ABOUT
 * @author          : Rishabh Gour
 * @createdOn       : 13th Aug 2021
 * @link            : https://leetcode.com/problems/search-insert-position/submissions/
 * @timeComplexity  : O(log(n))
 * @spaceComplexity : O(log(n))
 *------------------------**/

 var searchInsert = function(nums, target) {
    return search(nums, target, 0, nums.length-1)
    
};

function search(nums, target, start, end){
    
    if(target <= nums[start]) return start
    if(target > nums[end]) return end + 1
    
    let middle = Math.ceil((end-start)/2) - 1 + start;
    if(nums[middle] === target) return middle;
    
    if(target < nums[middle]) return search(nums, target, start, middle)
    return search(nums, target, middle+1, end)
    
}