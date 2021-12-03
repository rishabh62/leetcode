//https://leetcode.com/problems/permutations/
//O(n!)
var permute = function (nums) {
  if (nums.length === 1) return [nums];
  let results = [];
  for (let i = 0; i < nums.length; i++) {
    let copy = [...nums];
    copy.splice(i, 1);
    results.push(...permute(copy).map((arr) => [nums[i], ...arr]));
  }
  return results;
};
