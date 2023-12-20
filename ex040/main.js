/*40) Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total
a pagar (total a pagar = total - desconto), sabendo-se que:
- Se quantidade <= 5 o desconto será de 2%
- Se quantidade > 5 e quantidade <=10 o desconto será de 3%
- Se quantidade > 10 o desconto será de 5% */

var nome = prompt("Insira a descrição do produto (nome): ")
var quantidade_adquirida = parseInt(prompt("Insira a quantidade adquirida: "))
var preço_unitario = parseFloat(prompt("Insira o preço unitário: "))
var total = quantidade_adquirida * preço_unitario
var desconto = 0

if (quantidade_adquirida <= 5) {
    desconto = total * 0.02
} else if (quantidade_adquirida > 5 && quantidade_adquirida <= 10) {
    desconto = total * 0.03
} else {
    desconto = total * 0.05
}

var total_a_pagar = total - desconto

alert("O preço total é de R$" + total.toFixed(2) + "\nO desconto é de R$" + desconto.toFixed(2) + "\nO total a pagar é de R$" + total_a_pagar.toFixed(2))