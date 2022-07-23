
let X = 3;
let Y = 2;

//TODO: Complete os espaços em branco com uma possível solução para o desafio
//OBS:  No javascript a casa decimal é definida por ponto. Exemplo: 1.50

var price = 0;

    if (X ==  1) {
      price  =  Y*4.00       ;
    }
    else if (X == 2) {
      price  = Y*4.50          ;
    }
    else if (X ==  3   ) {
      price  =  Y*5.00           ;
    }
    else if (X == 4   ) {
      price  = Y*2.00         ;
    }
    else if (X ==  5   ) {
      price  =   Y*1.50           ;
    }
    console.log( " Total: R$                "  + price.toFixed(2));