/*16) As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
escreva o custo total da compra. */

var numeroDeMacasCompradas = parseInt(prompt("Insira o número de maçãs compradas: "))
var valorPorDuzia = 1.0
var valorPorUnidade = 1.3
var custoTotal

if (numeroDeMacasCompradas >= 12) {
    custoTotal = numeroDeMacasCompradas * valorPorDuzia
} else {
    custoTotal = numeroDeMacasCompradas * valorPorUnidade
}

alert("O custo total da compra será: " + custoTotal)
