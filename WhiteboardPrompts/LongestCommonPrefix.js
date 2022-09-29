const longestCommonPrefix = (strs) => {
  const lengthSortedArray = strs.sort((a, b) => a.length - b.length);
  let output = "";
  for (let i = 0; i < lengthSortedArray[0].length; i++) {
    if (
      strs.every((element, index) => {
        if (element[i] === lengthSortedArray[0].charAt(i)) return true;
        else return false;
      })
    ) {
      output += lengthSortedArray[0].charAt(i);
    } else {
      break;
    }
  }
  return output;
};

//Vertical Scan
const bestSolution = (strs) => {
  if (strs == null || strs.length == 0) return "";
  for (let i = 0; i < strs[0].length(); i++) {
    const c = strs[0].charAt(i);
    for (let j = 1; j < strs.length; j++) {
      if (i == strs[j].length() || strs[j].charAt(i) != c)
        return strs[0].substring(0, i);
    }
  }
  return strs[0];
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
