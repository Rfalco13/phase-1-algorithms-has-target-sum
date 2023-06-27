function hasTargetSum(array, target) {
  // Create an empty set to store the visited numbers
  const visitedNumbers = new Set();

  // Iterate through each number in the array
  for (let num of array) {
    // Calculate the difference between the target and the current number
    const difference = target - num;

    // If the difference is in the visited numbers set, it means we found two numbers that sum up to the target
    if (visitedNumbers.has(difference)) {
      return true;
    }

    // Add the current number to the visited numbers set
    visitedNumbers.add(num);
  }

  // If no pair of numbers sum up to the target, return false
  return false;
}


/* 
  Write the Big O time complexity of your function here
  The time complexity of the `hasTargetSum` function is O(n), where n is the length of the input array.
*/

/* 
  Add your pseudocode here
  1. Create an empty set called visitedNumbers.
2. Iterate through each number (num) in the array:
     a. Calculate the difference between the target and the current number: difference = target - num.
     b. If the difference is in the visitedNumbers set, return true as we found two numbers that sum up to the target.
     c. Add the current number to the visitedNumbers set.
3. If no pair of numbers sum up to the target, return false.

*/

/*
  Add written explanation of your solution here
  The `hasTargetSum` function checks if there are two numbers in the given array that sum upto the target value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
