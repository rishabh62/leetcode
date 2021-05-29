/**----------------------
 * ?        ABOUT
 * @author          : Rishabh Gour
 * @createdOn       : 29th May 2021
 * @link            : https://leetcode.com/problems/two-sum/#
 * @timeComplexity  : O(n*log(n))
 * @spaceComplexity : O(1)
 *------------------------**/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = [];
  nums.forEach((elem, index, arr) => {
    let complimentIndex = binarySearch(arr, target - elem);
    if (complimentIndex > -1 && index !== complimentIndex)
      result = [index, complimentIndex];
  });
  return result;
};

var binarySearch = (arr, elem) => arr.findIndex((x) => x === elem);
