// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, value = '') {
  const midPoint = Math.floor((n * 2 - 1) / 2);
  if (row === n) {
    return;
  }
  if (value.length === 2 * n - 1) {
    console.log(value);
    return pyramid(n, row + 1);
  }
  if (value.length <= midPoint + row && value.length >= midPoint - row)
    value += '#';
  else value += '_';
  pyramid(n, row, value);
}
pyramid(1);
console.log('--------');

pyramid(2);
console.log('--------');
pyramid(5);
// module.exports = pyramid;

// function pyramid(n) {
//   const midPoint = Math.floor((n * 2 - 1) / 2);
//   for (let i = 0; i < n; i++) {
//     let value = '';
//     for (let j = 0; j < n * 2 - 1; j++) {
//       if (j <= midPoint + i && j >= midPoint - i) value += '#';
//       else value += '_';
//     }
//     console.log(value);
//   }
// }
