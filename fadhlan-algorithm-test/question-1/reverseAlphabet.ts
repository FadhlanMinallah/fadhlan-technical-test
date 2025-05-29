function reverseAlphabet(input: string) {
    // mencari posisi terakhir yang bukan angka
    const lastIndex = input.search(/\d+$/);
    
    // jika tidak ada angka, kembalikan input asli
    if (lastIndex === -1) {
        return input;
    }
    
    // pisahkan huruf dan angka
    const letters = input.slice(0, lastIndex).split('');
    const number = input.slice(lastIndex);
    
    // balikkan huruf
    const reversedLetters = letters.reverse().join('');
    
    // gabungkan kembali dengan angka di akhir
    return reversedLetters + number;
}
const resultReverse = reverseAlphabet("NEGIE1");
console.log(resultReverse); // Output: EIGEN1