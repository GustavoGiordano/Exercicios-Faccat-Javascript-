/*31) Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
dos outros 2 lados. */

var A = parseFloat(prompt("Insira um valor: "))
var B = parseFloat(prompt("Insira outro valor: "))
var C = parseFloat(prompt("Insira outro valor: "))

if (A < (B + C) && B < (A + C) && C < (A + B)) {
    alert("As medidas dos lados formam um triângulo")
} else {
    alert("As medidas dos lados não formam um triângulo")
}
