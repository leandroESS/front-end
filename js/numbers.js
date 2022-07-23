console.log(Math.PI);

console.log(Math.floor(Math.PI)); // floorfaz o chão, arredonda pra baixo

console.log(Math.ceil(Math.PI));// ceil arredonda pra cima

///////////////////// arrays////////

let array = [1, 3, 5, 7, 9];

console.log(array.includes(6)); // retorna false senão tiver 6 no array
console.log(array.every(item => item === 6)); // todos são 6 ?
console.log(array.some(item => item === 7)); // tem algum 7 ?

console.log(array.map(Math.pow));// eleva cada conteudo a seu indice

// /////////////////////// objetos ///////////////////////////////
 let objeto = {nome: 'Letícia', idade: 17, genero: 'F', emrpegada: false};

console.log(Object.values(objeto));
console.log(objeto.idade);
console.log(objeto['idade']); // outro modo
console.log(Object.keys(objeto));
objeto['cpf'] = '09415099402'; // add uma chave com valor
console.log(objeto);

// criando variavel e jogando ela no objeto

let mom = 'nome da mãe';
objeto[mom] = 'Maria Madalena';
console.log(objeto);

