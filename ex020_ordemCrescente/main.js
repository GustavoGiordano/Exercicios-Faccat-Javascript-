/*20) Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. */

var valor1 = parseFloat(prompt("Insira um valor: "))
var valor2 = parseFloat(prompt("Insira outro valor: "))
var ordemCrescente

if (valor1 < valor2) {
    ordemCrescente = (valor1 + ", " + valor2)
} if (valor2 < valor1) {
    ordemCrescente = (valor2 + ", " + valor1)
}

alert("A ordem crescente desse números é: " + ordemCrescente)