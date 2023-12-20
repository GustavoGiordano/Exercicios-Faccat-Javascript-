/*37) Uma fruteira está vendendo frutas com a seguinte tabela de preços:

        Até 5 Kg             Acima de 5 Kg
Morango R$ 2,50 por Kg       R$ 2,20 por Kg
Maçã    R$ 1,80 por Kg       R$ 1,50 por Kg

Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. */

var quantidade_kg_morango = parseFloat(prompt("Insira a quantidade (em Kg) de morangos: "))
var quantidade_kg_maca = parseFloat(prompt("Insira a quantidade (em Kg) de maçãs: "))
var total_quantidade_kg = quantidade_kg_morango + quantidade_kg_maca
var preco_kg_morango
var preco_kg_maca

if (quantidade_kg_morango <= 5) {
    preco_kg_morango = 2.50
} else {
    preco_kg_morango = 2.20
} 

if (quantidade_kg_maca <= 5) {
    preco_kg_maca = 1.80
} else {
    preco_kg_maca = 1.50
}

var valor_a_pagar = (quantidade_kg_morango * preco_kg_morango) + (quantidade_kg_maca * preco_kg_maca)
var desconto = 0

if (total_quantidade_kg > 8 || valor_a_pagar > 25) {
    desconto = valor_a_pagar * 0.1
}

valor_a_pagar -= desconto

alert("O valor a ser pago pelo cliente será de: R$" + valor_a_pagar.toFixed(2));
