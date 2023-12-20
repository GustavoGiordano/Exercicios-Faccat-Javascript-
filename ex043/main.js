/*43) Seja o seguinte algoritmo:

inicio
ler a, b, c
se (a < b+c) e (b <a+c) e (c <a+b) então
se (a=b) e (b=c) então
mens <- 'Triângulo Equilátero'
senão
se (a=b) ou (b=c) ou (a=c) então
mens <- 'Triângulo Isósceles'
senão
mens <- 'Triângulo Escaleno'
fim_se
fim_se
senão
mens <- 'Não e possível formar um triângulo'
fim_se
escrever mens
fim

Faça um teste de mesa e complete o quadro a seguir para os seguintes valores das variáveis:

Variáveis
a b C Mens
1 2 3 Não é possível formar um triângulo
3 4 5 Triângulo Escaleno
2 2 4 Não é possível formar um triângulo
4 4 4 Triângulo Equilátero
5 3 3 Triângulo Isósceles               */

var a = parseInt(prompt("Insira o valor do lado a: "))
var b = parseInt(prompt("Insira o valor do lado b: "))
var c = parseInt(prompt("Insira o valor do lado c: "))
var mens = 0

if  ((a < b+c) && (b <a+c) && (c <a+b)) {
    if ((a === b) && (b === c)) {
        mens = "Triângulo Equilátero"
    } else {
        if ((a === b) || (b === c) || (a === c)){
            mens = "Triângulo Isósceles"
        } else {
            mens = "Triângulo Escaleno"
        }
    }
} else {
    mens = "Não é possível formar um triângulo"
}    

alert(mens)
