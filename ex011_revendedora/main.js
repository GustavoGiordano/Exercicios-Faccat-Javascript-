/*11) Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.*/

var numeroDeCarrosVendidos = parseInt(prompt("Insira o número de carros vendidos: "));
var valorTotalDeVendas = parseFloat(prompt("Insira o valor total de vendas efetuadas: "));
var salarioFixo = parseFloat(prompt("Insira o valor do salário fixo: "));
var comissaoPorCarroVendido = parseFloat(prompt("Insira a comissão recebida por carro vendido: "));
var salarioFinal = parseFloat(salarioFixo + (numeroDeCarrosVendidos * comissaoPorCarroVendido) + ((valorTotalDeVendas * 5) / 100)); 

alert("O salário final do vendedor será: R$" + salarioFinal);