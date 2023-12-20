/*26) Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
compra'. */

var quantidade_em_estoque = parseFloat(prompt("Insira a quantidade atual em estoque do produto: "))
var quantidade_maxima = parseFloat(prompt("Insira a quantidade máxima em estoque do produto: "))
var quantidade_minima = parseFloat(prompt("Insira a quantidade mínima em estoque do produto: "))
var quantidade_media = (quantidade_maxima + quantidade_minima)/2

alert("A quantidade média é de: " + quantidade_media + " produtos")

if (quantidade_em_estoque >= quantidade_media) {
    alert("Não efetuar compra")
} else {
    alert("Efetuar compra")
}
