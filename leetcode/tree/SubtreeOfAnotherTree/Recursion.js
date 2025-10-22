// 572. Subtree of Another Tree
// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
// Link: https://leetcode.com/problems/subtree-of-another-tree/description/?envType=problem-list-v2&envId=oizxjoit

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    if (!root) return false;

    // 
    const isSameTree = (t, s) => {
        if (!s && !t) return true;
        if (!s || !t) return false;
        if (s.val !== t.val) return false;
        return isSameTree(t.left, s.left) && isSameTree(t.right, s.right);
    }

    if (isSameTree(root, subRoot))
        return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};