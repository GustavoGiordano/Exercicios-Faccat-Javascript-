/*27) Ler um valor e escrever se é positivo, negativo ou zero.*/

var valor = parseFloat(prompt("Insira um valor: "))

if (valor < 0) {
    alert("O número é negativo")
} else if (valor > 0) {
    alert("O número é positivo")
} else {
    alert("O número é igual a 0")
}
