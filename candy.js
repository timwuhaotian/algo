// Given the array candies and the integer
// extraCandies, where candies[i] represents the number
//  of candies that the ith kid has.

// For each kid check if there is a way to
// distribute extraCandies among the kids such that he or
//  she can have the greatest number of candies among them.
//  Notice that multiple kids can have the greatest number of candies.

// Input: (candies = [2, 3, 5, 1, 3]), (extraCandies = 3);
// Output: [true, true, true, false, true];

// Input: (candies = [4, 2, 1, 1, 2]), (extraCandies = 1);
// Output: [true, false, false, false, false];

// Input: (candies = [12, 1, 12]), (extraCandies = 10);
// Output: [true, false, true];
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const table = Array(candies.length).fill(false);
  const maxCandy = Math.max(...candies); // target we going to hit + extraCandies
  for (let i = 0; i < candies.length; i++) {
    const numCandy = candies[i];
    if (numCandy + extraCandies >= maxCandy) {
      table[i] = true;
    }
  }
  return table;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
