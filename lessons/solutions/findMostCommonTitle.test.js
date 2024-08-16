const findMostCommonTitle = require("./findMostCommonTitle");

test("user 30 with 2 degrees of separation", () => {
  expect(findMostCommonTitle(30, 2)).toBe("Librarian");
});

test("user 11 with 3 degrees of separation", () => {
  expect(findMostCommonTitle(11, 3)).toBe("Graphic Designer");
});

test("user 307 with 4 degrees of separation", () => {
  // if you're failing here with "Clinical Specialist, you're probably not filtering users who
  // appear more than once in people's connections
  expect(findMostCommonTitle(306, 4)).toBe("Pharmacist");
});

// Extra Credit
test("user 1 with 7 degrees of separation – this will traverse every user that's followed by someone else. five users are unfollowed", () => {
  expect(findMostCommonTitle(1, 7)).toBe("Geological Engineer");
});
