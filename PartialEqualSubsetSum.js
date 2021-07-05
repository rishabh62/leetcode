/**----------------------
 * ?        ABOUT
 * @author          : Rishabh Gour
 * @createdOn       : 5th July 2021
 * @link            : https://leetcode.com/problems/partition-equal-subset-sum/
 *------------------------**/

//this can only memoize functions that accept primitive arguments excluding Symbols
const memoizer = (fn) =>
  (
    (cache) =>
    (...args) =>
      args.toString() in cache
        ? cache[args.toString()]
        : (cache[args.toString()] = fn(...args))
  )({});

var canPartition = function (nums) {
  let total = nums.reduce((x, acc) => (acc += x), 0);
  if (total % 2 !== 0) return false;
  return solve(nums, total / 2);
};

const solve = memoizer((nums, total, sum = 0) => {
  if (sum > total) return false;
  if (sum === total) return true;
  for (let i = 0; i < nums.length; i++)
    return (
      solve(nums.slice(1), total, sum + nums[0]) ||
      solve(nums.slice(1), total, sum)
    );
  return false;
});
