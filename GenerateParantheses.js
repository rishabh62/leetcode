//link: https://leetcode.com/problems/generate-parentheses/
//TC & SC: O(2^n)

const BRACES = "()";
var generateParenthesis = function (n) {
  if (n === 1) return [BRACES];
  let smallerSol = generateParenthesis(n - 1);
  let result = [];
  for (let item of smallerSol) {
    let combinations = getCombinations(item);
    result = [...new Set([...result, ...combinations])];
  }
  return result;
};

var getCombinations = ((elem) => (str) => {
  let result = new Set();
  for (let i of range(str.length)) {
    result.add(insert(str, i, elem));
  }
  return result;
})(BRACES);

var range = (n) => [...Array(n).keys()];

var insert = (str, index, value) =>
  str.substr(0, index) + value + str.substr(index);
