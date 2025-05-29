function countQuery(INPUT: string[], QUERY: string[]): number[] {
    // Membuat map untuk menghitung frekuensi kata di INPUT
    const frequencyMap: Record<string, number> = {};

    for (const word of INPUT) {
        frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    }

    // Membuat array hasil berdasarkan QUERY
    const result: number[] = QUERY.map(queryWord => frequencyMap[queryWord] || 0);

    return result;
}

// Contoh penggunaan
const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const output = countQuery(INPUT, QUERY);
console.log(output); // Output: [1, 0, 2]

