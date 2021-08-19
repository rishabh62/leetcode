/**----------------------
 * ?        ABOUT
 * @author          : Rishabh Gour
 * @createdOn       : 19th Aug 2021
 * @link            : https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * @timeComplexity  : O(n)
 * @spaceComplexity : O(n)
 *------------------------**/

var lowestCommonAncestor = function (root, p, q) {
  if (!root || root.val === p.val || root.val === q.val) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  return left && right ? root : left || right;
};
