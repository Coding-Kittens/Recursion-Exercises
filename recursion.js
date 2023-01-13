/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 1) return nums[0];
  let num = product(nums.slice(1));
  return nums[0] * num;
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, longestWord = words[0].length) {
  if (words.length === 1) return longestWord;
  if (words[0].length > longestWord) longestWord = words[0].length;
  return longest(words.slice(1), longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, isOther = true) {
  if (str.length === 1) return isOther ? str[0] : "";
  const str2 = everyOther(str.slice(1), !isOther);
  return isOther ? str[0] + str2 : str2;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;
  return (
    str[0] === str[str.length - 1] && isPalindrome(str.slice(1, str.length - 1))
  );
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (arr[0] === val) return idx;
  if (arr.length === 1) return -1;
  let valIdx = findIndex(arr.slice(1), val, idx++);
  return valIdx === -1 ? valIdx : valIdx + 1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 1) return str;
  let revStr = revString(str.slice(0, str.length - 1));
  return str[str.length - 1] + revStr;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for (let key in Object.keys(obj)) {
    let val = obj[Object.keys(obj)[key]];

    if (typeof val === "string") {
      arr.push(val);
    } else if (typeof val === "object") {
      const str = gatherStrings(val);
      arr.push(...str);
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
  if (leftIdx > rightIdx) return -1;

  let idx = Math.floor((leftIdx + rightIdx) / 2);
  if (arr[idx] === val) return idx;

  let currentVal = arr[idx];

  currentVal < val ? (leftIdx = idx + 1) : (rightIdx = idx - 1);

  return binarySearch(arr, val, leftIdx, rightIdx);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
