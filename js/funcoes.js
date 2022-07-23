//autoinvocavel

(function (a, b) {
    return console.log(a + b);
})(3, 5);

//callback = passar uma função por outra
const calc = function (operacao, num1, num2) {
    return operacao(num1, num2);
}

const soma1 = function (num1, num2) {
    return num1 + num2;
}

const sub = function (num1, num2) {
    return num1 - num2;
}

const resultSoma = calc(soma1, 1, 3);
const resultSub = calc(sub, 1, 3);

console.log(resultSoma);
console.log(resultSub);

////// parametros ///////

function findMax() { // arguments acessa os argumentos da função mesmo não sabendo a quantidade
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(findMax(1, 2, 3, 600, 90, 0));

function showArguments(){
    return arguments;
}

console.log(showArguments(1, 2, [2, 3, 4], "string")); // retorna objeto { indice : conteudo}

//////// arrays e objetos ///////

//comando spread
function soma(x,y,z){ //nao tem como passar um vetor e dividir em 3 argumentos, entao usamos spread (...)
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(soma(...numbers));

//comando rest
function confereTamanho(...args){ //oposto do spred, junta mais deum argumento e vira vetor (...)
    console.log(args.length);
}

confereTamanho();
confereTamanho(1, 2);
confereTamanho(1, 2, 3);

////// this////////

//this se usa quando referenciamos no mesmo objeto
const pessoa = {primeiroNome: 'Lu', lastName: 'andrade', id: 1, fullName: function(){ return this.primeiroNome + " " + this.lastName;},
getId(){return this.id;}};

console.log(pessoa.fullName());

//usando call
const pessoa2 = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Murphy',
};

function getSomething(){ // a funçao tem nada a ver com objetos, mas usando call ele interliga
    console.log(this.nome);
}

getSomething.call(pessoa2);
// o apply é a mesma coisa,só na hora de passar argumentos, vc deve passar em forma de array []

// bind //
const retornaNome = function(){
    return this.nome;
};

let bruno = retornaNome.bind({nome: 'Bruno'}); // o bind clona a funçao e aplica no objeto

bruno();

// arrow function //

// arrow function não faz hosting, ou seja precisa ser chamada deois de declarar a função

const soma3 = (a,b) => a + b; // caso tenha apenas uma linha pode dispensar as chavese o return
const soma4 = a => a; // caso só um argumenta dispensa os parenteses.

soma3(3,7);
soma4(4);