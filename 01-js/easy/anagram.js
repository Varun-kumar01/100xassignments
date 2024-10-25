/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length == str2.length){
    let sorted1 = str1.toLowerCase().split("").sort().join("");  // I converted both the strings to lowercase first, then to arrays,sorted them and joined them back.
    let sorted2 = str2.toLowerCase().split("").sort().join("");

    return sorted1 == sorted2;
  }
  else{
    return false;
  }
}

module.exports = isAnagram;
