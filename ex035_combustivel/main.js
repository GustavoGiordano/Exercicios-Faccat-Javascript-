/*35) Um posto está vendendo combustíveis com a seguinte tabela de descontos:

Álcool
até 20 litros, desconto de 3% por litro
acima de 20 litros, desconto de 5% por litro

Gasolina
até 20 litros, desconto de 4% por litro
acima de 20 litros, desconto de 6% por litro

Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. */

var litrosVendidos = parseFloat(prompt("Insira o número de litros vendidos: "))
var tipoDeCombustivel = (prompt("Insira o tipo de combustível (A-álcool, G-gasolina): "))

var litroGasolina = 3.30
var litroAlcool = 2.90

var desconto
var valorApagar

if (tipoDeCombustivel === "A") {
    if (litrosVendidos <= 20) {
        desconto = litroAlcool * 0.03
    } else {
        desconto = litroAlcool * 0.05
    }
    valorApagar = litrosVendidos * litroAlcool - desconto
} else if (tipoDeCombustivel === "G") {
    if (litrosVendidos <=20) {
        desconto = litroGasolina * 0.04
    } else {
        desconto = litroGasolina * 0.06
    }
    valorApagar = litrosVendidos * litroGasolina - desconto
} else {
    alert("Tipo de combustível inválido")
}

alert("O valor a ser pago será: R$" + valorApagar.toFixed(2))
