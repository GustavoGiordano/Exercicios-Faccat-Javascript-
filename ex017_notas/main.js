/*17) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
aluno é aprovado). Escrever também a média calculada. */

var notaDa1aAvaliacao = parseFloat(prompt("Insira a nota da 1ª Avaliação: "))
var notaDa2aAvaliacao = parseFloat(prompt("Insira a nota da 2ª Avaliação: "))
var mediaAritmetica = (notaDa1aAvaliacao + notaDa2aAvaliacao) / 2

alert("A média do aluno é: " + mediaAritmetica)

if (mediaAritmetica >= 6) {
    alert("O aluno foi aprovado.")
} else {
    alert("O aluno foi reprovado.")
}
