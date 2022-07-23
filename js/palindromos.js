//solução 1
function palindromo(palavra) {
    if (!palavra) return 'String não existe !';

    return vetor = palavra.split("").reverse().join("") === palavra; // o join junta tudo de novo

}

//solução 2
function palindromo2(palavra) {
    if (!palavra) return 'String não existe !';

    for (let i = 0; i < palavra.length / 2; i++) {
        if (palavra[i] !== palavra[palavra.length - 1 - i]) {
            return false;
        }
    }

    return true;

}

var res = palindromo('sis');
console.log(res);

var res = palindromo2('sis');
console.log(res);