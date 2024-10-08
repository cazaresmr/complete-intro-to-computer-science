// depth-first.test.js

const {
  preorderTraverse,
  inorderTraverse,
  postorderTraverse,
} = require("./depth-first");

describe("Depth-First Traversals", () => {
  const tree = {
    value: 8,
    left: {
      value: 4,
      left: {
        value: 3,
        left: {
          value: 2,
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 7,
          left: {
            value: 6,
            left: null,
            right: null,
          },
          right: null,
        },
      },
    },
    right: {
      value: 12,
      left: {
        value: 10,
        left: {
          value: 9,
          left: null,
          right: null,
        },
        right: {
          value: 11,
          left: null,
          right: null,
        },
      },
      right: null,
    },
  };

  test("preorderTraverse should return nodes in pre-order", () => {
    expect(preorderTraverse(tree, [])).toEqual([
      8, 4, 3, 2, 5, 7, 6, 12, 10, 9, 11,
    ]);
  });

  test("inorderTraverse should return nodes in in-order", () => {
    expect(inorderTraverse(tree, [])).toEqual([
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]);
  });

  test("postorderTraverse should return nodes in post-order", () => {
    expect(postorderTraverse(tree, [])).toEqual([
      2, 3, 6, 7, 5, 4, 9, 11, 10, 12, 8,
    ]);
  });
});
