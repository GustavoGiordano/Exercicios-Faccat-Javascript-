/*24) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
ultrapassar este valor, calcular e escrever o seu salário total. */

var salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor:"))
var valorVendas = parseFloat(prompt("Digite o valor total das vendas efetuadas:"))
var comissao

if (valorVendas <= 1500) {
    comissao = valorVendas * 0.03
} else {
    comissao = (1500 * 0.03) + ((valorVendas - 1500) * 0.05)
}

var salarioTotal = salarioFixo + comissao

alert("O salário total do vendedor é de R$" + salarioTotal)
