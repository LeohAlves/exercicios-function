/*1.	Faça um programa, usando funções, que realize todas as operações básicas: soma, subtração, multiplicação, divisão.*/

var numero1 = parseFloat(prompt("Digite o primeiro número"));
var numero2 = parseFloat(prompt("Digite o segundo número"));
var resultado = parseInt(prompt("1. Soma 2. Subtracao 3. Multiplicacao 4. Divisao"))

if (resultado == 1){
    resultado = soma(numero1, numero2)
} else if (resultado == 2){
    resultado = subtracao(numero1, numero2)
} else if (resultado == 3){
    resultado = multiplicacao(numero1, numero2)
} else if (resultado == 4){
    resultado = divisao(numero1, numero2)
} else {
    alert("O número escolhido não faz parte de nenhuma das operações.")
}

function soma (numero1, numero2){
    return numero1 + numero2
}

function subtracao (numero1, numero2){
    return numero1 - numero2
}

function multiplicacao (numero1, numero2){
    return numero1 * numero2
}

function divisao (numero1, numero2){
    return numero1 / numero2
}

/* 2.	Faça um programa, usando uma função, para calcular a porcentagem de um número.  */

var numerointeiro = parseInt(prompt("digite um numero inteiro"));
var porcentagem = parseFloat(prompt("escolha a porcentagem que deseja"));
var resultado = 0;
calculoporcentagem();
console.log(resultado)

function calculoporcentagem(){
    porcentagem = porcentagem / 100
    resultado = porcentagem * numerointeiro
}

/* 3.	Faça um programa, usando uma função que converta uma temperatura de Celsius para Fahrenheit. */
var numerocelsius = parseFloat(prompt("escolha o numero a ser convertido para Fahrenheit "));
var Fahrenheit = 0
conversor()
console.log(Fahrenheit);
function conversor (){
   Fahrenheit = (numerocelsius * 1.8) + 32 
}

/* 4.	Faça um programa, usando uma função o que retorne um valor booleano (true ou false) informando se o número enviado como parâmetro é ímpar. */

var numero = parseInt(prompt("Digite um número inteiro que você deseja verificar se é impar."));
var resultado = impar(numero);

function impar(numero){
    if(numero % 2 == 0){
        alert("False");
    } else{
        alert("True");
    }
}

/* 5.	Faça um programa, usando uma função que calcule a raiz quadrada de um número. */

var numero = parseInt(prompt("Digite o número que deseja saber a raiz quadrada"));
var resultado = raizquadrada(numero);
console.log(resultado);

function raizquadrada(numero){
    return Math.sqrt(numero)
}
    