

const AllExceptSelf = (arr) => {
   
    // Validar que el input sea un array
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    // Manejar el caso de array vacío
    if (arr.length === 0) {
        return [];
    }

    // Calcular el resultado
    return arr.map((_, index) => {
        // Excluir el elemento actual
        const restante = arr.filter((_, i) => i !== index);

        // Multiplicar los números restantes
        return restante.reduce((accumulator, num) => accumulator * num, 1); // El acumulador empieza en 1
    });
};


console.log(AllExceptSelf([1,2,3,4]));

module.exports = AllExceptSelf;
