var jogador1 = 0;
var jogador2 = 0;
var placar = 0;

if(jogador1 > 0){
    console.log('Jogador um marcou um ponto');
    placar++;
}
else{
    console.log('Jogador um não marcou ponto');
}

//usando if else
if(jogador1 < 10 && jogador2 > -1){
    console.log('entra aqui');
    placar++;
}

else if(jogador1 == 0){
    console.log('entRA AQUI TBM');
}
else{
    console.log('Talvez entre aqui tbm');
}



//if ternário

jogador1 > -1 ? console.log('Jogador válido') : console.log('Jogador não válido');

//usando switch
console.log(placar);
switch (placar) {
    case 1:
        console.log('Um ponto apenas');        
        break;
    
    case 2:
        console.log('Dois pontos');        
        break;

    default:
        console.log('zero pontos');
        
}

/////////////////// laços //////////

let array = [1, 2, 3, 7, 10, 2000];

let object = {string: 'leandro', Number: 77, Boolean: false};

for(let i=0; i < array.length; i++){
    console.log(array[i]); //devole valor de cada indice
}

for(let i in array){
    console.log(i); // devolve indice
}

for(i in object){
    console.log(object[i]); //devolve o conteúdo
}

for(i in object){
    console.log(i); //devolve o valor do conteúdo
}

for(i of array){
    console.log(i); // agorao conteudo de cada array
}

for(i of object.string){
    console.log(i); // agorao conteudo de cada array, não serve por cada linha o useja não serve muito pra ojetos
}

var a = 0;

while(a < 5){
    a++;
    console.log(a);
}

a = 0;

do{
    a++;
    console.log(a);
}while(a<10)