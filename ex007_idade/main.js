/*7) Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.*/

var anos = parseInt(prompt("Digite a idade em anos:"));
var meses = parseInt(prompt("Digite a idade em meses:"));
var dias = parseInt(prompt("Digite a idade em dias:"));

var idadeEmDias = (anos * 365) + (meses * 30) + dias;

alert("A idade em dias é: " + idadeEmDias);