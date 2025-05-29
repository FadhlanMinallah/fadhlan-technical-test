function countQuery(INPUT, QUERY) {
    // Membuat map untuk menghitung frekuensi kata di INPUT
    var frequencyMap = {};
    for (var _i = 0, INPUT_1 = INPUT; _i < INPUT_1.length; _i++) {
        var word = INPUT_1[_i];
        frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    }
    // Membuat array hasil berdasarkan QUERY
    var result = QUERY.map(function (queryWord) { return frequencyMap[queryWord] || 0; });
    return result;
}
// Contoh penggunaan
var INPUT = ['xc', 'dz', 'bbb', 'dz'];
var QUERY = ['bbb', 'ac', 'dz'];
var output = countQuery(INPUT, QUERY);
console.log(output); // Output: [1, 0, 2]
