/*19) Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. */

var valor1 = parseFloat(prompt("Insira um valor: "))
var valor2 = parseFloat(prompt("Insira outro valor: "))
var maiorNumero

if (valor1 > valor2) {
    maiorNumero = valor1
} if (valor2 > valor1) {
    maiorNumero = valor2
}

alert("O maior dos números inseridos é: " + maiorNumero)