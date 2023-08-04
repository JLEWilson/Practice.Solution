// Two pointers is a pretty simple concept
// Usually using nested loops, you have one index that moves slow
// and one that moves fast, so you can compare the slow vs all the fast ones

//example using TwoSum, leetcode # 1
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/
const twoSum = (nums, target) => {
  //this is the slow pointer
  for (let i = 0; i < nums.length; i++) {
    //this is the fast pointer, for every slow pointer we will compare all other indices
    for (let j = i + 1; j < nums.length; j++) {
      //then whatever comparison / equation you need to do here
      if (i == j) continue;
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
