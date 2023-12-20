/*22) A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
(considere que o mês possua 4 semanas exatas). */

horasTrabalhadasPorMes = parseFloat(prompt("Insira o número de horas trabalhadas no mês: "))
salarioPorHora = parseFloat(prompt("Insira o salário por hora: ")) 
horaExtra = 0 
JornadaDeTrabalhoSemanal = horasTrabalhadasPorMes / 4

if (JornadaDeTrabalhoSemanal > 40) { 
    horaExtra = (JornadaDeTrabalhoSemanal - 40) * (salarioPorHora * 1.5)
} else {
    horaExtra = 0
}

salarioTotal = horasTrabalhadasPorMes * salarioPorHora + horaExtra

alert("O salário total do funcionário será de R$" + salarioTotal)
