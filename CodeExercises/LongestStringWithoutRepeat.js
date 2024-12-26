// as name clearly states. / we can use 'set' or 'map' data structure para hacer el ejercicio.
// ambos son O(N) tiempo y espacio. 

function LongestStringWithoutRepeat(s) {
    let set = new Set(); // Set to track unique characters in the current substring
    let start = 0; // Pointer for the start of the substring
    let maxLength = 0; // To store the max length of substring without repeating characters

    // Loop through each character in the string with 'end' as the end pointer of the substring
    for (let end = 0; end < s.length; end++) {
        // While the character at position 'end' is already in the set (repeated)
        while (set.has(s[end])) {
            // Remove the character at 'start' position and move 'start' forward
            set.delete(s[start]);
            start++;
        }
        // Add the character at 'end' to the set
        set.add(s[end]);
        // Update the max length of the substring found
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength; // Return the length of the longest substring without repeating characters
}

console.log(LongestStringWithoutRepeat('aaaababc')); // Expected output: 3 t(he last abc)



///////////// ahora hagámoslo usando Map, el cual es mas eficiente por el uso del indice 

const LongestStringWithoutRepeatWithMap = (X) => {
    let a = 0;
    let maxLength = 0;
    let map = new Map();

    for (let b = 0; b < X.length; b++){
       
        if (map.has(X[b]) && map.get(X[b]) >= a) {
            a = map.get(X[b]) + 1;
        }
        
        map.set(X[b], b);
        maxLength = Math.max(maxLength, b - a + 1);
    }
    return maxLength
}

console.log(LongestStringWithoutRepeatWithMap('abcabcf'))