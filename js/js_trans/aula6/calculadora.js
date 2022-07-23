function calculadora() {
    const operacao = prompt("Digite a operação desejada:\n 1-Soma(+)\n 2-Subtração(-)\n 3-Multiplicação(*)\n 4-Divisão(/)\n");

    let num1 = Number(prompt('Digite o primeiro número\n')); //prompr pega string aqui convertemos para number
    let num2 = Number(prompt('Digite o segundo número\n'));
    let resultado;

    function soma(a, b) {
        resultado = a + b;
        alert(resultado);
    }

    function subtracao(a, b) {
        resultado = a - b;
        alert(resultado);
    }

    function multiplicacao(a, b) {
        resultado = a * b;
        alert(resultado);
    }

    function divisao(a, b) {
        if (b != 0) {
            resultado = a + b;
            alert(resultado);
        }
        else {
            alert('Divisão impossível');
        }


    }

    if (operacao == 1) {
        soma(num1, num2);
    }
    else if (operacao == 2) {
        subtracao(num1, num2);
    }
    else if (operacao == 3) {
        multiplicacao(num1, num2);
    }
    else if (operacao == 4) {
        divisao(num1, num2);
    }
    else {
        alert('Opção de operação inválida')
    }
}

function novaOperacao() {
    let opcao = prompt('deseja fazer outra operaca?\n 1-Sim\n 2-Não\n');
    if (opcao == 1) {
        calculadora();
    }
    else if (opcao == 2) {
        alert('Até mais');
    }

    else {
        alert('Opção inváida');
        novaOperacao();
    }

}

calculadora();
novaOperacao();

