// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(word) {
  return word.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;
// console.log(anagrams('asd', 'DASSS'));

// //Option 1.1
// function filterAndCreateMap(word) {
//   let cleansedWord = word.replace(/[^\w]/g, '').toLowerCase();
//   let charMap = {};
//   for (let char of cleansedWord) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   let charMapA = filterAndCreateMap(stringA);
//   let charMapB = filterAndCreateMap(stringB);
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;
//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//   }
//   return true;
// }
