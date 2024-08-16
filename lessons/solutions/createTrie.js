class Node {
  constructor(value = "") {
    this.value = value;
    this.children = {};
    this.isEndOfWord = false;
  }

  insert(word) {
    let currentNode = this;
    for (let char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new Node(currentNode.value + char);
      }
      currentNode = currentNode.children[char];
    }
    currentNode.isEndOfWord = true;
  }

  complete(prefix) {
    let currentNode = this;
    for (let char of prefix) {
      if (!currentNode.children[char]) {
        return [];
      }
      currentNode = currentNode.children[char];
    }
    return this.findAllWords(currentNode);
  }

  findAllWords(node, words = []) {
    if (words.length >= 3) return words;
    if (node.isEndOfWord) words.push(node.value);

    for (let child in node.children) {
      if (words.length >= 3) break;
      this.findAllWords(node.children[child], words);
    }
    return words;
  }
}

const createTrie = (words) => {
  const root = new Node();
  for (let word of words) {
    root.insert(word.toLowerCase());
  }
  return root;
};

module.exports = createTrie;
