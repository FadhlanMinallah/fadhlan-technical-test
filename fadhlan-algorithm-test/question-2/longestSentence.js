// longestSentence.ts
function longest(sentence) {
    var words = sentence.split(' ');
    var longestSentence = '';
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (word.length > longestSentence.length) {
            longestSentence = word;
        }
    }
    return longestSentence;
}
// Contoh penggunaan
var sentence = "Saya sangat senang mengerjakan soal algoritma";
var longestSentenceResult = longest(sentence);
console.log("".concat(longestSentenceResult, ": ").concat(longestSentenceResult.length, " character")); // Output: mengerjakan: 11 character
