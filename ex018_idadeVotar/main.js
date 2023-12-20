/*18) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). */

var anoAtual= parseFloat(prompt("Insira o ano atual: "))
var anoDeNascimento = parseFloat(prompt("Insira o ano de seu nascimento: "))
var idade = anoAtual - anoDeNascimento

if (idade >= 16) {
    alert("Você poderá votar este ano.")
} else {
    alert("Você não poderá votar este ano.")
}
