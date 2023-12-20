/*21) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. */

var horaDeInicio = parseInt(prompt("Insira a hora de ínicio do jogo de xadrez: "))
var horaDeFim = parseInt(prompt("Insira a hora do fim do jogo de xadrez: "))
var duracaoDoJogo

if (horaDeInicio <= horaDeFim) {
    duracaoDoJogo = horaDeFim - horaDeInicio
} else {
    duracaoDoJogo = horaDeFim - horaDeInicio + 24
}

alert("A duração do jogo será de " + duracaoDoJogo + " horas")