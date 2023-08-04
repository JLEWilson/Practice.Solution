/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) 
of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Input: s = "abc", t = "ahbgdc"
Output: true

Input: s = "axc", t = "ahbgdc"
Output: false
*/

const isSubsequence = (s, t) => {
  let secondIndex = 0;
  let foundChars = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = secondIndex; j < t.length; j++) {
      if (s.charAt(i) === t.charAt(j)) {
        secondIndex = j + 1;
        foundChars += s.charAt(i);
        break;
      }
    }
  }

  if (foundChars === s) return true;

  return false;
};
