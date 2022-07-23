let array = [1, 'leandro', 3.78, false];
console.log(array);

let array2 = [1, 2, 3, 'Leandro', true, ['array2.0'], ['array2.1']];
console.log(array2);

console.log(array2[0]);
console.log(array2[4]);
console.log(array2[6]);

let array3 = [1, 2, 3];

array3.forEach(function(item, index){
    console.log(item*2, index);
})

array2.push('novo item'); // adiciona elemento no fim do vetor
console.log(array2);

array2.pop(); //remove ultimo elemento do vetor
console.log(array2);

array2.shift(); //remove primeiro elemento do vetor
console.log(array2);

array2.unshift('b'); //adiciona  elemento no inicio vetor
console.log(array2);

let indice = array3.indexOf(2); //retorna o indice do elemento 2
console.log(indice);

// splice() possui 3 parâmetros => (indice onde iniciar,
// quantidade de elementos que quer mudar, elemento a adicionar)

// aqui ele não remove(0), apartirdo indice 2, ele adiciona 
// ['array2.3'] na frente da posição 2 (ou seja na frente do elemento3)

array2.splice(2, 0, ['array2.3']);
console.log(array2); 

// O método slice() retorna uma cópia de parte de um array a partir de um 
// subarray criado entre as posições início e fim (fim não é necessário)
//  de um array original. O Array original não é modificado.

let novoArray = array2.slice(0, 3);
console.log(novoArray); // pega de 0 a 2

/////////////////////// Objetos /////////////////

let object = {string: 'String', Number: 1, Boolean: true, array: ['array'], objectInterno: {objectInterno: 'Objeto interno'}};
console.log(object);
console.log(object.Number); //acessa o conteúdo do objeto

var string = object.string; // jogando conteudo de string numa variavel
console.log(string);

var {string, Number, Boolean, objectInterno} = object;
console.log(string, Number, Boolean, objectInterno);