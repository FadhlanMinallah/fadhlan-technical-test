// diagonalSubtract.ts
function diagonalSubtract(matrix: number[][]): number {
    const n = matrix.length;
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - 1 - i];
    }

    return primaryDiagonalSum - secondaryDiagonalSum;
}

// Contoh penggunaan
const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];

const resultSubtract = diagonalSubtract(matrix);
console.log(resultSubtract); // Output: 3
