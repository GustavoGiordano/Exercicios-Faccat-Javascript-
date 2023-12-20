/*36) Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
novo com a mulher mais velha. */
var homem1 = parseInt(prompt("Insira a idade de um homem: "))
var homem2 = parseInt(prompt("Insira a idade de outro homem: "))
var mulher1 = parseInt(prompt("Insira a idade de uma mulher: "))
var mulher2 = parseInt(prompt("Insira a idade de outra mulher: "))
var homemNovo
var homemVelho
var mulherNova
var mulherVelha

if (homem1 > homem2) {
    homemVelho = homem1
    homemNovo = homem2
} else {
    homemVelho = homem2
    homemNovo = homem1
} if (mulher1 > mulher2) {
    mulherVelha = mulher1
    mulherNova = mulher2
} else {
    mulherVelha = mulher2
    mulherNova = mulher1
}
var soma = homemVelho + mulherNova
var produto = homemNovo * mulherVelha

alert("A soma das idades do homem mais velho com a mulher mais nova é: " + soma + "\nO produto das idades do homem mais novo com a mulher mais velha é: " + produto)
