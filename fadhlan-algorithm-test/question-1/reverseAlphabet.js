function reverseAlphabet(input) {
    // mencari posisi terakhir yang bukan angka
    var lastIndex = input.search(/\d+$/);
    // jika tidak ada angka, kembalikan input asli
    if (lastIndex === -1) {
        return input;
    }
    // pisahkan huruf dan angka
    var letters = input.slice(0, lastIndex).split('');
    var number = input.slice(lastIndex);
    // balikkan huruf
    var reversedLetters = letters.reverse().join('');
    // gabungkan kembali dengan angka di akhir
    return reversedLetters + number;
}
var resultReverse = reverseAlphabet("NEGIE1");
console.log(resultReverse); // Output: EIGEN1
