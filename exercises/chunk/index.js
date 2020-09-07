// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let finalChunk = [];
//   let miniChunk = [];
//   for (let i = 0; i < array.length; i++) {
//     if (miniChunk.length === size) {
//       finalChunk.push(miniChunk);
//       miniChunk = [];
//     }

//     miniChunk.push(array[i]);
//     if (i === array.length - 1) {
//       finalChunk.push(miniChunk);
//     }
//   }
//   return finalChunk;
// }

function chunk(array, size) {
  let chunk = [];

  for (let i = 0; i < array.length / size; i++) {
    chunk.push(array.slice(i * size, (i + 1) * size));
  }

  return chunk;
}
console.log(chunk([1, 2, 3, 4, 5], 3));

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2));

module.exports = chunk;
