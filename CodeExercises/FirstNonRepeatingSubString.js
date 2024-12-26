//return the index of the first repeating substring , if no then return -1

const firstNonRepeatingSubString = (string) => {
    let map = new Map();

         // Contamos la frecuencia de cada carácter en el string
    for (let i = 0; i < string.length; i++) {
        map.set(string[i], (map.get(string[i]) || 0) + 1);
    }

    // Buscamos el primer carácter que solo aparece una vez
    for (let i = 0; i < string.length; i++) {
        if (map.get(string[i]) === 1) {
            return i; // Retorna el índice del primer carácter no repetido
        }
    }

        return -1
};

console.log(firstNonRepeatingSubString('aabb')); //expected : -1
console.log(firstNonRepeatingSubString('leetcode')); //expected : 0
console.log(firstNonRepeatingSubString('loveleetcode')); //expected : 2

const firstNonRepeatingSubString2 = (string) => {
    let map = new Map();

    for (let i = 0; i < string.length; i++) {
        map.set(string[i], (map.get(string[i]) || 0) + 1 )
    }

    for (let i = 0; i < string.length; i++) {
        if (map.get(string[i]) === 1) {
            return i;
        }
    }

    return -1;
}

console.log(firstNonRepeatingSubString2('aabb')); //expected : -1
console.log(firstNonRepeatingSubString2('leetcode')); //expected : 0
console.log(firstNonRepeatingSubString2('loveleetcode')); //expected : 2
console.log(firstNonRepeatingSubString2('loveleetcodev')); //expected : 7


