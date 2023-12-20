/*34) Seja o seguinte algoritmo:

início
ler x
ler y
z <- (x*y) + 5
se z <= 0 então
resposta <- ‘A’
senão
se z <= 100 então
resposta <- ‘B’
senão
resposta <- ‘C’
fim_se
fim_se
escrever z, resposta
fim

Faça um teste de mesa e complete o quadro a seguir para os seguintes valores:

Variáveis
X    Y    Z     Resposta
3    2    11    B
150  3    455   C
7    -1   -2    A
-2   5    -5    A
50   3    155   C        */

var x = parseFloat(prompt("Insira um valor"))
var y = parseFloat(prompt("Insira outro valor"))
var z = (x * y) + 5
var resposta

if (z <= 0) {
    resposta = "A"
} else if (z <= 100) {
    resposta = "B"
} else {
    resposta = "C"
}

alert("z é igual a " + z + " e Resposta é igual a " + resposta)
