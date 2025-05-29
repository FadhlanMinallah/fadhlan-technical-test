// longestSentence.ts
function longest(sentence: string): string {
    const words = sentence.split(' ');
    let longestSentence = '';

    for (const word of words) {
        if (word.length > longestSentence.length) {
            longestSentence = word;
        }
    }

    return longestSentence;
}

// Contoh penggunaan
const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longestSentenceResult = longest(sentence);
console.log(`${longestSentenceResult}: ${longestSentenceResult.length} character`); // Output: mengerjakan: 11 character
