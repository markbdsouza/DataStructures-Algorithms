// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let sign = n >= 0 ? 1 : -1;
  let ans = +Math.abs(n).toString().split('').reverse().join('');

  console.log(ans * sign);
}

reverseInt(15); //=== 51
reverseInt(981); //=== 189
reverseInt(500); //=== 5
reverseInt(-15); //=== -51
reverseInt(-90); //=== -9

// module.exports = reverseInt;
