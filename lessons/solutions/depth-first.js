// depth-first.js

/**
 * Pre-order traversal: Node -> Left -> Right
 * @param {Object} node - The current node.
 * @param {Array} result - The array to store the traversal result.
 * @returns {Array} The result array containing the traversal.
 */
function preorderTraverse(node, result) {
  if (!node) return result;
  result.push(node.value);
  preorderTraverse(node.left, result);
  preorderTraverse(node.right, result);
  return result;
}

/**
 * In-order traversal: Left -> Node -> Right
 * @param {Object} node - The current node.
 * @param {Array} result - The array to store the traversal result.
 * @returns {Array} The result array containing the traversal.
 */
function inorderTraverse(node, result) {
  if (!node) return result;
  inorderTraverse(node.left, result);
  result.push(node.value);
  inorderTraverse(node.right, result);
  return result;
}

/**
 * Post-order traversal: Left -> Right -> Node
 * @param {Object} node - The current node.
 * @param {Array} result - The array to store the traversal result.
 * @returns {Array} The result array containing the traversal.
 */
function postorderTraverse(node, result) {
  if (!node) return result;
  postorderTraverse(node.left, result);
  postorderTraverse(node.right, result);
  result.push(node.value);
  return result;
}

module.exports = {
  preorderTraverse,
  inorderTraverse,
  postorderTraverse,
};
