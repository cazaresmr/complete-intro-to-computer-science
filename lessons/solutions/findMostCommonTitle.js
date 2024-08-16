const { getUser } = require("./jobs");

const findMostCommonTitle = (myId, degreesOfSeparation) => {
  const visited = new Set(); // To track visited users
  const queue = [[myId, 0]]; // Queue to perform BFS, with [userId, currentDegree]
  const titleCounts = {}; // To count occurrences of job titles

  while (queue.length > 0) {
    const [currentId, currentDegree] = queue.shift();

    if (currentDegree > degreesOfSeparation) {
      continue;
    }

    if (!visited.has(currentId)) {
      visited.add(currentId);
      const user = getUser(currentId);

      // Count the user's job title
      const title = user.title;
      titleCounts[title] = (titleCounts[title] || 0) + 1;

      // Add connections to the queue
      if (currentDegree < degreesOfSeparation) {
        user.connections.forEach((connectionId) => {
          if (!visited.has(connectionId)) {
            queue.push([connectionId, currentDegree + 1]);
          }
        });
      }
    }
  }

  // Find the title with the maximum count
  let mostCommonTitle = null;
  let maxCount = 0;

  for (const title in titleCounts) {
    if (titleCounts[title] > maxCount) {
      maxCount = titleCounts[title];
      mostCommonTitle = title;
    }
  }

  return mostCommonTitle;
};

module.exports = findMostCommonTitle;
