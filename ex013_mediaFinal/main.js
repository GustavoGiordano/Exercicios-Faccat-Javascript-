/*13) Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
final é: */

var n1 = parseFloat(prompt("Insira a 1ª nota: "))
var n2 = parseFloat(prompt("Insira a 2ª nota: "))
var n3 = parseFloat(prompt("Insira a 3ª nota: "))
var mediafinal = (n1 * 2 + n2 * 3 + n3 * 5) / 10 

alert("A média final do aluno será: " + mediafinal)