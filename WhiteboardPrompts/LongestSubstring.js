// Given a string s, find the length of the longest substring
// without repeating characters.

const lengthOfLongestSubstring = (s) => {
  let map = {};
  let maxLength = 0;
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    let lastChar = s[end];
    if (map[lastChar] === undefined) {
      map[lastChar] = 0;
    }
    map[lastChar] += 1;
    while (map[lastChar] > 1) {
      let firstChar = s[start];
      map[firstChar] -= 1;
      start += 1;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};

//should be 3
console.log(lengthOfLongestSubstring("abcabcbb"));
//should be 1
console.log(lengthOfLongestSubstring("bbbb"));
//should be 2
console.log(lengthOfLongestSubstring("aab"));
