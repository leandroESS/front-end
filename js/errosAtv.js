function errorBug(array, num) {
    try {
        if (!array && !num) throw new ReferenceError('parâmetros não passados, reenvie');

        if (typeof (array) !== 'object') throw new TypeError('Array tem que sr do tipo objeto');

        if (typeof (num) != 'number') throw new TypeError('Número precisa ser do tipo number');

        if (array.length != num) throw new RangeError('Tamanho do array não condiz com número passado como parâmetro');

        return array;
    }
    catch (e) { // aqui eu trato cada tipo de erro
        if (e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError!');
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log('Este erro é um typeerror!');
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log('Este erro é um ReferenceError!');
            console.log(e.message);
        } else {
            console.log("Ocorreu um erro não esperado!" + e);
        }
    }

}

console.log(errorBug()); // mandando nada
console.log(errorBug(5, 5)); // type error, mandando number no lugar do array
