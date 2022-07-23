let nome = 'Joao';
let sobreNome = 'Pedro';

console.log(nome+' '+sobreNome);

console.log(typeof nome);

console.log(nome.concat(sobreNome));

let concatenado = nome.concat(sobreNome);

console.log(typeof concatenado);

console.log(concatenado.length);

console.log(typeof concatenado.length);

let exemplo = new String('blalbalbla'); //aqui é um abjeto

console.log(typeof exemplo);

console.log(exemplo);

let vazio = '';

console.log(nome[1]);

console.log(exemplo[1]);

concatenado = nome + ' ' + sobreNome;

console.log(concatenado);

concatenado = `${nome} ${sobreNome}`; // outra forma

console.log(concatenado);

concatenado = `${nome}
${sobreNome}`; // pulando linha sem usar \n

console.log(concatenado);

let frase = 'Olá, tudo bem ?';

frase.split("");
console.log(frase.split("")); //cada caractere
console.log(frase.split(" ")); // cada palavra

let tem = frase.includes('Olá'); // retorna true ou false se existe a palavra olá na na string
console.log(tem);

console.log(frase.startsWith('O')); // se a stringcomeça com o O

console.log(frase.endsWith("!")); // se termina com !

console.log(frase.replace(",", "!")); // mudou a vírgula por exclamação
