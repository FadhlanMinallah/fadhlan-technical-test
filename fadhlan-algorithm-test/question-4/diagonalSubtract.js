// diagonalSubtract.ts
function diagonalSubtract(matrix) {
    var n = matrix.length;
    var primaryDiagonalSum = 0;
    var secondaryDiagonalSum = 0;
    for (var i = 0; i < n; i++) {
        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - 1 - i];
    }
    return primaryDiagonalSum - secondaryDiagonalSum;
}
// Contoh penggunaan
var matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];
var resultSubtract = diagonalSubtract(matrix);
console.log(resultSubtract); // Output: 3
