/*32) Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. */

var time1 = (prompt("Insira o nome do 1º time: "))
var golsTime1 = parseInt(prompt("Insira o número de gols marcados na partida pelo 1º time: "))
var time2 = (prompt("Insira o nome do 2º time: "))
var golsTime2 = parseInt(prompt("Insira o número de gols marcados na partida pelo 2º time: "))

if (golsTime1 > golsTime2) {
    alert("O " + time1 + " é vencedor")
} else if (golsTime2 > golsTime1) {
    alert("O " + time2 + " é vencedor")
} else {
    alert("EMPATE")
}
