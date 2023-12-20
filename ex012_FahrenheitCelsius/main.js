/*12) Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
correspondente em graus Celsius (baseado na fórmula abaixo):*/

var Fahrenheit = parseFloat(prompt("Insira uma temperatura em Fahrenheit"))
var Celsius = (Fahrenheit - 32) / 9 * 5

alert(Fahrenheit + "F equivalem a " + Celsius + "°C.");