//  Дана матрица (двумерный массив), нужно написать функцию, которая будет находить наименьшее значение,
//   после чего все нечетные значения в матрице будет умножать на это число.

// Исходная матрица:
// [
//  [5, 3, 6],
//  [7, 11, 2],
//  [15, 9, 4]
// ]

// Результат выполнения функции:
// [
//  [10, 6, 6],
//  [14, 22, 2],
//  [30, 18, 4]
// ]

function multiplyOddsByMin(matrix) {
  let min = Infinity;
  for (let row of matrix) {
    for (let value of row) {
      if (value < min) {
        min = value;
      }
    }
  }

  const transformedMatrix = matrix.map((row) =>
    row.map((value) => (value % 2 !== 0 ? value * min : value))
  );

  return transformedMatrix;
}

const originalMatrix = [
  [5, 3, 6],
  [7, 11, 2],
  [15, 9, 4],
];

const resultMatrix = multiplyOddsByMin(originalMatrix);
console.log(resultMatrix);
