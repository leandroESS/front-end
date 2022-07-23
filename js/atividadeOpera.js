// Crie uma função que recebe dois números como parâmetros.
// Confira se os números são iguais.
// Confira se a soma dos números é maior que 10 ou menor que 20.
// Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma,
//  que é maior/menor que 10 e maior/menor que 20".
// Exemplo:

// Input: 1, 2
// Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.

function iguais(num1, num2) {

    var iguais;
    if (num1 == num2) {
        iguais = 'são';
    }
    else {
        iguais = 'não são';
    }

    return `Os números ${num1} e ${num2} ${iguais} iguais\n`;

}

function vinteDez(num1, num2) {
    soma = num1 + num2;

    var var10;
    var var20;



    if (soma < 10) {
        var10 = 'menor';
    }
    else {
        var10 = 'maior';
    }

    if (soma < 20) {
        var20 = 'menor';
    }
    else {
        var20 = 'maior';
    }


    return `sua soma é ${soma}, que é ${var10} que 10  ${var20} que 20`;
}

function compara(num1, num2) {

    const  primeiraFrase = iguais(num1, num2);
    const segundaFrase = vinteDez(num1, num2);

    return `${primeiraFrase}. ${segundaFrase}`
}   

console.log(compara(7, 1));