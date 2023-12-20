/*8) Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
de eleitores.*/

var votosTotal = parseInt(prompt("Insira o número total de eleitores do município:"));
var votosBrancos = parseInt(prompt("Insira o número de votos brancos:"));
var votosNulos = parseInt(prompt("Insira o número de votos nulos:"));
var votosValidos = parseInt(prompt("Insira o número de votos válidos:"));

var porcentagemBrancos = votosBrancos / votosTotal * 100
var porcentagemNulos = votosNulos / votosTotal * 100
var porcentagemValidos = votosValidos / votosTotal * 100

alert("Os votos brancos representam " + porcentagemBrancos + "% dos votos totais. \nOs votos nulos representam " + porcentagemNulos + "% dos votos totais. \nOs votos válidos representam " + porcentagemValidos + "% dos votos totais.");