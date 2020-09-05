// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};
  let maxCount = -1;
  let maxChar = '';
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }
  console.log(chars);

  for (let el in chars) {
    if (chars[el] > maxCount) {
      maxCount = chars[el];
      maxChar = el;
    }
  }
  return maxChar;
}

console.log(maxChar('aaaabbcc1 asd1riqeqw'));

module.exports = maxChar;
