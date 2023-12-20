/*41) Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos
exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo
e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:

                                N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios
Média_de_Aproveitamento = ---------------------------------------------------------
                                                    7
A atribuição de conceitos obedece a tabela abaixo:

Média de Aproveitamento    Conceito
    > = 9,0                    A
    > = 7,5 e < 9,0            B
    > = 6,0 e < 7,5            C
    < 6,0                      D*/

var N1 = parseFloat(prompt("Insira a 1ª nota: "))
var N2 = parseFloat(prompt("Insira a 2ª nota: "))
var N3 = parseFloat(prompt("Insira a 3ª nota: "))
var Media_dos_Exercicios = parseFloat(prompt("Insira a média dos exercícios que fazem a parte da avaliação: "))
var Media_de_Aproveitamento = (N1 + (N2 * 2) + (N3 * 3) + Media_dos_Exercicios) / 7
var conceito = 0

if (Media_de_Aproveitamento >= 9.0) {
    conceito = "A"
} else if (Media_de_Aproveitamento >= 7.5 && Media_de_Aproveitamento < 9.0) {
    conceito = "B"
} else if (Media_de_Aproveitamento >= 6.0 && Media_de_Aproveitamento < 7.5) {
    conceito = "C"
} else {
    conceito = "D"
}

alert("O conceito do aluno é: " + conceito)