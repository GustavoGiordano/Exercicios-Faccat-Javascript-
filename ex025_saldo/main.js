/*25) Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. */

var numero = prompt("Insira o número da conta do cliente: ")
var saldo = parseFloat(prompt("Insira o saldo da conta do cliente: "))
var debito = parseFloat(prompt("Insira o débito da conta do cliente: "))
var credito = parseFloat(prompt("Insira o crédito da conta do cliente: "))
var saldoAtual = saldo - debito + credito

alert("O saldo atual é de: " + saldoAtual)

if (saldoAtual >= 0) {
    alert("Saldo Positivo")
} else {
    alert("Saldo Negativo")
}