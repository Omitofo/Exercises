// contrsuctores de objetos.

// Map / Set / Array

// crean estructuras de datos predefinidas con propiedades y metodos personales.


// Map
const map = new Map;

const object = {'name': 'H the 3rd'};

map.set('string', 10);
map.set(1, 'string');
map.set(object, true);

console.log(map.size);
console.log(map.get('string'));
console.log(map.get(object));
console.log(map);
console.log(map.has(1));

if(map.has(1)){
    map.delete(1)
};
console.log(map.size);
console.log(map.get(1));
console.log(map);

// Set , a set creates a collection of unique values, It doesn´t allow duplicates.
console.log('From this point the answers belong to the Set object constructor:');

const dataBaseQty = 10;
const dataBase = [];

for (let i = 0; i < dataBaseQty; i++) {
    dataBase.push(Math.floor(Math.random() * 20 + 1));
}

// Crear un Set directamente desde el arreglo, eliminando duplicados
const set = new Set(dataBase);

console.log(dataBase);  // Muestra el arreglo original con duplicados
console.log(set);       // Muestra el Set sin duplicados


