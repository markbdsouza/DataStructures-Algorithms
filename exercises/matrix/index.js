// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function createEmptyMatrix(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    row = [];
    for (let j = 0; j < n; j++) {
      row.push('');
    }
    result.push(row);
  }
  return result;
}

function matrix(n) {
  result = createEmptyMatrix(n);
  console.log(result);
  let startRow = 0,
    startCol = 0,
    endRow = n - 1,
    endCol = n - 1,
    counter = 1;
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let j = startRow; j <= endRow; j++) {
      result[j][endCol] = counter;
      counter++;
    }
    endCol--;
    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  return result;
}

// matrix(4);
module.exports = matrix;
