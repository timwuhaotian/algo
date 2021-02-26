// Given two strings word1 and word2, return the minimum number of operations required
// to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let min = word2.length;
  return min;
};

console.log(minDistance("horse", "ros"));

//     ""  h   o   r   s   e
// ""
// r       R
// o           -
// s               R

// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')
