/*33) Ler dois valores e imprimir uma das três mensagens a seguir:
‘Números iguais’, caso os números sejam iguais
‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
‘Segundo maior’, caso o segundo seja maior que o primeiro. */

var valor1 = parseFloat(prompt("Insira um valor"))
var valor2 = parseFloat(prompt("Insira outro valor"))

if (valor1 === valor2) {
    alert("Número iguais")
} else if (valor1 > valor2) {
    alert("Primeiro é maior")
} else {
    alert("Segundo maior")
}
