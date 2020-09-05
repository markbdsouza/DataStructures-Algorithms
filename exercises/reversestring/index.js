// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((a, b) => {
    debugger;
    return b + a;
  }, '');
}
reverse('asd');

// function reverse(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// function reverse(str) {
//     return Array.from(str).reverse().join('');
//   }

module.exports = reverse;
