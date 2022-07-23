function printf() { //função declarative, se apagar o nome (printf) ela para de funcionar
    console.log('Olá Mundo !');
}

printf();

//expressao de função
var funcao = function soma(){ //com nomeação
    console.log(1+5);
}

funcao();

var funcao = function(){ //sem nomeação
    console.log(1+5);
}

funcao();

var funcao = () =>{ // arrow function
    console.log(1 + 2);
}

funcao();