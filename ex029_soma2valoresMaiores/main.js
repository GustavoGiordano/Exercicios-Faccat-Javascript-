/*29) Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
maiores. */

var valor1 = parseFloat(prompt("Insira um valor: "))
var valor2 = parseFloat(prompt("Insira outro valor: "))
var valor3 = parseFloat(prompt("Insira outro valor: "))
var valor_maior1
var valor_maior2

if (valor1 > valor2 && valor1 > valor3) {
    valor_maior1 = valor1
    if (valor2 > valor3) {
        valor_maior2 = valor2
    } else {
        valor_maior2 = valor3
    }
} else if (valor2 > valor1 && valor2 > valor3) {
    valor_maior1 = valor2
    if (valor1 > valor3) {
        valor_maior2 = valor1
    } else {
        valor_maior2 = valor3
    }
} else {
    valor_maior1 = valor3
    if (valor1 > valor2) {
        valor_maior2 = valor1
    } else {
        valor_maior2 = valor2
    }
}

var soma_valores_maiores = valor_maior1 + valor_maior2

alert("A soma dos dois maiores valores é: " + soma_valores_maiores)
