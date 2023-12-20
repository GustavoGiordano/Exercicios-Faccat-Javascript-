/*23) Para o enunciado a seguir foi elaborado um algoritmo em Português Estruturado que contém
erros, identifique os erros no algoritmo apresentado abaixo:
Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
e mostre seu peso ideal, utilizando as seguintes fórmulas:
 - para sexo masculino: peso ideal = (72.7 * altura) - 58
 - para sexo feminino: peso ideal = (62.1 * altura) - 44.7
inicio
ler nome
ler sexo
se sexo = M então
peso_ideal <- (72.7 * altura) - 58
senão
peso_ideal <- (62.1 * altura) – 44.7
fim_se
escrever peso_ideal
fim */

var nome = prompt("Insira nome: ")
var altura = parseFloat(prompt("Insira altura: "))
var sexo = prompt("Insira sexo (M ou F): ")
var pesoIdeal

if (sexo = "M") {
    pesoIdeal = (72.7 * altura) - 58
} else if (sexo = "F") {
    pesoIdeal = (62.1 * altura) - 44.7
} else {
    alert("Insira um dígito válido")
}

alert("Seu peso ideal é: " + pesoIdeal)
