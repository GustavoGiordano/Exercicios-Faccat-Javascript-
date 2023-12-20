/*42) Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para
estar em condições, um dos seguintes requisitos deve ser satisfeito:
- Ter no mínimo 65 anos de idade.
- Ter trabalhado no mínimo 30 anos.
- Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano
de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo
de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.*/

var codigo = parseInt(prompt("Insira o número do empregado: "))
var ano_de_nascimento = parseInt(prompt("Insira o ano de seu nascimento: "))
var ano_de_ingresso = parseInt(prompt("Insira o ano de seu ingresso na empresa: "))
var idade = 2023 - ano_de_nascimento
var tempo_de_trabalho = 2023 - ano_de_ingresso

alert("O empregado tem " + idade + " anos")
alert("O empregado trabalhou por " + tempo_de_trabalho + " anos")

if (idade >= 65 || tempo_de_trabalho >= 30 || idade >= 60 && tempo_de_trabalho >= 25) {
    alert("Requerer aposentadoria")
} else {
    alert("Não requerer")
}
