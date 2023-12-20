/*9) Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
Calcular e escrever o valor do novo salário. */

var salario = parseFloat(prompt("Insira o salário mensal atual do funcionário:"));
var percentualReajuste = parseFloat(prompt("Insira o percentual de reajuste:"));

var reajuste = percentualReajuste / 100 * salario
var salarioFinal = salario + reajuste

alert("O valor do novo salário será: R$" + salarioFinal);