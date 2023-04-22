/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0) return 1;
  return nums[0] * product(nums.splice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, length = 0) {
  if(words.length === 0) return length; // nothing in the array return longest length
  // is the word length bigger?
  if(words[0].length > length) length = words[0].length;
  return longest(words.splice(1), length);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str.length === 0) return '';

  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if(str.length === 1 || str.length === 0) return true; // letter itself is palindrome
  if(str[0] === str[str.length - 1]) return isPalindrome(str.slice(1, -1));
  return false; // letter is not palindrome
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if(arr.length === 0) return -1;
  if(arr[arr.length - 1] === val) return arr.length - 1;

  return findIndex(arr.slice(0, -1), val);
};
/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length === 1) return str;
  return str.slice(-1) + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringWords = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringWords.push(obj[key]);
    if (typeof obj[key] === "object") stringWords.push(...gatherStrings(obj[key]));
  }
  return stringWords;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

// function binarySearch(arr, val) {
// }

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
