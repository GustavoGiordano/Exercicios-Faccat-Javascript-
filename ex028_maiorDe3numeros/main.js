/*28) Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. */

var valor1 = parseFloat(prompt("Insira um valor: "))
var valor2 = parseFloat(prompt("Insira outro valor: "))
var valor3 = parseFloat(prompt("Insira outro valor: "))
var valor_maior

if (valor1 > valor2 && valor1 > valor3) {
    valor_maior = valor1
} else if (valor2 > valor1 && valor2 > valor3) {
    valor_maior = valor2
} else {
    valor_maior = valor3
}

alert("O maior dos números é: " + valor_maior)
