class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1; // Height is important for balancing
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // Helper function to get the height of a node
  height(node) {
    return node ? node.height : 0;
  }

  // Helper function to get the balance factor of a node
  getBalance(node) {
    return node ? this.height(node.left) - this.height(node.right) : 0;
  }

  // Right rotate
  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

    // Return new root
    return x;
  }

  // Left rotate
  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

    // Return new root
    return y;
  }

  // Recursive function to insert a value in the subtree rooted with node and returns the new root of the subtree
  addNode(node, value) {
    // Perform the normal BST insertion
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.addNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.addNode(node.right, value);
    } else {
      // Duplicates are not allowed in the BST
      return node;
    }

    // Update height of this ancestor node
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    // Get the balance factor of this ancestor node to check whether this node became unbalanced
    const balance = this.getBalance(node);

    // If this node becomes unbalanced, then there are 4 cases

    // Left Left Case
    if (balance > 1 && value < node.left.value) {
      return this.rightRotate(node);
    }

    // Right Right Case
    if (balance < -1 && value > node.right.value) {
      return this.leftRotate(node);
    }

    // Left Right Case
    if (balance > 1 && value > node.left.value) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && value < node.right.value) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    // Return the (unchanged) node pointer
    return node;
  }

  // Function to add a value to the AVL tree
  add(value) {
    this.root = this.addNode(this.root, value);
  }

  // Utility function to convert tree to a simple object for testing
  toObject() {
    return this.root;
  }
}

module.exports = Tree;
